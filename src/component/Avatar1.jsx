import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
  
  export function Avatar1() {
    return (
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.pn" alt="@shadcn" />
        <AvatarFallback className='text-black bg-gray-200 text-sm'>DM</AvatarFallback>
      </Avatar>
    )
  }
  