/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { petsUpdateWithForm } from "../../funcs/petsUpdateWithForm.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.UpdatePetWithFormRequest$inboundSchema,
};

export const tool$petsUpdateWithForm: ToolDefinition<typeof args> = {
  name: "pets-update-with-form",
  description: `Updates a pet in the store with form data.

Updates a pet resource based on the form data.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await petsUpdateWithForm(
      client,
      args.request,
      { fetchOptions: { signal: ctx.signal } },
    ).$inspect();

    if (!result.ok) {
      return {
        content: [{ type: "text", text: result.error.message }],
        isError: true,
      };
    }

    const value = result.value;

    return formatResult(value, apiCall);
  },
};
