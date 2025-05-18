<!-- Start SDK Example Usage [usage] -->
```typescript
import { Petstore } from "petstore";

const petstore = new Petstore({
  serverURL: "https://api.example.com",
  petstoreAuth: process.env["PETSTORE_PETSTORE_AUTH"] ?? "",
});

async function run() {
  const result = await petstore.pets.update({
    id: 10,
    name: "doggie",
    category: {
      id: 1,
      name: "Dogs",
    },
    photoUrls: [
      "<value 1>",
    ],
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->