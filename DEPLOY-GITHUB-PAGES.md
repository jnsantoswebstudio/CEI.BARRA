# Deploy do CEI Barra no GitHub Pages

## Erro anterior das imagens

O projeto tinha as imagens somente em `public/images/`, mas o GitHub Pages estava sendo executado pela raiz do repositório. Nesse modo, `public/` não vira automaticamente uma pasta pública, então `./images/...` retornava 404.

Nesta versão existem duas cópias das imagens:

- `images/` — usada diretamente quando o Pages publica a raiz do repositório.
- `public/images/` — copiada pelo Vite para `dist/images/` quando o Pages usa GitHub Actions.

O `vite.config.ts` usa `base: './'`, evitando caminhos absolutos presos ao nome do repositório.
