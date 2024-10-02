import {Avatar,AvatarFallback,AvatarImage} from "@/components/ui/avatar"

const Navbar = () => {
  return (
    <div className=' relative p-4 flex flex-col md:flex'>
        <div className='border-b'>
            <h1 className='text-3xl font-bold tracking-tight '>MEMORIES</h1>
            <div className='ml-auto flex items-center space-x-4 p-1 absolute top-2 right-2'>
            <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>JS</AvatarFallback>
    </Avatar>
    </div>
  
        </div>
    </div>
  )
}

export default Navbar