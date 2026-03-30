---
title: "Revue Hebdo S13 — EARLY_RISK_OFF Généralisé : Les Portfolios Tiennent le Cap"
date: 2026-03-30T11:15:00
description: "Revue hebdomadaire des 8 portfolios market-watch.xyz. Régime EARLY_RISK_OFF sur toute la ligne, S&P 500 en correction à -1.7% sur la semaine, trailing stops actifs."
category: review-strategy
tags: ["portfolio", "weekly-review", "risk-off", "systematic-trading", "S13-2026"]
image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=680&h=400&fit=crop"
---

## 🌍 Régime Global — EARLY_RISK_OFF Unanime

Cette semaine marque un consensus rare : **les 8 portfolios affichent le même régime EARLY_RISK_OFF**. Ce n'est pas un hasard — le marché US est en correction ouverte avec le S&P 500 touchant un plus bas de 6 mois à 6 368 points, en baisse de ~1.7% sur la semaine. Les tensions géopolitiques US-Iran et l'incertitude macro pèsent lourd.

En régime EARLY_RISK_OFF, le comportement attendu est :
- 🛡️ Pas de nouvelles entrées agressives
- 📉 Cash élevé = **normal et voulu**
- 🔄 Trailing stops actifs pour protéger les gains existants
- ⚡ Seules exceptions : les hedges inverses (Ultra v5)

## 💰 Synthèse des Capitaux

| Portfolio | Equity | Capital Initial | Return | Cash % | Positions |
|-----------|--------|----------------|--------|--------|-----------|
| **us** | $100 782 | $100 047 | <span style="color:#22c55e">+0.7%</span> | 0.1% | 14 |
| **us_highvol** | $99 972 | $101 033 | <span style="color:#ef4444">-1.0%</span> | 37.2% | 4 |
| **us_americanbulls** | $84 062 | $91 712 | <span style="color:#ef4444">-8.3%</span> | 53.9% | 1 |
| **us_t212** | €12 124 | €9 949 | <span style="color:#22c55e">+21.9%</span> | 13.2% | 10 |
| **us_live_alpaca** | $171 | $157 | <span style="color:#22c55e">+9.1%</span> | 2.7% | 9 |
| **ultra_v4_saxo** | $87 698 | $90 697 | <span style="color:#ef4444">-3.3%</span> | ~0% | 13 |
| **jp** | ¥1 005 745 | ¥1 028 783 | <span style="color:#ef4444">-2.2%</span> | ~0% | 8 |
| **crypto** | $20 000 | $20 000 | <span style="color:#888">0%</span> | 0% | 14 |

**Capital total estimé** : ~$384 000 (hors conversion JPY→EUR pour JP)

<div class="echarts-container" id="chart-returns" style="width:100%;height:400px;"></div>

<script>
var chartReturns = echarts.init(document.getElementById('chart-returns'));
chartReturns.setOption({
  title: { text: 'Return vs Capital Initial (%)', left: 'center', textStyle: { color: '#e5e7eb' } },
  tooltip: { trigger: 'axis' },
  xAxis: { type: 'category', data: ['us', 'us_hv', 'us_ab', 'us_t212', 'alpaca', 'ultra', 'jp', 'crypto'], axisLabel: { color: '#9ca3af' } },
  yAxis: { type: 'value', name: '%', axisLabel: { color: '#9ca3af' } },
  series: [{
    data: [
      { value: 0.7, itemStyle: { color: '#22c55e' } },
      { value: -1.0, itemStyle: { color: '#ef4444' } },
      { value: -8.3, itemStyle: { color: '#ef4444' } },
      { value: 21.9, itemStyle: { color: '#22c55e' } },
      { value: 9.1, itemStyle: { color: '#22c55e' } },
      { value: -3.3, itemStyle: { color: '#ef4444' } },
      { value: -2.2, itemStyle: { color: '#ef4444' } },
      { value: 0, itemStyle: { color: '#6b7280' } }
    ],
    type: 'bar',
    label: { show: true, position: 'top', formatter: '{c}%', color: '#e5e7eb' }
  }]
});
window.addEventListener('resize', () => chartReturns.resize());
</script>

## 📊 Détail par Portfolio

### 🇺🇸 US (Parallel Mode) — $100 782 (+0.7%)

Le portfolio phare tient bien malgré le marché baissier. 14 positions actives avec une belle diversification sectorielle. Les trailing stops sont actifs (6 TRAILING_STOP_UPDATE cette semaine) sur ACLX, CNQ, DMLP, EPD, KW, PAA.

**Equity curve J-7** : 99 945 → 101 178 (pic) → 100 782. Drawdown modeste de -0.4% depuis le pic à 101 178.

> 💡 **Point clé** : Le portfolio US est le seul à rester en territoire positif tout en maintenant une exposition quasi-complète (cash 0.1%). Signe d'une sélection de titres résiliente (energy, midstream dominant).

### 🇺🇸 US HighVol (Parallel) — $99 972 (-1.0%)

4 positions ouvertes : APGE (Healthcare), BW (Industrials, +$1 704 PnL), CIFR (Tech/crypto, -$224), PL (Industrials, -$1 285). Cash à 37.2% — **normal en RISK_OFF**.

**Equity curve J-7** : 100 000 → 110 246 (pic S+1) → 99 972. La chute de -9.3% depuis le pic est significative mais dans les paramètres du backtest (CAGR 116% avec drawdowns violents attendus).

> ⚠️ **Alerte** : Le drawdown depuis le pic de 110k est rapide. PL (-5.3% today) et CIFR (-4.3% today) sont sous pression. Stops en place à $29.03 et $12.37.

### 🇺🇸 US AmericanBulls — $84 062 (-8.3%)

**1 seule position** : CORT (Corcept Therapeutics) à -$2 980 de PnL non réalisé. Cash dominant à $45 312 (53.9%). Deux ordres stale (ARTNA, CTRE) annulés cette semaine.

**Equity curve J-7** : 87 042 → 87 137 → 84 062. Drawdown continu depuis le peak à 88 610.

> 💡 **Point clé** : Le cash élevé est cohérent avec EARLY_RISK_OFF. CORT a un stop à $36.14, le prix est à $36.80 — **très proche du stop**. Semaine décisive pour cette position.

### 🇺🇸 US T212 (Parallel) — €12 124 (+21.9%)

**Meilleure performance relative** ! 10 positions diversifiées. Stars : AGRO (+€123, +11.2%), CNQ (+€19.65), ACLX (+€2.83). Seul BW est en négatif notable (-€11.63).

Trailing stops mis à jour sur TS, ACLX, TALK, CNQ cette semaine. Cash à €1 597 (13.2%).

**Equity curve J-7** : 11 729 → 14 306 (pic) → 13 955. Le pic à 14 306 inclut un spike de valorisation. Drawdown de -2.5% depuis.

### 🇺🇸 US Live Alpaca — $171 (+9.1%)

Micro-portfolio (9 positions fractionnées). Le **bug MISSING_STOP persiste** : 9 ordres STOP créés cette session pour rattraper des stops manquants. Positions : ACLX, AGRO, AM, APEI, BW, CNQ, EHAB, MCW, TPH.

### ⚡ Ultra v4/v5 Saxo — $87 698 (-3.3%)

13 positions dont **les hedges inverses activés** : TZA (bear 3x Small Cap, +$281) et nouveau cette semaine **SQQQ** (bear 3x Nasdaq, score 90, crash mode INVERSE). C'est le hedge qui fonctionne comme prévu.

Positions energy en profit : TTE (+$108), EOG (+$14). STKL flat, TPH (+$111), VRE (+$74).

> 💡 **Point clé** : L'ouverture du SQQQ ($4 983) confirme que le système détecte un signal crash Nasdaq fort (score 90). Le drawdown de -3.3% est atténué par les positions inverses.

### 🇯🇵 JP (Parallel) — ¥1 005 745 (-2.2%)

8 positions japonaises via IBKR. Stars : 6787.T Meiko Electronics (+¥8.9M PnL), 268A.T Rigaku (+¥4.3M), 5801.T Furukawa Electric (+¥3.5M). Seul 6278.T Union Tool en perte (-¥257k).

Trailing stops mis à jour sur 5 positions. **⚠️ Rappel bug** : l'equity affichée (¥1 005 745) est en JPY, pas en EUR. Le capital réel en EUR est ~€6 200 au taux actuel.

### 🪙 Crypto — $20 000 (flat)

**Bug connu** : feed Binance mort. Pas d'entry prices, pas de PnL réel. Les 14 positions (BTC, ETH, BNB, alts) affichent des prix spot mais aucune donnée de performance exploitable. BTC spot ~$65 955 sur le portfolio vs $67 538 CoinGecko → décalage de prix stale.

<div class="echarts-container" id="chart-equity" style="width:100%;height:400px;"></div>

<script>
var chartEquity = echarts.init(document.getElementById('chart-equity'));
chartEquity.setOption({
  title: { text: 'Equity Curves J-7 (normalisé base 100)', left: 'center', textStyle: { color: '#e5e7eb' } },
  tooltip: { trigger: 'axis' },
  legend: { data: ['US', 'US HighVol', 'US AB', 'Ultra'], bottom: 0, textStyle: { color: '#9ca3af' } },
  xAxis: { type: 'category', data: ['J-7', 'J-6', 'J-5', 'J-4', 'J-3', 'J-2', 'J-1', 'Now'], axisLabel: { color: '#9ca3af' } },
  yAxis: { type: 'value', min: 95, max: 112, axisLabel: { color: '#9ca3af' } },
  series: [
    { name: 'US', data: [100, 101, 100.7, 100.8, 100.8, 100.7, 101.2, 100.8], type: 'line', smooth: true, lineStyle: { color: '#3b82f6' }, itemStyle: { color: '#3b82f6' } },
    { name: 'US HighVol', data: [100, 101.8, 110.2, 109.8, 108.5, 108, 104.1, 100], type: 'line', smooth: true, lineStyle: { color: '#f59e0b' }, itemStyle: { color: '#f59e0b' } },
    { name: 'US AB', data: [100, 100, 100, 100, 100.1, 98.4, 98.7, 96.6], type: 'line', smooth: true, lineStyle: { color: '#ef4444' }, itemStyle: { color: '#ef4444' } },
    { name: 'Ultra', data: [100, 114.9, 114.9, 114.9, 115.0, 115.6, 115.6, 115.5], type: 'line', smooth: true, lineStyle: { color: '#8b5cf6' }, itemStyle: { color: '#8b5cf6' } }
  ]
});
window.addEventListener('resize', () => chartEquity.resize());
</script>

## 📈 Drift Live vs Backtest

| Portfolio | Backtest CAGR | Live Status | Drift |
|-----------|--------------|-------------|-------|
| **us_highvol** | 116% (brut) / -16.5% (slippage) | -1.0% depuis inception | ⚠️ Early — trop tôt pour conclure |
| **us** | 52.7% | +0.7% | ✅ Cohérent avec RISK_OFF |
| **us_t212** | Parallel de us | +21.9% | 🟢 Surperformance notable |
| **jp** | Part 3 | -2.2% (JPY) | ✅ Normal — trailing stops actifs |

> ⚠️ **us_highvol** : Le pic à +10.2% puis retour à -1% en une semaine rappelle la volatilité structurelle. Le backtest montre des drawdowns de -40%+ possibles. Patience requise.

## 🌐 Benchmarks Marché (semaine du 24-28 mars)

- **S&P 500** : 6 368.85 (close 27/03), prev close 6 477 → <span style="color:#ef4444">**~-1.7%**</span>
- **DAX** : 22 349 (<span style="color:#22c55e">+0.2%</span>)
- **FTSE 100** : 10 032 (<span style="color:#22c55e">+0.65%</span>)
- **BTC** : $67 538 (<span style="color:#22c55e">+1.3% 24h</span>)
- Le Dow Jones est entré officiellement en **correction** (-10% du pic)
- Le S&P 500 a touché un **plus bas de 6 mois**

> 💡 **Contexte** : Les portefeuilles US sont en régime défensif alors que le marché corrige. C'est exactement le comportement attendu du système.

## 🐛 Suivi Bugs

**🔴 P0 — MISSING_STOP Loop (us_live_alpaca)**
9 ordres MISSING_STOP créés cette semaine. Le bug persiste : à chaque snapshot, le système recrée les stops car Alpaca ne retourne pas les fractional stops correctement. Impact fonctionnel faible (les stops sont bien placés) mais bruit dans les logs.

**🟠 P1 — Crypto Feed Binance Mort**
Aucune donnée de PnL/entry. Le portfolio crypto est en mode "display only". Pas d'actions de trading possibles. Les prix sont stale de ~24-48h.

**🟡 P2 — JP Equity en JPY pas EUR**
L'equity_curve JP est en JPY (186M+) alors que le dashboard affiche ¥1 005 745. Confusion possible pour le suivi. Le capital réel est ~€6 200.

**🟢 P3 — Ultra v5 Hedge Crash (voulu)**
L'ouverture SQQQ + TZA est le comportement crashmode attendu. Pas un bug. Drawdown de -3.3% atténué par les inverses.

## 🔍 Analyse Critique Honnête

**Ce qui va bien :**
- Le système respecte le régime RISK_OFF — pas de nouvelles entrées agressives
- Les trailing stops fonctionnent (18+ updates cette semaine)
- US et T212 en territoire positif malgré un S&P à -1.7%
- L'activation du hedge SQQQ sur Ultra est pertinente (score crash 90)

**Ce qui inquiète :**
- AmericanBulls à -8.3% avec CORT très proche du stop ($36.80 vs stop $36.14) — risque de stop loss imminent
- HighVol a perdu tout le gain de la semaine précédente (+10% → -1%) en 3 jours
- Le crypto portfolio est un dead weight sans feed fonctionnel
- La dispersion des returns est large (-8.3% à +21.9%) — la diversification par stratégie fonctionne mais crée du bruit

**Verdict global** : **B** — Le système fait ce qu'il doit en période de stress. Les portfolios ne surperforment pas le marché individuellement mais la gestion du risque est active et cohérente. La vraie question sera la performance au prochain retournement haussier.

## 🎯 Top 3 Actions Prioritaires

1. **🔴 Fixer le feed Crypto Binance** — $20k de capital sans aucune gestion active. Même si c'est un paper portfolio, les données stale faussent la vue globale.

2. **🟠 Surveiller CORT (AmericanBulls)** — À $36.80 avec stop à $36.14, c'est à <2% du stop. Si CORT ouvre en gap down lundi, c'est un stop loss quasi-certain. Préparer le scénario post-stop (cash à 100% en RISK_OFF).

3. **🟡 Investiguer le MISSING_STOP loop Alpaca** — 9 actions inutiles par snapshot. Le fix serait de vérifier l'existence du stop côté Alpaca avant de le recréer (check fractional qty matching).

---

*Prochaine revue : lundi 6 avril 2026. Les marchés US ferment normalement cette semaine (pas de jour férié).*
