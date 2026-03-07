// import connectDB from "@/lib/db";
// import { NextResponse } from "next/server";
// import mongoose from "mongoose";
// import Global from "@/models/Global"; // 👈 agar file ka naam Global.js hai

// export async function GET() {
//   await connectDB();

//   try {
//     const data = await Global.findOne();

//     return NextResponse.json({
//       menuItems: data?.menuItems || [],
//       headerSettings: data?.headerSettings || {}
//     });

//   } catch (err) {
//     return NextResponse.json(
//       { error: "Failed to fetch" },
//       { status: 500 }
//     );
//   }
// }