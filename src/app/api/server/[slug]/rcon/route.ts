import { prisma } from "@/lib/database/prisma";
import { NextRequest, NextResponse } from "next/server";

export type Params = {
  slug: string;
};

export async function GET(req: NextRequest, { params }: { params: Params }) {
  const rcon = await prisma.server.findUnique({
    where: {
      slug: params.slug,
    },
    include: {
      rcon: true,
    },
  });

  return NextResponse.json({
    status: 200,
    error: null,
    data: rcon,
  });
}
