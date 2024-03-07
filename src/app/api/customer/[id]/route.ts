import { CustomerPartial } from "@/model/customer_model";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const customer = await prisma.customer.findFirst({
    where: {
      id: params.id,
    },
  });
  if (customer == null) {
    return NextResponse.json({
      status: 404,
      error: `customer with id: ${params.id} not found.`,
      data: customer,
    });
  }
  return NextResponse.json({
    status: 200,
    error: null,
    data: customer,
  });
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await req.json();
  let data: CustomerPartial;

  try {
    data = CustomerPartial.parse(body);
  } catch (err) {
    return NextResponse.json({
      status: 400,
      error: err,
      data: null,
    });
  }

  const customer = await prisma.customer.findFirst({
    where: {
      id: params.id,
    },
  });
  if (customer == null) {
    return NextResponse.json({
      status: 404,
      error: `customer with id: ${params.id} not found.`,
      data: customer,
    });
  }
  const update = await prisma.customer.update({
    where: {
      id: params.id,
    },
    data: data,
  });
  return NextResponse.json({
    status: 200,
    error: null,
    data: update,
  });
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const customer = await prisma.customer.findFirst({
    where: {
      id: params.id,
    },
  });
  if (customer == null) {
    return NextResponse.json({
      status: 404,
      error: `customer with id: ${params.id} not found.`,
      data: customer,
    });
  }
  const del = await prisma.customer.delete({
    where: {
      id: params.id,
    },
  });
  return NextResponse.json({
    status: 200,
    error: null,
    data: del,
  });
}
