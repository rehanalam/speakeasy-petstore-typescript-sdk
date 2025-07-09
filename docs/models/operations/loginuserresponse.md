# LoginUserResponse

## Example Usage

```typescript
import { LoginUserResponse } from "petstore/models/operations";

let value: LoginUserResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: "<value>",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `headers`                            | Record<string, *string*[]>           | :heavy_check_mark:                   | N/A                                  |
| `result`                             | *operations.LoginUserResponseResult* | :heavy_check_mark:                   | N/A                                  |