# CEI.BARRA

Site institucional da CEI Barra — Centro Evangelístico Internacional.

A interface foi redesenhada com uma direção mais editorial e contemporânea: tipografia forte, composição assimétrica, fotos reais da comunidade, navegação objetiva e CTAs claros para visita, oração e canais oficiais.

## GitHub Pages

O projeto funciona em duas formas:

### GitHub Actions — recomendado

Em **Settings → Pages → Build and deployment**, selecione **GitHub Actions** como Source.

Ao fazer `push` na branch `main` ou `master`, o workflow `.github/workflows/deploy.yml` instala as dependências, executa `npm run build` e publica a pasta `dist/`.

### Deploy from a branch

Também existe uma página estática autocontida em `index.html` na raiz. Com **Deploy from a branch → main → /(root)**, ela funciona sem depender do build do Vite.

As imagens usadas pela página estática ficam diretamente em `images/`.

## Desenvolvimento

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```
