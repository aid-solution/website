import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(request: NextRequest) {
  const folder = request.url.split("/").slice(-1)[0];
  const imagesDirectory = path.join(process.cwd(), "public", folder);

  if (!fs.existsSync(imagesDirectory)) {
    return NextResponse.json({ error: "Folder not found" }, { status: 404 });
  }

  const files = await fs.promises.readdir(imagesDirectory);
  const imageFiles = files.filter((file) => /\.(jpg|jpeg|png|gif|webp)$/i.test(file));

  return NextResponse.json(imageFiles);
}
