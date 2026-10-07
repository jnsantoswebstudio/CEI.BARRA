# Publicação no GitHub Pages

Esta versão é **estática** para evitar tela branca e problemas de build no GitHub Pages.

## Estrutura esperada na raiz

- `index.html`
- `admin.html`
- `site.css`
- `site.js`
- `admin.css`
- `admin.js`
- `images/`
- `.nojekyll`

## GitHub Pages

Em **Settings → Pages**, use **Deploy from a branch**, branch `main`, pasta `/ (root)`.

A área administrativa fica em `/admin.html`.

### Limitação importante

O painel administrativo desta versão usa `localStorage` no navegador. Isso é adequado como painel de demonstração/edição local, mas **não é uma solução multiusuário nem uma autenticação segura para produção**. O backup JSON permite transportar as alterações entre computadores.
