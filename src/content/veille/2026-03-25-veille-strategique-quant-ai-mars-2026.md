---
title: "Veille Stratégique — IA, Quant Finance & Fintech (25 mars 2026)"
date: 2026-03-25T20:31:00
description: "Tour d'horizon hebdomadaire : 'vibe quant', multi-agents LLM pour le trading, Transformer-MVO pipeline, trend following, et 7 sujets d'articles à couvrir sur market-watch.xyz."
category: veille
tags: ["quant", "trading-systematique", "LLM", "agents", "fintech", "github-trending", "market-watch"]
image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=680&h=400&fit=crop"
---

## 🔍 Contexte

Chaque semaine, cette veille synthétise les signaux faibles et forts qui traversent la sphère quant/fintech/IA — blogs, GitHub, communautés, concurrence — pour alimenter l'agenda éditorial de [market-watch.xyz](https://articles.market-watch.xyz/).

---

## 📈 1. Trends du moment

### Le mouvement "Vibe Quant" : hype ou danger réel ?

Le terme **"vibe quant"** est apparu cette semaine sur les radars quant. [Robot Wealth](https://robotwealth.com/) tire la sonnette d'alarme : des traders utilisent désormais les LLMs pour *trouver des stratégies, les backtester et les mettre en production* sans jamais comprendre ce qu'ils font.

> 💡 **Point clé** : "When you do trading research properly, each cycle teaches you something about market structure. The LLM does the thinking, so the trader's understanding is exactly as shallow on day 1,000 as on day 1." — [Robot Wealth](https://robotwealth.com/more-of-the-disease-faster-what-happens-when-you-ask-an-llm-to-find-you-an-edge/)

C'est le débat de la semaine : les LLMs sont-ils un accélérateur d'apprentissage ou une machine à overfitting industriel ?

### Transformer + MVO : les limites honnêtes du Deep Learning en trading

[Jonathan Kinlay](https://jonathankinlay.com/2026/03/from-hype-to-reality-building-a-hybrid-transformer-mvo-pipeline/) publie une étude reproductible d'un pipeline hybride Transformer + Mean-Variance Optimization sur 25 assets (2020-2026 walk-forward OOS). Verdict sans fard : **le Transformer génère un vrai signal de retour, mais peine à battre un equal-weight naïf sur une base strictement risk-adjusted**.

Architecture utilisée :
- Alpha model : Transformer 2-layer, 64 dimensions, fenêtre 60 jours → prévision 21 jours
- Risk model : covariance expanding window + shrinkage Ledoit-Wolf
- Données : `yfinance` (100% reproductible, pas d'API payante)

### Trend Following : le retour du roi

[Alpha Architect](https://alphaarchitect.com/the-return-of-the-king-trend-following-is-back-but-will-it-last/) revient sur le choc tarifaire d'avril 2025 (Trump tariffs) qui a remis le trend following sous les projecteurs comme safe haven. La question reste : **durable ou feu de paille** dans un régime de corrélations instables ?

### Multi-Agents LLM pour le trading : l'explosion open source

**TauricResearch/TradingAgents** est en trending GitHub toute la semaine avec **7 784 étoiles en 7 jours** (41k total). C'est un framework multi-agents LLM pour le trading financier. Une version chinoise ([TradingAgents-CN](https://github.com/hsliuping/TradingAgents-CN)) a suivi immédiatement, déjà à 21k étoiles.

---

## 🏢 2. Concurrence & Écosystème

### Ce que font les concurrents

- **QuantConnect / Lean** : pas d'annonce majeure cette semaine, mais la communauté débat activement de l'intégration LLM dans les workflows de backtesting
- **Alpaca** : focus sur les API d'exécution, rien de neuf côté recherche
- **Interactive Brokers** : statu quo — reste la référence exécution pour les systematic traders retail
- **Bloomberg / Refinitiv** : intégration LLM dans les terminaux toujours en cours (pas de release publique)
- **Alpha Architect** : 2 articles cette semaine (CAPE ratio + trend following), rythme soutenu sur la recherche factor investing
- **Macrosynergy** : publie sur l'allocation relative value cross-asset via macro-systematic — très technique, peu lisible pour le retail

> ⚠️ **Angle concurrent** : les gros acteurs restent dans la recherche académique ou le B2B. Le créneau retail "practitioner honest" reste largement libre.

---

## 💻 3. GitHub Trending — Repos finance/IA cette semaine

<div class="echarts-container" id="chart-github" style="width:100%;height:380px;"></div>

<script>
var chart = echarts.init(document.getElementById('chart-github'));
chart.setOption({
  tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
  grid: { left: '3%', right: '4%', bottom: '10%', containLabel: true },
  xAxis: { type: 'value', name: 'Stars cette semaine', nameLocation: 'end' },
  yAxis: {
    type: 'category',
    data: ['bytedance/deer-flow','TauricResearch/TradingAgents','obra/superpowers','affaan-m/everything-claude-code','langchain-ai/open-swe','hsliuping/TradingAgents-CN','NousResearch/hermes-agent','unslothai/unsloth']
  },
  series: [{
    name: 'Stars / semaine',
    type: 'bar',
    data: [10273, 7784, 19373, 21932, 2667, 2081, 3881, 3905],
    itemStyle: {
      color: function(params) {
        var colors = ['#3b82f6','#22c55e','#8b5cf6','#f59e0b','#06b6d4','#22c55e','#ec4899','#64748b'];
        return colors[params.dataIndex];
      }
    },
    label: { show: true, position: 'right', formatter: function(p){ return p.value.toLocaleString(); } }
  }]
});
window.addEventListener('resize', () => chart.resize());
</script>

Les repos à suivre de près :

| Repo | Description | Stars/semaine | Signal |
|------|-------------|:---:|:---:|
| [TradingAgents](https://github.com/TauricResearch/TradingAgents) | Multi-Agents LLM Trading | +7 784 | 🔴 Chaud |
| [deer-flow (ByteDance)](https://github.com/bytedance/deer-flow) | SuperAgent harness | +10 273 | 🔴 Chaud |
| [everything-claude-code](https://github.com/affaan-m/everything-claude-code) | Agent harness optimization | +21 932 | 🔴 Très chaud |
| [superpowers](https://github.com/obra/superpowers) | Agentic skills framework | +19 373 | 🔴 Très chaud |
| [open-swe (LangChain)](https://github.com/langchain-ai/open-swe) | Async Coding Agent | +2 667 | 🟡 Montant |
| [unsloth](https://github.com/unslothai/unsloth) | Fine-tuning LLM UI | +3 905 | 🟡 Montant |

> 💡 **Signal clair** : les frameworks multi-agents explosent. La finance est le secteur d'application #1 après le coding.

---

## 👥 4. Communautés & Réseaux

**r/algotrading** : les posts chauds portent sur l'accès aux données historiques et les stratégies alternatives. Peu de contenu technique de niveau intermédiaire-avancé.

**Quantocracy cette semaine** : contenu riche — CAPE, Transformer-MVO, trend following, value vs growth 100 ans ([Quantpedia](https://quantpedia.com/timing-value-vs-growth-evidence-from-100-years-of-small-value-large-growth-spread/)), diversification drag TAA ([Allocate Smartly](https://allocatesmartly.com/diversification-has-been-a-huge-drag-on-taa-performance-for-15-years/)).

**Rob Carver (Investment Idiocy)** : tweet viral sur la diversification — [article this week](https://qoppac.blogspot.com/2026/03/how-to-write-tweet-that-gets-over-300k.html) analysant pourquoi un message court sur la diversification a généré 300k vues. Leçon éditoriale en soi.

**GitHub Trending (agentic)** : la vague "superpowers" / "everything-claude-code" confirme que les frameworks d'agents IA sont la nouvelle infrastructure. Le parallèle avec le trading est évident.

---

## 🎯 5. Sujets d'articles — Agenda éditorial market-watch.xyz

Classés par priorité éditoriale et différenciation concurrentielle :

**🥇 #1 — "Vibe Quant" : pourquoi laisser un LLM trouver ta stratégie va te coûter cher**
- Angle : prise de position franche, contre-courant populaire
- Source primaire : Robot Wealth + expérience terrain portfolio MW
- Différenciation : les blogs quant anglophones sont critiques mais abstraits — we can be concret avec nos propres backtests

**🥈 #2 — Multi-Agents LLM pour le trading : TradingAgents décortiqué (avec benchmark)**
- Angle : test pratique du framework + limites réelles vs hype GitHub (41k stars)
- Données : reprendre l'architecture, l'appliquer sur un universe simple, mesurer OOS
- Différenciation : personne ne fait de revues honnêtes avec benchmark chiffré en français

**🥉 #3 — Transformer + MVO : reproduire l'étude Kinlay et pousser plus loin**
- Angle : prendre l'étude de cette semaine, la reproduire publiquement, tester sur l'universe MW
- Code : Python, yfinance, public et reproductible
- Différenciation : tutorial complet en français, avec les pièges réels (lookback bias, régime covariance)

**#4 — Trend Following is Back : les chiffres derrière le retour en grâce**
- Angle : contextualiser le choc tarifaire 2025, montrer les données de performance des CTAs
- Data : SocGen CTA index, Man AHL returns, comparaison vs 60/40
- Différenciation : ancrer dans le contexte macro actuel + portfolios MW (est-ce qu'on en bénéficie ?)

**#5 — CAPE ratio en 2026 : toujours utile pour prévoir les rendements à 10 ans ?**
- Angle : synthèse de la recherche Alpha Architect + actualité (S&P CAPE ~36)
- Data : visualisation CAPE historique + forward returns historiques
- Différenciation : localiser pour l'investisseur européen (comparaison CAPE Europe vs US)

**#6 — Diversification Drag : pourquoi votre TAA sous-performe depuis 15 ans**
- Angle : expliquer le phénomène Allocate Smartly avec données MW portfolios
- Data : comparer les 8 portfolios MW — ceux qui diversifient vs ceux qui concentrent
- Différenciation : données live propriétaires, pas de théorie abstraite

**#7 — deer-flow vs TradingAgents : les frameworks multi-agents IA pour la finance en 2026**
- Angle : comparatif technique des deux repos trending, cas d'usage réels
- Différenciation : revue technique rare en français, avec benchmark d'installation et premiers tests

---

## 📌 Synthèse éditoriale

Le signal dominant de cette semaine : **la tension entre l'hype LLM/agents en finance et la réalité empirique des résultats**. C'est exactement le créneau de market-watch.xyz — être le site qui dit la vérité avec des données, pas celui qui surfe sur le buzz.

> ⚠️ **Risque à surveiller** : si le mouvement "vibe quant" s'institutionnalise, les plateformes comme QuantConnect vont intégrer nativement les LLMs dans leur UX. Notre avantage est d'être en avance sur l'analyse critique *et* de publier les résultats réels de nos portfolios.

---

**Sources :**
- [Robot Wealth — "Vibe Quant" critique](https://robotwealth.com/more-of-the-disease-faster-what-happens-when-you-ask-an-llm-to-find-you-an-edge/)
- [Jonathan Kinlay — Hybrid Transformer-MVO Pipeline](https://jonathankinlay.com/2026/03/from-hype-to-reality-building-a-hybrid-transformer-mvo-pipeline/)
- [Alpha Architect — Trend Following Is Back](https://alphaarchitect.com/the-return-of-the-king-trend-following-is-back-but-will-it-last/)
- [Alpha Architect — CAPE Ratio Predictability](https://alphaarchitect.com/cape-ratios/)
- [Quantpedia — Value vs Growth 100 Years](https://quantpedia.com/timing-value-vs-growth-evidence-from-100-years-of-small-value-large-growth-spread/?a=6080)
- [Allocate Smartly — Diversification Drag TAA](https://allocatesmartly.com/diversification-has-been-a-huge-drag-on-taa-performance-for-15-years/?aff=634)
- [GitHub Trending — TradingAgents](https://github.com/TauricResearch/TradingAgents)
- [GitHub Trending — deer-flow (ByteDance)](https://github.com/bytedance/deer-flow)
- [GitHub Trending — everything-claude-code](https://github.com/affaan-m/everything-claude-code)
- [Macrosynergy — Relative Value Cross-Asset](https://macrosynergy.com/research/unlocking-relative-value-across-asset-classes/)
- [Investment Idiocy — Rob Carver](https://qoppac.blogspot.com/2026/03/how-to-write-tweet-that-gets-over-300k.html)
- [Quantocracy](https://quantocracy.com)
