# Deploy do CEI.BARRA no GitHub Pages

## Opção recomendada: GitHub Actions

No GitHub, abra:

**Settings → Pages → Build and deployment → Source → GitHub Actions**

Depois faça `push` na branch `main` ou `master`.

O workflow faz o build com Vite e publica `dist/` usando o GitHub Pages Actions.

## Opção alternativa: raiz do repositório

O arquivo `index.html` da raiz é uma versão estática completa do site e não depende de React para renderizar.

Nesse caso use:

- Branch: `main`
- Folder: `/ (root)`

As imagens ficam em `images/` na raiz para evitar os erros anteriores de caminho no GitHub Pages.

## Imagens no React/Vite

O React usa `import.meta.env.BASE_URL` para montar os caminhos das imagens. O Vite está configurado com `base: './'`, deixando os assets relativos e compatíveis com o endereço do projeto no GitHub Pages.
