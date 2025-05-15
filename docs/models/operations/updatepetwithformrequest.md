# UpdatePetWithFormRequest

## Example Usage

```typescript
import { UpdatePetWithFormRequest } from "petstore/models/operations";

let value: UpdatePetWithFormRequest = {
  petId: 720989,
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `petId`                                | *number*                               | :heavy_check_mark:                     | ID of pet that needs to be updated     |
| `name`                                 | *string*                               | :heavy_minus_sign:                     | Name of pet that needs to be updated   |
| `status`                               | *string*                               | :heavy_minus_sign:                     | Status of pet that needs to be updated |