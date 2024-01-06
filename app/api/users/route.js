import { NextResponse } from 'next/server';
import { connectDB } from "@/utils/db";
import Users from "@/models/users";

export async function GET(){
    try {
        await connectDB();
    const users = await Users.find();
    return NextResponse.json(users,{status:200})
    } catch (error) {
        return NextResponse.json('error fetching users',{status:401})
    }
    

}
export async function PUT(req){

    const {subscribed,banned,tokens_used,subscribedAt,api_limit} = await req.json();
    const id=req.nextUrl.searchParams.get('id');
    try {
        await connectDB();
     await Users.findByIdAndUpdate(
        id,{$set:{subscribed:subscribed,banned:banned,tokens_used:tokens_used,subscribedAt:subscribedAt,api_limit:api_limit}}
    );
    return NextResponse.json('updated',{status:200})
    } catch (error) {
        return NextResponse.json('error fetching users',{status:401})
    }
    

}
export async function DELETE(req){


    const id=req.nextUrl.searchParams.get('id');
    try {
    await connectDB();
    await Users.findByIdAndDelete(
       id
    );
    return NextResponse.json('deleted',{status:200})
    } catch (error) {
        return NextResponse.json('error fetching users',{status:401})
    }
    

}