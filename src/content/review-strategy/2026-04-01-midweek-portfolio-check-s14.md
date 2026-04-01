---
title: "📊 Mid-Week Portfolio Check — S14 (1er Avril 2026)"
date: 2026-04-01T10:00:00
description: "Revue mid-week des portfolios systematic trading. Scanner en forte hausse, alerte EDSA -25%, DNS portfolio.market-watch.xyz down."
category: review-strategy
tags: ["portfolio", "mid-week", "scanner", "systematic", "S14"]
image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=680&h=400&fit=crop"
---

## 🎯 Résumé Exécutif

Revue mid-week du **mercredi 1er avril 2026** (semaine 14). Les trois modes du scanner systematic affichent une **forte progression depuis lundi**, portés par le secteur énergie. Une alerte critique sur **EDSA** (-25.29%) et un problème d'infrastructure DNS à traiter.

> 💡 **Point clé** : Le mode Dynamic franchit les +34% de return total, tiré par les prises de TP1 sur OXY et CF. Le mode Balanced progresse de +3.68% en 2 jours — performance exceptionnelle.

---

## 📈 État Global — Scanner Modes

Les données ci-dessous sont issues du [scanner status page](https://articles.market-watch.xyz/scanner/status/) au 31 mars 2026 (dernière mise à jour).

| Mode | Return Total | Max DD | Win Rate | Profit Factor | Trades | Positions |
|------|:-----------:|:------:|:--------:|:-------------:|:------:|:---------:|
| 🚀 Dynamic | <span style="color:#22c55e">+34.57%</span> | -5.19% | 62.5% | 10.55 | 8 | 2 |
| ⚖️ Balanced | <span style="color:#22c55e">+14.75%</span> | -4.02% | 87.5% | 11.07 | 8 | 8 |
| 🛡️ Secured | <span style="color:#22c55e">+12.90%</span> | -2.90% | 100% | 99 | 8 | 2 |

### 📊 Évolution depuis lundi

| Mode | Lundi 30/03 | Mardi 31/03 | Δ 2 jours |
|------|:-----------:|:-----------:|:---------:|
| Dynamic | +29.86% | +34.57% | <span style="color:#22c55e">▲ +4.71%</span> |
| Balanced | +11.07% | +14.75% | <span style="color:#22c55e">▲ +3.68%</span> |
| Secured | +10.61% | +12.90% | <span style="color:#22c55e">▲ +2.29%</span> |

**Régime dominant** : **Early Risk-Off** (tarifs réciproques Trump annoncés pour le 2 avril). Le scanner privilégie l'énergie et les matières premières — 70%+ des positions ouvertes sont dans le secteur energy/commodities.

<div class="echarts-container" id="chart-modes" style="width:100%;height:400px;"></div>

<script>
var chartModes = echarts.init(document.getElementById('chart-modes'));
chartModes.setOption({
  tooltip: { trigger: 'axis' },
  legend: { data: ['Dynamic', 'Balanced', 'Secured'], textStyle: { color: '#ccc' } },
  xAxis: { type: 'category', data: ['02/26','03/02','03/06','03/10','03/13','03/17','03/20','03/24','03/27','03/31'] },
  yAxis: { type: 'value', name: '%', axisLabel: { formatter: '{value}%' } },
  series: [
    { name: 'Dynamic', data: [0,-1.66,-2.59,5.54,17.16,17.16,17.16,20.03,29.86,34.57], type: 'line', smooth: true, color: '#ef4444' },
    { name: 'Balanced', data: [0,0,0,0,0,3.31,5.28,4.18,6.68,14.75], type: 'line', smooth: true, color: '#3b82f6' },
    { name: 'Secured', data: [0,0,0,0,3.48,8.99,8.99,8.99,10.29,12.90], type: 'line', smooth: true, color: '#22c55e' }
  ]
});
window.addEventListener('resize', () => chartModes.resize());
</script>

---

## ⚠️ Alertes Critiques

### 🔴 EDSA — Drawdown -25.29%

La position **EDSA** (Edesa Biotech) est en chute libre :
- **Entry** : $7.00 | **Current** : $5.23 | **Stop** : non défini
- **Return** : <span style="color:#ef4444">-25.29%</span>
- **Signal** : 🔴 Rouge

> ⚠️ **Alerte** : EDSA dépasse le seuil critique de -20% de drawdown. Le stop n'apparaît pas dans les données — vérifier si le trade a été géré manuellement ou s'il s'agit d'un MISSING_STOP.

### 🟡 AAOI — Drawdown -10.01%

- **Entry** : $94.00 | **Current** : $84.59 | **Stop** : non défini
- **Signal** : 🔴 Rouge — approche du seuil de -10% intraday

### 🟡 Positions en rouge à surveiller

| Ticker | Return | Entry → Current | Signal |
|--------|:------:|:---------------:|:------:|
| EDSA | <span style="color:#ef4444">-25.29%</span> | $7.00 → $5.23 | 🔴 |
| AAOI | <span style="color:#ef4444">-10.01%</span> | $94 → $84.59 | 🔴 |
| CF (2) | <span style="color:#ef4444">-5.23%</span> | $137 → $129.84 | 🔴 |
| HIMS | <span style="color:#ef4444">-4.55%</span> | $21.75 → $20.76 | 🔴 |
| LNG | <span style="color:#ef4444">-3.81%</span> | $295 → $283.76 | 🔴 |
| FANG | <span style="color:#ef4444">-2.08%</span> | $202 → $197.79 | 🔴 |

---

## 📊 Scanner Global — Métriques de Performance

Données issues du fichier `scanner-metrics.json` (mis à jour 31/03 21:25 UTC) :

| Métrique | Valeur |
|----------|:------:|
| Total trades | 78 |
| Trades clos | 43 |
| Positions ouvertes | 35 |
| Win Rate | 48.8% |
| TP1 atteints | 17 |
| TP2 atteints | 4 |
| SL touchés | 18 |
| Return 30j | <span style="color:#22c55e">+3.62%</span> |
| Max Drawdown | -1.90% |
| Profit Factor | 1.40 |
| Avg Win | +8.70% |
| Avg Loss | -6.92% |
| Capital alloué | 93.3% |

<div class="echarts-container" id="chart-equity" style="width:100%;height:350px;"></div>

<script>
var chartEq = echarts.init(document.getElementById('chart-equity'));
var pHistory = [0,-0.11,-0.18,-0.03,-0.24,-0.38,-0.59,-0.35,-0.51,-0.7,-0.72,-1.28,-1.43,-1.13,-1.3,-1.64,-1.33,-1.11,-0.72,-0.38,-0.22,0.06,0.46,0.3,0.51,0.78,0.63,0.99,0.98,1.13,1.38,1.38,1.18,0.98,0.74,0.48,0.72,0.9,1.22,1.52,1.87,2.37,3.13,3.02,3.25,3.42,2.57,1.71,1.73,1.51,1.71,2.3,2.36,2.73,2.92,3.18,3.34,3.51,3.61,3.38,3.54,3.5,3.58,3.64,3.7,3.69,3.64,3.57,3.6,3.22,3.1,3.15,3.12,2.94,2.94,3.03,3.08,3.62];
var ddHistory = [0,-0.11,-0.18,-0.03,-0.24,-0.38,-0.59,-0.35,-0.51,-0.7,-0.72,-1.28,-1.43,-1.13,-1.3,-1.64,-1.33,-1.11,-0.72,-0.38,-0.22,0,0,-0.16,0,0,-0.15,0,-0.01,0,0,0,-0.2,-0.4,-0.64,-0.9,-0.66,-0.47,-0.16,0,0,0,0,-0.11,0,0,-0.84,-1.71,-1.69,-1.9,-1.71,-1.11,-1.06,-0.69,-0.5,-0.24,-0.08,0,0,-0.23,-0.07,-0.11,-0.02,0,0,-0.01,-0.06,-0.13,-0.09,-0.47,-0.6,-0.54,-0.58,-0.75,-0.76,-0.67,-0.62,-0.08];
chartEq.setOption({
  tooltip: { trigger: 'axis' },
  legend: { data: ['P&L (%)', 'Drawdown (%)'], textStyle: { color: '#ccc' } },
  xAxis: { type: 'category', data: pHistory.map(function(_,i){return 'D'+i}), show: false },
  yAxis: { type: 'value', name: '%' },
  series: [
    { name: 'P&L (%)', data: pHistory, type: 'line', smooth: true, color: '#22c55e', areaStyle: { opacity: 0.15 } },
    { name: 'Drawdown (%)', data: ddHistory, type: 'line', smooth: true, color: '#ef4444', areaStyle: { opacity: 0.1 } }
  ]
});
window.addEventListener('resize', () => chartEq.resize());
</script>

---

## 🔧 Évolution Bugs

| Bug | Priorité | Statut | Détail |
|-----|:--------:|:------:|--------|
| Scanner date bug | P0 | ✅ Résolu | Fix `publish-daily-card.sh` — commit `f75cffc5` |
| Puppeteer ARM64 | P1 | 🟡 Ouvert | `chrome-linux64/chrome` crash sur aarch64. Images daily non générées. Workaround : canvas OpenClaw |
| MW Gateway health 401 | P3 | ✅ Non-issue | Fausse alerte — service up, endpoint `/health` sécurisé |
| DNS portfolio.market-watch.xyz | P1 | 🔴 Nouveau | Résolution DNS échoue depuis le serveur CI (SERVFAIL). Données live portfolios inaccessibles |

> ⚠️ **Nouveau bug P1** : `portfolio.market-watch.xyz` ne résout plus en DNS depuis le serveur CI Hetzner. Le resolver local (systemd-resolved, 185.12.64.2) timeout systématiquement. Les données live des portfolios Alpaca, Crypto et T212 sont **inaccessibles** pour cette revue.

---

## 🟢 Top Performers (positions ouvertes)

Les 5 meilleures positions actuelles :

| # | Ticker | Stratégie | Return | Status |
|---|--------|-----------|:------:|:------:|
| 1 | AGRO | Momentum | <span style="color:#22c55e">+17.80%</span> | 🟢 En route TP1 |
| 2 | NEM | Momentum | <span style="color:#22c55e">+11.03%</span> | 🟢 En route TP1 |
| 3 | XLE | Momentum | <span style="color:#22c55e">+8.91%</span> | 🟢 En route TP1 |
| 4 | MRVL | Momentum | <span style="color:#22c55e">+8.25%</span> | 🟢 En route TP1 |
| 5 | OXY | Momentum | <span style="color:#22c55e">+7.88%</span> | 🟢 En route TP1 |

---

## 🔍 Contexte Macro

Le régime **Early Risk-Off** est confirmé par la dominance des signaux énergie/commodités dans le scanner. Les tarifs réciproques Trump annoncés pour le 2 avril créent une volatilité sectorielle concentrée. Les positions défensives (NEM, GLD dans les signaux) confirment la rotation vers les valeurs refuges.

<details>
<summary>📋 Distribution sectorielle des 34 positions ouvertes</summary>

- **Énergie** : OXY, DVN, CVX, EOG, XLE, EQNR (x2), TTE, HAL, APA, SLB, AR, MPC, FANG, LNG, XOM — 16 positions
- **Matériaux** : NEM, FCX, CF (x2), AGRO, BG, SM — 7 positions
- **Tech** : MRVL, NVDA, AMD, AAOI — 4 positions
- **Santé** : BBIO, HIMS, EDSA — 3 positions
- **Finance** : BBVA — 1 position
- **Industriel** : BA — 1 position
- **Biotech/Autre** : DAWN — 1 position

</details>

---

## 📝 Conclusion

**État global** : ✅ Les trois modes progressent fortement. Tendance haussière confirmée depuis lundi.

**Alertes** :
1. 🔴 **EDSA -25.29%** — drawdown critique, vérifier stop loss
2. 🟡 **AAOI -10.01%** — à surveiller
3. 🔴 **DNS portfolio.market-watch.xyz down** — données live inaccessibles

**Action requise** : Investiguer la résolution DNS de `portfolio.market-watch.xyz` et vérifier le status de la position EDSA.

---

**Sources :**
- [Scanner Status Page](https://articles.market-watch.xyz/scanner/status/)
- [Portfolio Status Page](https://portfolio.market-watch.xyz/) (actuellement down)
- [Yahoo Finance — EDSA](https://finance.yahoo.com/quote/EDSA/)
- [Yahoo Finance — AAOI](https://finance.yahoo.com/quote/AAOI/)
- [Finviz — AGRO Chart](https://finviz.com/chart.ashx?t=AGRO&ty=c&ta=1&p=d&s=l)
- [MarketWatch Scanner Data](https://articles.market-watch.xyz/scanner/20260331/)
