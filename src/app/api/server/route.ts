import { Server } from "@/model/server_model";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  const servers = await prisma.server.findMany();
  return NextResponse.json({
    status: 200,
    error: null,
    data: servers,
  });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  try {
    const data = Server.parse(body);
    const server = await prisma.server.create({
      data: data,
    });
    return NextResponse.json({
      status: 200,
      error: null,
      data: server,
    });
  } catch (err) {
    return NextResponse.json(
      {
        status: 400,
        error: err,
        data: null,
      },
      {
        status: 400,
      }
    );
  }
}
