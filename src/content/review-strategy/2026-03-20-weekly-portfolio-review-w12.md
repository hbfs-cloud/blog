---
title: "Revue Portfolios Fin de Semaine — W12 2026"
date: 2026-03-20T17:00:00
description: "Check hebdomadaire des 8 portfolios systematic trading avant fermeture US. Régime EARLY_RISK_OFF dominant, US Stocks en ATH, Ultra v5 sous pression."
category: review-strategy
tags: ["portfolios", "weekly-review", "systematic-trading", "risk-management", "w12-2026"]
image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=680&h=400&fit=crop"
---

## 📊 État des Portfolios — Vendredi 20 Mars 2026, 17h CET

Check de fin de semaine avant fermeture du marché US. Analyse express de l'ensemble des 8 portfolios systematic trading.

> 💡 **Régime dominant : EARLY_RISK_OFF** — La majorité des stratégies US sont en mode prudent. Cash élevé = comportement attendu, pas une alerte.

## 🎯 Synthèse Globale

| Portfolio | Equity | Return | Max DD | Positions | Cash % | Régime |
|-----------|--------|--------|--------|-----------|--------|--------|
| 🇺🇸 US Stocks / Alpaca | $111,302 | <span style="color:#22c55e">+11.2%</span> | 0% | 8 | 11.8% | DSL |
| 🇺🇸 US T212 | €11,707 | <span style="color:#22c55e">+17.7%</span> | -0.6% | 5 | 39.7% | EARLY_RISK_OFF |
| 🇺🇸 US Small / Alpaca | $167.77 | <span style="color:#22c55e">+6.9%</span> | 0% | 7 | 12.0% | DSL |
| 🇪🇺 Ultra v5 / Saxo | €87,885 | <span style="color:#ef4444">-3.1%</span> | -13.6% | 11 | 0% | Multi-mode |
| 🇺🇸 US HighVol / Alpaca | $86,382 | <span style="color:#ef4444">-14.5%</span> | -15.0% | 2 | 34.8% | EARLY_RISK_OFF |
| 🇺🇸 US AmericanBulls | $87,044 | <span style="color:#ef4444">-5.1%</span> | -5.1% | 0 | 100% | RISK_OFF |
| 🇯🇵 JP Stocks / IBKR | ¥974,135 | — | — | 9 | 0% | Momentum |
| 🪙 Crypto / Binance | $20,000 | — | — | 14 | 0% | Hold |

## 📈 Top Performers de la Semaine

Le portfolio **US Stocks / Alpaca** continue sa lancée exceptionnelle avec un return de **+11.2%** et un nouveau sommet d'equity à $111,302 :

- **ERAS** <span style="color:#22c55e">+44.1%</span> — Le monstre du portefeuille, momentum explosif depuis février (position depuis le 03/02)
- **AXTI** <span style="color:#22c55e">+30.8%</span> — Breakout semiconducteurs confirmé, présent dans 5 portfolios
- **AGRO** <span style="color:#22c55e">+16.1%</span> — Breakout squeeze validé, volume x2

Le **US T212** affiche aussi une performance solide à **+17.7%**, porté par la position historique AXTI (+136.6% depuis le 6 février).

<div class="echarts-container" id="chart-equity" style="width:100%;height:400px;"></div>

<script>
var chartEquity = echarts.init(document.getElementById('chart-equity'));
chartEquity.setOption({
  title: { text: 'Equity Curves — Semaine W12', textStyle: { color: '#e5e7eb' } },
  tooltip: { trigger: 'axis' },
  legend: { data: ['US Stocks', 'US HighVol', 'Ultra v5', 'US T212'], textStyle: { color: '#9ca3af' } },
  grid: { left: '8%', right: '4%', bottom: '10%' },
  xAxis: { type: 'category', data: ['Lun 17', 'Mar 18', 'Mer 19', 'Jeu 19*'], axisLabel: { color: '#9ca3af' } },
  yAxis: [
    { type: 'value', name: 'USD', axisLabel: { color: '#9ca3af' }, splitLine: { lineStyle: { color: '#374151' } } }
  ],
  series: [
    { name: 'US Stocks', data: [104207, 110186, 111302, 111302], type: 'line', smooth: true, itemStyle: { color: '#22c55e' } },
    { name: 'US HighVol', data: [85911, 85892, 86382, 86382], type: 'line', smooth: true, itemStyle: { color: '#f59e0b' } },
    { name: 'Ultra v5', data: [88156, 101736, 87885, 87885], type: 'line', smooth: true, itemStyle: { color: '#8b5cf6' } },
    { name: 'US T212', data: [10840, 11173, 11699, 11707], type: 'line', smooth: true, itemStyle: { color: '#3b82f6' }, yAxisIndex: 0 }
  ]
});
window.addEventListener('resize', () => chartEquity.resize());
</script>

## ⚠️ Alertes & Points d'Attention

### 🟡 US HighVol — Drawdown à -15.0%

Le portfolio HighVol reste sous pression avec un drawdown de **-15.0%** depuis son pic à $102,119. Pas encore au seuil critique de -20%, mais à surveiller :

- Equity actuelle : $86,382 (vs peak $102,119)
- Seulement 2 positions ouvertes : CFLT (flat) et E (+2.2%)
- Ordre pending CNQ ($51.81 limit) — tentative de redéploiement
- Cash élevé à 34.8% — **normal en EARLY_RISK_OFF**

### 🟡 Ultra v5 / Saxo — Semaine volatile

Drop marqué de ~$101K à $87.9K cette semaine. Le portefeuille multiplie les stratégies (AF_LONG, BULL_LEVERAGED) avec des ETFs leveragés :

- **NVDL** (NVIDIA 2x) : <span style="color:#ef4444">-7.1%</span> — sous pression tech
- **CONL** (Coinbase 2x) : <span style="color:#ef4444">-3.6%</span> — crypto leveraged
- **TZA** (Russell 2000 Bear 3x) : <span style="color:#22c55e">+3.0%</span> — hedge actif
- Le mix long/hedge montre un positionnement ambigu

### 🔴 JP Stocks — Equity Curve Cassée (BUG PERSISTANT)

L'equity curve du portfolio JP affiche des valeurs incohérentes (oscillant entre ¥180M et ¥974K). Le champ `currency: EUR` est erroné — les positions et l'equity sont en **JPY**.

- Equity affichée : ¥974,135 (JPY)
- Max DD affiché : -99.5% — **BUG** (pas réel)
- Les positions individuelles sont saines : 7/9 en profit
- **6777.T** : <span style="color:#ef4444">-9.0%</span> — seul perdant significatif, stop serré à ¥19,402

### 🟠 Crypto — Feed Toujours Mort

Le feed Binance n'envoie pas les données d'entrée (entry=0 pour toutes les positions). Les prix sont à jour (BTC $70,375, ETH $2,147) mais les P&L % sont tous à 0. Pas de stops configurés.

## 🔧 Bugs & MISSING_STOP — Évolution

### MISSING_STOP cette semaine :

| Portfolio | Symbole | Action | Statut |
|-----------|---------|--------|--------|
| US Live Alpaca | AGRO | Auto-créé stop @ $11.90 | ✅ Résolu |
| US Live Alpaca | APEI | Auto-créé stop @ $47.60 | ✅ Résolu |
| US Live Alpaca | AXTI | Auto-créé stop @ $41.61 | ✅ Résolu |
| US Live Alpaca | BW | Auto-créé stop @ $12.73 | ✅ Résolu |
| US HighVol | CFLT | Consolidation 2 stops → 1 @ $30.77 | ✅ Résolu |

> ✅ **Bonne nouvelle** : Le système auto-corrige les MISSING_STOP au run suivant. Tous les stops manquants de la semaine ont été replacés automatiquement.

### Bugs persistants :
- 🔴 **JP equity curve** — Toujours cassée, valeurs incohérentes
- 🔴 **Crypto feed** — Entry à 0, P&L % non calculable
- 🟡 **JP currency tag** — Affiché EUR au lieu de JPY
- 🟡 **US AmericanBulls** — 100% cash depuis plusieurs semaines, stratégie inactive ?

<div class="echarts-container" id="chart-returns" style="width:100%;height:350px;"></div>

<script>
var chartReturns = echarts.init(document.getElementById('chart-returns'));
chartReturns.setOption({
  title: { text: 'Returns depuis Inception (%)', textStyle: { color: '#e5e7eb' } },
  tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
  grid: { left: '12%', right: '4%', bottom: '15%' },
  xAxis: { type: 'category', data: ['US Stocks', 'US T212', 'US Small', 'Ultra v5', 'AmBulls', 'HighVol'], axisLabel: { color: '#9ca3af', rotate: 20 } },
  yAxis: { type: 'value', name: '%', axisLabel: { color: '#9ca3af' }, splitLine: { lineStyle: { color: '#374151' } } },
  series: [{
    type: 'bar',
    data: [
      { value: 11.2, itemStyle: { color: '#22c55e' } },
      { value: 17.7, itemStyle: { color: '#22c55e' } },
      { value: 6.9, itemStyle: { color: '#22c55e' } },
      { value: -3.1, itemStyle: { color: '#ef4444' } },
      { value: -5.1, itemStyle: { color: '#ef4444' } },
      { value: -14.5, itemStyle: { color: '#ef4444' } }
    ],
    barWidth: '50%',
    label: { show: true, position: 'top', color: '#e5e7eb', formatter: '{c}%' }
  }]
});
window.addEventListener('resize', () => chartReturns.resize());
</script>

## 📋 Positions Communes Cross-Portfolio

Certains tickers apparaissent dans plusieurs portfolios, signe de conviction du screener :

| Ticker | Portfolios | P&L moyen | Stratégie |
|--------|-----------|-----------|-----------|
| **AXTI** | US, US Small, US T212, Ultra (pending) | +65.4% | Momentum semiconducteurs |
| **AGRO** | US, US Small, US T212, Ultra | +16.5% | Breakout squeeze |
| **BW** | US, US Small, US T212 | +5.8% | Breakout squeeze industriels |
| **APEI** | US, US Small | -2.5% | Momentum education |
| **TPH** | US Small, Ultra | +0.2% | Pre-squeeze housing |

> 💡 **AXTI est le trade de la semaine** — Présent dans 4 portfolios, breakout confirmé sur les semiconducteurs (AXT Inc., fabricant de substrats). La position T212 ouverte le 6 février affiche +136.6%.

## 🏁 Verdict Fin de Semaine

**Positif :**
- US Stocks en ATH ($111K), excellente diversification sectorielle
- US T212 en ATH (€11.7K), porté par AXTI historique
- Système MISSING_STOP fonctionne — auto-correction effective
- Régime EARLY_RISK_OFF = le cash élevé est une feature, pas un bug

**À surveiller :**
- Ultra v5 : le mix leveraged long + bear est instable, drop de -13% intra-semaine
- HighVol : DD à -15%, un stop de plus et on passe -20%
- JP : l'equity curve doit être corrigée côté backend (currency JPY vs EUR)

**Weekend :** Marchés fermés. Prochaine action lundi matin avec le scan pre-market.

---

**Sources :**
- [MarketWatch Portfolio Dashboard](https://portfolio.market-watch.xyz/)
- [Alpaca Markets — Paper Trading](https://alpaca.markets/)
- [Trading 212](https://www.trading212.com/)
- [Interactive Brokers — Japan](https://www.interactivebrokers.com/)
- [Saxo Bank](https://www.home.saxo/)
- [Yahoo Finance — AXTI](https://finance.yahoo.com/quote/AXTI)
- [Yahoo Finance — ERAS](https://finance.yahoo.com/quote/ERAS)
