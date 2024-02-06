import Image from "next/image";
import { BiHash, BiHomeCircle } from "react-icons/bi";
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
  }
];
export default function Home() {
  return (
    <>
    <div className="grid grid-cols-12 h-screen w-screen px-40">
      <div className="col-span-3 border border-red-300  justify-start pt-4">
        <div className="text-3xl hover:bg-gray-800 h-fit w-fit rounded-full
        p-2 cursor-pointer transition-all">
        <BsTwitterX />
        </div>
        <div>
          <ul>
            {SidebarMenuItems.map(item=>
              <li className="flex justify-start items-center gap-4 hover:bg-gray-800 rounded-xl px-4 py-2 w-fit cursor-pointer "
               key={item.title}>
                <span>{item.icon}</span>
                <span>{item.title}</span>
              </li>
            )}
          </ul>
        </div>

      </div>
      <div className="col-span-6 border-r-[0.2px] border-l-[0.2px] border-white"></div>
      <div className="col-span-3"></div>

    </div>
    </>
  );
}
