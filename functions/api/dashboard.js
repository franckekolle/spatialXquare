import { handleDashboard } from "../../src/dashboard.js";

export async function onRequestGet(context) {
  return handleDashboard(context.request, context.env);
}
