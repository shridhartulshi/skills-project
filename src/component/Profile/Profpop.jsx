import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { PlusIcon } from "lucide-react";

export function Profpop() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="bg-white text-black hover:bg-gray-200 rounded-full">
          <PlusIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-fit bg-white">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-bold leading-none mb-3">Add Details</h4>
          </div>
          <div className="grid gap-3">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label>Organisation</Label>
              <Input className="col-span-2 h-8" />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label>From</Label>
              <Input className="col-span-2 h-8" type="date" />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label>To</Label>
              <Input className="col-span-2 h-8" type="date" />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label>Designation</Label>
              <Input className="col-span-2 h-8" />
            </div>
            <hr />
            <h4 className="font-bold leading-none mb-4 mt-1">
              Project Details
            </h4>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label>Project</Label>
              <Input className="col-span-2 h-8" />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label>Description</Label>
              <Input className="col-span-2 h-8" />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label>Responsibilities</Label>
              <Input className="col-span-2 h-8" />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label>Technologies</Label>
              <Input className="col-span-2 h-8" />
            </div>
            <button className="bg-green-200  hover:bg-green-300 h-8 font-semibold rounded-md">
              Save
            </button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
