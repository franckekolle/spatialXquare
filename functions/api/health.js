export function onRequestGet() {
  return Response.json({
    ok: true,
    service: "SpatialXquare API",
    status: "ready"
  });
}
