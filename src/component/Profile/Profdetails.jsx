import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Proftable from "./Proftable";
import { PlusIcon } from "lucide-react";
import { Profpop } from "./Profpop";

function Profdetails() {
  return (
    <div>
      <Card className="ml-96 mt-5 w-2/3 h-fit">
        <CardHeader>
          <CardTitle className="mb-2 flex items-center justify-between ">
            Professional Details
            <Profpop />
          </CardTitle>
          <hr />
        </CardHeader>
        <CardContent>
          <Proftable />
        </CardContent>
      </Card>
    </div>
  );
}

export default Profdetails;
