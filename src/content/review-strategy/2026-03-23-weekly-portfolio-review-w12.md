---
title: "Weekly Portfolio Review — W12 2026 (March 17-21)"
date: "2026-03-23"
description: "Full review of all 8 systematic portfolios: regime analysis, equity evolution, position tracking, bug status, and market benchmarks."
category: "review-strategy"
tags: ["portfolio", "weekly-review", "systematic-trading", "risk-management", "regime"]
image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=80"
---

## 🌐 Regime Global — RISK_OFF Dominant

The week of March 17-21 was marked by a **generalized RISK_OFF regime** across nearly all portfolios. This is the dominant signal — and it explains the elevated cash levels observed across the board. This is **by design**: when the regime detector flags RISK_OFF, the system reduces exposure, raises cash, and tightens stops.

> 💡 **Key Insight**: High cash ≠ broken system. In RISK_OFF, cash preservation IS the strategy.

**Regime Summary by Portfolio:**

- **US**: RISK_OFF (score 0.24) — freshly initialized, 8 buy orders placed
- **US HighVol**: RISK_OFF — 100% cash, no positions
- **US T212**: EARLY_RISK_OFF — 4 positions, fully invested
- **US AmericanBulls**: RISK_OFF (from NEUTRAL earlier in the week) — liquidated to cash, 2 pending entries
- **US Live Alpaca**: RISK_OFF — 7 positions active, trailing stops active
- **JP**: EARLY_RISK_OFF — liquidated 9 positions on 3/19, now 100% cash
- **Ultra v4 Saxo**: RISK_OFF — 11 positions, hedge active (TZA +10.1%)
- **Crypto**: EARLY_RISK_OFF — holdings static, Binance feed still dead

---

## 💰 Synthèse des Capitaux

<div class="echarts-container" id="chart-equity" style="width:100%;height:400px;"></div>
<script>
(function() {
  var c = document.getElementById('chart-equity');
  if (!c || typeof echarts === 'undefined') return;
  var chart = echarts.init(c);
  chart.setOption({
    title: { text: 'Equity Overview (Latest Snapshot)', left: 'center', textStyle: { fontSize: 14 } },
    tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
    xAxis: { type: 'category', data: ['US', 'US HV', 'T212', 'AmBulls', 'Alpaca', 'Ultra v4', 'Crypto'], axisLabel: { rotate: 30 } },
    yAxis: { type: 'value', name: 'USD', axisLabel: { formatter: function(v) { return (v/1000).toFixed(0) + 'K'; } } },
    series: [{
      type: 'bar',
      data: [
        { value: 100000, itemStyle: { color: '#10b981' } },
        { value: 100000, itemStyle: { color: '#10b981' } },
        { value: 11430, itemStyle: { color: '#f59e0b' } },
        { value: 87042, itemStyle: { color: '#ef4444' } },
        { value: 163, itemStyle: { color: '#8b5cf6' } },
        { value: 87300, itemStyle: { color: '#ef4444' } },
        { value: 20000, itemStyle: { color: '#6b7280' } }
      ],
      label: { show: true, position: 'top', formatter: function(p) { return (p.value/1000).toFixed(1) + 'K'; } }
    }]
  });
  window.addEventListener('resize', function() { chart.resize(); });
})();
</script>

| Portfolio | Equity | Currency | Cash % | Positions | Regime | Δ Week |
|-----------|--------|----------|--------|-----------|--------|--------|
| US | $100,000 | USD | 100% | 0 (8 pending) | RISK_OFF | New |
| US HighVol | $100,000 | USD | 100% | 0 | RISK_OFF | New |
| US T212 | $11,430 | USD | 0% | 4 | EARLY_RISK_OFF | +4.8% |
| US AmericanBulls | $87,042 | USD | 100% | 0 (2 pending) | RISK_OFF | -6.2% |
| US Live Alpaca | $163 | USD | 12% | 7 (1 pending buy) | RISK_OFF | -0.8% |
| JP | ¥974,552 / €47,692 | JPY | 100% | 0 | EARLY_RISK_OFF | -1.8% |
| Ultra v4 Saxo | $87,300 | USD | 8.9% | 11 | RISK_OFF | -3.4% |
| Crypto | 20,000 USDC | USDC | 100% | 14 (static) | EARLY_RISK_OFF | 0% |

**Total Equity Estimate**: ~$505K USD equivalent (JP converted at ~160 JPY/USD)

---

## 📊 Détail par Portfolio

### 🇺🇸 US (Parallel Mode) — Fresh Start

- **Equity**: $100,000 | **Cash**: 100% | **Regime**: RISK_OFF (score: 0.24)
- **Status**: Brand new allocation. 8 BUY orders placed on 3/20 despite RISK_OFF regime
- **Pending entries**: DMLP ($28.40), EPD ($38.69), GLDD ($17.45), KW ($11.18), MCW ($7.17), PAA ($22.32), TPH ($48.02), USAC ($29.52)
- **⚠️ Note**: Entering 8 positions in RISK_OFF is aggressive. Scores are modest (14-16) except TPH (121). Monitor fill rates closely.

### 🇺🇸 US HighVol (Parallel Mode) — Flat

- **Equity**: $100,000 | **Cash**: 100% | **Regime**: RISK_OFF
- **Status**: Freshly reset, no positions, no orders. Sitting in cash as expected in RISK_OFF.
- **Context**: Backtest CAGR 116% without slippage, -16.5% with slippage. The gap is the alpha killer.

### 🇺🇸 US T212 (Parallel Mode) — Best Performer

- **Equity**: $11,430 | **Cash**: 0% | **Regime**: EARLY_RISK_OFF
- **Peak**: $11,791 → **Drawdown**: -3.1%
- **Weekly performance**: $10,922 → $11,430 = **+4.7%** ✅
- **Positions**:
  - 🟢 AXTI: +121.8% (entry $24.77 → $54.94) — monster winner, stop at $30.78
  - 🟢 AGRO: +13.8% (entry $12.65 → $14.40) — solid
  - 🟢 TRON: +15.9% (entry $1.76 → $2.04)
  - 🟡 BW: +1.0% (entry $14.99 → $15.14) — new entry
- **Actions this week**: Added AGRO, AXTI, BW on 3/20

### 🇺🇸 US AmericanBulls — Drawdown Mode

- **Equity**: $87,042 | **Cash**: 100% | **Regime**: RISK_OFF (was NEUTRAL on 3/16)
- **Peak**: $92,814 → **Drawdown**: -6.2%
- **Weekly equity**: $92,814 (3/16) → $87,042 (3/20) = **-6.2%** 🔴
- **Key events**:
  - 3/16: TAKE_PROFIT on AHG (+12.3%, $1,125 realized)
  - 3/17: STOP_LOSS on CTMX (-18.5%, -$3,414 hit) → regime shifted NEUTRAL → RISK_OFF
  - 3/18: All remaining positions liquidated (ACTG, UNF sold)
  - 3/20: 2 new pending entries (CTRE $36.14, ARTNA $30.53)
- **Analysis**: Regime transition cost the portfolio. CTMX stop loss was the big hit. Now cautiously re-entering.

### 🇺🇸 US Live Alpaca — Micro Portfolio Active

- **Equity**: $163 | **Cash**: $20 (12%) | **Regime**: RISK_OFF
- **Weekly**: $159 → $163 = **+2.5%**
- **7 positions**: AGRO (+11.9%), AXTI (+19.8%), BW (+1.5%), GLDD (-0.05%), MCW (flat), TPH (flat), APEI (-3.6%)
- **Trailing stops active**: GLDD ($16.89), MCW ($6.89), TPH ($46.46) — system working correctly
- **Bug**: MISSING_STOP recreation loop still active (4 MISSING_STOP actions on 3/19). Known issue with Alpaca fractional shares.

### 🇯🇵 JP (Parallel Mode) — Full Liquidation

- **Equity**: ¥974,552 / €47,692 | **Regime**: EARLY_RISK_OFF
- **Peak**: ¥181.9M (historical, in JPY with bug) → current equity in EUR is clean
- **Status**: Liquidated all 9 positions between 3/18 and 3/19
- **Last known positions** (3/18): 6834.T (+16.9%), 6787.T (+13.4%), 5801.T (+11.2%), 6777.T (-8.7%)
- **⚠️ Bug**: equity_curve contains mixed JPY values (¥179M) alongside real EUR values (¥974K). Peak equity ¥181M is clearly JPY-denominated, not EUR.

### ⚡ Ultra v4 Saxo — Hedge Active

- **Equity**: $87,300 | **Cash**: $7,787 (8.9%) | **Regime**: RISK_OFF
- **Peak**: $105,491 → **Drawdown**: -17.2% 🔴🔴
- **Weekly**: $90,352 (3/16) → $87,300 (3/20) = **-3.4%**
- **11 positions** with hedge:
  - 🟢 AXTI: +121.8% (via T212 clone entry at $58.56 → actually -7.3% here — different entry!)
  - 🟢 TZA (3x bear Russell): +10.1% → **hedge working**
  - 🟢 AGRO: +12.5%, TTE: +4.1%, EOG: +2.3%, XLE: +1.9%, MASI: +1.5%
  - 🟡 STKL: flat, TPH: +0.4%, VRE: -0.1%
  - 🔴 CONL: -8.5% (2x long Coinbase — crypto drag)
  - 🔴 AXTI (Ultra entry): -7.3%
- **Actions**: New SOXS (3x bear semis) created on 3/20, trailing stops updated on AXTI, XLE, TTE, STKL
- **Analysis**: The hedge via TZA is performing. CONL is the main drag. Drawdown from peak is significant at -17.2%.

### 🪙 Crypto — Frozen

- **Equity**: 20,000 USDC (reported) | **Regime**: EARLY_RISK_OFF
- **Status**: Balance shows 20K USDC but actual market value of holdings is much higher
- **Snapshot prices** (3/20): BTC $70,702, ETH $2,155, SOL $90, BNB $643, XRP $1.44
- **⚠️ Bug**: Binance feed dead — AvgEntry = 0 for all positions, equity = cash balance only (20K), real portfolio value not computed. This portfolio's equity tracking is completely broken.

---

## 📈 Drift Live vs Backtest

| Portfolio | Backtest CAGR | Live Status | Drift Assessment |
|-----------|--------------|-------------|-----------------|
| US | 52.7% | Just started, 8 pending orders | Too early to assess |
| US HighVol | 116% (no slip) / -16.5% (with slip) | $100K cash, no trades | N/A — fresh reset |
| US T212 | Part 6 reference | +4.7% weekly, AXTI +122% | 🟢 Outperforming |
| AmericanBulls | N/A | -6.2% week, recovering | 🟡 CTMX stop hurt |
| Ultra v4 | N/A | -17.2% from peak | 🔴 Hedge helps but deep |
| JP | Part 3 reference | Full liquidation | 🟡 Regime-driven exit |
| Crypto | N/A | Feed broken, static | ⚠️ Cannot assess |

---

## 🌍 Benchmarks Marché (au 21/03/2026)

- **S&P 500**: ~6,506 pts
- **Nasdaq Composite**: ~21,648 pts
- **Nikkei 225**: ~51,515 pts
- **Bitcoin**: ~$68,649
- **Fear & Greed Index (Crypto)**: **8 — Extreme Fear** 😱

> 💡 **Market Context**: Extreme Fear on the crypto Fear & Greed Index (8/100) confirms the RISK_OFF/EARLY_RISK_OFF regime readings across portfolios. Markets are in a defensive posture.

---

## 🐛 Suivi Bugs

**P0 — Critique**
- 🔴 **Crypto Binance feed dead**: AvgEntry=0, equity=cash only. Portfolio value completely wrong. Impact: no regime trading possible, no P&L tracking. **Status: unchanged, needs manual fix.**

**P1 — Important**
- 🟡 **JP equity in JPY not EUR**: equity_curve mixes ¥179M with ¥974K. Peak equity ¥181M is JPY. Makes drawdown calculation meaningless. **Status: unchanged.**
- 🟡 **MISSING_STOP Alpaca loop**: us_live_alpaca recreates stops every cycle (4 MISSING_STOP on 3/19). Known fractional share issue. **Status: recurring, low-harm but noisy.**

**P2 — Medium**
- 🟡 **Ultra v4 AXTI dual entry**: AXTI appears in both T212 ($24.77 entry, +122%) and Ultra ($58.56 entry, -7.3%). Different entry prices cause confusion.
- 🟡 **Ultra v5 hedge crash**: v5 intentionally crashes to force hedge positions (TZA, SOXS). Documented as "by design."

**P3 — Low**
- ⚪ **US/US_HighVol fresh reset**: Both at $100K with no history. Need 2-3 weeks to establish baseline.

---

## 🔍 Analyse Critique Honnête

**Ce qui fonctionne bien :**
- ✅ Regime detection is consistent across portfolios — RISK_OFF is correctly identified
- ✅ T212 is the star: +4.7% weekly, AXTI at +122% is a textbook momentum runner
- ✅ Ultra v4 hedge (TZA +10.1%) is doing its job in a risk-off environment
- ✅ AmericanBulls correctly took profit on AHG (+12.3%) before the regime shift

**Ce qui pose problème :**
- ❌ AmericanBulls lost $5.7K in a week — CTMX stop loss (-$3,414) was painful
- ❌ Ultra v4 at -17.2% drawdown from peak — the hedge isn't enough to offset
- ❌ Crypto portfolio is flying blind with Binance feed down — P0 bug unresolved
- ❌ JP equity reporting is unreliable due to JPY/EUR mixing
- ❌ US portfolio placing 8 orders in RISK_OFF with low scores (14-16) seems risky

**Questions ouvertes :**
- Should the US portfolio entry logic be gated by regime? 8 entries in RISK_OFF is concerning.
- Ultra v4 CONL (2x Coinbase) in a crypto extreme fear environment — should this be cut?
- JP liquidation was clean, but ¥974K in EUR seems like a lot of idle capital.

---

## 🎯 Top 3 Actions

1. **🔴 P0: Fix Crypto Binance feed** — This has been broken for weeks. Without price feeds, the crypto portfolio is dead weight. Either fix the Binance connection or switch to an alternative data source.

2. **🟡 Review Ultra v4 CONL position** — 2x leveraged Coinbase exposure at -8.5% while crypto Fear & Greed is at 8 (Extreme Fear). This position is fighting the regime. Consider trimming or replacing with a less volatile crypto proxy.

3. **🟡 Monitor US portfolio fills** — 8 simultaneous limit orders placed in RISK_OFF. Track which ones fill and at what prices. If all 8 fill, that's $80K deployed immediately in a risk-off regime — validate this is intentional.

---

*Report generated automatically on March 23, 2026 at 11:15 CET. Data as of March 20-21, 2026 snapshots. Next review: March 30, 2026.*
