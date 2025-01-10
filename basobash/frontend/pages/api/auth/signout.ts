import { NextRequest, NextResponse } from "next/server";

export const config = {
  runtime: "edge",
};

export default function handler(req: NextRequest) {
  if (req.method === "POST") {
    // Update to use headers property instead of setHeader
    const response = NextResponse.redirect("http://localhost:3000/");
    response.headers.set("Set-Cookie", "token=; Max-Age=0; path=/; HttpOnly");

    return response; // Return the modified response
  } else {
    console.log({ message: "Method not allowed" }, { status: 405 });

    return NextResponse.redirect("http://localhost:3000/");
  }
}
