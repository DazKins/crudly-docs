# Table

A table is defined as a set of named fields of a particular type

## Fields

A field can have one of the following types:

| Type      | Description                                |
| --------- | ------------------------------------------ |
| `id`      | A UUID                                     |
| `integer` | An integer number                          |
| `string`  | A string of characters                     |
| `boolean` | A true/false value                         |
| `time`    | A point in time                            |
| `enum`    | One of a finite set of user defined values |

## Enums

When creating an enum field you must provide a list of possible values. Each value can be any string of characters.

## Optional

A field can be marked as optional. This means that the field can be omitted when creating or updating an entity.