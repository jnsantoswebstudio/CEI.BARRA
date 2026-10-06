# CEI Barra

Site institucional da CEI Barra — Centro Evangelístico Internacional, em Barra de São João/RJ.

## Direção visual

A nova interface foi redesenhada para parecer mais natural e próxima de um site de igreja: navegação institucional clara, fotografia real, seções de comunidade, programação, mídia, pedido de oração e localização. Evita aparência de template ou de página de lançamento comercial.

## Imagens

As fotos reais ficam em `images/` para o site estático e em `public/images/` para o build Vite. Isso evita os problemas anteriores de caminhos quebrados no GitHub Pages.

## Desenvolvimento

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## GitHub Pages

O projeto mantém `base: './'` no Vite e workflow em `.github/workflows/deploy.yml` para publicação por GitHub Actions.

Também existe um `index.html` funcional na raiz para hospedagem direta pelo GitHub Pages, com `images/` na raiz.
