# Portfólio — Sávio Lima

Site pessoal de página única: apresentação, sobre, projetos e contato em uma rolagem só. Publicado em <https://saviolima.vercel.app>.

## Stack

- React 19 + Vite 8 + TypeScript (modo estrito)
- React Router (menu por âncoras, redirecionamentos e página 404)
- styled-components (paleta e tokens em `src/Styles/globalstyle.ts`)
- react-icons
- Vercel (hospedagem e Web Analytics)

## Estrutura

```
src/
  Components/   Header, Footer, Logo, LoadingScreen, Skills
  Sections/     Inicio, Sobre, Projetos, Contato (seções da página única, na ordem em que aparecem)
  Pages/        Home (junta as seções) e NaoEncontrada (404)
  hooks/        useActiveSection (marca no menu a seção que está na tela)
  data/         projects.ts (projetos e tipos, exibidos na seção Projetos)
                contact.ts (e-mail, LinkedIn e GitHub usados nos botões e no rodapé)
  Routes/       rotas, rolagem até a âncora e tela de boot
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

## Navegação

Cada seção tem um `id` (`inicio`, `sobre`, `projetos`, `contato`) e o menu leva para `/#id`. Os endereços antigos `/Sobre` e `/Projetos` redirecionam para a seção correspondente.

O `vercel.json` redireciona todas as rotas para `index.html`, necessário para o roteamento no cliente.
