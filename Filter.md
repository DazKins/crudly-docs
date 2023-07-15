# Filter

Filters are used to filter the results of a query.

They are defined as strings in the following format:

```
{fieldName}{=|<|>|>=|<=}{value}
```

When applied to a query, the filter will only return entities that match the filter. e.g. for `name="John"` only entities with the name `John` will be returned.

Multiple filters can be applied at the same time which will return entities that match all filters. e.g. for `name="John"` and `age>18` only entities with the name `John` and an age greater than `18` will be returned.

## Comparators

Details for each comparator are below:

| Comparator | Description              |
| ---------- | ------------------------ |
| `=`        | Equals                   |
| `<`        | Less than                |
| `>`        | Greater than             |
| `<=`       | Less than or equal to    |
| `>=`       | Greater than or equal to |
