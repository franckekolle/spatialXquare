import { handleLogin, handleLogout, handleMe, handleSignup } from "./auth.js";
import { handleDashboard } from "./dashboard.js";
import { handleCreateRequest } from "./requests.js";

function json(data, init = {}) {
  return Response.json(data, {
    ...init,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      ...(init.headers || {})
    }
  });
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (url.pathname.startsWith("/api/")) {
      if (url.pathname === "/api/health" && request.method === "GET") {
        return json({ ok: true, service: "SpatialXquare API", status: "ready" });
      }

      if (url.pathname === "/api/requests" && request.method === "POST") {
        return handleCreateRequest(request, env);
      }

      if (url.pathname === "/api/auth/signup" && request.method === "POST") {
        return handleSignup(request, env);
      }

      if (url.pathname === "/api/auth/login" && request.method === "POST") {
        return handleLogin(request, env);
      }

      if (url.pathname === "/api/auth/logout" && request.method === "POST") {
        return handleLogout(request, env);
      }

      if (url.pathname === "/api/auth/me" && request.method === "GET") {
        return handleMe(request, env);
      }

      if (url.pathname === "/api/dashboard" && request.method === "GET") {
        return handleDashboard(request, env);
      }

      return json({ ok: false, error: "Route API introuvable." }, { status: 404 });
    }

    return env.ASSETS.fetch(request);
  }
};
