
import { NextResponse } from 'next/server';
import {Configuration , OpenAIApi} from 'openai';



const configuration = new Configuration({
    apiKey:process.env.OPENAI_KEY,
});



const openai = new OpenAIApi(configuration);
const instruction={
    role:"system",
    content:"You are a quizz generator , you will return an array of objects of 5 mcq questions with 4 choices and the solution, the string must be of json type , i will parse it to json after getting it , don't add \n or \t "
}

export async function POST(req){
    
    try{
        
        
        const message =JSON.stringify(await req.json());

        const res = await openai.createChatCompletion({
            model:'gpt-3.5-turbo',
           messages:[
            instruction, {role:'user',content:message}
            
           ]
            
        });        
        
          
       
        return NextResponse.json(res.data.choices[0].message,{status:200})
    }
    catch(err){
        console.log(err);
        return new NextResponse(err,{status:500})
    }
}