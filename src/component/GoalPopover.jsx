import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {PlusIcon } from "lucide-react"

export function GoalPopover() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className=" text-sm bg-white text-black hover:bg-gray-200 rounded-full"><PlusIcon/></Button>
      </PopoverTrigger> 
      <PopoverContent className="w-96">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Add Goal</h4>
            <p className="text-sm text-muted-foreground">
              Set target for the new goal.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label>New Goal</Label>
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
