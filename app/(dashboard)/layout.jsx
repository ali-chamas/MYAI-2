

import { getServerSession } from "next-auth/next";
import { authoptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Sidebar from "../components/dashboard/Sidebar";
import { fetchUser } from "../fetchFunction/fetching";
import LimitReached from "../components/LimitReached";
import BannedMessage from "../components/BannedMessage";
import { CrispProvider } from "../components/crisp-chat/crisp-provider";
 


const DashboardLayout =async ({children})=>{


  const session = await getServerSession(authoptions);
  if(!session){
    redirect('/login')
  }
  const user = await fetchUser(session.user.email);
 

  
  return (
    <div className=" h-full">
      <CrispProvider/>
      {user.user.banned? 
      <div className="h-screen pl-12 flex items-center justify-center">
      <BannedMessage/>
    </div>
      :
      <div className="flex">
        <div className="fixed top-0 h-screen ">
        <Sidebar/>
        </div>
        <div className="w-[85vw] md:pl-64 lg:pl-40 h-screen">
          {
            user.user.api_limit==5 && !user.user.subscribed ?
            <div className="h-screen pl-12 flex items-center justify-center">
            <LimitReached/>
          </div>
            :children
          }
        
        </div>
      
      </div>
     
    }
      
    </div>
  )
}
export default DashboardLayout;