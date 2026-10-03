# Portfólio — Sávio Lima

Site pessoal com apresentação, trajetória e projetos. Publicado em <https://saviolima.vercel.app>.

## Stack

- React 18 + Vite
- React Router (rotas carregadas sob demanda)
- styled-components
- react-icons
- Vercel (hospedagem e Web Analytics)

## Estrutura

```
src/
  Components/   Header, Footer, LoadingScreen, Benchmark
  Pages/        Inicio, Sobre, Projetos
  data/         projects.js (lista de projetos exibida em /Projetos)
  Routes/       rotas e tela de boot
  Styles/       estilos globais
public/         favicon e imagem de pré-visualização (og-image.png)
```

## Como rodar

```bash
npm install
npm run dev      # servidor de desenvolvimento
npm run lint     # ESLint
npm run build    # build de produção em dist/
npm run preview  # serve o build localmente
```

## Adicionando um projeto

Edite `src/data/projects.js`. Campos opcionais controlam os botões do card:

- `liveDemo`: mostra o botão "Acessar".
- `github`: mostra o botão "Código".
- `isPrivate: true`: troca os botões por "Ver Arquitetura & Detalhes" (modal com `highlights`), usando `privacyNote` no selo do card e `modalBadge` no modal.

O `vercel.json` redireciona todas as rotas para `index.html`, necessário para o roteamento no cliente.
