# Taller de Diseño en Ingeniería · Recursos

Single-page app con recursos, herramientas y FAQ para los estudiantes del Taller de
Diseño en Ingeniería (UAI, Sección 2, Semestre 2026/1).

## Desarrollo local

```bash
npm install
npm run dev
```

## Editar contenido (sin tocar componentes)

Todo el contenido vive en `src/data/`:

| Archivo | Contenido |
| --- | --- |
| `resources.json` | Recursos y materiales (cards de la sección Recursos) |
| `tools.json` | Catálogo de herramientas |
| `faq.json` | Preguntas frecuentes agrupadas por tema |
| `tips.json` | Callouts de tips del ayudante |
| `flow.json` | Las 8 etapas del flujo del semestre |
| `articles/*.md` | Contenido de los artículos internos (markdown) |

Para agregar un recurso, copia un objeto existente en `resources.json` y cambia sus
campos. Valores válidos:

- `type`: `articulo` · `guia` · `video` · `link` · `descarga`
- `level`: `basico` · `intermedio` · `avanzado`
- `category`: uno de los ids en `categories` del mismo archivo

### Artículos internos

Los recursos con `"type": "articulo"` no llevan `url`; llevan `"slug"` y abren una
página interna en `/#/articulo/<slug>`. El contenido vive en
`src/data/articles/<slug>.md` (markdown estándar; los bloques de código con
` ```cpp ` o ` ```javascript ` se muestran con syntax highlighting). Para agregar un
artículo nuevo: crea el `.md` en esa carpeta y agrega el recurso en `resources.json`
con el mismo slug.

## Deploy a GitHub Pages

```bash
npm run deploy
```

Esto compila y publica `dist/` en la rama `gh-pages`. En GitHub, activa Pages con
Settings → Pages → Source: `gh-pages`. Los assets usan rutas relativas (`base: './'`),
así que funciona con cualquier nombre de repo.

Antes del primer deploy, edita `REPO_URL` en `src/components/Footer.jsx` con el link
real del repositorio.
