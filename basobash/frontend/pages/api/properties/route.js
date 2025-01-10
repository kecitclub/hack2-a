import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Property from "@/models/property";

export async function GET() {
  try {
    await connectDB();
    const properties = await Property.find({}).populate("owner");
    return NextResponse.json(properties);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    await connectDB();
    const data = await request.json();
    const property = await Property.create(data);
    return NextResponse.json(property, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
