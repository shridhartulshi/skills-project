import { Pagination } from "@/components/ui/pagination";
import Edudetails from "./Edudetails";
import Profdetails from "./Profdetails";
import Skills from "./Skills";
import Skillscol from "./Skillscol";
import Userdetails from "./Userdetails";
import { Skillspagination } from "./Skillspagination";

function Profilepage() {
  return (
    <>
      <div>
        <Userdetails />
      </div>

      <div>
        <Profdetails />
        <Skills />
        <Edudetails />
        <Skillscol></Skillscol>
        
      </div>
    </>
  );
}

export default Profilepage;
