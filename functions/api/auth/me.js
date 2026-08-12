import { handleMe } from "../../../src/auth.js";

export async function onRequestGet(context) {
  return handleMe(context.request, context.env);
}
