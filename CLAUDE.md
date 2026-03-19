# CLAUDE.md — MW Blog

## Overview
Blog privé statique (Astro) déployé sur GitHub Pages avec encryption client-side (StatiCrypt).
Mot de passe : `tss93!##123`

## Publication d'un article

### 1. Créer le fichier markdown

Chemin : `src/content/{category}/{YYYY-MM-DD}-{slug}.md`

Categories valides : `family`, `fatima`, `yassine`, `soufiane`, `youssouf`, `salma`, `veille`, `reputation`, `business`, `retrospectives`, `review-strategy`

### 2. Frontmatter obligatoire

```yaml
---
title: "Titre de l'article"
date: YYYY-MM-DD
description: "Description courte (1-2 phrases)"
category: {category}
tags: ["tag1", "tag2"]
image: "https://images.unsplash.com/photo-XXX?w=680&h=400&fit=crop"
---
```

### 3. Contenu

- Écrire en **markdown** avec des sections `##` et `###`
- Utiliser des **listes à puces** et **citations** (`>`)
- Inclure des **données chiffrées** quand pertinent
- Pour les portfolios : tableaux markdown, métriques, couleurs via HTML inline
- Pour les analyses : structurer en sections claires (contexte, analyse, conclusion)
- Pour la famille : ton chaleureux mais structuré

### 4. Images

Utiliser Unsplash pour les images d'illustration :
- Famille : `https://images.unsplash.com/photo-1511895426328-dc8714191300?w=680&h=400&fit=crop`
- Business : `https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=680&h=400&fit=crop`
- Veille/Tech : `https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=680&h=400&fit=crop`
- Trading : `https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=680&h=400&fit=crop`
- Rechercher sur Unsplash pour des images plus spécifiques au sujet

### 5. Git push

Après création de l'article :
```bash
cd /home/ci/projects/blog
git add src/content/{category}/{fichier}.md
git commit -m "feat({category}): {titre court}"
git push origin main
```

GitHub Actions se charge du build + encryption + deploy automatiquement.

### 6. Qualité attendue

Chaque article doit :
- Avoir un **titre accrocheur** et une description claire
- Être **structuré** avec des sections bien définies
- Contenir des **données concrètes** (chiffres, dates, noms)
- Inclure des **recommandations actionnables** quand pertinent
- Utiliser le **format markdown enrichi** (blockquotes, listes, gras, code)
- Avoir au minimum **300 mots** de contenu substantif
- Inclure une **image Unsplash** pertinente dans le frontmatter

## Architecture

```
src/content/
├── family/          # Plans weekend, briefings, coordination
├── fatima/          # Suivi personnel
├── yassine/         # Études, orientation
├── soufiane/        # BAC, Parcoursup
├── youssouf/        # Collège, sport
├── salma/           # École, activités
├── veille/          # IA, fintech, tendances
├── reputation/      # SEO, monitoring, e-réputation
├── business/        # Veille concurrentielle, prospection
├── retrospectives/  # Bilans scanner trading
└── review-strategy/ # Revues portfolios systematic
```

## Build

```bash
npm run build  # Astro build + StatiCrypt encryption
```

## Ne pas modifier

- `astro.config.mjs`, `src/content.config.ts` — configuration
- `src/layouts/`, `src/components/` — design system
- `scripts/encrypt.mjs` — encryption pipeline
- `.github/workflows/deploy.yml` — CI/CD
