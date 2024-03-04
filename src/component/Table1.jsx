import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import Progress1 from "./Progress1"
import { FileTextIcon, PenIcon } from "lucide-react"
import { Editpopover } from "./Editpopover"

  
  function Table1() {
    return (
        <Table className='mt-1.5'>
        <TableCaption>A list of your skills.</TableCaption>
        <TableHeader className='bg-gray-100'>
          <TableRow>
            <TableHead className="w-[100px]">Skill</TableHead>
            <TableHead>Level</TableHead>
            <TableHead >Progress</TableHead>
            <TableHead >Target Date</TableHead>
            <TableHead className='w-[100px]'>Certificate</TableHead>
            <TableHead className='text-center'>Edit</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className='text-gray-800'>
          <TableRow>
            <TableCell className="font-small">React</TableCell>
            <TableCell>3</TableCell>
            <TableCell><Progress1/></TableCell>
            <TableCell>12/02/2024</TableCell>
            <TableCell>
                <a href="/"><FileTextIcon className=" mx-4 w-5"/></a>
            </TableCell>
            <TableCell className='text-center'>
              <Editpopover/>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-small">Dotnet</TableCell>
            <TableCell>2</TableCell>
            <TableCell><Progress1/></TableCell>
            <TableCell>25/02/2024</TableCell>
            <TableCell>
                <a href="/"><FileTextIcon className=" mx-4 w-5"/></a>
            </TableCell>
            <TableCell className='text-center'>
              <Editpopover/>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-small">Jquery</TableCell>
            <TableCell>2</TableCell>
            <TableCell><Progress1/></TableCell>
            <TableCell>01/04/2024</TableCell>
            <TableCell>
                <a href="/"><FileTextIcon className=" mx-4 w-5"/></a>
            </TableCell>
            <TableCell className='text-center'>
              <Editpopover/>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      
    )
  }
  
  export default Table1
  