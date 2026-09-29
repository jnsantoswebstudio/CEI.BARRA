# CEI Barra

Site institucional da **CEI Barra — Centro Evangelístico Internacional**, preparado para publicação no GitHub Pages.

## O problema que foi corrigido

O GitHub estava mostrando esta tela com **"CEI Barra" + instalação + npm install** porque o Pages estava tratando o `README.md` como página do site.

Este pacote foi reorganizado para evitar isso:

- `index.html` agora existe na raiz do repositório.
- Há uma versão estática de fallback no próprio `index.html`, então o site aparece mesmo quando o Pages estiver configurado temporariamente como **Deploy from a branch**.
- A versão React continua em `src/` e é construída pelo Vite.
- O workflow `.github/workflows/deploy.yml` publica automaticamente a pasta `dist/` no GitHub Pages.
- `.nojekyll` foi incluído para evitar processamento desnecessário do Jekyll.

## Configuração recomendada do GitHub Pages

No repositório:

**Settings → Pages → Build and deployment → Source → GitHub Actions**

Depois faça um novo push na branch `main`.

O workflow é iniciado automaticamente e publica o build do site.

### Alternativa

Caso o Pages ainda esteja em **Deploy from a branch**, o `index.html` da raiz será usado em vez do `README.md`. Essa versão é o fallback estático do site; para usar o build React completo, prefira **GitHub Actions**.

## Rodar localmente

```bash
npm ci
npm run dev
```

## Build

```bash
npm run build
```

A pasta gerada é `dist/`.

## Conteúdo

As imagens e informações institucionais fornecidas no projeto foram mantidas. Os avisos que indicam dados ainda a confirmar permanecem sinalizados na interface.
