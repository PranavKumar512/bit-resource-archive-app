import { NextRequest, NextResponse } from "next/server";
import * as data from '@/app/api/questionPapers/bca/2023-24/semester_3/sem3_ques.json'


export async function POST(request: NextRequest) {
    return NextResponse.json({
        message: "received request",
        data: data
    })
}