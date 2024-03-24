import { MinecraftRequest } from "@/model/minecraft_model";
import { NextRequest, NextResponse } from "next/server";
import { Rcon } from "rcon-client";

export async function POST(req: NextRequest) {
  const body = await req.json();
  let data: MinecraftRequest;
  try {
    data = MinecraftRequest.parse(body);
  } catch (err) {
    return NextResponse.json(
      {
        status: 400,
        error: err,
        data: null,
      },
      { status: 400 }
    );
  }

  const rcon = new Rcon({
    host: data.ip,
    port: data.port,
    password: data.password,
  });
  await rcon.connect();

  let queue: any[] = [];
  data.commands.forEach((command) => {
    queue.push(rcon.send(command));
  });
  await Promise.all(queue);

  await rcon.end();

  return NextResponse.json({
    status: 200,
    error: null,
    data: null,
  });
}
