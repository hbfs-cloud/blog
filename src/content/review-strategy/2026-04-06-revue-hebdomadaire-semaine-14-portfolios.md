---
title: "Revue Hebdomadaire Portfolios — Semaine 14 (31 mars – 4 avril 2026)"
date: 2026-04-06T10:00:00
description: "Revue approfondie des 7 portfolios systématiques DailyTickers. HighVol en explosion (+16% en 4j), AmericanBulls en recovery, mais US Stocks en Sharpe négatif. Post-Liberation Day, tous les yeux sont sur le gap d'ouverture lundi."
category: review-strategy
tags: ["portfolio", "systematic-trading", "weekly-review", "highvol", "risk-off", "liberation-day", "alpaca", "saxo", "ibkr"]
image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=680&h=400&fit=crop"
---

## 🌐 Régime Global de Marché

**Régime dominant : EARLY_RISK_OFF** — Score ~0.31, stable depuis 2+ semaines.

Le marché opère dans une zone de transition. Le score de régime oscille entre 0.28 et 0.33 depuis mi-mars, indiquant que le système réduit progressivement l'exposition mais maintient des positions sur les setups à forte conviction. Le "Liberation Day" (2 avril) avec les tarifs Trump massifs annoncés en after-hours n'a pas encore été intégré dans les prix de clôture — **le vrai test arrive lundi 7 avril à l'ouverture**.

> ⚠️ **Point critique** : Les données de cette revue reflètent la clôture du 2-3 avril. L'impact des tarifs Trump ne sera visible qu'à partir du 7 avril. Toute analyse de performance est donc "pré-choc".

---

## 💰 Synthèse des Capitaux — Tous Portfolios

| Portfolio | Equity | Devise | Capital Initial | Rendement | Max DD | Sharpe | Positions |
|-----------|--------|--------|-----------------|-----------|--------|--------|-----------|
| **US HighVol** 🏆 | $110,709 | USD | $101,033 | <span style="color:#22c55e">+9.58%</span> | -13.44% | 2.58 | 3 |
| **US T212** 🥈 | €12,053 | EUR | €9,949 | <span style="color:#22c55e">+21.14%</span> | -2.92% | 3.78 | 12 |
| **US Small** | $172 | USD | $157 | <span style="color:#22c55e">+9.74%</span> | -2.26% | 3.73 | 10 |
| **US AmBulls** | $90,094 | USD | $91,712 | <span style="color:#ef4444">-1.76%</span> | -8.34% | 2.87 | 2 |
| **US Stocks** | $97,198 | USD | $100,047 | <span style="color:#ef4444">-2.85%</span> | -4.08% | -3.05 | 13 |
| **JP Stocks** | ¥982,842* | EUR* | ¥1,028,783* | <span style="color:#ef4444">-4.47%</span> | -10.51% | 0.66 | 8 |
| **Ultra v5** | €85,940 | EUR | €90,697 | <span style="color:#ef4444">-5.24%</span> | -3.62% | 3.65 | 15 |
| **Crypto** 🔴 | $20,000 | USDC | $20,000 | 0% | 0% | 0 | 14 |

*\*JP : equity affichée en EUR mais valeurs en JPY — bug P2 connu*

**Capital total estimé** : ~$416K USD (hors JP distorsion JPY/EUR et crypto gelée)

<div class="echarts-container" id="chart-returns" style="width:100%;height:400px;"></div>

<script>
var chartReturns = echarts.init(document.getElementById('chart-returns'));
chartReturns.setOption({
  tooltip: { trigger: 'axis', formatter: function(p) { return p[0].name + ': ' + p[0].value + '%'; } },
  xAxis: { type: 'category', data: ['T212','Small','HighVol','AmBulls','US Stocks','JP','Ultra','Crypto'], axisLabel: { color: '#9ca3af', rotate: 25 } },
  yAxis: { type: 'value', name: '%', axisLabel: { color: '#9ca3af' } },
  series: [{
    data: [
      { value: 21.14, itemStyle: { color: '#22c55e' } },
      { value: 9.74, itemStyle: { color: '#22c55e' } },
      { value: 9.58, itemStyle: { color: '#22c55e' } },
      { value: -1.76, itemStyle: { color: '#ef4444' } },
      { value: -2.85, itemStyle: { color: '#ef4444' } },
      { value: -4.47, itemStyle: { color: '#ef4444' } },
      { value: -5.24, itemStyle: { color: '#ef4444' } },
      { value: 0, itemStyle: { color: '#6b7280' } }
    ],
    type: 'bar',
    label: { show: true, position: 'top', formatter: '{c}%', color: '#e5e7eb', fontSize: 11 }
  }],
  grid: { left: '8%', right: '4%', bottom: '15%', top: '8%' }
});
window.addEventListener('resize', () => chartReturns.resize());
</script>

---

## 🚀 US HighVol Breakout / Alpaca — STAR DE LA SEMAINE

<div class="echarts-container" id="chart-highvol" style="width:100%;height:350px;"></div>

<script>
var chartHV = echarts.init(document.getElementById('chart-highvol'));
chartHV.setOption({
  tooltip: { trigger: 'axis', formatter: function(p) { return p[0].axisValue + '<br/>Equity: $' + p[0].value.toLocaleString(); } },
  xAxis: { type: 'category', data: ['25/03','25/03b','27/03','30/03','31/03','01/04','02/04'], axisLabel: { color: '#9ca3af' } },
  yAxis: { type: 'value', name: 'USD', min: 92000, axisLabel: { color: '#9ca3af', formatter: function(v){return '$'+v/1000+'K';} } },
  series: [{
    data: [107901, 103030, 99972, 95429, 98232, 98733, 110709],
    type: 'line', smooth: true,
    areaStyle: { color: { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: 'rgba(59,130,246,0.4)' }, { offset: 1, color: 'rgba(59,130,246,0.05)' }] } },
    lineStyle: { color: '#3b82f6', width: 2 },
    itemStyle: { color: '#3b82f6' },
    markPoint: { data: [{ type: 'max', name: 'Peak' }, { type: 'min', name: 'Trough' }] }
  }],
  grid: { left: '10%', right: '4%', bottom: '10%', top: '8%' }
});
window.addEventListener('resize', () => chartHV.resize());
</script>

**Equity : $110,709** | Peak all-time 🏆 | Ret: +9.58% | Sharpe: 2.58

**Delta J-7** : $107,901 (25/03) → $110,709 (02/04) = <span style="color:#22c55e">**+$2,808 (+2.6%)**</span>

Mais le vrai mouvement est le **V-shape spectaculaire** : creux à $95,429 (30/03, DD -13.4%) puis explosion à $110,709 (02/04) soit **+16.0% en 3 jours**, porté par AEHR.

| Ticker | Qty | Entrée | Prix | P&L | P&L % | % Portfolio | Stop | Risk |
|--------|-----|--------|------|-----|-------|-------------|------|------|
| **AEHR** | 1,381 | $37.82 | $45.10 | <span style="color:#22c55e">+$10,057</span> | <span style="color:#22c55e">+19.3%</span> | 56.3% | $37.87 | 16.0% |
| **BW** | 2,130 | $13.99 | $15.83 | <span style="color:#22c55e">+$3,919</span> | <span style="color:#22c55e">+13.2%</span> | 30.5% | $13.07 | 17.4% |
| **APGE** | 28 | $78.90 | $84.34 | <span style="color:#22c55e">+$152</span> | <span style="color:#22c55e">+6.9%</span> | 2.1% | $65.04 | 22.9% |
| Cash | — | — | — | — | — | 11.2% | — | — |

> ⚠️ **Concentration extrême** : AEHR à 56.3% + BW à 30.5% = **86.8% sur 2 titres**. Cohérent avec le backtest HighVol (mode concentration) mais un gap de -10% sur AEHR effacerait ~$6,200 instantanément.

---

## 📊 US Stocks / Alpaca — SHARPE NÉGATIF

**Equity : $97,198** | Ret: -2.85% | Sharpe: **-3.05** ⚠️ | DD: -4.08%

**Delta J-7** : $101,052 (25/03) → $97,198 (02/04) = <span style="color:#ef4444">**-$3,854 (-3.8%)**</span>

13 positions diversifiées en mode DSL, plus 2 ordres en attente (E à $58.81, KELYB à $16.48). Cash : $14,887 (15.3%).

| Ticker | P&L | P&L % | Mkt Value |
|--------|-----|-------|-----------|
| EQIX | <span style="color:#22c55e">+$224</span> | +1.63% | $14,005 |
| EHAB | <span style="color:#22c55e">+$64</span> | +0.72% | $8,974 |
| CFFN | <span style="color:#22c55e">+$36</span> | +2.11% | $1,718 |
| DAWN | <span style="color:#22c55e">+$7</span> | +0.05% | $14,264 |
| MCW | <span style="color:#ef4444">-$27</span> | -0.29% | $9,284 |
| JNJ | <span style="color:#ef4444">-$32</span> | -1.19% | $2,673 |

> 💡 **Diagnostic** : Le Sharpe négatif reflète une sous-performance régulière sur 2+ semaines. Les positions DSL n'ont pas capturé de momentum — quasi tous les titres sont flat ou légèrement négatifs malgré des scores élevés à l'entrée. Le mode DSL en EARLY_RISK_OFF sélectionne des titres défensifs qui, paradoxalement, ne bénéficient pas du rebond.

---

## 💎 Ultra v5 / Saxo — HEDGE ACTIF

**Equity : €85,940** | Ret: -5.24% | Sharpe: 3.65 | DD: -3.62%

**Delta J-7** : €101,048 (25/03) → €99,032 (02/04) = <span style="color:#ef4444">**-€2,016 (-2.0%)**</span>

15 positions dont **hedges inverses** actifs :

| Ticker | P&L | P&L % | Rôle |
|--------|-----|-------|------|
| **SQQQ** | <span style="color:#ef4444">-$457</span> | -9.41% | Hedge inverse Nasdaq |
| **TZA** | <span style="color:#ef4444">-$216</span> | -4.26% | Hedge Russell 2000 |
| **AGRO** | <span style="color:#22c55e">+$290</span> | +14.78% | Long — Pyramidé L1 |
| **TTE** | <span style="color:#22c55e">+$167</span> | +8.50% | Long — Énergie |
| **STKL** | <span style="color:#22c55e">+$188</span> | +1.34% | Long |
| **CWBC** | <span style="color:#ef4444">-$212</span> | -1.36% | Long |

> 💡 Le crash hedge via SQQQ est **voulu** (bug P3 connu). La perte de -9.4% sur SQQQ signifie que le Nasdaq a monté — bonne nouvelle pour les positions longues. Le portfolio affiche le Sharpe le plus élevé (3.65) grâce à sa construction hedgée.

---

## 🇯🇵 JP Stocks / IBKR — MOMENTUM ROTATION

**Equity : ¥982,842** (affiché €982,842 — **bug JPY/EUR P2**) | Ret: -4.47% | Sharpe: 0.66 | DD: -10.51%

**Delta J-7** : ¥186.7M (25/03) → ¥180.8M (03/04) = <span style="color:#ef4444">**-¥5.9M (-3.2%)**</span>

8 positions en momentum-rotation, toutes des valeurs japonaises (.T suffix) :

| Ticker | P&L | P&L % | Entrée récente ? |
|--------|-----|-------|------------------|
| **5801.T** (Furukawa Electric) | <span style="color:#22c55e">+¥6.99M</span> | +38.65% | — |
| **268A.T** | <span style="color:#22c55e">+¥5.16M</span> | +25.70% | — |
| **5706.T** (Mitsui Mining) | <span style="color:#22c55e">+¥907K</span> | +5.04% | — |
| **2702.T** | <span style="color:#22c55e">+¥284K</span> | +1.49% | ✅ 01/04 |
| **5727.T** | <span style="color:#22c55e">+¥253K</span> | +1.26% | — |
| **9104.T** | <span style="color:#22c55e">+¥232K</span> | +1.15% | ✅ 31/03 |
| **6376.T** | <span style="color:#22c55e">+¥94K</span> | +0.45% | ✅ 02/04 |
| **6787.T** (Meiko Electronics) | <span style="color:#ef4444">-¥259K</span> | -1.37% | ✅ 02/04 |

**Volatilité annualisée : 41.9%** — élevée mais cohérente avec le style momentum JP. Le Nikkei 225 cote à **53,414** (source : [Google Finance](https://www.google.com/finance/quote/NI225:INDEXNIKKEI)).

Le portfolio a été **actif cette semaine** avec 3 nouvelles entrées (6376.T, 2702.T, 9104.T). Le DD de -10.5% (31/03, ¥170.6M) a été partiellement récupéré (+6% depuis le creux).

---

## 🐂 US AmericanBulls Expert++ / Alpaca — RECOVERY

**Equity : $90,094** | Ret: -1.76% | Sharpe: 2.87 | DD: -8.34%

**Delta J-7** : $85,884 (25/03) → $90,094 (02/04) = <span style="color:#22c55e">**+$4,210 (+4.9%)**</span> 🚀

<div class="echarts-container" id="chart-ambull" style="width:100%;height:300px;"></div>

<script>
var chartAB = echarts.init(document.getElementById('chart-ambull'));
chartAB.setOption({
  tooltip: { trigger: 'axis' },
  xAxis: { type: 'category', data: ['25/03','25/03b','27/03','30/03','31/03','01/04','02/04'], axisLabel: { color: '#9ca3af' } },
  yAxis: { type: 'value', name: 'USD', min: 83000, axisLabel: { color: '#9ca3af', formatter: function(v){return '$'+v/1000+'K';} } },
  series: [{
    data: [85689, 85884, 84062, 85452, 87758, 89103, 90094],
    type: 'line', smooth: true,
    areaStyle: { color: { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: 'rgba(34,197,94,0.3)' }, { offset: 1, color: 'rgba(34,197,94,0.02)' }] } },
    lineStyle: { color: '#22c55e', width: 2 },
    itemStyle: { color: '#22c55e' }
  }],
  grid: { left: '10%', right: '4%', bottom: '10%', top: '8%' }
});
window.addEventListener('resize', () => chartAB.resize());
</script>

Seulement **2 positions** + $30,784 cash (34.2%) :
- **CORT** (Corcept Therapeutics) — <span style="color:#22c55e">+$3,012 (+7.22%)</span> — Signal BULLISH_BELT_HOLD
- **GPAT** — <span style="color:#22c55e">+$40 (+0.28%)</span> — Signal BULLISH_ENGULFING

La stratégie candlestick patterns est en forte recovery : +$6,032 depuis le creux du 27/03 ($84,062). Le cash élevé (34.2%) est **cohérent avec le régime EARLY_RISK_OFF** — le système attend des setups haute-conviction.

---

## 📱 US T212 — MEILLEUR RENDEMENT RELATIF

**Equity : €12,053** | Ret: <span style="color:#22c55e">+21.14%</span> 🏆 | Sharpe: 3.78 | DD: -2.92%

**Delta J-7 (equity curve)** : €14,045 (25/03) → €13,889 (02/04) = <span style="color:#ef4444">**-€156 (-1.1%)**</span>

12 positions diversifiées. Star : **AGRO** <span style="color:#22c55e">+19.76%</span> (+€216). Le DD de -2.92% depuis le peak €14,306 s'est légèrement creusé. 1 ordre en attente (E à $58.81).

> ⚠️ **Divergence equity** : L'equity affichée (€12,053) diverge de l'equity curve (€13,889). Potentielle conversion devise ou recalcul du capital initial.

---

## 🔬 US Small / Alpaca (Fractional)

**Equity : $172.25** | Ret: +9.74% | Sharpe: 3.73 | DD: -2.26%

**Delta J-7** : $170.92 → $172.25 = <span style="color:#22c55e">**+$1.33 (+0.8%)**</span>

Micro-portfolio miroir (10 positions fractionnelles). Star : **AGRO** <span style="color:#22c55e">+20.7%</span>. Performance cohérente avec T212 et Ultra qui partagent les mêmes signaux.

---

## 🪙 Crypto — FEED MORT 🔴

**Equity affichée : $20,000** | Rendement : 0%

14 positions mais **toutes les données sont stale** : entries à 0, PnL calculés comme si achetés à 0. Le feed Binance est mort (bug P0).

Prix réels (CoinGecko, 6 avril) vs prix portfolio (stale du 3 avril) :
- **BTC** : $69,725 réel vs $66,851 affiché (<span style="color:#22c55e">+4.0% 24h</span>)
- **ETH** : $2,151 réel vs $2,053 affiché (<span style="color:#22c55e">+5.2% 24h</span>)
- **SOL** : $82.49 réel vs $80.19 affiché (<span style="color:#22c55e">+3.3% 24h</span>)

> 🔴 **BUG P0** : Aucune métriques exploitables. Impact : $20K de capital opaque.

---

## 🔄 Drift Live vs Backtest

**US HighVol** (Backtest CAGR: 116% sans slippage, -16.5% avec) :
- +9.58% en ~2 semaines — rythme compatible avec le backtest haute-vol
- La concentration à 86.8% sur 2 titres est **cohérente** avec le backtest qui favorise les paris directionnels
- Le V-shape (-13.4% DD → recovery complète) est un pattern typique du profil

**US Stocks** (Backtest CAGR: 52.7%) :
- -2.85% après 2+ semaines — **en retard significatif**
- Le Sharpe négatif (-3.05) est un red flag — le mode DSL en EARLY_RISK_OFF ne capture pas de momentum
- 13 positions très diversifiées = dilution de l'alpha potentiel

**JP Stocks** :
- Vol annualisée 41.9%, Sharpe 0.66 — ratio risk/reward médiocre
- Le DD de -10.5% est dans les bornes du backtest momentum JP

---

## 📉 Benchmarks Marché

| Indice | Valeur | Source |
|--------|--------|--------|
| S&P 500 | 6,582.69 | [Google Finance](https://www.google.com/finance/quote/.INX:INDEXSP) |
| Nikkei 225 | 53,413.68 | [Google Finance](https://www.google.com/finance/quote/NI225:INDEXNIKKEI) |
| DAX | 23,168.08 (-0.56%) | [Google Finance](https://www.google.com/finance/quote/DAX:INDEXDB) |
| FTSE 100 | 10,436.29 (+0.69%) | [Google Finance](https://www.google.com/finance/quote/UKX:INDEXFTSE) |
| CAC 40 | 7,962.39 (-0.24%) | [Google Finance](https://www.google.com/finance/quote/PX1:INDEXEURO) |
| BTC/USD | $69,725 (+4.0% 24h) | [CoinGecko](https://www.coingecko.com/en/coins/bitcoin) |
| ETH/USD | $2,151 (+5.2% 24h) | [CoinGecko](https://www.coingecko.com/en/coins/ethereum) |
| SOL/USD | $82.49 (+3.3% 24h) | [CoinGecko](https://www.coingecko.com/en/coins/solana) |

---

## 🐛 Suivi Bugs

| Prio | Bug | Statut | Impact |
|------|-----|--------|--------|
| 🔴 **P0** | Feed Crypto Binance mort | **Ouvert** | $20K capital aveugle, tous les PnL à 0 |
| 🟡 **P1** | MISSING_STOP Alpaca loop | **Amélioré** | 0 MISSING_STOP le 02/04 (vs 7 le 01/04), mais pattern récurrent |
| 🟡 **P2** | JP equity en JPY pas EUR | **Ouvert** | Equity curve en ¥170M affiché comme €, fausse les totaux |
| 🟢 **P3** | Ultra v5 hedge crash voulu | **By design** | SQQQ -9.4% = hedge normal en marché haussier |

---

## 🔍 Analyse Critique Honnête

**Ce qui va bien :**
- ✅ **HighVol V-shape** : Recovery complète de -13.4% à new ATH en 3 jours — le système fonctionne
- ✅ **AmericanBulls recovery** : +4.9% J-7, sort du drawdown de -8.3%. CORT porte le portfolio
- ✅ **Trailing stops fonctionnels** : AEHR $37.02→$37.87, BW $12.08→$13.07 — mécanique propre
- ✅ **T212 meilleur rendement** : +21.14%, Sharpe 3.78 — le mini-portfolio surperforme

**Ce qui inquiète :**
- ⚠️ **Concentration HighVol** : 86.8% sur 2 titres = risque de gap catastrophique
- ⚠️ **US Stocks Sharpe -3.05** : Le portfolio principal ($97K) détruit de la valeur
- ⚠️ **JP volatilité excessive** : 41.9% vol pour Sharpe 0.66 = mauvais rendement ajusté au risque
- ⚠️ **4 portfolios sur 7 en négatif** : Seuls HighVol, T212 et Small sont en positif
- ⚠️ **Liberation Day non pricé** : Les tarifs Trump du 2 avril en after-hours vont impacter lundi. SHEL, TRGP, SLAB, et tout le portefeuille sont exposés au gap baissier

> 💡 **L'éléphant dans la pièce** : Le système génère de l'alpha uniquement sur HighVol et les micro-portfolios (T212, Small). Les 3 portfolios de taille significative (US $97K, Ultra €86K, JP ¥983K) sont **tous en négatif**. La question est : HighVol peut-il compenser les pertes des 3 autres à long terme ?

---

## 🎯 Top 3 Actions Prioritaires

1. **🔴 Réparer le feed Crypto Binance** — P0. $20K de capital sans visibilité depuis des semaines. Vérifier si changement d'API Binance ou bug interne du connecteur.

2. **🟡 Préparer le gap lundi 7 avril** — Les tarifs Trump "Liberation Day" vont provoquer un gap. Vérifier que tous les trailing stops sont en place et à jour. AEHR (stop $37.87, prix $45.10 = 16% de marge) et BW (stop $13.07, prix $15.83 = 17.4% de marge) ont des buffers suffisants, mais le slippage en gap est imprévisible.

3. **🟡 Diagnostiquer le Sharpe négatif de US Stocks** — -3.05 sur le portfolio de $97K. Le mode DSL en EARLY_RISK_OFF ne capture pas de momentum. Comparer les métriques d'entrée (scores élevés : DAWN, ACLX, EHAB) avec la réalité des prix. Possible issue de timing ou de sélectivité insuffisante.

---

<div class="echarts-container" id="chart-equity-all" style="width:100%;height:400px;"></div>

<script>
var chartAll = echarts.init(document.getElementById('chart-equity-all'));
chartAll.setOption({
  tooltip: { trigger: 'axis' },
  legend: { data: ['HighVol','US Stocks','AmBulls','Ultra v5'], textStyle: { color: '#9ca3af' } },
  xAxis: { type: 'category', data: ['25/03','27/03','30/03','31/03','01/04','02/04'], axisLabel: { color: '#9ca3af' } },
  yAxis: { type: 'value', name: 'Normalisé (base 100)', axisLabel: { color: '#9ca3af' } },
  series: [
    { name: 'HighVol', data: [100, 92.7, 88.5, 91.1, 91.6, 102.6], type: 'line', smooth: true, lineStyle: { color: '#3b82f6' }, itemStyle: { color: '#3b82f6' } },
    { name: 'US Stocks', data: [100, 99.7, 99.5, 96.9, 96.0, 96.2], type: 'line', smooth: true, lineStyle: { color: '#ef4444' }, itemStyle: { color: '#ef4444' } },
    { name: 'AmBulls', data: [100, 97.9, 99.5, 102.2, 103.7, 104.9], type: 'line', smooth: true, lineStyle: { color: '#22c55e' }, itemStyle: { color: '#22c55e' } },
    { name: 'Ultra v5', data: [100, 99.9, 100.9, 98.8, 97.9, 98.0], type: 'line', smooth: true, lineStyle: { color: '#f59e0b' }, itemStyle: { color: '#f59e0b' } }
  ],
  grid: { left: '8%', right: '4%', bottom: '10%', top: '15%' }
});
window.addEventListener('resize', () => chartAll.resize());
</script>

<div class="echarts-container" id="chart-highvol-positions" style="width:100%;height:350px;"></div>

<script>
var chartPie = echarts.init(document.getElementById('chart-highvol-positions'));
chartPie.setOption({
  tooltip: { trigger: 'item', formatter: '{b}: ${c} ({d}%)' },
  series: [{
    type: 'pie', radius: ['40%', '70%'],
    data: [
      { value: 62283, name: 'AEHR', itemStyle: { color: '#3b82f6' } },
      { value: 33718, name: 'BW', itemStyle: { color: '#f59e0b' } },
      { value: 2362, name: 'APGE', itemStyle: { color: '#8b5cf6' } },
      { value: 12347, name: 'Cash', itemStyle: { color: '#6b7280' } }
    ],
    label: { color: '#e5e7eb', formatter: '{b}\n{d}%' }
  }]
});
window.addEventListener('resize', () => chartPie.resize());
</script>

---

**Sources :**
- [DailyTickers Reports API — Live Portfolios](https://reports.dailytickers.com/live-portfolios.json)
- [DailyTickers Portfolio Dashboard](https://portfolio.dailytickers.com/)
- [Google Finance — S&P 500](https://www.google.com/finance/quote/.INX:INDEXSP)
- [Google Finance — Nikkei 225](https://www.google.com/finance/quote/NI225:INDEXNIKKEI)
- [Google Finance — DAX](https://www.google.com/finance/quote/DAX:INDEXDB)
- [CoinGecko — Bitcoin](https://www.coingecko.com/en/coins/bitcoin)
- [CoinGecko — Ethereum](https://www.coingecko.com/en/coins/ethereum)
- [CoinGecko — Solana](https://www.coingecko.com/en/coins/solana)
- [Alpaca Markets](https://alpaca.markets/)
- [Trading 212](https://www.trading212.com/)
- [Interactive Brokers](https://www.interactivebrokers.com/)
- [Saxo Markets](https://www.home.saxo/)
- [Yahoo Finance — AEHR](https://finance.yahoo.com/quote/AEHR)
- [Yahoo Finance — CORT](https://finance.yahoo.com/quote/CORT)
