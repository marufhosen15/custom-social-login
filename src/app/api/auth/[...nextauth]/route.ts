import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");

  const response = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      client_id: process.env.GITHUB_CLIENT_ID,
      client_secret: process.env.GITHUB_CLIENT_SECRET,
      code,
    }),
  });

  const data = await response.text();

  const params = new URLSearchParams(data);
  const accessToken = params.get("access_token");
  console.log("--------", params);

  if (accessToken) {
    // Fetch user data using the access token
    const userResponse = await fetch("https://api.github.com/user", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const userData = await userResponse.json();
    console.log("user-data", userData);
    // return NextResponse.redirect("/");
  }
  return NextResponse.json({
    status: {
      code: 400,
      message: "Invalid Token",
    },
  });
}
