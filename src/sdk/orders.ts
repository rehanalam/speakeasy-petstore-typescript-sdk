/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ordersDelete } from "../funcs/ordersDelete.js";
import { GetByIdAcceptEnum, ordersGetById } from "../funcs/ordersGetById.js";
import { ordersPlace } from "../funcs/ordersPlace.js";
import { ordersPlaceForm } from "../funcs/ordersPlaceForm.js";
import { ordersPlaceRaw } from "../funcs/ordersPlaceRaw.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export { GetByIdAcceptEnum } from "../funcs/ordersGetById.js";

export class Orders extends ClientSDK {
  /**
   * Place an order for a pet.
   *
   * @remarks
   * Place a new order in the store.
   */
  async place(
    request?: components.Order | undefined,
    options?: RequestOptions,
  ): Promise<components.Order | undefined> {
    return unwrapAsync(ordersPlace(
      this,
      request,
      options,
    ));
  }

  /**
   * Place an order for a pet.
   *
   * @remarks
   * Place a new order in the store.
   */
  async placeRaw(
    request?:
      | ReadableStream<Uint8Array>
      | Blob
      | ArrayBuffer
      | Uint8Array
      | undefined,
    options?: RequestOptions,
  ): Promise<components.Order | undefined> {
    return unwrapAsync(ordersPlaceRaw(
      this,
      request,
      options,
    ));
  }

  /**
   * Place an order for a pet.
   *
   * @remarks
   * Place a new order in the store.
   */
  async placeForm(
    request?: components.Order | undefined,
    options?: RequestOptions,
  ): Promise<components.Order | undefined> {
    return unwrapAsync(ordersPlaceForm(
      this,
      request,
      options,
    ));
  }

  /**
   * Find purchase order by ID.
   *
   * @remarks
   * For valid response try integer IDs with value <= 5 or > 10. Other values will generate exceptions.
   */
  async getById(
    request: operations.GetOrderByIdRequest,
    options?: RequestOptions & { acceptHeaderOverride?: GetByIdAcceptEnum },
  ): Promise<operations.GetOrderByIdResponse | undefined> {
    return unwrapAsync(ordersGetById(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete purchase order by identifier.
   *
   * @remarks
   * For valid response try integer IDs with value < 1000. Anything above 1000 or non-integers will generate API errors.
   */
  async delete(
    request: operations.DeleteOrderRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(ordersDelete(
      this,
      request,
      options,
    ));
  }
}
