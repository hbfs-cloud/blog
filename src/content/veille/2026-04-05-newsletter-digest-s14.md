---
title: "📬 Newsletter Digest S14 — Pétrole $112, Tariffs & Extreme Fear : La Semaine de Tous les Dangers"
date: 2026-04-05T20:00:00
description: "Digest hebdomadaire Market Watch : 7 briefings, 4 scans, 1 rétrospective, analyse SHEL, série Penny Stocks et intégration MCP Forecast. Le point complet sur une semaine dominée par le pétrole, les tariffs et la peur extrême."
category: veille
tags: ["newsletter", "digest", "weekly", "scanner", "market-watch", "oil", "tariffs", "iran", "risk-off"]
image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=680&h=400&fit=crop"
---

## 📬 Digest Hebdomadaire — Semaine 14 (30 mars – 5 avril 2026)

Une semaine d'exception sur les marchés. Le WTI a bondi de **+18.6%** pour atteindre **$112**, la plus forte hausse hebdomadaire depuis 2022. L'or flambe à **$4 703** (+7.5%), le Fear & Greed crypto s'effondre à **12** (Extreme Fear), et le NFP surprise de **+178K** (vs 60K attendu) est tombé… un jour férié. Voici tout ce qu'il fallait lire cette semaine.

---

## 🏆 Top 5 Articles de la Semaine

### 1. 🛢️ Weekly — Oil $112, Gold $4,700 & The Tariff Storm
> La revue hebdomadaire phare : WTI +18.6% en une semaine, le Strait of Hormuz toujours fermé (Iran Jour 35), tariffs en escalade, et le CPI de jeudi prochain comme catalyseur majeur.

🔗 [Lire le Weekly](https://articles.market-watch.xyz/weekly/20260406/)

### 2. 💼 NFP Surprise Hits a Closed Market: +178K Jobs
> Le rapport emploi US pulvérise les attentes (+178K vs 60K) — mais les marchés étaient fermés pour Good Friday. L'impact se jouera lundi à l'ouverture. Brent à $112, Gold $4 677, BTC $66 921.

🔗 [Lire le Briefing du 4 avril](https://articles.market-watch.xyz/daily/20260404/)

### 3. 🎯 Scanner 6 avril — EARLY RISK-OFF, 10 setups A+
> Rotation défensive confirmée : **GD, RTX, LLY, PG, AMGN, MU, SAP, ASML, EWY, GLD**. Le régime passe en Early Risk-Off (score 0.518) avec un VIX en repli de 26.38 à 23.87.

🔗 [Voir le Scanner](https://articles.market-watch.xyz/scanner/20260406/)

### 4. 😱 Extreme Fear at 12 — Bitcoin Holds $67K
> Le Fear & Greed crypto touche 12, l'un des niveaux les plus bas depuis 2020. Pourtant BTC tient $67K dans une consolidation silencieuse. ETH $2 056, SOL $80.39. Analyse du "silent accumulation" en cours.

🔗 [Lire le Briefing du 5 avril](https://articles.market-watch.xyz/daily/20260405/)

### 5. 📊 Rétrospective Scanner Mar 24 – Apr 3 — Grade C
> 90 setups, 9 scans, 46% résolus. TP1 Hit Rate à 9.1%, portfolio sim +1.59%. CF Industries meilleur pick (+7.3%), BTU pire (-7.0%). Le scanner navigue un régime Risk-Off volatile dominé par l'énergie.

🔗 [Lire la Rétrospective](https://articles.market-watch.xyz/scanner/retrospective/20260403/)

---

## 📈 Scanner de la Semaine — Chiffres Clés

<div class="echarts-container" id="chart-equity" style="width:100%;height:350px;"></div>

<script>
var chartEquity = echarts.init(document.getElementById('chart-equity'));
chartEquity.setOption({
  title: { text: 'Equity Curve — Scanner Portfolio (35j)', left: 'center', textStyle: { fontSize: 14 } },
  tooltip: { trigger: 'axis', formatter: '{b}<br/>Return: {c}%' },
  xAxis: { type: 'category', data: Array.from({length: 76}, (_, i) => 'J' + (i+1)), axisLabel: { interval: 9 } },
  yAxis: { type: 'value', name: '%', axisLabel: { formatter: '{value}%' } },
  series: [{
    data: [0,0.19,0.03,-0.16,-0.02,0.06,-0.09,0.09,-0.09,0.27,0.57,0.75,1.14,1.47,1.64,1.92,2.32,2.16,2.36,2.77,2.37,2.73,2.84,3.15,3.4,3.34,3.21,3,2.76,2.51,2.74,2.79,3.07,3.36,3.64,4.14,4.9,4.79,5,5.17,4.76,3.89,3.91,3.7,3.84,4.48,4.59,5.16,5.39,5.54,5.63,5.76,5.74,5.51,5.75,5.59,5.74,5.81,5.79,5.65,5.57,5.43,5.44,5.06,4.9,4.92,4.74,4.56,4.53,4.59,5.06,5.21,5.24,1.91,1.93,1.94],
    type: 'line', smooth: true,
    areaStyle: { color: { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{offset: 0, color: 'rgba(34,197,94,0.3)'}, {offset: 1, color: 'rgba(34,197,94,0.02)'}] } },
    lineStyle: { color: '#22c55e', width: 2 },
    itemStyle: { color: '#22c55e' }
  }],
  grid: { left: 60, right: 20, bottom: 30, top: 50 }
});
window.addEventListener('resize', () => chartEquity.resize());
</script>

| Métrique | Valeur | Commentaire |
|----------|--------|-------------|
| **Return 30j** | +1.98% | Positif malgré le régime Risk-Off |
| **Win Rate** | 46.3% | 19 wins / 22 losses sur trades fermés |
| **TP1 atteints** | 14 | sur 81 trades au total |
| **TP2 atteints** | 5 | 35.7% des TP1 convertis en TP2 |
| **Stop Loss** | 16 | Drawdown contrôlé |
| **Max Drawdown** | -3.89% | Acceptable en régime volatile |
| **Profit Factor** | 1.00 | Seuil d'équilibre — marge d'amélioration |
| **Gain moyen** | +3.28% | vs perte moyenne -7.35% |
| **Trades ouverts** | 40 | sur 81 au total |

> 💡 **Insight** : Le ratio gain/perte moyen (+3.28% vs -7.35%) indique que le scanner doit améliorer sa sélectivité en période Risk-Off. Les stops sont trop larges relativement aux targets — un ajustement du R/R est en cours via le système MCP Forecast fraîchement intégré.

---

## 🆕 Nouveautés de la Semaine

- **🔮 Intégration MCP Forecast** — Le service de prévision TimesFM est désormais intégré au pipeline d'analyse. Calibration empirique en cours, règles propagées dans tous les CLAUDE.md.
- **🛢️ Analyse SHEL (Shell plc)** — Note B+, géant énergétique analysé avec le nouveau système de forecast.
- **💰 Série Penny Stocks FR** — 6 parties complètes pour les débutants francophones.
- **🎙️ Edge-TTS** — Migration de Qwen3-TTS vers Edge-TTS pour l'audio des briefings.

---

## 💬 Citation de la Semaine

> *"NFP smashes expectations at +178K vs 60K expected — on a closed Good Friday. The market will digest this Monday with no warm-up, no pre-market. Buckle up."*
> — Daily Briefing, 4 avril 2026

---

## 🔮 Teaser Semaine Prochaine (S15)

- **CPI US jeudi 10 avril** — Le catalyseur macro de la semaine. Avec le pétrole à $112, l'inflation devrait accélérer. Un print au-dessus de 3.5% relancerait le narratif stagflation.
- **Réouverture post-NFP lundi** — Les marchés n'ont pas encore digéré le +178K jobs. Attendez-vous à une ouverture volatile.
- **Iran Jour 36+** — Le Strait of Hormuz reste fermé. Toute désescalade = crash pétrole / rally équités. Toute escalation = oil $120+.
- **Earnings Q1 en approche** — Les premières publications commencent la semaine suivante. Guidance > résultats dans ce climat.

---

*📊 Ce digest est généré chaque dimanche à 20h. Retrouvez tous nos contenus sur [articles.market-watch.xyz](https://articles.market-watch.xyz)*
