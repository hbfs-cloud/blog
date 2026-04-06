---
title: "Revue Hebdomadaire Portfolios — Semaine du 31 Mars au 4 Avril 2026"
date: 2026-04-06T09:15:00
description: "Revue approfondie des 8 portfolios DailyTickers. HighVol en tête (+9.6%), nouveau peak equity. Régime EARLY_RISK_OFF persistant mais le bot achète quand même. Analyse complète des positions, drifts et bugs."
category: review-strategy
tags: ["portfolio", "systematic-trading", "weekly-review", "highvol", "alpaca", "regime", "risk-off"]
image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=680&h=400&fit=crop"
---

## 📊 Régime Global de Marché

**Régime détecté : EARLY_RISK_OFF** — confirmé sur US HighVol (snapshots du 31/03 au 02/04). Le régime a basculé de NEUTRAL (31 mars) à EARLY_RISK_OFF (depuis le 1er avril).

Le S&P 500 clôture à **6 582.69** au 2 avril (source : [Google Finance](https://www.google.com/finance/quote/.INX:INDEXSP)). Les marchés européens montrent de la dispersion : DAX à 23 168 (-0.56%), FTSE à 10 436 (+0.69%), CAC 40 à 7 962 (-0.24%).

Côté crypto : BTC à **$69 647** (+4.1% 24h), ETH à **$2 150** (+5.4%), SOL à **$82.26** (+3.2%) — données [CoinGecko](https://www.coingecko.com/).

> 💡 **Point clé** : Malgré le régime EARLY_RISK_OFF, le bot HighVol continue d'ouvrir des positions agressives (AEHR à 56.8% de l'equity). C'est cohérent avec le design : le régime influence la taille et le filtrage, pas un blocage total.

---

## 💰 Synthèse des Capitaux — Tous Portfolios

| Portfolio | Equity | Capital Initial | Rendement | Max DD | Sharpe | Devise |
|-----------|--------|----------------|-----------|--------|--------|--------|
| **US HighVol** | $110 709 | $101 033 | <span style="color:#22c55e">▲ +9.58%</span> | -13.4% | 2.58 | USD |
| **US Stocks / Alpaca** | $97 198 | $100 047 | <span style="color:#ef4444">▼ -2.85%</span> | -4.1% | -3.05 | USD |
| **US AmericanBulls** | $90 094 | $91 712 | <span style="color:#ef4444">▼ -1.76%</span> | -8.3% | 2.87 | USD |
| **Ultra v5 / Saxo** | €85 940 | €90 697 | <span style="color:#ef4444">▼ -5.24%</span> | -3.6% | 3.65 | EUR |
| **JP Stocks / IBKR** | ¥982 842* | ¥1 028 783* | <span style="color:#ef4444">▼ -4.47%</span> | -10.5% | 0.66 | JPY* |
| **US T212** | €12 053 | €9 949 | <span style="color:#22c55e">▲ +21.1%</span> | -2.9% | 3.78 | EUR |
| **US Small (Fractional)** | $172.25 | $156.96 | <span style="color:#22c55e">▲ +9.74%</span> | -2.3% | 3.73 | USD |
| **Crypto** | $20 000 | $20 000 | <span style="color:#f59e0b">● 0%</span> | 0% | 0 | USDC |

*\*JP equity affichée en EUR dans le système mais les positions sont en JPY — bug connu (P2).*

**Capital total estimé : ~$490 000** (conversion approximative EUR→USD à 1.08, JPY→USD à 0.0067)

---

## 📈 Détail par Portfolio

### 🏆 US HighVol Breakout / Alpaca — STAR DE LA SEMAINE

**Equity : $110 709 | Nouveau Peak** 🎉

Le portfolio HighVol atteint un **nouveau sommet historique** cette semaine, effaçant complètement le drawdown de -13.4% subi fin mars.

**Positions actives (3) :**

- **AEHR** (Aehr Test Systems) — 1 381 actions @ $37.82 → $45.10 | <span style="color:#22c55e">**+19.3% (+$10 057)**</span>
  - Acheté le 1er avril, Score=108, Stop trailing remonté à $37.87
  - 56.3% de l'equity sur cette seule position — **allocation très agressive**
- **BW** (Babcock & Wilcox) — 2 130 actions @ $13.99 → $15.83 | <span style="color:#22c55e">**+13.2% (+$3 919)**</span>
  - En position depuis le 23 mars, Stop remonté à $13.07
  - 30.5% de l'equity
- **APGE** (Apogee Therapeutics) — 28 actions @ $78.90 → $84.34 | <span style="color:#22c55e">**+6.9% (+$152)**</span>
  - Petite position (2.1%), Stop à $65.04 (risk 22.9% — très large)

**Évolution equity J-7 :** $95 429 (30/03) → $98 232 (31/03) → $98 733 (01/04) → $110 709 (02/04). Le rebond de +16% en 3 jours est impressionnant, porté principalement par AEHR.

**Actions de la semaine :** CREATE AEHR le 01/04, UPDATE trailing stops AEHR et BW le 02/04. CIFR et PL stoppées entre le 27/03 et le 30/03 (sorties visibles dans l'historique — les positions sont passées de 4 à 2 avant le rachat de AEHR).

> ⚠️ **Alerte concentration** : 86.8% de l'equity sur 2 titres (AEHR + BW). En cas de gap baissier simultané, le drawdown pourrait être sévère. Conforme au design "high vol" mais à surveiller.

---

### 🇺🇸 US Stocks / Alpaca — DSL MODE

**Equity : $97 198 | -2.85% vs capital initial**

13 positions actives en mode DSL (Dynamic Stop Loss), stratégie principalement pre_squeeze.

**Top positions :**
- **DAWN** (Day One Bio) — $14 264 (14.7%), +0.05%
- **EQIX** (Equinix) — $14 005 (14.4%), +1.63%
- **ACLX** (Arcellx) — $11 592 (11.9%), +0.19%
- **GLDD** — $9 299 (9.6%), +0.18%

**Cash : $14 887** (15.3% de l'equity) + 2 ordres LIMIT en attente (E et KELYB).

Portfolio bien diversifié, faible dispersion des PnL. Pas de grand gagnant ni grand perdant. Le Sharpe négatif (-3.05) reflète la sous-performance vs capital initial sur la période.

---

### 💎 Ultra v5 / Saxo — HEDGE ACTIF

**Equity : €85 940 | -5.24%**

15 positions dont des **hedges inverses** actifs :
- **SQQQ** — 57 actions, <span style="color:#ef4444">-9.41%</span> ($-457). Raison : *INVERSE_ENTRY crash=INVERSE_NASDAQ*
- **TZA** — 721 actions, <span style="color:#ef4444">-4.26%</span> ($-216). Hedge Russell 2000

**Winners :**
- **AGRO** — <span style="color:#22c55e">+14.78%</span> ($290), pyramidé L1
- **TTE** (TotalEnergies) — <span style="color:#22c55e">+8.50%</span> ($167)
- **STKL** — <span style="color:#22c55e">+1.34%</span>

> 💡 Le crash hedge via SQQQ est **voulu** (bug connu P3 — "Ultra v5 hedge crash voulu"). La perte de -9.4% sur SQQQ confirme que le marché a monté, ce qui est la bonne trajectoire pour les positions longues.

---

### 🇯🇵 JP Stocks / IBKR — MOMENTUM ROTATION

**Equity : ¥982 842 (affiché €982 842 — bug JPY/EUR)**

8 positions en momentum-rotation, toutes des valeurs japonaises (.T suffix) :

**Top performers :**
- **5801.T** (Furukawa Electric) — <span style="color:#22c55e">+38.65%</span> (¥6.99M PnL)
- **268A.T** — <span style="color:#22c55e">+25.7%</span> (¥5.16M PnL)
- **5706.T** (Mitsui Mining) — <span style="color:#22c55e">+5.04%</span> (¥907K PnL)

**Underperformers :**
- **6787.T** (Meiko Electronics) — <span style="color:#ef4444">-1.37%</span> (¥-259K)

**Nouvelles entrées cette semaine :** 6376.T (02/04), 2702.T (01/04), 9104.T (31/03). Le portfolio a été actif en ajoutant des positions.

Equity curve : pic à ¥190.7M → creux ¥170.6M (31/03, -10.5% DD) → rebond ¥180.8M (03/04). Volatilité élevée (vol annualisée 41.9%).

---

### 🐂 US AmericanBulls / Alpaca

**Equity : $90 094 | -1.76%**

Stratégie candlestick patterns. Seulement **2 positions** + $30 784 cash (34.2%) :
- **CORT** (Corcept Therapeutics) — <span style="color:#22c55e">+7.22%</span> ($3 012) — Signal BULLISH_BELT_HOLD
- **GPAT** — <span style="color:#22c55e">+0.28%</span> ($40) — Signal BULLISH_ENGULFING

Equity curve en forte hausse récente : $84 062 (27/03) → $90 094 (02/04), soit +7.2% en une semaine. Le portfolio sort de son drawdown de -8.3%.

---

### 📱 US T212 — MEILLEUR RENDEMENT

**Equity : €12 053 | +21.1% depuis inception** 🏆

12 positions en mode DSL, petit portfolio mais le meilleur rendement relatif.

**Star : AGRO** (+19.76%, +€216). Positions diversifiées : EHAB, MASI, ACLX, DAWN, SHEL, SLAB, STKL, TRGP, PKST, TS, VRE.

1 ordre en attente : achat E (Eni) en LIMIT à €58.81.

**Equity curve en baisse continue depuis le pic** : €14 306 → €13 889. Le portfolio perd -2.9% depuis son pic malgré le rendement positif global. La devise EUR impacte.

---

### 🪙 Crypto — FEED MORT

**Equity affichée : $20 000 | Rendement : 0%**

14 positions, mais **TOUTES les données sont stale** : entries à 0, PnL calculé comme si acheté à 0 (d'où des PnL absurdes). Le feed Binance est mort (bug P0).

Prices instantanées réelles (CoinGecko) vs prix affichés :
- BTC : $69 647 (CoinGecko) vs $66 851 (portfolio) — **stale de ~$2 800**
- ETH : $2 150 vs $2 053 — stale
- SOL : $82.26 vs $80.19 — stale

> 🔴 **BUG P0** : Le feed Binance ne met plus à jour les prix en temps réel. Les positions existent mais les métriques sont inutilisables. Aucune action possible tant que le feed n'est pas réparé.

---

## 🔄 Drift Live vs Backtest

**US HighVol** (Backtest CAGR: 116% sans slippage, -16.5% avec) :
- Le +9.58% sur ~2 semaines est un bon début, mais trop tôt pour comparer
- La concentration à 86.8% sur 2 titres est cohérente avec le backtest qui montre des positions concentrées
- Le drawdown de -13.4% puis recovery complète est typique du profil haute volatilité

**US Stocks** (Backtest CAGR: 52.7%) :
- -2.85% vs backtest attendu : en retard, mais période courte
- Le Sharpe négatif est un warning — le mode DSL ne capture pas encore de momentum

**JP Stocks** :
- Vol annualisée 41.9%, le Sharpe de 0.66 est faible pour un portfolio momentum
- Le drawdown de -10.5% est dans les limites du backtest

---

## 📉 Benchmarks Marché

| Indice | Valeur | Variation récente | Source |
|--------|--------|:---------:|--------|
| S&P 500 | 6 582.69 | — | [Google Finance](https://www.google.com/finance/quote/.INX:INDEXSP) |
| DAX | 23 168 | -0.56% | [Google Finance](https://www.google.com/finance/quote/DAX:INDEXDB) |
| FTSE 100 | 10 436 | +0.69% | [Google Finance](https://www.google.com/finance/quote/UKX:INDEXFTSE) |
| CAC 40 | 7 962 | -0.24% | [Google Finance](https://www.google.com/finance/quote/PX1:INDEXEURO) |
| BTC/USD | $69 647 | +4.07% 24h | [CoinGecko](https://www.coingecko.com/en/coins/bitcoin) |
| ETH/USD | $2 150 | +5.39% 24h | [CoinGecko](https://www.coingecko.com/en/coins/ethereum) |

---

## 🐛 Suivi Bugs

- 🔴 **P0 — Crypto Feed Binance mort** : Aucune mise à jour de prix en temps réel. Les positions crypto sont « gelées ». Impact : impossible d'évaluer la performance réelle du portfolio crypto.
- 🟡 **P1 — MISSING_STOP Alpaca loop** : Plusieurs stops en état PENDING_REPLACE sur HighVol (AEHR, BW). Le trailing stop update semble fonctionner (stops remontés avec succès) mais des ordres legacy restent en double.
- 🟡 **P2 — JP equity en JPY pas EUR** : L'equity JP est affichée en EUR dans le dashboard mais les montants sont en JPY. Facteur ~150x de distorsion sur les totaux.
- 🟢 **P3 — Ultra v5 hedge crash voulu** : SQQQ en perte est le comportement attendu en marché haussier. Pas un bug, c'est le design.

---

## 🔍 Analyse Critique Honnête

**Ce qui va bien :**
- HighVol retrouve son peak après un drawdown sévère — le système récupère
- Les trailing stops fonctionnent (AEHR: $37.02 → $37.87, BW: $12.08 → $13.07)
- AmericanBulls sort de son drawdown avec +7.2% en une semaine
- T212 maintient le meilleur rendement global (+21.1%)

**Ce qui inquiète :**
- **Concentration HighVol** : 86.8% sur 2 titres. Un gap down de -10% sur AEHR effacerait ~$6K instantanément
- **US Stocks Sharpe négatif** : Le portfolio principal ne génère pas d'alpha
- **JP volatilité excessive** : Vol 41.9% avec Sharpe 0.66 = ratio risk/reward médiocre
- **Crypto inutilisable** : Le feed Binance mort rend le portfolio crypto opaque
- **4 portfolios sur 7 en négatif** : Seuls HighVol, T212 et Small sont en positif
- **Régime EARLY_RISK_OFF ignoré** : Le bot achète AEHR à 56.8% de l'equity malgré un signal risk-off

> ⚠️ **L'éléphant dans la pièce** : Le système génère de l'alpha uniquement sur HighVol et les micro-portfolios (T212, Small). Les 3 portfolios de taille significative (US $97K, Ultra €86K, JP ¥983K) sont tous en négatif. La stratégie concentrée fonctionne quand ça marche (AEHR), mais le risque de ruine est réel.

---

## 🎯 Top 3 Actions Prioritaires

1. **🔴 Réparer le feed Crypto Binance** — P0, bloque toute visibilité sur $20K de capital. Investiguer si c'est un changement d'API Binance ou un bug interne.

2. **🟡 Monitorer la concentration HighVol** — Le stop de AEHR est à $37.87 soit -16% sous le cours actuel. Si le titre gap à ce niveau, le drawdown serait de ~$10K (9% de l'equity). Envisager de resserrer le trailing stop ou diversifier.

3. **🟡 Auditer le Sharpe négatif de US Stocks** — 13 positions pour un rendement de -2.85% : le mode DSL ne capture pas de momentum. Comparer les entrées récentes (scores élevés: DAWN 165, ACLX 159, EHAB 133) avec les prix actuels — tous flat ou légèrement négatifs. Le problème est peut-être le timing d'entrée.

---

## 📊 Évolution Equity — Tous Portfolios

<div class="echarts-container" id="chart-equity-highvol" style="width:100%;height:400px;"></div>

<script>
var chart1 = echarts.init(document.getElementById('chart-equity-highvol'));
chart1.setOption({
  title: { text: 'US HighVol — Equity Curve', textStyle: { color: '#e5e7eb' } },
  tooltip: { trigger: 'axis' },
  xAxis: { type: 'category', data: ['23/03','24/03','25/03','25/03','25/03','25/03','26/03','27/03','30/03','31/03','01/04','02/04'], axisLabel: { color: '#9ca3af' } },
  yAxis: { type: 'value', name: 'USD', min: 90000, axisLabel: { color: '#9ca3af' } },
  series: [{
    data: [100000, 101826, 110246, 108542, 108631, 107987, 108261, 103030, 95429, 98232, 98733, 110709],
    type: 'line', smooth: true,
    areaStyle: { color: { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: 'rgba(245,158,11,0.4)' }, { offset: 1, color: 'rgba(245,158,11,0.05)' }] } },
    lineStyle: { color: '#f59e0b', width: 2 },
    itemStyle: { color: '#f59e0b' },
    markPoint: { data: [{ type: 'max', name: 'Peak' }, { type: 'min', name: 'Trough' }] }
  }]
});
window.addEventListener('resize', () => chart1.resize());
</script>

<div class="echarts-container" id="chart-equity-all" style="width:100%;height:400px;"></div>

<script>
var chart2 = echarts.init(document.getElementById('chart-equity-all'));
chart2.setOption({
  title: { text: 'Rendement vs Capital Initial (%)', textStyle: { color: '#e5e7eb' } },
  tooltip: { trigger: 'axis' },
  xAxis: { type: 'category', data: ['HighVol','T212','Small','AmBulls','US','JP','Ultra','Crypto'], axisLabel: { color: '#9ca3af', rotate: 30 } },
  yAxis: { type: 'value', name: '%', axisLabel: { color: '#9ca3af' } },
  series: [{
    data: [
      { value: 9.58, itemStyle: { color: '#22c55e' } },
      { value: 21.14, itemStyle: { color: '#22c55e' } },
      { value: 9.74, itemStyle: { color: '#22c55e' } },
      { value: -1.76, itemStyle: { color: '#ef4444' } },
      { value: -2.85, itemStyle: { color: '#ef4444' } },
      { value: -4.47, itemStyle: { color: '#ef4444' } },
      { value: -5.24, itemStyle: { color: '#ef4444' } },
      { value: 0, itemStyle: { color: '#6b7280' } }
    ],
    type: 'bar',
    label: { show: true, position: 'top', formatter: '{c}%', color: '#e5e7eb' }
  }]
});
window.addEventListener('resize', () => chart2.resize());
</script>

<div class="echarts-container" id="chart-positions" style="width:100%;height:400px;"></div>

<script>
var chart3 = echarts.init(document.getElementById('chart-positions'));
chart3.setOption({
  title: { text: 'HighVol — Répartition par Position', textStyle: { color: '#e5e7eb' } },
  tooltip: { trigger: 'item', formatter: '{b}: ${c} ({d}%)' },
  series: [{
    type: 'pie', radius: ['40%', '70%'],
    data: [
      { value: 62283, name: 'AEHR', itemStyle: { color: '#f59e0b' } },
      { value: 33718, name: 'BW', itemStyle: { color: '#3b82f6' } },
      { value: 2362, name: 'APGE', itemStyle: { color: '#8b5cf6' } },
      { value: 12347, name: 'Cash', itemStyle: { color: '#6b7280' } }
    ],
    label: { color: '#e5e7eb' }
  }]
});
window.addEventListener('resize', () => chart3.resize());
</script>

---

**Sources :**
- [DailyTickers Portfolio Dashboard](https://portfolio.dailytickers.com/dashboard)
- [DailyTickers Reports API](https://reports.dailytickers.com/live-portfolios.json)
- [Google Finance — S&P 500](https://www.google.com/finance/quote/.INX:INDEXSP)
- [CoinGecko — Bitcoin](https://www.coingecko.com/en/coins/bitcoin)
- [CoinGecko — Ethereum](https://www.coingecko.com/en/coins/ethereum)
- [Alpaca Markets](https://alpaca.markets/)
- [Trading 212](https://www.trading212.com/)
- [Interactive Brokers](https://www.interactivebrokers.com/)
