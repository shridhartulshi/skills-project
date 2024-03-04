import React from "react";
import { Pencil, PlusIcon } from "lucide-react";
import { dummyData } from "@/Data/skill-coldata"; // Importing dummy data
import { Pagination } from "@/components/ui/pagination";
import { Skillspop } from "./Skillspop";
import { Skillspagination } from "./Skillspagination";

const Skillscol = () => {
  return (
    <div className="overflow-x-auto ml-96 border-black border rounded-md mb-4 w-2/3 shadow-black shadow-sm ">
      <div className="">
        <div className="text">
          <h1 className=" text-xl pl-8 bg-slate-200 p-3 h-14 font-medium uppercase">
            Skills
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-3  p-10 ">
        <div className="col-span-1 flex flex-col">
          <div className="px-4 py-2 font-medium border-b-2 text-base uppercase">
            Category
          </div>
          {dummyData.map((item) => (
            <div key={item.id} className="px-4 py-2 border-b-2">
              {item.category}
            </div>
          ))}
        </div>
        <div className="col-span-1 flex flex-col">
          <div className="px-4 py-2 font-medium border-b-2 text-base uppercase">
            Skill
          </div>
          {dummyData.map((item) => (
            <div key={item.id} className="px-4 py-2 border-b-2">
              {item.skills}
            </div>
          ))}
        </div>
        <div className="col-span-1 flex flex-col ">
          <div className="px-4 py-2 font-medium border-b-2 text-base text-center items-center uppercase ">
            Actions
          </div>
          {dummyData.map((item) => (
            <div key={item.id} className="px-4 py-2 border-b-2">
              <button>
                <Skillspop />
              </button>

              {/* Using Lucide Pencil icon */}
            </div>
          ))}
        </div>
      </div>
      <Skillspagination />
    </div>
  );
};

export default Skillscol;
