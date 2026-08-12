import { handleLogout } from "../../../src/auth.js";

export async function onRequestPost(context) {
  return handleLogout(context.request, context.env);
}
