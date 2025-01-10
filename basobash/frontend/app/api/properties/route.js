import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Property from "@/models/property";

export async function GET() {
  try {
    await dbConnect();
    const properties = await Property.find().populate("owner");
    return NextResponse.json(properties);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    await dbConnect();
    const data = await request.json();
    const property = await Property.create(data);
    return NextResponse.json(property, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
