import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { BookUserIcon, LogOutIcon, PhoneIncomingIcon } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleLogOut = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="w-full h-14 bg-green-600 flex items-center p-2 justify-between mb-2">
      <h1 className="text-3xl text-white font-bold ml-4">
        Box<span className="text-green-900 font-extrabold">3</span>
      </h1>
      <div className="flex flex-row w-1/2 justify-around space-x-4">
        <Button
          variant={"ghost"}
          className={`flex items-center font-normal tracking-widest hover:bg-green-500 hover:text-white ${
            location.pathname.split("/").includes("chamados")
              && "text-white font-bold"
          }`}
          onClick={() => navigate("/home/chamados")}
        >
          <PhoneIncomingIcon size={14} />
          Chamados
        </Button>
        <Button
          variant={"ghost"}
          className={`flex items-center font-normal tracking-widest hover:bg-green-500 hover:text-white ${
            location.pathname.split("/").includes("atendimentos")
              && "text-white font-bold"
          }`}
          onClick={() => navigate("/home/atendimentos")}
        >
          <BookUserIcon size={16} />
          Atendimentos
        </Button>
      </div>
      <Button
        variant={"ghost"}
        className="text-xs text-white"
        onClick={handleLogOut}
      >
        Log out
        <LogOutIcon size={14} />
      </Button>
    </div>
  );
};

export default Navbar;
