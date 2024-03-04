import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { PlusIcon } from "lucide-react";

export function Addskills() {
  return (
    <Popover className="">
      <PopoverTrigger asChild>
        <Button variant="">
          <PlusIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 bg-white">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Add Skill</h4>
          </div>
          <div className="grid gap-2 mt-4">
            <div className="grid grid-cols-3 items-center gap-4 outline-none">
              <Label htmlFor="width">Category</Label>
              <Input id="width" className="col-span-2 h-8" />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxWidth">Skill</Label>
              <Input id="maxWidth" defaultValue="" className="col-span-2 h-8" />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="height">Level</Label>
              <Input id="height" defaultValue="" className="col-span-2 h-8" />
            </div>

            <button className=" items-center mt-3 p-2 bg-green-200 rounded-md text-black hover:bg-green-300 font-semibold">
              Save
            </button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
