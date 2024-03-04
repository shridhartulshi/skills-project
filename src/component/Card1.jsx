import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { GoalPopover} from "./GoalPopover"
import Table1 from "./Table1"

  function Card1() {

    return (
        <Card className='ml-96 mr-80 mt-5 items-center h-fit w-2/3'>
        <CardHeader>
          <CardTitle className=' flex items-center justify-between'>
            Goals
            <GoalPopover/>
          </CardTitle>
          <Table1/>
          <CardDescription ></CardDescription>
        </CardHeader>
        <CardContent>
        </CardContent>
      </Card>
      
    )
  }

  export default Card1