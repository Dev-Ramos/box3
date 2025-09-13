import Navbar from "@/components/navbar";
import { useCalls } from "@/context/useCalls";
import {getAtendimentos, getChamados} from "@/services/feed-pages";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

const HomePage = () => {
  const { getChamadosState, getAtendimentoState } = useCalls();
  useEffect(() => {
    getChamados().then((res) => getChamadosState(res));
    getAtendimentos().then((res)=> getAtendimentoState(res) )
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
