import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Property from "@/models/property";

export async function POST(request, { params }) {
  try {
    await connectDB();
    const { userId } = await request.json();

    const property = await Property.findByIdAndUpdate(
      params.id,
      { $addToSet: { sharedBy: userId } },
      { new: true }
    );

    if (!property) {
      return NextResponse.json(
        { error: "Property not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(property);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    await connectDB();
    const { userId } = await request.json();

    const property = await Property.findByIdAndUpdate(
      params.id,
      { $pull: { sharedBy: userId } },
      { new: true }
    );

    if (!property) {
      return NextResponse.json(
        { error: "Property not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(property);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
