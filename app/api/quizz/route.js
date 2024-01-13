
import { NextResponse } from 'next/server';
import {Configuration , OpenAIApi} from 'openai';


const configuration = new Configuration({
    apiKey:process.env.OPENAI_KEY,
});



const openai = new OpenAIApi(configuration);
const instruction={
    role:"system",
    content:"You are an mcq quiz generator , you will always return an array of  json objects , each object has a question , 4 choices and a solution , the solution should always be the answer and not a character. an example: [{'question':'etc..','choices':'['a) one','b) two','c) three','d) four']','solution':'d) four'}], and don't forget to replace single quotations with double quotations , make it a valid json so I can parse it. "
}

export async function POST(req){
    
    try{
        
        
        const body =await req.json();
        const {message}=body;

        const res = await openai.createChatCompletion({
            model:'gpt-3.5-turbo',
           messages:[
            instruction, {role:'user',content:message}
            
           ]
            
        });   
          
        
          
       
        return NextResponse.json(res.data,{status:200})
    }
    catch(err){
        console.log(err);
        return new NextResponse(err,{status:500})
    }
}