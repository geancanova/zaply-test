# Zaply Test

Este projeto é uma solução para o desafio de frontend proposto pela Zaply. Ele foi desenvolvido com foco em performance, escalabilidade e boas práticas modernas de desenvolvimento web.

> 🔗 O projeto está disponível para acesso em: [https://zaply-test.vercel.app/](https://zaply-test.vercel.app/)

## 🚀 Tecnologias Utilizadas

- **Next.js**: Framework React que oferece renderização híbrida (SSR e SSG), roteamento automático e otimizações de performance. Ideal para aplicações modernas e escaláveis.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática, proporcionando maior segurança e produtividade durante o desenvolvimento.
- **Tailwind CSS**: Framework CSS utilitário que permite estilização rápida e responsiva diretamente nas classes HTML, reduzindo a necessidade de arquivos CSS separados.
- **ESLint**: Ferramenta de linting para identificar e corrigir problemas de código, garantindo consistência e qualidade no código-fonte.
- **PostCSS**: Ferramenta para transformar CSS com plugins, utilizada aqui para processar e otimizar os estilos do Tailwind CSS.
- **Supabase**: Plataforma de backend como serviço (BaaS) utilizada para armazenar e gerenciar os dados do projeto. Um banco de dados PostgreSQL foi criado e hospedado no Supabase para facilitar o desenvolvimento rápido com integração direta via API REST.
- **Git**: Sistema de controle de versão distribuído utilizado para gerenciar o histórico de alterações do projeto.
- **Vercel**: Plataforma de hospedagem utilizada para fazer o deploy da aplicação de forma rápida e otimizada.

## 📁 Estrutura do Projeto

O projeto segue a estrutura padrão do Next.js com algumas customizações:

- `app/`: Contém as rotas e páginas da aplicação.
- `components/`: Componentes reutilizáveis da interface.
- `lib/`: Funções auxiliares e integrações externas.
- `types.ts`: Definições de tipos TypeScript utilizados no projeto.
- `next.config.ts`: Configurações personalizadas do Next.js.
- `eslint.config.mjs`: Configuração do ESLint para manter a qualidade do código.
- `postcss.config.mjs`: Configuração do PostCSS para processamento do Tailwind CSS.

## 🛠️ Como Executar o Projeto

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/geancanova/zaply-test.git
   cd zaply-test
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   # ou
   yarn install
   # ou
   pnpm install
   # ou
   bun install
   ```

3. **Configure variáveis de ambiente:**

   Crie um arquivo `.env.local` na raiz do projeto com as seguintes variáveis:

   ```
   NEXT_PUBLIC_SUPABASE_URL=https://<sua-instancia>.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=<sua-chave-anon>
   ```

4. **Inicie o servidor de desenvolvimento:**

   ```bash
   npm run dev
   ```

5. **Acesse a aplicação:**

   Vá para [http://localhost:3000](http://localhost:3000) no navegador.

## 🧠 Motivações das Escolhas Tecnológicas

- **Next.js**: Escolhido por sua capacidade de renderização híbrida, que melhora o SEO e a performance, além de facilitar o roteamento e a estruturação do projeto.
- **TypeScript**: Adotado para aumentar a robustez do código, facilitando a manutenção e reduzindo erros em tempo de desenvolvimento.
- **Tailwind CSS**: Utilizado para acelerar o processo de estilização e garantir um design responsivo e consistente com menos código CSS personalizado.
- **Supabase**: Fornece um backend completo com banco de dados PostgreSQL e API, o que facilitou o desenvolvimento ágil sem a necessidade de configurar um servidor backend tradicional.
- **Git**: Essencial para controle de versão, colaboração em equipe e rastreamento de alterações no projeto.
- **Vercel**: Permitiu o deploy contínuo, com integração fácil ao GitHub e otimizações automáticas para aplicações Next.js.
- **ESLint e PostCSS**: Implementados para manter a qualidade e consistência do código, além de otimizar os estilos para melhor performance.
