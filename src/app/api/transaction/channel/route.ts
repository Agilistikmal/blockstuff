import { NextRequest, NextResponse } from "next/server";

const endpoint = "/merchant/payment-channel";

export async function GET(req: NextRequest) {
  const res = await fetch(process.env.TRIPAY_ENDPOINT + endpoint, {
    headers: {
      Authorization: "Bearer " + process.env.TRIPAY_API_KEY,
    },
  });
  const response = await res.json();
  if (!response.success) {
    return NextResponse.json({
      status: 500,
      error: response.message,
      data: null,
    });
  }

  return NextResponse.json({
    status: 200,
    error: null,
    data: response.data,
  });
}
