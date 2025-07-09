# UpdateUserRequest

## Example Usage

```typescript
import { UpdateUserRequest } from "petstore/models/operations";

let value: UpdateUserRequest = {
  username: "Dortha_Hoeger59",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `username`                                         | *string*                                           | :heavy_check_mark:                                 | name that need to be deleted                       |
| `user`                                             | [components.User](../../models/components/user.md) | :heavy_minus_sign:                                 | Update an existent user in the store               |