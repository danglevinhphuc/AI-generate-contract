import OpenAI from 'openai';
import { NextResponse } from "next/server";
import {  NextApiResponse } from 'next';
const configuration = {
  apiKey: process.env.OPENAI_API_KEY!,
};

const openai = new OpenAI(configuration);

const renderContentContract = (partiesInvolved:string, purposeOfContract:string) =>{
  return `create contract is ${purposeOfContract} with parties involved name is ${partiesInvolved} example particular`.toLowerCase()
}

export async function POST(  req: Request,res: NextApiResponse) {
  try {
    const request = await req.json();
    const {partiesInvolved, purposeOfContract} = request.body
    
    if (!configuration.apiKey) {
      return new NextResponse("Miss OpenAI API Key.", { status: 500 });
    }
    const completion = await openai.chat.completions.create({
      messages: [{"role": "system", "content": "You are a helpful assistant."},
      {"role": "user", "content":renderContentContract(partiesInvolved,purposeOfContract)}],
      model: "gpt-3.5-turbo",
    });
  
    return NextResponse.json({ messages: completion.choices[0].message.content  });
  } catch (error) {
    if (error instanceof OpenAI.APIError) {
      const { name, status, headers, message } = error;
      return NextResponse.json({ name, status, headers, message }, { status });
    } else {
      throw error;
    }
  }
}