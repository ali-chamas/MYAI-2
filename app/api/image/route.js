
import { NextResponse } from 'next/server';
import {Configuration , OpenAIApi} from 'openai';



const configuration = new Configuration({
    apiKey:process.env.OPENAI_KEY,
});



const openai = new OpenAIApi(configuration);

export async function POST(req){
    try{
      
        
        const prompt = await req.json();

       
       
        const response = await openai.createImage({
            
            prompt:JSON.stringify(prompt),
            n: 1,
            size: "1024x1024",
          });
       
        return NextResponse.json(response.data.data[0].url,{status:200})
    }
    catch(err){
        console.log(err);
        return new NextResponse(err,{status:500})
    }
}