import Navbar from "@/components/navbar";
import { useCalls } from "@/context/useCalls";
import getChamados from "@/services/get-chamados";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

const HomePage = () => {
  const { getChamadosState } = useCalls();
  useEffect(() => {
    getChamados().then((res) => getChamadosState(res.dados));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default HomePage;
