import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import api from "@/services/api";

// 2. **Credenciais de teste**:
//     - **Usuário**: `estagiario@box3.work`
//     - **Senha**: `Estagio@Box3`

const LoginPage = () => {

  const handleLogin = () => {
    api.put('/Auth/login', {
      'email': 'estagiario@box3.work',
      'senha': 'Estagio@Box3'
    }).then(res => {
      if (res.data.dados.token) {
        localStorage.setItem('token', res.data.dados.token)
        console.log("Token salvo: ", res.data.dados.token);
      }
    }).catch(err => {
      console.log("Erro ao fazer login: ", err);
    })
    
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-1/4 h-1/3 flex flex-col gap-4">
        <h1 className="text-4xl font-bold text-green-700 text-center">Box3</h1>
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Digite seu email:</Label>
          <Input placeholder="email@gmail.com" type="email" name="email"/>
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="senha">Digite sua senha:</Label>
          <Input placeholder="senha" type="password" name="senha"/>
        </div>
        <Button variant={"outline"} onClick={()=> handleLogin()} className="bg-green-600">Entrar</Button>
      </div>
    </div>
  );
};

export default LoginPage;
