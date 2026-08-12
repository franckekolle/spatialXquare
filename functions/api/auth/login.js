import { handleLogin } from "../../../src/auth.js";

export async function onRequestPost(context) {
  return handleLogin(context.request, context.env);
}
