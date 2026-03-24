---
title: "Veille YouTube Finance Francophone — Cartographie des Concurrents Trading Mars 2026"
date: 2026-03-24T09:00:00
description: "Analyse comparative de 12 chaînes YouTube finance et trading francophones actives en 2026 : formats, niches, engagement, et opportunités pour Market Watch."
category: veille
tags: ["youtube", "trading", "finance", "concurrence", "veille", "analyse-technique", "crypto"]
image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=680&h=400&fit=crop"
---

## 🎯 Objectif : Cartographier l'Écosystème YouTube Finance FR

Cette veille identifie les **12 chaînes YouTube francophones** les plus actives dans l'univers trading, bourse, analyse technique et finance personnelle — l'espace de compétition direct de [Market Watch](https://market-watch.xyz). L'objectif : identifier les opportunités de contenu inexploitées et les menaces émergentes.

---

## 📊 Tableau Comparatif des Chaînes Identifiées

| Chaîne | Handle | Niche principale | Vues récentes (top vidéo) | Format dominant | Statut |
|--------|--------|-----------------|--------------------------|-----------------|--------|
| Benjamin Deleuze | @BenjaminDeleuzeTrading | Trading A-Z / Scalping | 857K (formation débutants) | Longue durée + Shorts | ✅ Vérifié |
| Kasper | @KasperTrading | Scalping / Forex / TradingView | 485K (formation débutants) | Multi-format | — |
| Jeffrey Benson Forex | @JeffreyBenson | Forex discétionnaire | 149K (1 mois) | Cours structurés | ✅ Vérifié |
| Hasheur | @Hasheur | Crypto analyse & macro | 109K (2 mois) | Analyses longues | ✅ Vérifié |
| Thami Kabbaj | @thamikabbaj1 | Psychologie / Mindset | 163K (Shorts) | Shorts + Masterclass | ✅ Vérifié |
| UGK Trading (Faustin) | @ugktrading | Plateformes / Forex | 131K (Short) | Shorts viraux | — |
| DM Trading | @DMTrading-fr | Actions US + Analyse AT | ~364 vues récentes | Shorts + vidéos | — |
| YoungTraderWealth | @YoungTraderWealthFrance | Trading rentable / Prop firm | 34K (2 mois) | Formations | — |
| eToro France | @etorofrance877 | Macro / Podcast marchés | 14K (2 mois) | Podcast / interviews | — |
| Finary | @Finary | ETF / Patrimoine | 197K (livres invest.) | Éducation | — |
| Sylvain - Investissement facile | @sylvainInvestit | ETF passif / FIRE | 249K (règle 4%) | Éducation passive | — |
| Barnabé - Bourse | @barnabinvest | Fondamentaux économie | 123K (bases économie) | Cours structurés | — |

---

## 📈 Analyse de l'Activité par Segment

<div class="echarts-container" id="chart-activite" style="width:100%;height:420px;"></div>

<script>
var chartActivite = echarts.init(document.getElementById('chart-activite'));
chartActivite.setOption({
  title: { text: 'Vues top vidéo récente (en K)', left: 'center', textStyle: { color: '#e2e8f0', fontSize: 14 } },
  tooltip: { trigger: 'axis', formatter: function(params) { return params[0].name + '<br/>' + params[0].value + 'K vues'; } },
  grid: { left: '3%', right: '4%', bottom: '20%', containLabel: true },
  xAxis: {
    type: 'category',
    data: ['Benjamin\nDeleuze', 'Kasper', 'Jeffrey\nBenson', 'Sylvain\nInvest.', 'Thami\nKabbaj', 'Finary', 'Hasheur', 'UGK\nTrading', 'YoungTrader\nWealth', 'eToro\nFrance'],
    axisLabel: { rotate: 30, color: '#94a3b8', fontSize: 11 }
  },
  yAxis: { type: 'value', name: 'Vues (K)', axisLabel: { color: '#94a3b8' }, nameTextStyle: { color: '#94a3b8' } },
  series: [{
    data: [857, 485, 149, 249, 163, 197, 109, 131, 34, 14],
    type: 'bar',
    itemStyle: {
      color: function(params) {
        var colors = ['#3b82f6','#3b82f6','#22c55e','#f59e0b','#8b5cf6','#f59e0b','#ef4444','#22c55e','#94a3b8','#94a3b8'];
        return colors[params.dataIndex];
      }
    },
    label: { show: true, position: 'top', formatter: '{c}K', color: '#e2e8f0', fontSize: 10 }
  }]
});
window.addEventListener('resize', () => chartActivite.resize());
</script>

<div class="echarts-container" id="chart-repartition" style="width:100%;height:380px;"></div>

<script>
var chartRep = echarts.init(document.getElementById('chart-repartition'));
chartRep.setOption({
  title: { text: 'Répartition par niche', left: 'center', textStyle: { color: '#e2e8f0' } },
  tooltip: { trigger: 'item', formatter: '{b}: {d}%' },
  legend: { orient: 'vertical', right: '5%', top: 'center', textStyle: { color: '#94a3b8' } },
  series: [{
    type: 'pie',
    radius: ['40%', '70%'],
    center: ['40%', '55%'],
    data: [
      { value: 35, name: 'Trading discétionnaire\n(AT/Forex/Scalping)', itemStyle: { color: '#3b82f6' } },
      { value: 25, name: 'Finance personnelle\n& ETF passif', itemStyle: { color: '#22c55e' } },
      { value: 20, name: 'Crypto & macro', itemStyle: { color: '#f59e0b' } },
      { value: 12, name: 'Formation &\nMindset', itemStyle: { color: '#8b5cf6' } },
      { value: 8, name: 'Analyse institutionnelle\n& Podcast', itemStyle: { color: '#ef4444' } }
    ],
    emphasis: { itemStyle: { shadowBlur: 10, shadowOffsetX: 0, shadowColor: 'rgba(0,0,0,0.5)' } },
    label: { color: '#e2e8f0', fontSize: 11 }
  }]
});
window.addEventListener('resize', () => chartRep.resize());
</script>

---

## 🔍 Profils Détaillés des Concurrents Clés

### 🏆 1. Benjamin Deleuze — Le Leader Formation Trading

[**@BenjaminDeleuzeTrading**](https://www.youtube.com/@BenjaminDeleuzeTrading) est la chaîne dominante en volume sur les recherches "trading débutant France 2026". Vidéo phare : *"Apprendre Le TRADING de A à Z Pour les DÉBUTANTS en 2026"* — **857K vues**, format 1h en 4K, 18 chapitres structurés.

- **Format** : Longues formations + Shorts, MetaTrader 5 tutoriels, scalping
- **Monétisation** : Groupe privé payant (Pro Trading Mastery™)
- **Fréquence** : ~2 vidéos/mois format long, Shorts hebdomadaires
- **Niche** : Débutants → intermédiaires, accent pédagogie

> ⚠️ **Alerte concurrentielle** : Excellent SEO YouTube sur toutes les requêtes débutants 2026. Position dominante sur ce segment.

### 🥊 2. Kasper — Le Multi-Format Viral

[**@KasperTrading**](https://www.youtube.com/@KasperTrading) accumule les vues sur plusieurs formats : scalping, TradingView, order blocks, stratégies forex. Vues combinées sur les tops vidéos : >1,2M.

- **Format** : Mix Shorts viraux + tutoriels 30-50 min, bilingual (FR + EN)
- **Sujets récents** : Scalping 2026, TradingView débutants, Order Blocks, MetaTrader 5
- **Engagement** : Fort — groupe privé "live"
- **Point fort** : Capacité à créer du contenu viral en anglais ET français

> 💡 **Insight** : Kasper réussit à toucher audience française ET anglophone simultanément. Tactique de croissance accélérée.

### 🌍 3. Jeffrey Benson Forex — Le Spécialiste Forex Vérifié

[**@JeffreyBenson**](https://www.youtube.com/@JeffreyBenson) — Chaîne vérifiée, cours Forex complet 2026 avec **149K vues en 1 mois**, 24 chapitres, formation structurée. Propose du copy-trading via [firepipsfx.com](https://firepipsfx.com).

- **Format** : Formations longues structurées (50 min+)
- **Monétisation** : Formation payante + copy-trading
- **Tendance** : Croissance forte sur le segment Forex

### 🔮 4. Hasheur — La Référence Crypto FR

[**@Hasheur**](https://www.youtube.com/@Hasheur) est la chaîne crypto la plus sérieuse de l'écosystème francophone. Vidéo récente : *"This could cause cryptocurrencies to tip in the coming months"* — **109K vues en 2 mois**, avec grille de lecture crypto 2026.

- **Format** : Analyses macro-crypto longues, roadmaps, régulation MiCA
- **Niche** : Crypto institutionnel / bull-bear analysis
- **Point fort** : Analyse de qualité, audience engagée

### 📊 5. Sylvain & Finary — Le Segment ETF/Investissement Passif

[**Sylvain - l'investissement facile**](https://www.youtube.com/@sylvainInvestit) et [**Finary**](https://www.youtube.com/@Finary) dominent le segment investissement passif ETF. Contenu bilingual, accent FIRE, meilleurs ETF, règle des 4%.

- **Vues** : 249K (règle 4%), 197K (livres investissement)
- **Audience** : Millennials/GenZ, FIRE movement
- **Niche** : Pas de trading actif — investissement à long terme

---

## 🎯 Analyse Comparative vs Market Watch

### Ce que les concurrents font et Market Watch ne fait pas :

| Lacune identifiée | Qui le fait | Opportunité Market Watch |
|-------------------|-------------|--------------------------|
| **Contenu débutant 0-à-100** | Benjamin Deleuze, Kasper | Série "Trading de A à Z" avec accent systematic |
| **Shorts viraux** | Kasper, Thami, UGK | Clips de 30-60s tirés des analyses quotidiennes |
| **Podcast marchés FR** | eToro France | Podcast hebdo macro + interview invités |
| **ETF & investissement passif** | Sylvain, Finary | Guide ETF pour traders systematic MW |
| **Prop firm / Funded** | YoungTraderWealth | Contenu sur gestion du risque, backtesting |
| **Crypto francophone** | Hasheur | Analyse crypto + corrélation avec actions US |
| **TradingView tutoriels** | Kasper, Benjamin | Vidéos "comment utiliser notre screener" |

### Ce que Market Watch fait de différenciant :

✅ **Screeners automatisés avec scores composites** — aucun concurrent n'en parle
✅ **Portefeuilles systematiques trackés en live** — unique dans l'écosystème FR
✅ **Daily briefing + Weekly** — régularité professionnelle
✅ **Analyse de marché basée sur données** — pas de pur price action subjectif
✅ **Couverture multi-marchés** (US, JP, EU, Crypto) — plus large que la plupart

---

## 🚀 Recommandations Actionnables pour Market Watch

### Court terme (1-4 semaines)

**1. 🎬 Lancer une série Shorts**
Extraire les 3 meilleurs setups du scanner hebdomadaire en format 45s. Titre type : *"Top 3 signaux du scanner cette semaine 📊 #trading #screener"*

**2. 📹 Vidéo explicative "Comment fonctionne notre screener"**
Tutoriel 15-20 min sur l'utilisation du screener Market Watch. SEO fort sur "screener actions bourse france".

**3. 🎙️ Clip macro hebdomadaire**
Vidéo 5-10 min chaque lundi : *"Les marchés cette semaine — ce qu'il faut surveiller"*. Format podcast léger.

### Moyen terme (1-3 mois)

**4. 📊 Série "Systematic vs Discétionnaire"**
Débunking du trading discrétionnaire vs nos approches systematiques. Données de nos portfolios en preuve.

**5. 🤝 Collaboration avec une chaîne complémentaire**
Approcher eToro France ou Hasheur pour co-produire une analyse. Cross-audience.

**6. 📘 Série "Débutant systematic"**
Formation gratuite en 5 épisodes : "Investir en bourse sans regarder les graphiques toute la journée".

---

## ⚠️ Menaces Identifiées

> ⚠️ **Menace n°1** : Benjamin Deleuze + Kasper dominent massivement le SEO YouTube sur "trading 2026 France". Leur avance en subscribers rend difficile la compétition frontale sur ces mots-clés génériques.

> ⚠️ **Menace n°2** : Le segment "prop firm / funded trader" est en croissance explosive. YoungTraderWealth, Chris Dienda/Moneytalk s'y positionnent fortement. Market Watch n'a pas de contenu sur ce sujet.

> ⚠️ **Menace n°3** : Les chaînes bilingues (Kasper, Jeffrey Benson) élargissent leur audience anglophone. Risque de dilution de l'audience francophone vers ces contenus EN si MW reste 100% FR.

> 💡 **Opportunité non occupée** : **Zéro chaîne sérieuse** ne couvre le systematic/quant trading en français avec données réelles. C'est le positionnement différenciant naturel de Market Watch.

---

## 📅 Tendances Émergentes (Mars 2026)

- **Prop firms en vogue** : Le trading avec capital financé est la tendance n°1 dans les requêtes FR
- **Contenu bilingual** : Les créateurs FR passent de plus en plus à l'anglais pour scaler
- **Shorts comme entonnoir** : Toutes les grosses chaînes utilisent les Shorts comme acquisition
- **IA dans le trading** : Aucune chaîne FR ne couvre encore les screeners IA / trading algorithmique sérieusement → **créneau libre pour Market Watch**
- **Formation + communauté** : Le modèle dominant est "vidéo gratuite → groupe privé payant"

---

<details>
<summary>🔍 Méthodologie de veille</summary>

Cette analyse a été réalisée via :
- Recherches YouTube ciblées : "analyse technique bourse france trading 2026", "trading algorithmique youtube france", "investissement bourse finance personnelle"
- Filtres : vidéos les plus vues, récentes (< 3 mois), francophones
- Analyse manuelle des 30 premiers résultats par requête
- Croisement des handles et vérification des statistiques visibles

La veille sera mise à jour mensuellement.

</details>

---

**Sources :**
- [YouTube Recherche — Analyse technique bourse France 2026](https://www.youtube.com/results?search_query=analyse+technique+bourse+france+trading+2026)
- [Benjamin Deleuze Trading — Chaîne YouTube](https://www.youtube.com/@BenjaminDeleuzeTrading)
- [Kasper Trading — Chaîne YouTube](https://www.youtube.com/@KasperTrading)
- [Jeffrey Benson Forex — Chaîne YouTube](https://www.youtube.com/@JeffreyBenson)
- [Hasheur — Chaîne YouTube Crypto](https://www.youtube.com/@Hasheur)
- [Sylvain - l'investissement facile](https://www.youtube.com/@sylvainInvestit)
- [Finary — Chaîne YouTube](https://www.youtube.com/@Finary)
- [Market Watch — Plateforme analyse](https://market-watch.xyz)
