import { handleDeleteRequest } from "../../../src/admin-actions.js";

export async function onRequestPost(context) {
  return handleDeleteRequest(context.request, context.env);
}
