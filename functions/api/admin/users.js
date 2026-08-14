import { handleCreateAdmin, handleDeleteAdmin, handleListAdmins, handleUpdateAdmin } from "../../../src/admin-actions.js";

export async function onRequestGet(context) {
  return handleListAdmins(context.request, context.env);
}

export async function onRequestPost(context) {
  return handleCreateAdmin(context.request, context.env);
}

export async function onRequestPatch(context) {
  return handleUpdateAdmin(context.request, context.env);
}

export async function onRequestDelete(context) {
  return handleDeleteAdmin(context.request, context.env);
}
