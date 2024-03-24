import { prisma } from "@/lib/database/prisma";
import { ServerRequestPartial } from "@/model/server_model";
import { NextRequest, NextResponse } from "next/server";

type Params = {
  slug: string;
};

export async function GET(req: NextRequest, { params }: { params: Params }) {
  const server = await prisma.server.findUnique({
    where: {
      slug: params.slug,
    },
  });
  if (!server) {
    return NextResponse.json(
      {
        status: 404,
        error: `server with slug ${params.slug} not found`,
        data: null,
      },
      { status: 404 }
    );
  }
  return NextResponse.json({
    status: 200,
    error: null,
    data: server,
  });
}

export async function PUT(req: NextRequest, { params }: { params: Params }) {
  let data: ServerRequestPartial;
  try {
    const body = await req.json();
    data = ServerRequestPartial.parse(body);
  } catch (err) {
    return NextResponse.json({
      status: 400,
      error: err,
      data: null,
    });
  }

  try {
    const server = await prisma.server.update({
      data: {
        ...data,
        rcon: {
          update: data.rcon,
        },
      },
      where: {
        slug: params.slug,
      },
    });
    return NextResponse.json({
      status: 200,
      error: null,
      data: server,
    });
  } catch (err) {
    return NextResponse.json({
      status: 500,
      error: err,
      data: null,
    });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: Params }) {
  try {
    await prisma.server.delete({
      where: {
        slug: params.slug,
      },
    });
    return NextResponse.json({
      status: 200,
      error: null,
      data: null,
    });
  } catch (err) {
    return NextResponse.json(
      {
        status: 404,
        error: `server with slug ${params.slug} not found`,
        data: null,
      },
      { status: 404 }
    );
  }
}
