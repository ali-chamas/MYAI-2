

import { getServerSession } from "next-auth/next";
import { authoptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Sidebar from "../components/dashboard/Sidebar";

const DashboardLayout =async ({children})=>{
    const session = await getServerSession(authoptions);
  if(!session){
    redirect('/login')
  }
  return (
    <div className=" h-full">
      <div className="flex">
        <div className="fixed top-0 h-screen ">
        <Sidebar/>
        </div>
        <div className="w-[85vw] md:pl-64 lg:pl-40 h-screen">
        {children}
        </div>
        
      </div>
     
    
      
    </div>
  )
}
export default DashboardLayout;