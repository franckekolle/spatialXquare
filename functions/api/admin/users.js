import { handleCreateAdmin, handleListAdmins } from "../../../src/admin-actions.js";

export async function onRequestGet(context) {
  return handleListAdmins(context.request, context.env);
}

export async function onRequestPost(context) {
  return handleCreateAdmin(context.request, context.env);
}
