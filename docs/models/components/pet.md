# Pet

## Example Usage

```typescript
import { Pet } from "petstore/models/components";

let value: Pet = {
  id: 10,
  name: "doggie",
  category: {
    id: 1,
    name: "Dogs",
  },
  photoUrls: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `id`                                                         | *number*                                                     | :heavy_minus_sign:                                           | N/A                                                          | 10                                                           |
| `name`                                                       | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          | doggie                                                       |
| `category`                                                   | [components.Category](../../models/components/category.md)   | :heavy_minus_sign:                                           | N/A                                                          |                                                              |
| `photoUrls`                                                  | *string*[]                                                   | :heavy_check_mark:                                           | N/A                                                          |                                                              |
| `tags`                                                       | [components.Tag](../../models/components/tag.md)[]           | :heavy_minus_sign:                                           | N/A                                                          |                                                              |
| `status`                                                     | [components.PetStatus](../../models/components/petstatus.md) | :heavy_minus_sign:                                           | pet status in the store                                      |                                                              |