# Publicação no GitHub Pages

## 1. Repositório
Suba **o conteúdo deste projeto diretamente na raiz** do repositório `CEI.BARRA`.

## 2. GitHub Pages
Em `Settings → Pages`, use `GitHub Actions` como fonte. O workflow em `.github/workflows/deploy.yml` executa `npm ci`, `npm run build` e publica `dist`.

## 3. Endereços
Site público:
`https://SEU-USUARIO.github.io/CEI.BARRA/`

Área administrativa:
`https://SEU-USUARIO.github.io/CEI.BARRA/admin.html`

## 4. Área administrativa
Acesso de demonstração:
- Usuário: `admin`
- Senha: `cei2026`

O painel é client-side e salva dados no `localStorage` deste navegador. Para uma administração real por várias pessoas, conecte o painel a Supabase/Firebase/WordPress ou outro backend com autenticação.
