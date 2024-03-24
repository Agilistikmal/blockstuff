import { prisma } from "@/lib/database/prisma";
import { NextRequest, NextResponse } from "next/server";

type Params = {
  slug: string;
  item_slug: string;
};

export async function GET(req: NextRequest, { params }: { params: Params }) {
  const server = await prisma.item.findUnique({
    where: {
      server_slug: params.slug,
      slug: params.item_slug,
    },
    include: {
      features: true,
    },
  });
  if (!server) {
    return NextResponse.json(
      {
        status: 404,
        error: `item with server slug ${params.slug} and item slug ${params.item_slug} not found`,
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
