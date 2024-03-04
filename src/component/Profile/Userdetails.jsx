import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PenIcon } from "lucide-react";
import users from "@/Data/users";
import { Input } from "postcss";
import { Skilllevel } from "./Skilllevel";

function Userdetails() {
  return (
    <div>
      <Card className="w-2/3 ml-96 h-fit mt-5 md">
        <CardHeader className="bg-gray-200 h-20 mb-10">
          <CardTitle>
            <img className="rounded-full" src={users.profileImageUrl} />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul>
            <li className="text-xl my-1 flex justify-between">
              <h2 className="font-semibold">{users.name}</h2>
              <button>
                <PenIcon className="w-4" />
              </button>
            </li>

            <li className="text-gray-600 text-sm mb-1">{users.email}</li>
            <li className="text-gray-600 text-sm mb-1">
              Primary Skill : {users.skill}
            </li>
            <li className="text-gray-600 text-sm mb-1">
              Experience : {users.exp}
            </li>
            <li className="text-gray-600 text-sm">
              Reporting : {users.reporting}
            </li>
          </ul>
          <ul className="text-gray-600 text-sm mt-5">
            <li className="mb-1">
              Specialist <Skilllevel className="" />:
            </li>
            <li className="mb-1">Advanced :</li>
            <li className="mb-1">Expert :</li>
            <li className="mb-1">Basic :</li>
          </ul>
          <div className=""></div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Userdetails;
