---
title: "Veille Concurrentielle YouTube Finance Francophone — Mars 2026"
date: 2026-03-27T10:00:00
description: "Panorama des 12 principales chaînes YouTube finance/trading francophones : abonnés, fréquence, niches, stratégies de contenu et opportunités pour Market Watch."
category: veille
tags: ["youtube", "concurrence", "trading", "bourse", "finance", "francophone", "veille"]
image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=680&h=400&fit=crop"
---

## 🎯 Contexte et Méthodologie

Market Watch (market-watch.xyz) opère dans un écosystème YouTube finance francophone en pleine expansion. Cette veille couvre les **12 chaînes les plus actives** sur les thématiques trading, analyse technique, systematic trading et investissement. Objectif : identifier les angles couverts, les formats dominants, et les opportunités de différenciation.

> 💡 **Point clé** : Le YouTube finance francophone reste dominé par des profils grand public (finance perso, ETF, FIRE), tandis que les niches "analyse technique avancée" et "trading algorithmique" restent sous-exploitées — le terrain de Market Watch.

---

## 📊 Panorama des Chaînes Surveillées

| Chaîne | Niche principale | ~Abonnés | Fréquence | Formats |
|---|---|---|---|---|
| **XDelmas** | Analyse tech. quotidienne, marchés US/EU | ~600K | Quotidienne | Lives, vidéos courtes |
| **Hérisson Investisseur** | Finance perso, ETF, REIT | ~280K | 2x/semaine | Tutoriels 15-25 min |
| **Charlie Investor** | Actions dividendes, screener | ~150K | 2-3x/semaine | Reviews fondamentales |
| **Adrien Tordo** | Crypto, trading, liberté financière | ~220K | 2x/semaine | Vlogs, tutoriels |
| **Paradox Invest** | Analyse technique, screener actions | ~90K | Hebdo | Analyses, screeners |
| **Finary** | Gestion de patrimoine, suivi portef. | ~180K | 1x/semaine | Éducation, product |
| **Nicolas Dodet** | Trading algorithmique Python | ~45K | Bimensuel | Tutoriels code |
| **Thomas Hugues** (Investor Mindset) | Psychologie trading, momentum | ~80K | 1-2x/semaine | Interviews, éducation |
| **Finance en 5 Minutes** | Vulgarisation rapide | ~120K | 3-4x/semaine | Shorts, vidéos 5 min |
| **Alexis Massoulier** | Investissement long terme, actions FR | ~60K | 1x/semaine | Analyse fond. FR/EU |
| **Pierre Technique** | AT actions France, ichimoku | ~35K | 1-2x/semaine | Analyses quotidiennes |
| **Les Affranchis de la Finance** | Crypto, gold, macro libertarien | ~95K | 2x/semaine | Débats, macro |

---

## 📈 Activité Relative et Positionnement

<div class="echarts-container" id="chart-freq" style="width:100%;height:420px;"></div>

<script>
var chart1 = echarts.init(document.getElementById('chart-freq'));
chart1.setOption({
  tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
  grid: { left: '3%', right: '4%', bottom: '10%', containLabel: true },
  legend: { data: ['~Abonnés (K)', 'Vidéos/mois (estimé)'], textStyle: { color: '#ccc' } },
  xAxis: {
    type: 'category',
    data: ['XDelmas', 'Adrien Tordo', 'Hérisson Inv.', 'Finary', 'Charlie Inv.', 'Finance 5min', 'Les Affranchis', 'Investor Mindset', 'Nicolas Dodet', 'Paradox Inv.', 'Alexis M.', 'Pierre Tech.'],
    axisLabel: { rotate: 30, color: '#aaa', fontSize: 11 }
  },
  yAxis: [
    { type: 'value', name: 'Abonnés (K)', position: 'left', axisLabel: { color: '#aaa' } },
    { type: 'value', name: 'Vidéos/mois', position: 'right', axisLabel: { color: '#aaa' }, max: 35 }
  ],
  series: [
    {
      name: '~Abonnés (K)',
      type: 'bar',
      data: [600, 220, 280, 180, 150, 120, 95, 80, 45, 90, 60, 35],
      itemStyle: { color: '#3b82f6' },
      barMaxWidth: 40
    },
    {
      name: 'Vidéos/mois (estimé)',
      type: 'line',
      yAxisIndex: 1,
      data: [28, 8, 8, 4, 10, 14, 8, 6, 2, 4, 4, 6],
      itemStyle: { color: '#22c55e' },
      smooth: true,
      symbol: 'circle',
      symbolSize: 8
    }
  ]
});
window.addEventListener('resize', () => chart1.resize());
</script>

<div class="echarts-container" id="chart-niche" style="width:100%;height:380px;"></div>

<script>
var chart2 = echarts.init(document.getElementById('chart-niche'));
chart2.setOption({
  tooltip: { trigger: 'item', formatter: '{b}: {d}%' },
  legend: { orient: 'vertical', left: 'left', textStyle: { color: '#ccc' } },
  series: [{
    name: 'Distribution niches',
    type: 'pie',
    radius: ['40%', '70%'],
    avoidLabelOverlap: false,
    itemStyle: { borderRadius: 6, borderColor: '#1a1a2e', borderWidth: 2 },
    label: { show: true, color: '#ddd' },
    data: [
      { value: 3, name: 'Finance perso / ETF', itemStyle: { color: '#3b82f6' } },
      { value: 2, name: 'Analyse technique', itemStyle: { color: '#22c55e' } },
      { value: 2, name: 'Crypto / Macro', itemStyle: { color: '#f59e0b' } },
      { value: 2, name: 'Actions fondamentales', itemStyle: { color: '#8b5cf6' } },
      { value: 1, name: 'Trading algorithmique', itemStyle: { color: '#ef4444' } },
      { value: 1, name: 'Psychologie trading', itemStyle: { color: '#06b6d4' } },
      { value: 1, name: 'Vulgarisation rapide', itemStyle: { color: '#84cc16' } }
    ]
  }]
});
window.addEventListener('resize', () => chart2.resize());
</script>

---

## 🔍 Analyse Détaillée par Chaîne

### 1. XDelmas — [@XDelmas](https://www.youtube.com/@XDelmas)
Leader incontesté de l'analyse technique quotidienne. Format live le matin (~30 min), vidéos de nuit sur les marchés US. **Fréquence exceptionnelle** : quasi-quotidienne, 7j/7 lors des grosses volatilités. Ton direct, décisionnel, peu de "formation". Cible : traders actifs intermédiaires+.

> ⚠️ **Menace directe** : Son audience est la plus proche de Market Watch (traders actifs, analyse de marché). Mais XDelmas reste généraliste (pas de screener quantitatif, pas de systematic).

### 2. Hérisson Investisseur — [@HerissonInvestisseur](https://www.youtube.com/@HerissonInvestisseur)
Finance personnelle haut de gamme : ETF, immobilier coté (SIIC/REIT), dividendes, fiscalité PEA/CTO. Très pédagogique, 20-30 min. Public : investisseurs long terme 30-45 ans. **Pas concurrent direct**, niche complémentaire.

### 3. Charlie Investor — [@CharlieInvestor](https://www.youtube.com/@CharlieInvestor)
Screener d'actions growth + dividendes. Format "une action analysée" par vidéo. Met en avant les critères fondamentaux (FCF yield, PEG). Forte fidélisation. **Overlap modéré** avec Market Watch sur la section analyses de titres.

### 4. Adrien Tordo — [@AdrienTordo](https://www.youtube.com/@AdrienTordo)
Positionnement liberté financière + crypto + trading DeFi. Audience jeune (20-35 ans). Contenus lifestyle associés. **Pas concurrent direct**, mais capte l'audience crypto qui pourrait s'intéresser aux marchés.

### 5. Paradox Invest — [@ParadoxInvest](https://www.youtube.com/@ParadoxInvest)
**Concurrent le plus proche** sur le screener et l'analyse technique des actions. Publie des listes de setups hebdomadaires. Format structuré proche d'un screener. Faible audience relative mais qualitative.

### 6. Nicolas Dodet — [@NicolasDodet](https://www.youtube.com/@NicolasDodet)
**Concurrent direct sur le systematic trading**. Python + backtesting + stratégies quantitatives. Audience de développeurs-traders. Vidéos techniques longues (40-60 min). Fréquence faible (1-2/mois).

### 7. Finary — [@FinaryApp](https://www.youtube.com/@FinaryApp)
Chaîne produit déguisée en éducation financière. Contenu qualitatif sur la diversification, les portefeuilles. **Pas concurrent** — capte les débutants, Market Watch cible les praticiens.

---

## 🚀 Sujets Non Couverts = Opportunités Market Watch

Les gaps identifiés dans cet écosystème :

**🟢 Gaps majeurs (fort potentiel)**
- **Backtesting visuel de stratégies** : aucune chaîne ne publie de backtests complets avec equity curves interactives
- **Régimes de marché** (bull/bear/sideways en temps réel) : Market Watch a cet avantage concurrentiel avec son régime detector
- **Analyse de portefeuilles systematic live** : performance réelle publiée régulièrement (YTD, Sharpe, MaxDD)
- **Options greeks + stratégies structurées** : niche quasi-vide en francophone
- **Comparaison stratégies systematic vs buy-and-hold** : contenu high-value, très partageable

**🟡 Gaps secondaires**
- **Screener japonais (JP portfolio)** : le marché actions japonais est invisible en YouTube francophone
- **Trading intraday + overnight gap strategies** : un seul créateur effleure ce sujet (XDelmas, mais pas quantitativement)
- **Macro + systematic** : combiner vision macro (régime) et signal quantitatif — sujet unique

---

## ⚠️ Menaces et Tendances Émergentes

**Tendances observées (Q1 2026)**

1. **Explosion des Shorts** : toutes les grandes chaînes (XDelmas, Finance en 5 min) accélèrent sur YouTube Shorts. Algorithme YouTube favorise les vidéos <60s. Market Watch n'a aucune présence Shorts.

2. **IA dans les analyses** : plusieurs créateurs commencent à montrer l'IA dans leur workflow (screener ChatGPT, Copilot). C'est une fenêtre pour Market Watch de montrer son intégration IA native (MCP, LLMAnalysis).

3. **Communautés payantes** : Hérisson Investisseur, Charlie Investor ont lancé des Discord/Patreon premium. Monétisation hors publicité.

4. **Lives hebdomadaires fixés** : format "café marchés" le lundi matin 8h30 gagne en audience. XDelmas, Paradox Invest utilisent ce créneau. **Créneau disponible pour Market Watch** : vendredi clôture semaine + weekend recap.

---

## 🎯 Recommandations Actionnables pour Market Watch

| Priorité | Action | Effort | Impact |
|---|---|---|---|
| 🔴 Haute | Lancer 1 short/jour — résumé scan en 45s | Faible | Reach x3 |
| 🔴 Haute | Vidéo hebdo "Top 3 setups de la semaine" (format structuré) | Moyen | Différenciation screener |
| 🟡 Moyenne | Live vendredi 17h — "Clôture marchés + backtest du signal" | Moyen | Fidélisation |
| 🟡 Moyenne | Série "Comment fonctionne un systematic trading" — 5 épisodes | Moyen | SEO long tail |
| 🟢 Basse | Montrer la performance des 8 portfolios en temps réel (vidéo mensuelle) | Faible | Crédibilité |

> 💡 **Levier clé** : Market Watch dispose d'un avantage **unique** — 8 portfolios live, des données réelles de performance, un screener quantitatif intégré. Aucune chaîne concurrente n'a cette profondeur de données. Le contenu YouTube devrait capitaliser sur cette réalité terrain vs la théorie des autres créateurs.

---

## 📅 Prochaine Veille

- **Fréquence recommandée** : mensuelle
- **À surveiller** : lancement de nouvelles chaînes systematic trading, croissance de Nicolas Dodet, évolution Paradox Invest
- **Métrique cible** : identifier toute chaîne dépassant 10K subs sur le systematic trading / trading algorithmique

---

**Sources :**
- [XDelmas — YouTube](https://www.youtube.com/@XDelmas)
- [Hérisson Investisseur — YouTube](https://www.youtube.com/@HerissonInvestisseur)
- [Charlie Investor — YouTube](https://www.youtube.com/@CharlieInvestor)
- [Nicolas Dodet — YouTube](https://www.youtube.com/@NicolasDodet)
- [Paradox Invest — YouTube](https://www.youtube.com/@ParadoxInvest)
- [Finary — YouTube](https://www.youtube.com/@FinaryApp)
- [Market Watch — Site](https://market-watch.xyz)
