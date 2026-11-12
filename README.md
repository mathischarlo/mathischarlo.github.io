# Portfolio de Mathis Charlo

Site portfolio statique (Astro 7, sans framework UI), publié sur GitHub Pages à l'adresse
**https://mathischarlo.github.io/**.

- Accueil : hero, chiffres clés, grille de projets filtrable, compétences, parcours, contact.
- Une page par projet (`/projects/<slug>/`), générée à partir d'un fichier Markdown.
- Thème sombre unique, polices auto-hébergées, aucun JavaScript bloquant. Le JS ne sert qu'au filtre, à la lightbox et au menu mobile ; le site reste lisible sans lui.
- Lighthouse (build local) : 97 à 99 en performance, 100 en accessibilité, bonnes pratiques et SEO.

## Lancer le site en local

Prérequis : Node.js 22 LTS (22.23.4 minimum, exigé par Astro 7).

```bash
npm install
npm run dev        # serveur de dev sur http://localhost:4321
npm run build      # génère le site statique dans dist/
npm run preview    # sert dist/ pour vérifier le build
```

## Arborescence

```
src/
  content.config.ts         schéma Zod des projets (frontmatter validé au build)
  content/projects/         un fichier .md par projet (+ _template.md, ignoré)
  assets/projects/<slug>/   images de chaque projet (optimisées au build en AVIF/WebP)
  assets/profile.jpg        (optionnel) photo de profil, affichée dans Contact
  components/               ProjectCard, StatCard, Figure, Gallery, Lightbox, Tag,
                            SectionHeading, Timeline, BarChart, Badge, Header, Footer
  layouts/BaseLayout.astro  balises SEO / Open Graph, polices, CSS global
  pages/                    index, projects/[slug], 404
  styles/                   tokens.css (couleurs, typo, espacements), base.css, components.css
  lib/                      url() (gestion de `base`), infos du site, plugins Markdown
public/                     favicon.svg, og.png, robots.txt, cv/Mathis-Charlo-CV.pdf
.github/workflows/deploy.yml
```

## Ajouter un nouveau projet

1. **Copier le modèle** : dupliquer `src/content/projects/_template.md` et le renommer, par exemple `drone-propeller.md`. Le nom de fichier ne doit pas commencer par `_`, sinon il est ignoré.
2. **Ajouter les images** dans un nouveau dossier `src/assets/projects/drone-propeller/`. Formats acceptés : PNG, JPG, WebP, SVG. Pas besoin de les redimensionner, Astro s'en charge.
3. **Remplir le frontmatter** :
   - `slug` : identique au nom du fichier, en minuscules avec des tirets. C'est l'URL de la page.
   - `category` : une des quatre valeurs `CFD`, `Structures & Materials`, `Space`, `Industry`.
   - `order` : position dans la grille (1 = en premier). Les liens Précédent / Suivant suivent cet ordre.
   - `cover` / `coverAlt` : vignette et texte alternatif. Mettre `coverIsPhoto: true` pour une photo, qui remplit alors le cadre. Une figure de simulation est toujours affichée en entier, sans recadrage.
   - `stats` : de 0 à 4 cartes « At a glance » (`value` + `label`).
   - `gallery` : figures cliquables, chacune avec `src`, `alt` (description précise) et `caption`.
   - `charts` (optionnel) : graphique en barres horizontales, avec une ou deux séries.
   - `status: ongoing` affiche un badge « Ongoing » ; `confidential: true` affiche « Details confidential ».
4. **Écrire le texte** sous le frontmatter, avec les sections `## Context & goal`, `## Method`, `## Results` et `## Key takeaway`. Les tableaux Markdown deviennent des tableaux responsives (défilement horizontal sur mobile).
5. Lancer `npm run dev`. Si un champ manque ou est mal typé, le build affiche une erreur explicite (schéma Zod).

Les commentaires `<!-- ... -->` dans le Markdown n'apparaissent pas dans le HTML publié : tu peux y laisser des notes.

> Si un projet a besoin de l'astuce `<div class="method-grid">` (cartes de méthodes), regarde `thales-pcb-composites.md`.

## Déployer sur GitHub Pages

Le site est configuré pour un **site utilisateur**, c'est-à-dire un repo nommé `mathischarlo.github.io`, servi à la racine.

1. Créer sur GitHub un repo **public** nommé `mathischarlo.github.io`, vide, sans README.
2. Pousser le code (commandes ci-dessous).
3. Dans le repo : **Settings → Pages → Build and deployment → Source : « GitHub Actions »**.
4. Chaque push sur `main` lance `.github/workflows/deploy.yml` (`withastro/action` puis `actions/deploy-pages`). Le site est en ligne au bout de 1 à 2 minutes.

```bash
git remote add origin https://github.com/mathischarlo/mathischarlo.github.io.git
git push -u origin main
```

**Pour un repo de projet** (par exemple `portfolio`, servi sur `https://mathischarlo.github.io/portfolio/`) :

- dans `astro.config.mjs`, remplacer `base: '/'` par `base: '/portfolio'` ;
- dans `public/robots.txt`, mettre l'URL du sitemap à jour (`https://mathischarlo.github.io/portfolio/sitemap-index.xml`) ;
- tous les liens internes passent par `url()` (`src/lib/url.ts`) et s'adaptent tout seuls.

## Modifier les infos générales

- E-mail, LinkedIn, chemin du CV : `src/lib/url.ts` (objet `SITE`).
- Chiffres clés, compétences, parcours : en haut de `src/pages/index.astro`.
- Couleurs et typographie : `src/styles/tokens.css`. Les ratios de contraste mesurés sont notés en commentaire.
- CV : remplacer `public/cv/Mathis-Charlo-CV.pdf` en gardant le même nom.
- Photo : déposer `src/assets/profile.jpg` (format carré, au moins 300 px). Elle apparaît automatiquement dans la section Contact.
- Image de partage (Open Graph) : `public/og.png` (1200 × 630). Les pages projet utilisent automatiquement leur vignette.

## TODO restants pour toi

Ces TODO sont des commentaires dans les fichiers ; aucun n'est visible sur le site.

| Fichier | À faire |
| --- | --- |
| `src/assets/profile.jpg` | Ajouter ta photo pro (je ne peux pas récupérer celle de LinkedIn). |
| `renault-press-monitoring.md` | Ajouter le fichier officiel du logo Renault Group dans `src/assets/projects/renault-press-monitoring/`, puis décommenter `logo` et `logoAlt`. |
| `uhf-satellite-link.md` | Bilan de liaison (tableau en dB, marge), 3 ou 4 chiffres clés, une figure MATLAB, hypothèses (orbite, antennes, fréquence), taille de l'équipe. |
| `thales-pcb-composites.md` | Taille de l'équipe ; premiers résultats TGA/DSC et images de microscopie, quand Thales Alenia Space les autorise. |
| `s355-tensile-fracture.md` | Période réelle et taille de l'équipe. |
| `cylinder-cfd-validation.md`, `composite-plate-modal.md`, `honeycomb-fracture-toughness.md` | Période réelle (le site affiche « ESILV coursework » en attendant). |
