import {
  Contact2Icon,
  HomeIcon,
  NotepadText,
  UsersRoundIcon,
} from "lucide-react";
import "./App.css";
import Sidebar, { SidebarItem } from "./component/Sidebar";
import Card1 from "./component/Card1";
import Card2 from "./component/Card2";
import Profilepage from "./component/Profile/Profilepage";

function App() {
  return (
    <>
      <div className="flex">
        <div className="">
          <Sidebar className="container-sm ml-28">
            <SidebarItem icon={<HomeIcon size={20} />} text="Home" active />
            <SidebarItem icon={<NotepadText size={20} />} text="Resume" />
            <SidebarItem icon={<Contact2Icon size={20} />} text="Contact" />
            <SidebarItem icon={<UsersRoundIcon size={20} />} text="Users" />
          </Sidebar>
        </div>
        <section className="w-full">
          <Profilepage />

          {/*<Card1></Card1>
        <Card2></Card2>*/}
        </section>
      </div>
    </>
  );
}

export default App;
