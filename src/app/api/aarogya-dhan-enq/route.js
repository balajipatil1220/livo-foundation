import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, mobile, why, cost } = body;

    // Validation
    if (!name || /\d/.test(name)) {
      return NextResponse.json(
        { message: "Name cannot contain numbers" },
        { status: 400 }
      );
    }
    if (!/^\d{10}$/.test(mobile)) {
      return NextResponse.json(
        { message: "Mobile must be exactly 10 digits" },
        { status: 400 }
      );
    }
    if (!why || !cost) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    // Backend API
    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

    if (!baseURL) {
      return NextResponse.json(
        { message: "API Base URL missing in environment variables" },
        { status: 500 }
      );
    }

    const endpoint = `${baseURL}/api/aarogya-dhan-enq`;

    // Forward request to backend
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    // Safely read response
    const contentType = response.headers.get("content-type") || "";

    let data;

    // if JSON → parse
    if (contentType.includes("application/json")) {
      data = await response.json();
    } 
    else {
      // fallback for non-JSON responses
      const text = await response.text();
      console.error("Non-JSON from backend:", text);

      return NextResponse.json(
        { message: "Server returned invalid response" },
        { status: 500 }
      );
    }

    return NextResponse.json(data, { status: response.status });

  } catch (error) {
    console.error("Proxy error:", error);

    return NextResponse.json(
      { message: "Server error", details: error.message },
      { status: 500 }
    );
  }
}
