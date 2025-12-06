# Instrucciones para Agregar Logos de Tecnologías

Para agregar los logos de las tecnologías, debes reemplazar los placeholders en el archivo `/lib/constants.ts`.

## Pasos:

1. **Encuentra URLs de logos** en sitios como:
   - [Simple Icons](https://simpleicons.org/) - SVGs oficiales de marcas
   - [CDN de logos](https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/)
   - Sube tus propias imágenes y obtén URLs

2. **Reemplaza los placeholders** en `/lib/constants.ts`:

```typescript
// ANTES:
iconUrl: 'YOUR_REACT_LOGO_URL',

// DESPUÉS (ejemplo):
iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/react.svg',
```

## Tecnologías a configurar:

1. **React.js** - `YOUR_REACT_LOGO_URL`
2. **Next.js** - `YOUR_NEXTJS_LOGO_URL`
3. **TypeScript** - `YOUR_TYPESCRIPT_LOGO_URL`
4. **Tailwind CSS** - `YOUR_TAILWIND_LOGO_URL`
5. **Node.js** - `YOUR_NODEJS_LOGO_URL`
6. **NestJS** - `YOUR_NESTJS_LOGO_URL`
7. **PostgreSQL** - `YOUR_POSTGRESQL_LOGO_URL`
8. **MongoDB** - `YOUR_MONGODB_LOGO_URL`
9. **GraphQL** - `YOUR_GRAPHQL_LOGO_URL`
10. **Git** - `YOUR_GIT_LOGO_URL`
11. **Vercel** - `YOUR_VERCEL_LOGO_URL`
12. **Figma** - `YOUR_FIGMA_LOGO_URL`
13. **Framer Motion** - `YOUR_FRAMER_LOGO_URL`

## Ejemplo de URLs sugeridas:

```typescript
// React
iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/react.svg',

// Next.js
iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nextdotjs.svg',

// TypeScript
iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/typescript.svg',

// Tailwind CSS
iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/tailwindcss.svg',

// Node.js
iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nodedotjs.svg',

// NestJS
iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nestjs.svg',

// PostgreSQL
iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/postgresql.svg',

// MongoDB
iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mongodb.svg',

// GraphQL
iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/graphql.svg',

// Git
iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/git.svg',

// Vercel
iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/vercel.svg',

// Figma
iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/figma.svg',

// Framer
iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/framer.svg',
```

## Notas:

- Los emojis seguirán mostrándose como fallback si el logo no carga
- Los logos deben ser preferiblemente SVG para mejor calidad
- Las imágenes se mostrarán en 40x40px en las cards
- Si usas Simple Icons CDN, los SVGs son monocromáticos (puedes aplicar color con CSS si es necesario)