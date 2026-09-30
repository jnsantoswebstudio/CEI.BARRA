# CEI.BARRA

Site institucional da CEI Barra — Centro Evangelístico Internacional.

## GitHub Pages

Este projeto está preparado para o repositório **CEI.BARRA** no GitHub Pages.

O Vite usa a base `/CEI.BARRA/` e as imagens públicas são montadas usando essa base, para que funcionem no endereço:

`https://jnsantoswebstudio.github.io/CEI.BARRA/`

## Instalação local

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Publicação

O arquivo `.github/workflows/deploy.yml` faz o build e publica automaticamente no GitHub Pages a cada push na `main` ou `master`.

No GitHub, deixe **Settings → Pages → Build and deployment → Source** como **GitHub Actions**.
