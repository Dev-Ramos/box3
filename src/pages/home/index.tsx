import Navbar from "@/components/navbar";
import { useCalls } from "@/context/useCalls";
import getChamados from "@/services/get-chamados";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

const HomePage = () => {
  const { getChamadosState } = useCalls();
  useEffect(() => {
    getChamados().then((res) => getChamadosState(res.dados));
  }, []);

  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default HomePage;
