import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { ApiResponse } from "@/model/web_model";
import { Customer } from "@/model/customer_model";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  const customers = await prisma.customer.findMany();
  return NextResponse.json({
    status: 200,
    error: null,
    data: customers,
  });
}

export async function POST(req: NextRequest) {
  const data: Customer = await req.json();
  const customer = await prisma.customer.create({
    data: {
      email: data.email,
      username: data.username,
    },
  });
  return NextResponse.json({
    status: 200,
    error: null,
    data: customer,
  });
}
