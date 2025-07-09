# Orders
(*orders*)

## Overview

### Available Operations

* [place](#place) - Place an order for a pet.
* [placeRaw](#placeraw) - Place an order for a pet.
* [placeForm](#placeform) - Place an order for a pet.
* [getById](#getbyid) - Find purchase order by ID.
* [delete](#delete) - Delete purchase order by identifier.

## place

Place a new order in the store.

### Example Usage

```typescript
import { Petstore } from "petstore";

const petstore = new Petstore({
  serverURL: "https://api.example.com",
  petstoreAuth: process.env["PETSTORE_PETSTORE_AUTH"] ?? "",
});

async function run() {
  const result = await petstore.orders.place({
    id: 10,
    petId: 198772,
    quantity: 7,
    status: "approved",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PetstoreCore } from "petstore/core.js";
import { ordersPlace } from "petstore/funcs/ordersPlace.js";

// Use `PetstoreCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const petstore = new PetstoreCore({
  serverURL: "https://api.example.com",
  petstoreAuth: process.env["PETSTORE_PETSTORE_AUTH"] ?? "",
});

async function run() {
  const res = await ordersPlace(petstore, {
    id: 10,
    petId: 198772,
    quantity: 7,
    status: "approved",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ordersPlace failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.Order](../../models/components/order.md)                                                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Order](../../models/components/order.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## placeRaw

Place a new order in the store.

### Example Usage

```typescript
import { Petstore } from "petstore";

const petstore = new Petstore({
  serverURL: "https://api.example.com",
  petstoreAuth: process.env["PETSTORE_PETSTORE_AUTH"] ?? "",
});

async function run() {
  const result = await petstore.orders.placeRaw(bytesToStream(new TextEncoder().encode("{\"id\":10,\"petId\":198772,\"quantity\":7,\"status\":\"approved\"}")));

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PetstoreCore } from "petstore/core.js";
import { ordersPlaceRaw } from "petstore/funcs/ordersPlaceRaw.js";

// Use `PetstoreCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const petstore = new PetstoreCore({
  serverURL: "https://api.example.com",
  petstoreAuth: process.env["PETSTORE_PETSTORE_AUTH"] ?? "",
});

async function run() {
  const res = await ordersPlaceRaw(petstore, bytesToStream(new TextEncoder().encode("{\"id\":10,\"petId\":198772,\"quantity\":7,\"status\":\"approved\"}")));
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ordersPlaceRaw failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [ReadableStream<Uint8Array>](../../models/order.md)                                                                                                                            | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Order](../../models/components/order.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## placeForm

Place a new order in the store.

### Example Usage

```typescript
import { Petstore } from "petstore";

const petstore = new Petstore({
  serverURL: "https://api.example.com",
  petstoreAuth: process.env["PETSTORE_PETSTORE_AUTH"] ?? "",
});

async function run() {
  const result = await petstore.orders.placeForm({
    id: 10,
    petId: 198772,
    quantity: 7,
    status: "approved",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PetstoreCore } from "petstore/core.js";
import { ordersPlaceForm } from "petstore/funcs/ordersPlaceForm.js";

// Use `PetstoreCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const petstore = new PetstoreCore({
  serverURL: "https://api.example.com",
  petstoreAuth: process.env["PETSTORE_PETSTORE_AUTH"] ?? "",
});

async function run() {
  const res = await ordersPlaceForm(petstore, {
    id: 10,
    petId: 198772,
    quantity: 7,
    status: "approved",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ordersPlaceForm failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.Order](../../models/components/order.md)                                                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Order](../../models/components/order.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## getById

For valid response try integer IDs with value <= 5 or > 10. Other values will generate exceptions.

### Example Usage

```typescript
import { Petstore } from "petstore";

const petstore = new Petstore({
  serverURL: "https://api.example.com",
  petstoreAuth: process.env["PETSTORE_PETSTORE_AUTH"] ?? "",
});

async function run() {
  const result = await petstore.orders.getById({
    orderId: 728529,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PetstoreCore } from "petstore/core.js";
import { ordersGetById } from "petstore/funcs/ordersGetById.js";

// Use `PetstoreCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const petstore = new PetstoreCore({
  serverURL: "https://api.example.com",
  petstoreAuth: process.env["PETSTORE_PETSTORE_AUTH"] ?? "",
});

async function run() {
  const res = await ordersGetById(petstore, {
    orderId: 728529,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ordersGetById failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetOrderByIdRequest](../../models/operations/getorderbyidrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetOrderByIdResponse](../../models/operations/getorderbyidresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## delete

For valid response try integer IDs with value < 1000. Anything above 1000 or non-integers will generate API errors.

### Example Usage

```typescript
import { Petstore } from "petstore";

const petstore = new Petstore({
  serverURL: "https://api.example.com",
  petstoreAuth: process.env["PETSTORE_PETSTORE_AUTH"] ?? "",
});

async function run() {
  await petstore.orders.delete({
    orderId: 690575,
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PetstoreCore } from "petstore/core.js";
import { ordersDelete } from "petstore/funcs/ordersDelete.js";

// Use `PetstoreCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const petstore = new PetstoreCore({
  serverURL: "https://api.example.com",
  petstoreAuth: process.env["PETSTORE_PETSTORE_AUTH"] ?? "",
});

async function run() {
  const res = await ordersDelete(petstore, {
    orderId: 690575,
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("ordersDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteOrderRequest](../../models/operations/deleteorderrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |