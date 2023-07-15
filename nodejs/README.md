# NodeJS

## Installation

The NodeJS client library for Crudly is maintained as an NPM package. You can find the NPM package page here: https://www.npmjs.com/package/@crudly/crudly

You can install it by running:

```bash
npm install @crudly/crudly
```

## Setup

To begin working with Crudly you will need to initialise a Crudly object like so:

```javascript
import { createCrudly } from "@crudly/crudly";

const crudly = createCrudly({
  projectId: "<PROJECT ID>",
  projectKey: "<PROJECT KEY>",
});
```

## Usage

The Crudly object exposes a number of methods for interacting with your project's data. These methods are documented below.

### Entity

<details>
<summary>createEntity(tableName, entity)</summary>

### Description

Create an entity

### Parameters

| Name        | Type                 | Description           | Optional |
| ----------- | -------------------- | --------------------- | -------- |
| `tableName` | `TableName` (string) | The name of the table | ❌       |
| `entity`    | `Entity` (object)    | The entity to create  | ❌       |

### Return Value

| Type                | Description              |
| ------------------- | ------------------------ |
| `EntityId` (string) | ID of the created entity |

### Errors

| Type                           | Description                                      |
| ------------------------------ | ------------------------------------------------ |
| `CrudlyValidationError`        | The provided entity did not fit the table schema |
| `CrudlyNotFoundError`          | The table was not found                          |
| `CrudlyRateLimitExceededError` | Rate limit exceeded                              |

### Example

```javascript
const entityId = await crudly.createEntity("users", {
  firstName: "alex",
  lastName: "smith",
  email: "alex.smith@gmail.com",
});
```

</details>

<details>
<summary>createEntities(tableName, entities)</summary>

### Description

Create multiple entities

### Parameters

| Name        | Type                  | Description            | Optional |
| ----------- | --------------------- | ---------------------- | -------- |
| `tableName` | `TableName` (string)  | The name of the table  | ❌       |
| `entities`  | `Entity[]` (object[]) | The entities to create | ❌       |

### Return Value

| Type   | Description |
| ------ | ----------- |
| `void` |             |

### Errors

| Type                           | Description                                                 |
| ------------------------------ | ----------------------------------------------------------- |
| `CrudlyValidationError`        | One ore more provided entities did not fit the table schema |
| `CrudlyNotFoundError`          | The table was not found                                     |
| `CrudlyRateLimitExceededError` | Rate limit exceeded                                         |

### Example

```javascript
await crudly.createEntities("users", [
  {
    firstName: "alex",
    lastName: "smith",
    email: "alex.smith@gmail.com",
  },
  {
    firstName: "jane",
    lastName: "bloggs",
    email: "jane.bloggs@hotmail.com",
  },
]);
```

</details>

<details>
<summary>putEntity(tableName, id, entity)</summary>

### Description

Create an entity with specified ID.

### Parameters

| Name        | Type                 | Description                    | Optional |
| ----------- | -------------------- | ------------------------------ | -------- |
| `tableName` | `TableName` (string) | The name of the table          | ❌       |
| `id`        | `EntityId` (string)  | The ID of the entity to create | ❌       |
| `entity`    | `Entity` (object)    | The entity to create           | ❌       |

### Return Value

| Type                | Description                  |
| ------------------- | ---------------------------- |
| `EntityId` (string) | The ID of the created entity |

### Errors

| Type                           | Description                                      |
| ------------------------------ | ------------------------------------------------ |
| `CrudlyValidationError`        | The provided entity did not fit the table schema |
| `CrudlyNotFoundError`          | The table was not found                          |
| `CrudlyRateLimitExceededError` | Rate limit exceeded                              |

### Example

```javascript
const entityId = await crudly.putEntity(
  "users",
  "ad86e680-2ca8-474d-886e-c3ba9ce283af",
  {
    firstName: "alex",
    lastName: "smith",
    email: "alex.smith@gmail.com",
  }
);
```

</details>

<details>
<summary>getEntityById(tableName, id)</summary>

### Description

Get an entity by ID.

### Parameters

| Name        | Type                 | Description                 | Optional |
| ----------- | -------------------- | --------------------------- | -------- |
| `tableName` | `TableName` (string) | The name of the table       | ❌       |
| `id`        | `EntityId` (string)  | The ID of the entity to get | ❌       |

### Return Value

| Type              | Description |
| ----------------- | ----------- |
| `Entity` (object) | The entity  |

### Example

```javascript
const entity = await crudly.getEntityById(
  "users",
  "ad86e680-2ca8-474d-886e-c3ba9ce283af"
);
```

</details>

<details>
<summary>getEntities(tableName, filters?, orders?, limit?, offset?)</summary>

### Description

Get entities.

### Parameters

| Name        | Type                 | Description                                   | Optional |
| ----------- | -------------------- | --------------------------------------------- | -------- |
| `tableName` | `TableName` (string) | The name of the table                         | ❌       |
| `options`   | `GetEntitiesOptions` | The options for fetching entities (see below) | ✅       |

`GetEntitiesOptions` is an object with the following properties:

| Name      | Type                  | Description                                                      | Optional | Default |
| --------- | --------------------- | ---------------------------------------------------------------- | -------- | ------- |
| `filters` | `Filter[]` (string[]) | The filters to apply (see [here](../Filter.md) for more details) | ✅       | []      |
| `orders`  | `Order[]` (string[])  | The orders to apply (see [here](../Order.md) for more details)   | ✅       | []      |
| `limit`   | `number`              | The page limit                                                   | ✅       | 20      |
| `offset`  | `number`              | The page offset                                                  | ✅       | 0       |

### Return Value

| Type                  | Description  |
| --------------------- | ------------ |
| `Entity[]` (object[]) | The entities |

### Examples

```javascript
const entities = await crudly.getEntities("users", {
  filters: ['firstName="alex"', 'lastName="smith"'],
});
```

```javascript
const entities = await crudly.getEntities("users", {
  orders: ["firstName|asc", "lastName|desc"],
  limit: 1,
});
```

</details>

<details>
<summary>updateEntity(tableName, id, entity)</summary>

### Description

Get entities.

### Parameters

| Name        | Type                 | Description                    | Optional |
| ----------- | -------------------- | ------------------------------ | -------- |
| `tableName` | `TableName` (string) | The name of the table          | ❌       |
| `id`        | `EntityId` (string)  | The ID of the entity to update | ❌       |
| `entity`    | `Entity` (object)    | The update to apply            | ❌       |

### Return Value

| Type              | Description        |
| ----------------- | ------------------ |
| `Entity` (object) | The updated entity |

### Example

```javascript
const entity = await crudly.updateEntity(
  "users",
  "0ede4735-3e24-4704-920b-bb50dfa70b9b",
  {
    lastName: "jones",
  }
);
```

</details>

<details>
<summary>deleteEntity(tableName, id)</summary>

### Description

Delete an entity.

### Parameters

| Name        | Type                 | Description                    | Optional |
| ----------- | -------------------- | ------------------------------ | -------- |
| `tableName` | `TableName` (string) | The name of the table          | ❌       |
| `id`        | `EntityId` (string)  | The ID of the entity to delete | ❌       |

### Return Value

| Type   | Description |
| ------ | ----------- |
| `void` |             |

### Example

```javascript
await crudly.deleteEntity("users", "0ede4735-3e24-4704-920b-bb50dfa70b9b");
```

</details>

### Table

TBD
