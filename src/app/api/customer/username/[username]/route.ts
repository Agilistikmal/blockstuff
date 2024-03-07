import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(
  req: NextRequest,
  { params }: { params: { username: string } }
) {
  const customer = await prisma.customer.findFirst({
    where: {
      username: params.username,
    },
  });
  if (customer == null) {
    return NextResponse.json({
      status: 404,
      error: `customer with id: ${params.username} not found.`,
      data: customer,
    });
  }
  return NextResponse.json({
    status: 200,
    error: null,
    data: customer,
  });
}
