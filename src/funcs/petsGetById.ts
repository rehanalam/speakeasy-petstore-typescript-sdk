/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { PetstoreCore } from "../core.js";
import { encodeSimple } from "../lib/encodings.js";
import * as M from "../lib/matchers.js";
import { compactMap } from "../lib/primitives.js";
import { safeParse } from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { resolveSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
import {
  ConnectionError,
  InvalidRequestError,
  RequestAbortedError,
  RequestTimeoutError,
  UnexpectedClientError,
} from "../models/errors/httpclienterrors.js";
import { PetstoreError } from "../models/errors/petstoreerror.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APICall, APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";

export enum GetByIdAcceptEnum {
  applicationJson = "application/json",
  applicationXml = "application/xml",
}

/**
 * Find pet by ID.
 *
 * @remarks
 * Returns a single pet.
 */
export function petsGetById(
  client: PetstoreCore,
  security: operations.GetPetByIdSecurity,
  request: operations.GetPetByIdRequest,
  options?: RequestOptions & { acceptHeaderOverride?: GetByIdAcceptEnum },
): APIPromise<
  Result<
    operations.GetPetByIdResponse | undefined,
    | PetstoreError
    | ResponseValidationError
    | ConnectionError
    | RequestAbortedError
    | RequestTimeoutError
    | InvalidRequestError
    | UnexpectedClientError
    | SDKValidationError
  >
> {
  return new APIPromise($do(
    client,
    security,
    request,
    options,
  ));
}

async function $do(
  client: PetstoreCore,
  security: operations.GetPetByIdSecurity,
  request: operations.GetPetByIdRequest,
  options?: RequestOptions & { acceptHeaderOverride?: GetByIdAcceptEnum },
): Promise<
  [
    Result<
      operations.GetPetByIdResponse | undefined,
      | PetstoreError
      | ResponseValidationError
      | ConnectionError
      | RequestAbortedError
      | RequestTimeoutError
      | InvalidRequestError
      | UnexpectedClientError
      | SDKValidationError
    >,
    APICall,
  ]
> {
  const parsed = safeParse(
    request,
    (value) => operations.GetPetByIdRequest$outboundSchema.parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return [parsed, { status: "invalid" }];
  }
  const payload = parsed.value;
  const body = null;

  const pathParams = {
    petId: encodeSimple("petId", payload.petId, {
      explode: false,
      charEncoding: "percent",
    }),
  };

  const path = pathToFunc("/pet/{petId}")(pathParams);

  const headers = new Headers(compactMap({
    Accept: options?.acceptHeaderOverride
      || "application/json;q=1, application/xml;q=0",
  }));

  const requestSecurity = resolveSecurity(
    [
      {
        fieldName: "api_key",
        type: "apiKey:header",
        value: security?.apiKey,
      },
    ],
    [
      {
        fieldName: "Authorization",
        type: "oauth2",
        value: security?.petstoreAuth,
      },
    ],
  );

  const context = {
    options: client._options,
    baseURL: options?.serverURL ?? client._baseURL ?? "",
    operationID: "getPetById",
    oAuth2Scopes: null,

    resolvedSecurity: requestSecurity,

    securitySource: security,
    retryConfig: options?.retries
      || client._options.retryConfig
      || { strategy: "none" },
    retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
  };

  const requestRes = client._createRequest(context, {
    security: requestSecurity,
    method: "GET",
    baseURL: options?.serverURL,
    path: path,
    headers: headers,
    body: body,
    userAgent: client._options.userAgent,
    timeoutMs: options?.timeoutMs || client._options.timeoutMs || -1,
  }, options);
  if (!requestRes.ok) {
    return [requestRes, { status: "invalid" }];
  }
  const req = requestRes.value;

  const doResult = await client._do(req, {
    context,
    errorCodes: ["400", "404", "4XX", "5XX"],
    retryConfig: context.retryConfig,
    retryCodes: context.retryCodes,
  });
  if (!doResult.ok) {
    return [doResult, { status: "request-error", request: req }];
  }
  const response = doResult.value;

  const [result] = await M.match<
    operations.GetPetByIdResponse | undefined,
    | PetstoreError
    | ResponseValidationError
    | ConnectionError
    | RequestAbortedError
    | RequestTimeoutError
    | InvalidRequestError
    | UnexpectedClientError
    | SDKValidationError
  >(
    M.json(200, operations.GetPetByIdResponse$inboundSchema.optional()),
    M.bytes(200, operations.GetPetByIdResponse$inboundSchema.optional(), {
      ctype: "application/xml",
    }),
    M.fail([400, 404, "4XX"]),
    M.fail("5XX"),
    M.nil("default", operations.GetPetByIdResponse$inboundSchema.optional()),
  )(response, req);
  if (!result.ok) {
    return [result, { status: "complete", request: req, response }];
  }

  return [result, { status: "complete", request: req, response }];
}
