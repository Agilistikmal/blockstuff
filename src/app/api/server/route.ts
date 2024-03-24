import { prisma } from "@/lib/database/prisma";
import { ServerRequest } from "@/model/server_model";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const servers = await prisma.server.findMany({
    include: {
      _count: {
        select: {
          items: true,
        },
      },
    },
  });
  return NextResponse.json({
    status: 200,
    error: null,
    data: servers,
  });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  try {
    const data = ServerRequest.parse(body);
    const server = await prisma.server.create({
      data: {
        ...data,
        rcon: {
          create: data.rcon,
        },
      },
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
