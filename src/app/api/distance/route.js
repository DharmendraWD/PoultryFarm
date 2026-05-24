// app/api/distance/route.js
// Server-side proxy — API key never exposed to the browser

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const origin = searchParams.get("origin");
  const destination = searchParams.get("destination");

  if (!origin || !destination) {
    return Response.json({ error: "Missing origin or destination" }, { status: 400 });
  }

  const apiKey = process.env.GOOGLE_MAPS_API_KEY; // server-side only (no NEXT_PUBLIC_)

  if (!apiKey) {
    return Response.json({ error: "API key not configured" }, { status: 500 });
  }

  const url =
    `https://maps.googleapis.com/maps/api/distancematrix/json` +
    `?origins=${encodeURIComponent(origin)}` +
    `&destinations=${encodeURIComponent(destination)}` +
    `&mode=driving` +
    `&key=${apiKey}`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    return Response.json(data);
  } catch (err) {
    return Response.json({ error: "Failed to fetch from Google" }, { status: 502 });
  }
}