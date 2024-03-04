import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlusIcon } from "lucide-react";
import Skillstable from "../Skillstable";
import { Addskills } from "./Addskills";
import { Pagination } from "@/components/ui/pagination";

function Skills() {
  return (
    <div>
      <Card className="ml-96 mt-5 w-2/3 h-fit mb-5 ">
        <CardHeader>
          <CardTitle className="mb-2 flex items-center justify-between">
            Skills
            <button>  
              <Addskills className="hover:bg-gray-200 rounded-full"></Addskills>
            </button>
          </CardTitle>
          <hr />
        </CardHeader>
        <CardContent>
          <Skillstable />
          
        </CardContent>
      </Card>
    </div>
  );
}

export default Skills;
