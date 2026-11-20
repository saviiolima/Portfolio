# Portfólio — Sávio Lima

Site pessoal com apresentação, trajetória e projetos. Publicado em <https://saviolima.vercel.app>.

## Stack

- React 19 + Vite 8 + TypeScript (modo estrito)
- React Router (rotas carregadas sob demanda)
- styled-components (paleta e tokens em `src/Styles/globalstyle.js`)
- react-icons
- Vercel (hospedagem e Web Analytics)

## Estrutura

```
src/
  Components/   Header, Footer, Logo, LoadingScreen, Skills
  Pages/        Inicio, Sobre, Projetos, NaoEncontrada (404)
  data/         projects.ts (lista de projetos e tipos, exibida em /Projetos)
  Routes/       rotas e tela de boot
  Styles/       estilos globais
marca/          símbolo em SVG (fundo claro e escuro) e ícone de app
public/         favicons (svg, png, ico), apple-touch-icon e imagem de pré-visualização (og-image.png)
```

## Como rodar

```bash
npm install       # Node 20.19+ ou 22.12+ (exigência do Vite 8)
npm run dev      # servidor de desenvolvimento
npm run typecheck # confere os tipos com o TypeScript
npm run lint     # ESLint (flat config em eslint.config.js)
npm run build    # typecheck + build de produção em dist/
npm run preview  # serve o build localmente
```

## Adicionando um projeto

Edite `src/data/projects.ts`. O tipo `Project` aponta campos errados ou faltando ao rodar `npm run typecheck`. Campos opcionais controlam os botões do card:

- `liveDemo`: mostra o botão "Acessar".
- `github`: mostra o botão "Código".
- `isPrivate: true`: troca os botões por "Ver Arquitetura & Detalhes" (modal com `highlights`), usando `privacyNote` no selo do card e `modalBadge` no modal.

O `vercel.json` redireciona todas as rotas para `index.html`, necessário para o roteamento no cliente.
