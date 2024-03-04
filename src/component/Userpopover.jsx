import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Avatar1 } from "./Avatar1"

export function Userpopover() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className='w-0 mx-4'><Avatar1/></Button>
      </PopoverTrigger>
      <PopoverContent className="w-44">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Hello User !</h4>
            <hr/>
            <ul>
                <li><button className=" bg-blue-100 my-2 w-full hover:bg-gray-200 rounded-lg h-7 font-semibold">Edit Profile</button></li>
                <li><button className="bg-blue-100 my-2 w-full hover:bg-gray-200 rounded-lg h-7 font-semibold">Logout</button></li>
            </ul>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
