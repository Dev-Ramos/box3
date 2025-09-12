# 📌 Box3 Monitoramento

Esse projeto ajuda na análise de ocorrências policiais, facilitando o controle e organização das viaturas e criação de relatórios semanais/mensais de ocorrências

---

## ⚙️ Pré-requisitos

- Node.js >= 24.3.1
- npm ou yarn

---

## 🔧 Instalação

Clone o repositório:

```bash
git clone https://github.com/seu-usuario/seu-projeto.git

cd seu-projeto
```
Instale as dependências do projeto:
```bash
npm install
```
## ▶️ Rodando o projeto  
Para rodar o projeto use o comando:
```bash
npm run dev
```
Por padrão, a aplicação roda em:
```arduino
http://localhost:5173
```

---

## 🚀 Tecnologias
### React + Vite:
  Escolhi usar o React + Vite devido a sua velocidade de transpilação e seu HMR (Hot Module Replacement) que modifica no virtual dom apenas os componentes que estão sendo modificados ao invés de renderizar toda a árvore.

### TypeScript: 
  A escolha do TypeScript é essencial para criação de aplicações escaláveis, devido a sua tipagem, garantindo assim que o código esteja em completo funcionamento e evitando bugs futuro, relacionados a tipo de dados.

### Axios
  A escolha do axios está relacionado a sintaxe mais simples e ser menos verboso do que o fetch nativo, além de poder usar os interceptors que assistem as requisições enviando token, content-Type, entre outros, tornando as requisições ainda mais enxutas dentro dos componentes.

### Zustand
  O zustand é um global context menos verboso e com melhor performance do que o Context API, o que facilita a criação de contextos para aplicações

### React Router DOM 
  Como a biblioteca React nos permite a criação de SPAs o router dom se torna a esolha perfeita para roteamento da aplicação permitindo mais clareza e velociodade na criação de rotas

### React Hook Form + Zod
  Para criação de formulários essas biblioteca são únicas, pois ajuda na validação dos campos do formulário além já possuir um estado para erro que verifica, juntamente ao zod, para renderizar os erros do usuário quanto ao preenchimento do formulário

### TailwindCSS + ShadCn  
  A escolha dessas duas bibliotecas se deu devido a velocidade de produção que elas nos permite ter, o shadcn com muito compenente pré-montados e adptáveis a mudanças enquanto o tailwind nós dá velocidade de entrega em telas, pois nos permite estilizar ao mesmo tempo que criamos os componentes.
