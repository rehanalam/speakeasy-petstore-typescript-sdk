# Store
(*store*)

## Overview

Access to Petstore orders

Find out more about our store
<https://swagger.io>

### Available Operations

* [getInventory](#getinventory) - Returns pet inventories by status.

## getInventory

Returns a map of status codes to quantities.

### Example Usage

```typescript
import { Petstore } from "petstore";

const petstore = new Petstore({
  serverURL: "https://api.example.com",
});

async function run() {
  const result = await petstore.store.getInventory({
    apiKey: process.env["PETSTORE_API_KEY"] ?? "",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PetstoreCore } from "petstore/core.js";
import { storeGetInventory } from "petstore/funcs/storeGetInventory.js";

// Use `PetstoreCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const petstore = new PetstoreCore({
  serverURL: "https://api.example.com",
});

async function run() {
  const res = await storeGetInventory(petstore, {
    apiKey: process.env["PETSTORE_API_KEY"] ?? "",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("storeGetInventory failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `security`                                                                                                                                                                     | [operations.GetInventorySecurity](../../models/operations/getinventorysecurity.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[{ [k: string]: number }](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |