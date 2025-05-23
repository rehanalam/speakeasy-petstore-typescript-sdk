/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { petsFindByTags } from "../../funcs/petsFindByTags.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.FindPetsByTagsRequest$inboundSchema,
};

export const tool$petsFindByTags: ToolDefinition<typeof args> = {
  name: "pets-find-by-tags",
  description: `Finds Pets by tags.

Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await petsFindByTags(
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
