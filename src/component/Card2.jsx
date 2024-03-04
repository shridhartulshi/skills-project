import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
    CardFooter,
  } from "@/components/ui/card"

  function Card2() {

    return (
        <Card className='ml-96 mr-80 mt-10 w-2/3 h-fit'>
  <CardHeader>
    <CardTitle className='text-left'>Getting Started</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p></p>
  </CardContent>
  <CardFooter>
    <p>Footer</p>
  </CardFooter>
</Card>

    )
  }

  export default Card2