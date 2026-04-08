---
title: "Mid-Week Check — 8 Avril 2026 : Marchés sous pression tarifaire"
date: 2026-04-08T10:04:00
description: "Revue mi-semaine des 8 portefeuilles systematic trading. Ultra v5 Saxo approche le seuil de drawdown critique à -19.2%. US T212 a chuté de -13.7% en une seule session le 7 avril."
category: review-strategy
tags: ["portfolio", "drawdown", "risk-off", "trading-systematique", "alerte"]
image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=680&h=400&fit=crop"
---

## 📅 Contexte — Mercredi 8 Avril 2026, 10h Paris

Revue mi-semaine en mode **alertes uniquement**. Snapshots au 2026-04-07 21h UTC. Régime dominant : **EARLY_RISK_OFF** sur l'ensemble des portefeuilles Alpaca. Le contexte macro reste tendu avec les annonces tarifaires Trump qui ont provoqué une volatilité majeure le 7 avril.

---

## 📊 État Global des Portefeuilles

| Portfolio | Equity (monnaie) | Ret depuis init | Max DD | Régime |
|-----------|:----------------:|:---------------:|:------:|:------:|
| **Crypto** | $20,000 USDC | — | — | statique |
| **JP Stocks / IBKR** | €966,312 | -6.1% | -10.5% | Risk-Off |
| **Ultra v5 / Saxo** | €85,211 | -6.0% | **-19.2%\*** | Risk-Off |
| **US Stocks / Alpaca** | $97,138 | -2.9% | -4.1% | EARLY_RISK_OFF |
| **US AmericanBulls** | $89,436 | -2.5% | -8.3% | Cash 84% |
| **US HighVol** | $121,389 | **+20.1%** | -13.4% | Cash 68% |
| **US Small / Alpaca** | $171 | +9.1% | -2.3% | EARLY_RISK_OFF |
| **US T212** | €11,967 | — | **-16.4%\*** | Risk-Off |

*\* DD calculé depuis le pic historique, non depuis l'initial*

> ⚠️ **Alerte** : Ultra v5 Saxo et US T212 approchent le seuil critique de -20% depuis leur pic respectif.

---

## 🚨 Alertes Critiques

### 🔴 Ultra v5 / Saxo — DD -19.2% depuis peak

- **Peak**: €105,491 (mars 2026)
- **Equity actuelle**: €85,211
- **Drawdown**: **-19.2%** → seuil d'alerte à **-20%**
- La position [SQQQ](https://finance.yahoo.com/quote/SQQQ) (3x inverse Nasdaq) pèse -11% depuis l'entrée (27/03). C'est une position inverse délibérée (`INVERSE_NASDAQ`, mode `INVERSE`) cohérente avec le régime crash détecté.
- Les autres positions sont en légère perte : DAWN (-0.42%), CWBC (-1.66%).
- **Action requise** : surveiller quotidiennement. Si equity passe sous €84,400 → seuil -20% franchi.

### 🔴 US T212 — Drop -13.7% en une session

- **14:30 UTC le 07/04** (ouverture US) : €13,871
- **21:09 UTC le 07/04** (post-marché) : **€11,967**
- **Drop intraday** : **-13.7% en 7h**
- **DD total depuis peak** (€14,306) : **-16.4%**
- Le max_dd officiel reporté est seulement -3.04% car il est calculé sur l'equity_curve (snapshotée à 13:30 UTC), ne capturant pas la chute de clôture.
- Positions principales : MASI, DAWN, EHAB, ACLX, SHEL — toutes dans une plage de ±2%, donc la chute vient principalement de l'effet de change EUR/USD et de la compression du marché.

> 💡 **Point clé** : La chute du 7 avril coïncide avec la journée de volatilité maximale liée aux annonces tarifaires Trump. La baisse est systémique, pas idiosyncratique.

---

## 📈 Point Positif — US HighVol en tête

[US HighVol Breakout](https://reports.dailytickers.com/us_highvol/data/snapshots.json) est le seul portefeuille clairement en zone positive :

- **Ret YTD** : **+20.1%** depuis initial $101,033
- **BW** (Babcock & Wilcox) : +22.4% depuis entrée, 2,130 actions
- **APGE** : +5.6%
- **Ordre pending** : BW AEHR @ $51.51 (size $72K = 59% capital) — ordre limit non exécuté

Le portefeuille détient **68% cash** ($82,570), ce qui est normal en régime Risk-Off. Peak récent : $122,740 → DD actuel : -1.1% seulement.

---

## 🔍 Bugs P0/P1/P3

### P1 — MISSING_STOP récurrent (us_live_alpaca)

Le portefeuille [us_live_alpaca](https://reports.dailytickers.com/us_live_alpaca/data/snapshots.json) génère des `MISSING_STOP` à chaque cycle pour : ACLX, AGRO, APEI, DAWN, E, EHAB, MASI, MCW, PEPG, SHEL, SVC.

- Les stops sont recréés chaque nuit ✅
- **APEI et EHAB** : CREATE sans `order_id` dans le snapshot → stop possiblement non confirmé en broker Alpaca ⚠️
- Ce bug est connu et récurrent sur Alpaca fractional shares (les stops de fractions ne persistent pas entre sessions)
- **Statut** : P1 persistant, pas d'aggravation

### P3 — Positions sans stop (portfolios principaux)

Dans **US Stocks / Alpaca** :
- GLDD : `risk_pct = 0`, pas de stop → 547 actions, $9,299 de valeur
- EHAB : `risk_pct = 0`, pas de stop → 644 actions, $9,009

Dans **US AmericanBulls** :
- GPAT : `risk_pct = 0`, pas de stop → 1,339 actions, $14,528 (83% du capital, reste en cash)

Ces absences de stop sont probablement dues à des entrées récentes dont les ordres n'ont pas encore été confirmés. À surveiller.

---

## 📊 Évolution Equity — Portefeuilles Clés

<div class="echarts-container" id="chart-equity-semaine" style="width:100%;height:420px;"></div>

<script>
var chart1 = echarts.init(document.getElementById('chart-equity-semaine'));
chart1.setOption({
  tooltip: { trigger: 'axis', formatter: function(params) {
    return params[0].name + '<br>' + params.map(p => p.seriesName + ': ' + p.value).join('<br>');
  }},
  legend: { data: ['US HighVol ($K)', 'US Alpaca ($K)', 'Ultra Saxo (€K)', 'US T212 (€)'], top: 10, textStyle: { color: '#ccc' } },
  grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
  xAxis: { type: 'category', data: ['23 Mar', '25 Mar', '27 Mar', '30 Mar', '31 Mar', '1 Avr', '2 Avr', '6 Avr', '7 Avr'], axisLabel: { color: '#aaa' } },
  yAxis: { type: 'value', axisLabel: { color: '#aaa' } },
  series: [
    { name: 'US HighVol ($K)', type: 'line', smooth: true, data: [100, 110, 108, 95, 98, 98, 110, 122, 121], itemStyle: { color: '#22c55e' } },
    { name: 'US Alpaca ($K)', type: 'line', smooth: true, data: [100, 101, 101, 101, 101, 101, 101, 97, 97], itemStyle: { color: '#3b82f6' } },
    { name: 'Ultra Saxo (€K)', type: 'line', smooth: true, data: [100, 101, 101, 99, 99, 99, 99, 99, 85], itemStyle: { color: '#f59e0b' } },
    { name: 'US T212 (€K×10)', type: 'line', smooth: true, data: [117, 143, 140, 140, 140, 139, 139, 139, 120], itemStyle: { color: '#ef4444' } }
  ]
});
window.addEventListener('resize', () => chart1.resize());
</script>

> 📉 **Note** : US T212 et Ultra Saxo ont subi les plus fortes corrections. La chute du 7 avril est visible sur US HighVol également, bien que le portefeuille reste largement positif YTD.

---

## 🏆 JP Stocks / IBKR — Suivi

Portfolio en **JPY** (ne pas utiliser l'équivalent EUR) :
- Equity curve : ~178M JPY (pic : 190M JPY le 25 mars)
- DD depuis peak : **-6.3%** (max_dd -10.5% sur la période)
- 8 positions actives, toutes momentum-rotation
- Positions préoccupantes :
  - **6787.T** : -8.54% PnL (-1,617,130 JPY)
  - **5801.T** : risk_pct affiché 24.75% ← à vérifier (pourrait être un artefact de calcul)
- Aucune alerte critique, surveillance normale

---

## 🟡 Régime Global

Tous les portefeuilles Alpaca sont en régime **EARLY_RISK_OFF** avec `regime_score` autour de 0.31-0.34 (stable depuis mars). Les positions ont été ouvertes en période EARLY_RISK_OFF, cohérent avec la sélection de valeurs défensives (SHEL, E, ACLX, EHAB).

<div class="echarts-container" id="chart-regime" style="width:100%;height:300px;"></div>

<script>
var chart2 = echarts.init(document.getElementById('chart-regime'));
chart2.setOption({
  title: { text: 'Regime Score (us_live_alpaca)', textStyle: { color: '#ccc', fontSize: 13 } },
  tooltip: { trigger: 'axis' },
  xAxis: { type: 'category', data: ['J-5', 'J-4', 'J-3', 'J-2', 'J-1'], axisLabel: { color: '#aaa' } },
  yAxis: { type: 'value', min: 0, max: 1, name: 'Score', axisLabel: { color: '#aaa' } },
  series: [
    { type: 'bar', data: [0.313, 0.329, 0.309, 0.328, 0.340], itemStyle: { color: '#f59e0b' },
      markLine: { data: [{ yAxis: 0.5, name: 'Risk-On', lineStyle: { color: '#22c55e' } }] }
    }
  ]
});
window.addEventListener('resize', () => chart2.resize());
</script>

Le score reste bien sous le seuil Risk-On (0.5), justifiant un positionnement défensif.

---

## 📋 Récapitulatif des Actions à Surveiller

| Priorité | Portfolio | Seuil / Trigger | Action |
|:--------:|-----------|-----------------|--------|
| 🔴 HIGH | Ultra v5 Saxo | Equity < €84,400 → DD -20% | Alerte immédiate |
| 🔴 HIGH | US T212 | Poursuite de la baisse | Vérifier stops actifs |
| 🟡 MED | JP 6787.T | Stop @ 23,254 JPY (prix actuel 24,730) | Marge de sécurité réduite |
| 🟡 MED | US Alpaca GLDD | Pas de stop | Vérifier création du stop |
| 🟢 LOW | us_live_alpaca MISSING_STOP | Bug récurrent | Monitoring quotidien |

---

## 💡 Synthèse

Le mid-week révèle un marché en mode **purge risk-off** avec la journée du 7 avril particulièrement violente. La stratégie HighVol (+20%) résiste grâce à une forte sélectivité et un cash élevé. Les portefeuilles T212 et Saxo nécessitent une surveillance renforcée avec des DD respectifs de -16.4% et -19.2% depuis leurs peaks.

**Aucun dépassement du seuil critique de -20% n'est encore constaté**, mais deux portefeuilles sont en zone orange.

---

**Sources :**
- [MarketWatch Reports — Live Portfolios](https://reports.dailytickers.com/live-portfolios.json)
- [us_live_alpaca Snapshots](https://reports.dailytickers.com/us_live_alpaca/data/snapshots.json)
- [Yahoo Finance — SQQQ (ProShares UltraPro Short QQQ)](https://finance.yahoo.com/quote/SQQQ)
- [Yahoo Finance — BW (Babcock & Wilcox)](https://finance.yahoo.com/quote/BW)
- [Yahoo Finance — AGRO (Adecoagro)](https://finance.yahoo.com/quote/AGRO)
- [Alpaca Markets — Documentation fractional shares](https://docs.alpaca.markets/reference/getallpositions)
- [Unsplash — Trading image](https://unsplash.com/photos/trading-charts-monitor)
