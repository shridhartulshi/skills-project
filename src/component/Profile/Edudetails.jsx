import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Edutable from "./Edutable"
import { PlusIcon } from "lucide-react"

function Edudetails() {
  return (
    <div>
      <Card className='ml-96 mt-5 w-2/3 h-fit mb-5'>
  <CardHeader>
    <CardTitle className='mb-2 flex items-center justify-between'>
      Education Details
      <button className="hover:bg-gray-200 rounded-full"><PlusIcon/></button>
    </CardTitle><hr/>
  </CardHeader>
  <CardContent>
    <Edutable/>
  </CardContent>
</Card>

    </div>
  )
}

export default Edudetails
