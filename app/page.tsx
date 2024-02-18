'use client';
import FeedCard from "@/components/FeedCard";
import { GoogleLogin } from "@react-oauth/google";
import Image from "next/image";
import { BiBell, BiBookmarks, BiEnvelope, BiHash, BiHomeCircle, BiUser } from "react-icons/bi";
import { BsTwitterX } from "react-icons/bs";



interface TwitterSidebarButton{
  title:string,
  icon:React.ReactNode;
}
const SidebarMenuItems:TwitterSidebarButton[]=[
  {
    title:'Home',
    icon:<BiHomeCircle/>
  },
  {
    title:'Explore',
    icon:<BiHash/>
  },
  {
    title:'Notification',
    icon:<BiBell/>
  },
  {
    title:'Messages',
    icon:<BiEnvelope/>
  },
  {
    title:'Bookmarks',
    icon:<BiBookmarks/>
  },
  {
    title:'Profile',
    icon:<BiUser/>
  },
];
export default function Home() {
  return (
    <>
    <div className="grid grid-cols-12 h-screen w-screen px-40">
      <div className="col-span-3    justify-start pt-4">
        <div className="text-3xl hover:bg-gray-800 h-fit w-fit rounded-full
        p-2 cursor-pointer transition-all">
        <BsTwitterX />
        </div>
        <div className="mt-4 text-2xl font-semibold pr-4">
          <ul>
            {SidebarMenuItems.map(item=>
              <li className="flex justify-start items-center gap-4 hover:bg-gray-800 rounded-xl 
              px-4  py-2 w-fit cursor-pointer "
               key={item.title}>
                <span>{item.icon}</span>
                <span>{item.title}</span>
              </li>
            )}
          </ul>
          <button className="bg-blue-500 p-4 rounded-full w-full mt-5 ">
            Tweet
          </button>
        </div>

      </div>
      <div className="col-span-6 h-screen overflow-scroll scrollbar-none border-r-[0.2px] border-l-[0.2px] border-white">
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>

      </div>
      <div className="col-span-3">
      <GoogleLogin onSuccess={c=>console.log(c)}/>
      </div>
    </div>
    </>
  );
}
