import Navbar from "@/components/navbar"
import getChamados from "@/services/get-chamados"
import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"

const HomePage = () => {
  const [chamados, setChamados] = useState([])
  useEffect(() => {
    getChamados().then(res => setChamados(res))
  }, [])

  return (
    <div>
      <Navbar />
      <Outlet context={chamados?.dados}/> 
    </div>
  )
}

export default HomePage
