/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { usersGetByName } from "../../funcs/usersGetByName.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetUserByNameRequest$inboundSchema,
};

export const tool$usersGetByName: ToolDefinition<typeof args> = {
  name: "users-get-by-name",
  description: `Get user by user name.

Get user detail based on username.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await usersGetByName(
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
