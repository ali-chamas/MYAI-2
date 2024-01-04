import { NextResponse } from 'next/server';
import { connectDB } from "@/utils/db";
import Users from "@/models/users";


export async function GET(request, { params }) {
    const { email } = params;
    await connectDB();
    const user = await Users.findOne({ email: email });
    return NextResponse.json({ user }, { status: 200 });
  }