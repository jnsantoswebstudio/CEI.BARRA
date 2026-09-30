# CEI Barra

Site institucional da CEI Barra — Centro Evangelístico Internacional.

## GitHub Pages

Este projeto foi preparado para funcionar tanto com **GitHub Actions** quanto com **Deploy from a branch**. As imagens existem em `images/` na raiz e também em `public/images/`, e os caminhos usam URLs relativas (`./images/...`) para funcionar no endereço do projeto no GitHub Pages.

### Opção recomendada: GitHub Actions

No GitHub, abra **Settings → Pages → Build and deployment → Source → GitHub Actions**.

Depois faça `push` na branch `main` ou `master`. O workflow `.github/workflows/deploy.yml` faz o build e publica `dist/`.

### Opção alternativa: Deploy from a branch

Selecione a branch `main` e a pasta `/ (root)`. A página `index.html` da raiz já é autocontida e as imagens estão em `images/`, portanto não depende do diretório `public/`.

## Desenvolvimento

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```
