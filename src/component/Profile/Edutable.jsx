import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import users from "@/Data/users"

  
  function Edutable() {
    return (
        <Table className='mt-1.5'>
        <TableHeader className='bg-gray-50 text-center'>
          <TableRow>
            <TableHead className="w-[full]">Degree</TableHead>
            <TableHead>University</TableHead>
            <TableHead >Year</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className='text-gray-800'>
          <TableRow>
            <TableCell className="font-small">{users.degree}</TableCell>
            <TableCell>{users.uni}</TableCell>
            <TableCell>{users.year}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      
    )
  }
  
  export default Edutable
  