import { handleReplyRequest } from "../../../src/admin-actions.js";

export async function onRequestPost(context) {
  return handleReplyRequest(context.request, context.env);
}
