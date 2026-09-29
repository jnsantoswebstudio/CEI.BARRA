# CEI Barra

Site institucional da **CEI Barra — Centro Evangelístico Internacional**, desenvolvido com React, TypeScript, Tailwind CSS e Vinext.

## Requisitos

- Node.js 22.13+ (recomendado)
- npm 10+

## Instalação

```bash
npm install
```

## Desenvolvimento

```bash
npm run dev
```

O servidor local será iniciado pelo Vinext/Vite.

## Build

```bash
npm run build
```

## Verificação

```bash
npm run lint
npm run format
```

## Estrutura

- `app/` — páginas, layout e estilos globais
- `components/` — componentes de interface
- `hooks/` — hooks reutilizáveis
- `lib/` — utilitários
- `public/` — imagens, favicon e Open Graph
- `docs/` — capturas e material estratégico do projeto

## Publicação

O projeto está preparado para ser versionado no GitHub. O workflow em `.github/workflows/ci.yml` executa instalação, lint e build a cada push e pull request.

> O conteúdo e as informações institucionais da CEI Barra foram mantidos; a organização do repositório foi ajustada para facilitar manutenção e publicação.


## GitHub Pages

O projeto já está configurado para publicar automaticamente no GitHub Pages. O workflow em `.github/workflows/deploy.yml` gera o site e publica o conteúdo de `dist/client`.

### Importante

No GitHub, abra **Settings → Pages → Build and deployment → Source** e selecione **GitHub Actions**. Depois faça um novo push para `main` ou `master`.

O endereço esperado é `https://jnsantoswebstudio.github.io/CEI.BARRA/`.
