import { handleSignup } from "../../../src/auth.js";

export async function onRequestPost(context) {
  return handleSignup(context.request, context.env);
}
