
import { NextResponse } from 'next/server';
import {Configuration , OpenAIApi} from 'openai';



const configuration = new Configuration({
    apiKey:process.env.OPENAI_KEY,
});



const openai = new OpenAIApi(configuration);
const instruction={
    role:"system",
    content:"You are a code generator. You must answer only in markdown code snippets. Use code comments only for explanation"
}

export async function POST(req){
    
    try{
        
        
        const body=await req.json()
        const { messages  } = body;
        const res = await openai.createChatCompletion({
            model:'gpt-3.5-turbo',
           messages:[instruction, ...messages ]
            
        });        
        
          
       
        return NextResponse.json(res.data,{status:200})
    }
    catch(err){
        console.log(err);
        return new NextResponse.json((err,{status:500}))
    }
}