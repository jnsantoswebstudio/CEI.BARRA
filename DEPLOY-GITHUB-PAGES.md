# Publicação no GitHub Pages

1. Envie o conteúdo desta pasta para a raiz do repositório `CEI.BARRA`.
2. Garanta que `index.html` e `images/` apareçam diretamente na raiz.
3. Em **Settings → Pages**, use **GitHub Actions** para a versão React/Vite.
4. Ao fazer push na `main`, o workflow `.github/workflows/deploy.yml` cria e publica `dist/`.
5. O `index.html` da raiz também pode ser usado em **Deploy from a branch / root**, caso prefira hospedagem estática direta.

Não coloque o ZIP dentro do repositório.
