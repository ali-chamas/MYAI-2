import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google';
import { connectDB } from "@/utils/db";
import Users from "@/models/users";
import GitHubProvider from "next-auth/providers/github";

export const authoptions={
    secret: process.env.NEXTAUTH_SECRET,
    URL: process.env.NEXTAUTH_URL_STRING,
    providers:[
        GoogleProvider({
            clientId:process.env.GOOGLE_CLIENT_ID,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET,
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
          })
        
    ],
    callbacks:{
        async session({session}){
            const sessionUser = await Users.findOne({
                email:session.user.email
            });
            
            return session;
        },
        
        async signIn({profile}){
             
             try{
                await connectDB();
                const userExist = await Users.findOne({email:profile.email});
                if(!userExist){
                   if(profile.avatar_url){
                    const user = await Users.create({
                        email:profile.email,
                        name:profile.name,
                        image:profile.avatar_url,
                        createdAt:new Date(),
                        subscibed:false,
                        subscribedAt:new Date(),
                        tokens_used:0,
                        banned:false,
                        api_limit:0
                        
                    }
                    )
                   }
                   else{
                    const user = await Users.create({
                        email:profile.email,
                        name:profile.name,
                        image:profile.picture,
                        createdAt:new Date(),
                        subscibed:false,
                        subscribedAt:new Date(),
                        tokens_used:0,
                        banned:false,
                        api_limit:0
                    }
                    )}
                
                }

                return true;
             }catch(error){
                    console.log(error)
                    return false;
             }
             
            
        }
    }
};

const handler = NextAuth(authoptions);

export {handler as GET,handler as POST};