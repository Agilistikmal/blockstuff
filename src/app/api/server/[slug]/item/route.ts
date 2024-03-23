import { prisma } from "@/lib/database/prisma";
import { ItemFeatureRequest, ItemRequest } from "@/model/item_model";
import { NextRequest, NextResponse } from "next/server";

type Params = {
  slug: string;
};

export async function GET(req: NextRequest, { params }: { params: Params }) {
  const server = await prisma.server.findUnique({
    where: {
      slug: params.slug,
    },
    include: {
      items: {
        include: {
          features: true,
        },
      },
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

export async function POST(req: NextRequest, { params }: { params: Params }) {
  let body = await req.json();
  body.server_slug = params.slug;
  let data: ItemRequest;
  let dataFeature: ItemFeatureRequest;
  try {
    data = ItemRequest.parse(body);
    dataFeature = ItemFeatureRequest.parse(body.features);
  } catch (err) {
    return NextResponse.json({
      status: 400,
      error: err,
      data: null,
    });
  }

  try {
    const item = await prisma.item.create({
      data: {
        ...data,
        features: dataFeature && {
          createMany: {
            data: dataFeature,
          },
        },
      },
    });
    return NextResponse.json({
      status: 200,
      error: null,
      data: item,
    });
  } catch (err) {
    return NextResponse.json({
      status: 500,
      error: err,
      data: null,
    });
  }
}
