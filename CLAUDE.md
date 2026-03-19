# CLAUDE.md — MW Blog

## Overview
Blog privé statique (Astro) déployé sur GitHub Pages avec encryption client-side (StatiCrypt).
Mot de passe : `tss!##123`

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

### 3. Qualité de contenu — Exigences institutionnelles

Chaque article doit ressembler à un **rapport institutionnel professionnel**, pas un simple blog post. Voici les exigences obligatoires :

#### 📊 ECharts — Graphiques interactifs (OBLIGATOIRE quand des données sont disponibles)

Chaque article DOIT inclure **au moins 1 graphique interactif ECharts** lorsque des données chiffrées sont disponibles (performances, évolutions, comparaisons, distributions).

Les charts utilisent le CDN ECharts (déjà chargé dans le layout). Format :

```markdown
## 📊 Évolution du portefeuille

<div class="echarts-container" id="chart-perf" style="width:100%;height:400px;"></div>

<script>
var chart = echarts.init(document.getElementById('chart-perf'));
chart.setOption({
  tooltip: { trigger: 'axis' },
  xAxis: { type: 'category', data: ['Jan', 'Fév', 'Mar'] },
  yAxis: { type: 'value', name: '%' },
  series: [{ data: [12, 19, 15], type: 'line', smooth: true, areaStyle: {} }]
});
window.addEventListener('resize', () => chart.resize());
</script>
```

Règles ECharts :
- Chaque chart a un `id` unique : `chart-{n}` ou `chart-{descriptif}`
- Container : `<div class="echarts-container" id="chart-{id}" style="width:100%;height:400px;"></div>`
- Ne PAS inclure le `<script src="...echarts.min.js">` dans l'article (déjà dans le layout)
- Toujours ajouter `window.addEventListener('resize', () => chart.resize());`
- Types recommandés : `line` (évolutions), `bar` (comparaisons), `pie` (distributions), `radar` (scores multi-axes), `candlestick` (prix)
- Thème dark-friendly : utiliser des couleurs vives (`#22c55e`, `#ef4444`, `#3b82f6`, `#f59e0b`, `#8b5cf6`)

#### 📋 Tableaux markdown

Utiliser des **tableaux markdown** pour toute donnée structurée : métriques, comparaisons, timelines, scores.

```markdown
| Métrique | Valeur | Δ vs semaine |
|----------|--------|:------------:|
| CAGR | 116% | ▲ +2.1% |
| Sharpe | 2.44 | ▼ -0.05 |
| MaxDD | -36.2% | — |
```

#### 🎨 Emojis — Marqueurs visuels de section

Utiliser des emojis comme marqueurs de section pour ajouter du rythme visuel :
- 📊 Données, métriques, graphiques
- 🎯 Objectifs, focus, cibles
- ⚠️ Warnings, risques, alertes
- ✅ Validé, complété, confirmé
- 🔍 Analyse, investigation
- 💡 Insights, points clés, recommandations
- 🚀 Opportunités, croissance, lancement
- 📈 Tendance haussière
- 📉 Tendance baissière
- 🏆 Top performers, succès
- 🔴🟡🟢 Feux de signalisation (risque/neutre/ok)
- 📅 Dates, calendrier, échéances

#### 🖼️ Images

- **Hero image** : OBLIGATOIRE dans le frontmatter (`image: "..."`)
- Utiliser des images **Unsplash** pertinentes au sujet
- Inclure aussi des **images inline** dans le contenu quand pertinent :
  ```markdown
  ![Description](https://images.unsplash.com/photo-XXX?w=800&fit=crop)
  ```
- Banque d'images par catégorie :
  - Famille : `https://images.unsplash.com/photo-1511895426328-dc8714191300?w=680&h=400&fit=crop`
  - Business : `https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=680&h=400&fit=crop`
  - Veille/Tech : `https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=680&h=400&fit=crop`
  - Trading : `https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=680&h=400&fit=crop`
  - Rechercher sur Unsplash pour des images plus spécifiques au sujet

#### 🔗 Liens sources

Quand tu cites des données, news, outils ou sources externes, **inclure des liens cliquables** :
```markdown
Selon [Bloomberg](https://bloomberg.com/...), le marché...
Source : [Yahoo Finance](https://finance.yahoo.com/quote/AAPL)
```
Toujours attribuer les sources de données.

#### 🧩 HTML inline enrichi

Le markdown supporte le HTML inline. Utiliser pour :

**Sections pliables** :
```html
<details>
<summary>🔍 Détails de l'analyse technique</summary>

Contenu détaillé ici...

</details>
```

**Texte coloré** pour les variations :
```html
<span style="color:#22c55e">▲ +5.2%</span>  <!-- hausse en vert -->
<span style="color:#ef4444">▼ -3.1%</span>  <!-- baisse en rouge -->
<span style="color:#f59e0b">● Neutre</span> <!-- neutre en jaune -->
```

**Conteneurs ECharts** (voir section dédiée ci-dessus).

#### 💬 Blockquotes pour points clés

Utiliser des blockquotes pour les takeaways importants :
```markdown
> 💡 **Point clé** : Le portefeuille US HighVol surperforme le benchmark de 23% YTD grâce à la sélectivité du screener en régime risk-off.

> ⚠️ **Alerte** : Le feed Binance est mort depuis le 1er mars. Toutes les positions crypto affichent un prix à 0.
```

#### 📏 Longueur minimale

- **Minimum 500 mots** de contenu substantif par article
- Structurer avec des sections `##` et `###`
- Inclure des **données concrètes** (chiffres, dates, noms, pourcentages)
- Inclure des **recommandations actionnables** quand pertinent

### 4. Git push

Après création de l'article :
```bash
cd /home/ci/projects/blog
git add src/content/{category}/{fichier}.md
git commit -m "feat({category}): {titre court}"
git push origin main
```

GitHub Actions se charge du build + encryption + deploy automatiquement.

### 5. Checklist pré-publication

Avant de push, vérifier que l'article contient :
- [ ] Frontmatter complet (title, date, description, category, tags, image)
- [ ] Au moins 500 mots de contenu substantif
- [ ] Au moins 1 graphique ECharts (si données disponibles)
- [ ] Tableaux markdown pour les données structurées
- [ ] Emojis comme marqueurs de section
- [ ] Hero image Unsplash dans le frontmatter
- [ ] Liens sources pour les données citées
- [ ] Blockquotes pour les points clés
- [ ] Structure claire avec ## et ###

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
