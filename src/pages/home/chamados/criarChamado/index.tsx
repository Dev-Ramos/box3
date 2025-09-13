import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCalls } from "@/context/useCalls";
import api from "@/services/api";
import { getPessoa } from "@/services/feed-pages";
// import api from "@/services/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { PlusIcon } from "lucide-react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";

const formSchema = z.object({
  bairro: z.string().min(1, { message: "Informe seu bairro" }),
  rua: z.string().min(1, { message: "Informe sua rua" }),
  numero: z.string().min(1, { message: "Informe seu numero" }),
  cep: z.string().min(1, { message: "Informe seu cep" }),
  cidade: z.string().min(1, { message: "Informe sua cidade" }),
  estado: z.string().min(1, { message: "Informe seu estado" }),
  pessoaAssistidaId: z.string().min(1, { message: "selecione a pessoa" }),
});

interface FormSchemaCall {
  bairro: string;
  rua: string;
  numero: string;
  cep: string;
  cidade: string;
  estado: string;
  pessoaAssistidaId: string;
}

const CreateCAll = () => {
  const navigate = useNavigate();
  const {
    getSelectBairro,
    getSelectPessoaAssistida,
    selectBairro,
    selectPessoaAssistida,
  } = useCalls();
  const form = useForm<FormSchemaCall>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      bairro: "",
      rua: "",
      numero: "",
      cep: "",
      cidade: "",
      estado: "",
      pessoaAssistidaId: "",
    },
  });

  useEffect(() => {
    getSelectBairro();
    getSelectPessoaAssistida();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = async (data: FormSchemaCall) => {
    const pessoaAssistida = await getPessoa(Number(data.pessoaAssistidaId));
    const chamadoDTO = {
      ...data,
      pessoaAssistidaId: Number(data.pessoaAssistidaId),
      dataCadastro: new Date().toISOString(),
      pessoaAssistida,
      latitude: "-3.6946083",
      longitude: "-40.360736",
    };
    api
      .post("/Chamado", chamadoDTO)
      .then((res) => console.log(res.data))
      .catch((err) => toast.error(err.response.data.mensagem, {
        description: "Não podemos abrir um novo chamado com um pessoa que já sendo assitida"
      }));
  };
  return (
    <div>
      <Card className="w-1/2 mx-auto mt-16">
        <CardHeader>
          <CardTitle className="text-center text-xl">Preencha o chamado abaixo:</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {/* Pessoa Assistida */}
              <FormField
                control={form.control}
                name="pessoaAssistidaId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Pessoa Assistida:</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value.toString()}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione a pessoa" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {selectPessoaAssistida.map((pessoa) => (
                          <SelectItem
                            key={pessoa.id}
                            value={pessoa.id.toString()}
                          >
                            {pessoa.descricao}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Endereço */}
              <h1 className="font-semibold">Endereço do Chamado:</h1>
              <div className="flex flex-row gap-2">
                {/* Rua */}
                <FormField
                  control={form.control}
                  name="rua"
                  render={({ field }) => (
                    <FormItem className="grow">
                      <FormLabel>rua:</FormLabel>
                      <FormControl>
                        <Input placeholder="rua" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* Numero */}
                <FormField
                  control={form.control}
                  name="numero"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>numero:</FormLabel>
                      <FormControl>
                        <Input placeholder="numero" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex gap-2">
                {/* Bairro */}
                <FormField
                  control={form.control}
                  name="bairro"
                  render={({ field }) => (
                    <FormItem className="grow">
                      <FormLabel>Bairro:</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione o bairro" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {selectBairro.map((bairro) => (
                            <SelectItem
                              key={bairro.descricao}
                              value={bairro.descricao}
                            >
                              {bairro.descricao}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* cep */}
                <FormField
                  control={form.control}
                  name="cep"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>cep:</FormLabel>
                      <FormControl>
                        <Input placeholder="cep" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* cidade */}
                <FormField
                  control={form.control}
                  name="cidade"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Cidade:</FormLabel>
                      <FormControl>
                        <Input placeholder="cidade" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* estado */}
                <FormField
                  control={form.control}
                  name="estado"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>estado:</FormLabel>
                      <FormControl>
                        <Input placeholder="estado" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex justify-between">
                <Button
                  type="button"
                  variant={"outline"}
                  onClick={() => navigate(-1)}
                >
                  Cancelar
                </Button>
                <Button
                  type="submit"
                  variant={"outline"}
                  className="bg-green-700 text-white font-semibold"
                >
                  <PlusIcon size={16} />
                  Criar Chamado
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreateCAll;
