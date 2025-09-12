import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import api from "@/services/api";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useNavigate } from "react-router-dom";
const formSchema = z.object({
  email: z.email({ message: "Email inválido" }).min(1, {message: "O email é obrigatório"}),
  senha: z
    .string()
    .min(1, { message: "A senha é obrigatória" })
    .min(7, { message: "A sennha deve conter no mínimo 8 caracteres" }),
});

interface FormSchemaType {
  email: string;
  senha: string;
}
// 2. **Credenciais de teste**:
//     - **Usuário**: `estagiario@box3.work`
//     - **Senha**: `Estagio@Box3`

const LoginPage = () => {
  const navigate = useNavigate();
  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      senha: "",
    },
  });

  const onSubmit = async (data: FormSchemaType) => {
    api
      .put("/Auth/login", {
        email: data.email,
        senha: data.senha,
      })
      .then((response) => {
        if (response.data.dados.token) {
          localStorage.setItem("token", response.data.dados.token);
          alert("Login realizado com sucesso!");
          navigate("/home");
        }
      })
      .catch((error) => {
        alert("Erro ao fazer login: "+ error);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-1/4 h-1/3 flex flex-col gap-4">
        <h1 className="text-4xl font-bold text-green-700 text-center">Box3</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email:</FormLabel>
                  <FormControl>
                    <Input placeholder="email" {...field} />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="senha"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Senha:</FormLabel>
                  <FormControl>
                    <Input placeholder="senha" type="password" {...field} />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />
            <Button type="submit" variant={"outline"} className="bg-green-700">
              Entrar
            </Button>
          </form>
        </Form>
        {/* <div className="flex flex-col gap-2">
          <Label htmlFor="email">Digite seu email:</Label>
          <Input placeholder="email@gmail.com" type="email" name="email"/>
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="senha">Digite sua senha:</Label>
          <Input placeholder="senha" type="password" name="senha"/>
        </div>
        <Button variant={"outline"} onClick={()=> handleLogin()} className="bg-green-600">Entrar</Button> */}
      </div>
    </div>
  );
};

export default LoginPage;
