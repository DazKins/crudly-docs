# Order

Orders are used to sort the results of a query.

They are defined as strings in the following format:

```
{fieldName}|{asc|desc}
```

Multiple orders can be applied at the same time which will return entities that match all orders. e.g. for `name|asc` and `age|desc` entities will be returned in ascending order by name and descending order by age. Note that the order of the orders is important. The first order will be applied first, then the second order will be applied to the results of the first order and so on.

## Order Types

Details for each order type are below:

| Order Type | Description |
| ---------- | ----------- |
| `asc`      | Ascending   |
| `desc`     | Descending  |
