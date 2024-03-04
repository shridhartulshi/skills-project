import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {PenIcon} from "lucide-react"

export function Editpopover() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className=" text-sm bg-white w-0 text-black m-0 "><PenIcon className="w-4"/></Button>
      </PopoverTrigger> 
      <PopoverContent className="w-96">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Edit Goal</h4><hr/>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label>Skill</Label>
              <Input
                className="col-span-2 h-8"
                type='text'
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label>Target Title</Label>
              <Input
                className="col-span-2 h-8"
                type='text'
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label>Target Date</Label>
              <Input
                className="col-span-2 h-8"
                type='date'
              />
            </div>
            <button type='submit' className="bg-black text-white mt-3 p-2 rounded-md">Save</button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
