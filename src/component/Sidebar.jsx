import {ChevronLast, ChevronFirst } from "lucide-react"
import { useContext, createContext, useState } from "react"
import logo1 from '../assets/logo1.png'
import { Userpopover } from "./Userpopover"


const SidebarContext = createContext()

export default function Sidebar({ children }) {
  const [expanded, setExpanded] = useState(true)
  
  return (
    <aside className="h-screen fixed">
      <nav className="h-full flex flex-col bg-blue-100 border-r">
        <div className="p-4 flex justify-between items-center">
          <img src={logo1} className={`overflow-hidden transition-all ${expanded ? "w-32" : "w-0"}`}/>
          <button onClick={() => setExpanded((curr) => !curr)} className="p-1.5 rounded-lg bg-blue-100">{expanded ? <ChevronFirst /> : <ChevronLast />}</button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>
        <Userpopover/>
      </nav>
    </aside>

  )
}

export function SidebarItem({ icon, text, active }) {
  const { expanded } = useContext(SidebarContext)
  
  return (
    <li
      className={`relative flex items-center py-3 px-2.5 my-2  font-medium rounded-lg cursor-pointer gap-1.5
        ${
          active
            ? "bg-blue-200"
            : "hover:bg-blue-200"
        }
    `}>
      {icon}
        <span
        className={`overflow-hidden transition-all ${expanded ? "w-32" : "w-0"}`}>
        {text}
        </span>
    
    </li>
  )
}