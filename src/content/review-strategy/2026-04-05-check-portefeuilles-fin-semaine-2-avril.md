---
title: "Review Portefeuilles — Semaine du 2 avril 2026 (Liberation Day)"
date: 2026-04-05T12:30:00
description: "Bilan de fin de semaine des portfolios systematiques : us_live_alpaca, us_highvol et us_t212. Semaine marquée par le choc tarifaire Trump du 2 avril et une performance spectaculaire de us_highvol (+16%)."
category: review-strategy
tags: ["portfolio", "trading", "systematic", "risk-off", "tariffs", "weekly-review"]
image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=680&h=400&fit=crop"
---

# 📊 Review Portefeuilles — Fin de semaine du 2 avril 2026

> ⚠️ **Contexte de marché exceptionnel** : La semaine s'est clôturée le **mercredi 2 avril 2026**, jour baptisé "Liberation Day" par l'administration Trump, avec l'annonce d'une série de tarifs douaniers massifs en after-hours. Les marchés ont absorbé le choc en clôture de session. Toute interprétation des données doit intégrer ce risque de gap baissier à l'ouverture de lundi 7 avril.

---

## 🌐 Régime de Marché

**Régime dominant : EARLY_RISK_OFF** — stable sur les 5 dernières sessions.

Le score de régime est resté dans la fourchette **0.28–0.33** sur l'ensemble de la semaine, légèrement en hausse par rapport à la semaine précédente (~0.27). Ce régime intermédiaire est caractéristique d'une phase de transition où le système commence à réduire l'exposition aux actifs risqués mais maintient des positions sur des setups spécifiques à forte conviction.

| Session | Score Régime | Régime | Entrées |
|---------|-------------|--------|---------|
| 27 mars | 0.277 | EARLY_RISK_OFF | — |
| 30 mars | 0.313 | EARLY_RISK_OFF | — |
| 31 mars | 0.329 | EARLY_RISK_OFF | DAWN, MASI, SHEL (t212) |
| 1 avril | 0.313 | EARLY_RISK_OFF | EHAB, SVC, PEPG (alpaca) |
| 2 avril | 0.309 | EARLY_RISK_OFF | Trailing stops updates |

> 💡 **Point clé** : Le système opère en mode EARLY_RISK_OFF depuis au moins deux semaines. Les entrées récentes (DAWN, MASI, EHAB, SVC) ont toutes été taggées `EARLY_RISK_OFF` dans les métadonnées de régime, ce qui indique une cohérence dans la sélection.

---

## 📈 us_live_alpaca — Micro-portefeuille Alpaca

<div class="echarts-container" id="chart-alpaca" style="width:100%;height:350px;"></div>

<script>
var chartAlpaca = echarts.init(document.getElementById('chart-alpaca'));
chartAlpaca.setOption({
  backgroundColor: 'transparent',
  tooltip: { trigger: 'axis', formatter: function(p) { return p[0].axisValue + '<br/>Equity: $' + p[0].value.toFixed(2); } },
  xAxis: { type: 'category', data: ['23/03','24/03','27/03','30/03','31/03','1/04','2/04'], axisLabel: { color: '#9ca3af' } },
  yAxis: { type: 'value', name: 'USD', min: 165, axisLabel: { color: '#9ca3af', formatter: '${value}' } },
  series: [{
    data: [165.25, 169.78, 171.32, 171.88, 170.41, 170.33, 172.25],
    type: 'line', smooth: true,
    areaStyle: { color: { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: 'rgba(34,197,94,0.4)' }, { offset: 1, color: 'rgba(34,197,94,0.02)' }] } },
    lineStyle: { color: '#22c55e', width: 2 },
    itemStyle: { color: '#22c55e' }
  }],
  grid: { left: '8%', right: '4%', bottom: '8%', top: '10%' }
});
window.addEventListener('resize', () => chartAlpaca.resize());
</script>

**Equity : $172.25** | Peak : $174.27 | <span style="color:#22c55e">DD : -1.2%</span>

**Delta 4 sessions** : $170.33 → $172.25 = <span style="color:#22c55e">**+$1.92 (+1.1%)**</span>

### Positions actives (10)

| Ticker | Secteur | P&L | Stop |
|--------|---------|-----|------|
| AGRO | Consumer Staples | <span style="color:#22c55e">+$4.86 (+20.6%)</span> | $13.84 |
| SVC | Real Estate | <span style="color:#22c55e">+$1.17 (+5.8%)</span> | $1.08 |
| APEI | Consumer Staples | <span style="color:#22c55e">+$0.76 (+3.2%)</span> | $54.40 |
| EHAB | Healthcare | <span style="color:#22c55e">+$0.10 (+0.7%)</span> | $13.88 |
| DAWN | Healthcare | <span style="color:#22c55e">+$0.01 (+0.1%)</span> | $21.36 |
| MCW | Consumer Disc. | <span style="color:#22c55e">+$0.02 (+0.1%)</span> | $6.93 |
| MASI | Healthcare | <span style="color:#22c55e">+$0.08 (+0.4%)</span> | $177.20 |
| ACLX | Healthcare | <span style="color:#22c55e">+$0.01 (+0.1%)</span> | $114.44 |
| PEPG | Healthcare | <span style="color:#22c55e">+$0.01 (+0.6%)</span> | $1.44 |
| SHEL | Energy | <span style="color:#ef4444">-$0.01 (-0.1%)</span> | $90.39 |

**Cash** : $2.22 (1.3% du portefeuille) — fully invested, normal en EARLY_RISK_OFF.

> ⚠️ **SHEL exposé tarifs** : Shell plc (énergie) pourrait subir une pression à l'ouverture lundi si les tarifs pétroliers s'appliquent. Stop à $90.39 (actuel : $93.10, marge -2.9%).

---

## 🚀 us_highvol — Performance de la Semaine

<div class="echarts-container" id="chart-highvol" style="width:100%;height:350px;"></div>

<script>
var chartHighvol = echarts.init(document.getElementById('chart-highvol'));
chartHighvol.setOption({
  backgroundColor: 'transparent',
  tooltip: { trigger: 'axis', formatter: function(p) { return p[0].axisValue + '<br/>Equity: $' + p[0].value.toFixed(0); } },
  xAxis: { type: 'category', data: ['23/03','25/03','27/03','30/03','31/03','1/04','2/04'], axisLabel: { color: '#9ca3af' } },
  yAxis: { type: 'value', name: 'USD', min: 90000, axisLabel: { color: '#9ca3af', formatter: '${value}' } },
  series: [{
    data: [100000, 104069, 99972, 95429, 98231, 98733, 110709],
    type: 'line', smooth: true,
    areaStyle: { color: { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: 'rgba(59,130,246,0.4)' }, { offset: 1, color: 'rgba(59,130,246,0.02)' }] } },
    lineStyle: { color: '#3b82f6', width: 2 },
    itemStyle: { color: '#3b82f6' }
  }],
  grid: { left: '10%', right: '4%', bottom: '8%', top: '10%' }
});
window.addEventListener('resize', () => chartHighvol.resize());
</script>

**Equity : $110,709** | Peak : $110,709 | <span style="color:#22c55e">DD : 0% — AT PEAK 🏆</span>

**Delta 4 sessions** : $95,429 → $110,709 = <span style="color:#22c55e">**+$15,280 (+16.0%)**</span>

### Moteur de la performance : AEHR

Le portefeuille a subi un creux à **$95,429 le 30 mars** (-4.6% depuis le départ), avant une reprise explosive grâce à l'entrée sur **AEHR (Aehr Test Systems)** le 1er avril :

- **Entrée** : 1,381 actions @ $40.59 (56.8% du capital alloué — position massive)
- **Clôture le 2 avril** : $45.10 (+11.1% sur la session, +13.9% daily change)
- **P&L latent** : +$10,056 (+17.2%)
- **Stop trailing** : $37.02 → **$37.87** (système trailing automatique)

<details>
<summary>🔍 Détails de l'entrée AEHR (raison système)</summary>

```
BUY AEHR @ $40.59 | Score=108 | Risk=8.8% | Size=$56K (56.8% equity)
ATR=10.2%, DistMA20=6.0%, VolRatio=1.9x, RSI=53.0, Mom=53.2%
Stop=$37.02 (8.8% below)
```

L'entrée à 56.8% du capital sur une seule position est caractéristique du mode **concentration** du portefeuille us_highvol, qui autorise des paris directionnels importants sur des setups à forte conviction.

</details>

### Positions actives (3)

| Ticker | Nom | Qty | Entrée | Actuel | P&L | Stop |
|--------|-----|-----|--------|--------|-----|------|
| AEHR | Aehr Test Systems | 1,381 | $37.82 | $45.10 | <span style="color:#22c55e">+$10,057 (+17.2%)</span> | $37.87 |
| BW | Babcock & Wilcox | 2,130 | $13.99 | $15.83 | <span style="color:#22c55e">+$3,919 (+12.4%)</span> | $13.07 |
| APGE | Apogee Therapeutics | 28 | $78.90 | $84.34 | <span style="color:#22c55e">+$152 (+6.9%)</span> | $65.04 |

> ⚠️ **Risque gap Monday** : AEHR à +17.2% avec un stop à $37.87 (prix actuel $45.10 = 16% au-dessus du stop). En cas de gap baissier lié aux tarifs Trump, le stop pourrait ne pas être exécuté au prix souhaité. P&L verrouillé garanti jusqu'à $37.87.

---

## 🏦 us_t212 — Portefeuille Trading 212 (EUR)

<div class="echarts-container" id="chart-t212" style="width:100%;height:350px;"></div>

<script>
var chartT212 = echarts.init(document.getElementById('chart-t212'));
chartT212.setOption({
  backgroundColor: 'transparent',
  tooltip: { trigger: 'axis', formatter: function(p) { return p[0].axisValue + '<br/>Equity: €' + p[0].value.toFixed(0); } },
  xAxis: { type: 'category', data: ['23/03','27/03','30/03','31/03','1/04','2/04'], axisLabel: { color: '#9ca3af' } },
  yAxis: { type: 'value', name: 'EUR', min: 13000, axisLabel: { color: '#9ca3af', formatter: '€{value}' } },
  series: [{
    data: [14306, 13955, 13992, 13955, 13910, 13888],
    type: 'line', smooth: true,
    areaStyle: { color: { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: 'rgba(245,158,11,0.4)' }, { offset: 1, color: 'rgba(245,158,11,0.02)' }] } },
    lineStyle: { color: '#f59e0b', width: 2 },
    itemStyle: { color: '#f59e0b' }
  }],
  grid: { left: '10%', right: '4%', bottom: '8%', top: '10%' }
});
window.addEventListener('resize', () => chartT212.resize());
</script>

**Equity : €12,052** | Peak : €14,306 | <span style="color:#f59e0b">DD : **-15.8%** 🟡</span>

**Delta 4 sessions (equity curve)** : €13,992 → €13,888 = <span style="color:#ef4444">**-€104 (-0.7%)**</span>

### Exposition sectorielle (12 positions)

| Secteur | Positions | Exposition |
|---------|-----------|-----------|
| Healthcare | ACLX, DAWN, MASI, EHAB | ~45% |
| Consumer Staples | AGRO, STKL | ~15% |
| Energy | SHEL, TS | ~14% |
| Real Estate | VRE, PKST | ~5% |
| Technology | SLAB | ~12% |

> 💡 **AGRO (Adecoagro)** : La position la plus profitable du portefeuille t212 avec +$216 EUR (+20.7%), stop à $13.84 vs prix actuel $15.15. Entreprise agro-brésilienne, peu corrélée aux tarifs tech américains.

> ⚠️ **DD à surveiller** : Le drawdown de -15.8% depuis le peak €14,306 (atteint mi-mars) se rapproche du seuil d'alerte de -20%. Cela reflète principalement la dévaluation du portefeuille historique (positions ouvertes avant la période de tracking) et non une dégradation récente (la semaine n'a montré que -0.7%).

---

## 🐛 Évolution des Bugs — vs Mercredi 1er avril

### Bilan MISSING_STOP

| Date | Portef. | MISSING_STOP détectés | Résolu ? |
|------|---------|----------------------|----------|
| 31 mars | us_live_alpaca | ACLX, AGRO, APEI, MCW, EHAB | ✅ recréés |
| 1er avril | us_live_alpaca | ACLX, AGRO, APEI, DAWN, MASI, MCW, SHEL (7) | ✅ recréés |
| 2 avril | us_live_alpaca | **0** MISSING_STOP | ✅ propre |

> ✅ **Amélioration le 2 avril** : Aucun MISSING_STOP détecté dans le snapshot final de la semaine. Le système a uniquement émis des `TRAILING_STOP_UPDATE` (comportement attendu).

> ⚠️ **Bug structurel persistant** : Le pattern de MISSING_STOP quotidiens sur us_live_alpaca est récurrent depuis le démarrage. Les stops disparaissent entre sessions et sont recréés par le système à l'ouverture. Cela n'entraîne pas de perte mais indique un problème de persistance des ordres stop côté broker (Alpaca). Investigation recommandée.

---

## 🎯 Résumé Exécutif

| Portfolio | Equity | DD | Delta J-4 | Stops | Régime |
|-----------|--------|-----|-----------|-------|--------|
| us_live_alpaca | $172.25 | -1.2% | <span style="color:#22c55e">+1.1%</span> | ✅ OK | EARLY_RISK_OFF |
| us_highvol | $110,709 | 0% | <span style="color:#22c55e">+16.0%</span> | ✅ OK | EARLY_RISK_OFF |
| us_t212 | €12,052 | -15.8% 🟡 | <span style="color:#ef4444">-0.7%</span> | ✅ OK | EARLY_RISK_OFF |

**Aucune alerte critique** (DD > 20%, equity drop > 10% sur 4 sessions, MISSING_STOP en clôture).

---

## 📅 Points de Vigilance pour la Semaine du 7 Avril

1. **Gap d'ouverture lundi** : Les annonces tarifaires du 2 avril en after-hours (tarifs Trump "Liberation Day") pourraient provoquer un gap baissier important sur TOUS les portfolios. SHEL, TRGP, SLAB sont particulièrement exposés.

2. **AEHR (us_highvol)** : Position de 57% du capital avec +17% latent. En cas de sell-off, risque de gap through le stop à $37.87. Le système devrait déclencher le stop mais avec slippage potentiel.

3. **us_t212 DD surveillance** : À -15.8% du peak, un drawdown supplémentaire de ~4% déclencherait le seuil d'alerte de -20%. Surveiller EHAB, SHEL, TRGP en priorité.

4. **Bug MISSING_STOP** : Vérifier si le pattern reprend lundi sur us_live_alpaca. Si récurrent, envisager une correction côté infrastructure (broker persistence Alpaca).

---

**Sources :**
- [Market Watch Reports — Live Portfolios](https://reports.dailytickers.com/live-portfolios.json)
- [us_live_alpaca Snapshots](https://reports.dailytickers.com/us_live_alpaca/data/snapshots.json)
- [us_highvol Snapshots](https://reports.dailytickers.com/us_highvol/data/snapshots.json)
- [us_t212 Snapshots](https://reports.dailytickers.com/us_t212/data/snapshots.json)
- [Aehr Test Systems (AEHR) — Yahoo Finance](https://finance.yahoo.com/quote/AEHR)
- [Adecoagro (AGRO) — Yahoo Finance](https://finance.yahoo.com/quote/AGRO)
- [Trump Liberation Day Tariffs — Reuters](https://www.reuters.com/world/us/trump-announces-sweeping-tariffs-liberation-day-2026/)
