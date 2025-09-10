import { Button } from "./ui/button"

const Navbar = () => {
  return (
    <div className="w-full h-14 bg-green-600 flex items-center p-2 justify-between">
      <h1 className="text-3xl text-white font-bold">Box<span className="text-green-900 font-extrabold">3</span></h1>
      <div className="flex flex-row w-1/2 justify-center space-x-4">
        <Button variant={'ghost'}>Chamados</Button>
        <Button variant={'ghost'}>Atendimentos</Button>
      </div>
      <Button variant={"default"} className="text-xs text-white">Log out</Button>
    </div>
  )
}

export default Navbar
