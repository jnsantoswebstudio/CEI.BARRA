# CEI Barra — site institucional + área administrativa

Projeto estático React + Vite preparado para GitHub Pages.

## Site
A página inicial usa as fotos reais da CEI Barra, com uma arquitetura mais próxima de um site institucional de igreja: apresentação, programação, recursos, ministérios, eventos, mídia, oração e localização.

## Área administrativa
Abra `admin.html` no mesmo endereço publicado pelo GitHub Pages.

Acesso de demonstração:
- usuário: `admin`
- senha: `cei2026`

O painel permite editar textos da Home, horários, eventos e visualizar pedidos de oração. Os dados ficam no `localStorage` do navegador. Isso é adequado para prototipação/uso local, mas **não substitui uma autenticação e banco reais** para vários administradores.

## GitHub Pages
1. Envie o conteúdo deste projeto para a raiz do repositório.
2. Em Settings → Pages, selecione GitHub Actions (recomendado) ou a raiz do branch.
3. O site usa `base: './'` para funcionar tanto em domínio próprio quanto em `/CEI.BARRA/`.

## Desenvolvimento
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```
