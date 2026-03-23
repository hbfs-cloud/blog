---
title: "Veille Stratégique — Semaine du 23 Mars 2026"
date: 2026-03-23T19:00:00
description: "Vibe quant, TradingAgents multi-LLM, retour du trend following, swarm intelligence, sécurité GitHub Actions : les 5 tendances clés cette semaine pour market-watch.xyz."
category: veille
tags: ["quant finance", "AI trading", "trend following", "LLM", "open source", "cybersécurité"]
image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=680&h=400&fit=crop"
---

## 📡 Veille Stratégique — Semaine du 23 Mars 2026

Cette semaine marque un tournant dans l'écosystème quant : le mouvement **"vibe quant"** fait débat, un framework multi-agents LLM explose sur GitHub, et le trend following confirme son retour fracassant après le choc tarifaire d'avril 2025. Tour d'horizon des signaux à suivre pour **market-watch.xyz**.

---

## 🔥 1. Trends du moment

### Le "Vibe Quant" — Hype ou vrai risque ?

La communauté quant s'embrase autour d'un nouveau phénomène : les **"vibe quants"** — des traders qui délèguent intégralement la recherche de stratégies à des LLMs (ChatGPT, Claude, Gemini), sans jamais acquérir de compréhension réelle des marchés.

[Robot Wealth](https://robotwealth.com/more-of-the-disease-faster-what-happens-when-you-ask-an-llm-to-find-you-an-edge/) a publié cette semaine un article viral très critique :

> 💡 **Point clé** : *"Le vibe quant saute l'apprentissage. Le LLM fait la réflexion, donc la compréhension du trader est exactement aussi superficielle au jour 1 000 qu'au jour 1. C'est un tapis de course — littéralement immobile."*

L'approche est séduisante : le LLM lit la littérature académique, implémente les idées, backteste, et tu supervises. Mais selon Robot Wealth, c'est **accélérer le backtest cycle of doom** — optimiser des paramètres jusqu'à obtenir la courbe equity parfaite, sans jamais comprendre la structure de marché sous-jacente.

> ⚠️ **Alerte éditoriale** : Ce sujet est en pleine ébullition sur r/algotrading et Twitter. Angle différenciant possible pour market-watch.xyz : **analyse critique avec données réelles** (backtests de stratégies LLM-generated vs. stratégies fondées sur des thèses de marché documentées).

### Trend Following — Le retour du roi

[Alpha Architect](https://alphaarchitect.com/the-return-of-the-king-trend-following-is-back-but-will-it-last/) confirme ce que nos propres portfolios signalaient : le **trend following** est revenu en force depuis le choc tarifaire d'avril 2025. Quand Trump a annoncé des tarifs punitifs, la plupart des actifs financiers ont saigné. Les stratégies de trend following ont servi de valeur refuge.

La question qui reste ouverte : **est-ce durable ?** Les régimes de volatilité prolongée favorisent le momentum. Si l'environnement macro se stabilise, le trend following pourrait sous-performer à nouveau.

### Macro-Systematic Relative Value

[Macrosynergy](https://macrosynergy.com/research/unlocking-relative-value-across-asset-classes/) publie une recherche sur l'allocation de capital risque entre 12 classes d'actifs via des positions relatives en dérivés à levier. Approche : égaliser la volatilité attendue par classe et construire des positions relatives. Pertinent pour nos portfolios systematic en mode parallèle.

---

## 🏗️ 2. Open Source — Les repos qui explosent cette semaine

<div class="echarts-container" id="chart-github" style="width:100%;height:380px;"></div>

<script>
var chart = echarts.init(document.getElementById('chart-github'));
chart.setOption({
  tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
  grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
  xAxis: { type: 'value', name: '⭐ Stars cette semaine' },
  yAxis: {
    type: 'category',
    data: ['TradingAgents', 'langchain/deepagents', 'OpenViking', 'hermes-agent', 'MoneyPrinterV2', 'Unsloth', 'MiroFish']
  },
  series: [{
    name: 'Stars cette semaine',
    type: 'bar',
    data: [3979, 5498, 6297, 2665, 3659, 3564, 13473],
    itemStyle: {
      color: function(params) {
        var colors = ['#3b82f6','#8b5cf6','#f59e0b','#22c55e','#ef4444','#06b6d4','#f97316'];
        return colors[params.dataIndex];
      }
    },
    label: { show: true, position: 'right', formatter: '{c}' }
  }]
});
window.addEventListener('resize', () => chart.resize());
</script>

### 🚀 TradingAgents — Multi-Agents LLM pour le trading
**[TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents)** — +3 979 ⭐ cette semaine (38 892 total)

Framework Python multi-agents LLM dédié au trading financier. Architecture : plusieurs agents spécialisés (analyse fondamentale, technique, sentiment, risque) qui collaborent pour produire des décisions de trading. Construit avec Claude comme co-auteur (visible dans les contributeurs). C'est le repo **finance le plus viral de la semaine**.

### 🌊 MiroFish — Swarm Intelligence pour la prédiction
**[666ghj/MiroFish](https://github.com/666ghj/MiroFish)** — +13 473 ⭐ cette semaine (40 676 total)

Moteur d'intelligence en essaim (swarm intelligence) conçu pour la prédiction. L'approche est radicalement différente des LLMs classiques : simuler des comportements collectifs émergents pour anticiper des dynamiques de marché. À surveiller de très près — si les backtests sont solides, c'est un paradigme alternatif crédible.

### 🤖 LangChain DeepAgents — Harness multi-agents
**[langchain-ai/deepagents](https://github.com/langchain-ai/deepagents)** — +5 498 ⭐ cette semaine

Agent harness LangChain/LangGraph avec planification, filesystem backend et capacité à spawner des sous-agents. Infrastructure généraliste mais très applicable à des pipelines de recherche quant automatisés.

### 🧠 OpenViking — Base de contexte pour agents IA
**[volcengine/OpenViking](https://github.com/volcengine/OpenViking)** — +6 297 ⭐ cette semaine

Base de données de contexte open-source pour agents IA (mémoire, ressources, skills). Paradigme filesystem pour la gestion de contexte hiérarchique. Infrastructure d'agent de nouvelle génération.

---

## 🔐 3. Cybersécurité — Alerte de la semaine

### GitHub Actions compromise — Trivy sous attaque

**[HackerNews #1 cette semaine](https://socket.dev/blog/trivy-under-attack-again-github-actions-compromise)** : Trivy, l'outil de scanning de vulnérabilités très utilisé dans les pipelines CI/CD, est à nouveau sous attaque via une compromission de tags GitHub Actions.

> ⚠️ **Impact direct** : Tous les workflows qui utilisent des actions GitHub avec des tags non épinglés (ex: `uses: aquasecurity/trivy-action@main` au lieu de `@v0.x.x`) sont potentiellement exposés. Les pipelines de trading automatisé qui s'appuient sur GitHub Actions pour les déploiements doivent auditer leurs fichiers `.github/workflows/`.

**Mesure immédiate** : Épingler toutes les GitHub Actions sur des hash SHA au lieu de tags mutable. Exemple :
```yaml
# ❌ Risqué
uses: some-action@v1
# ✅ Sécurisé  
uses: some-action@abc123def456  # SHA du commit
```

---

## 🌐 4. Communautés & Signaux

### HackerNews — Signaux tech de la semaine

- **iPhone 17 Pro fait tourner un LLM 400B** — L'inference on-device explose. Implications : agents de trading autonomes sur mobile, sans cloud, sans latence réseau.
- **DSPy Engineering Patterns** (145 points) — Debate sur l'adoption réelle de DSPy vs. prompt engineering classique.
- **Migration vers l'UE** (666 points) — Thread massif sur la migration de services tech depuis les USA. Pertinent pour les fintechs européennes.

### Quantocracy — Articles de la semaine

| Source | Sujet | Signal |
|--------|-------|--------|
| Robot Wealth | Vibe quant critique | 🔴 Risque pédagogique |
| Alpha Architect | Trend following retour | 🟢 Confirmation |
| Macrosynergy | Relative value macro-systematic | 💡 Recherche |
| Quantpedia | Small value vs. large growth 100 ans | 📊 Académique |
| Allocate Smartly | Diversification drag TAA | ⚠️ Contre-intuitif |
| Investment Idiocy (qoppac) | Tweet viral sur diversification | 😄 Communautaire |

---

## ✍️ 5. Propositions d'articles — market-watch.xyz

Voici 7 sujets prioritaires, classés par opportunité éditoriale et différenciation :

### 🥇 Priorité 1 — "Vibe Quant : Pourquoi laisser un LLM trouver ta stratégie te condamne à rester nul"
**Angle** : Test empirique. Prendre 3 stratégies générées par ChatGPT/Claude, les backtester avec nos vrais outils, comparer avec une stratégie construite sur une thèse de marché documentée. Résultats réels + analyse des biais d'overfitting.
**Différenciation vs. concurrents** : Tous les blogs quant parlent du sujet en théorie. Nous, on le teste avec des données réelles et des portfolios live.

### 🥈 Priorité 2 — "TradingAgents : Analyse du framework multi-LLM le plus viral de la semaine"
**Angle** : Démo technique + évaluation critique. Architecture réelle, forces (orchestration multi-agents), faiblesses (hallucinations sur fondamentaux), et comparaison avec nos screeners actuels.
**Différenciation** : Analyse d'un praticien qui gère 8 portfolios live, pas d'un blogger théorique.

### 🥉 Priorité 3 — "Le Trend Following en 2026 : Vraiment de retour ou faux signal ?"
**Angle** : Analyse quantitative. Comparer les performances du trend following depuis avril 2025 (choc tarifaire Trump) sur les classes d'actifs. Utiliser nos propres données portfolio + données Macrosynergy.
**Différenciation** : Données propriétaires sur nos portfolios systematic vs. benchmarks publics.

### 4 — "GitHub Actions sous attaque : Sécuriser ses pipelines de trading automatisé"
**Angle** : Guide pratique immédiatement actionnable. Audit des workflows typiques d'un trader algo, liste des actions à risque, migration vers SHA pinning.
**Différenciation** : Angle cybersécurité + trading quant = niche quasi-vierge.

### 5 — "MiroFish : L'intelligence en essaim peut-elle battre les LLMs en prédiction financière ?"
**Angle** : Deep dive sur le paradigme swarm intelligence vs. LLMs pour la finance. Benchmark théorique + analyse des use cases crédibles.
**Différenciation** : Sujet très émergent, quasi aucun contenu de qualité disponible en français.

### 6 — "400B LLMs sur mobile : Ce que ça change pour le trading autonome"
**Angle** : Implications pratiques pour les traders retail. Agents autonomes on-device, privacy, latency, edge computing pour la finance.
**Différenciation** : Pont entre tech de pointe et cas d'usage trading concret.

### 7 — "Diversification : Frein ou protection ? 15 ans de données TAA qui remettent tout en question"
**Angle** : Analyse factuelle basée sur les données Allocate Smartly (2,1%/an de drag). Quand la diversification coûte et quand elle sauve — application à nos propres portefeuilles.
**Différenciation** : Déconstruire un dogme financier avec des données réelles, angle contre-intuitif qui génère de l'engagement.

---

## 📊 Radar stratégique de la semaine

<div class="echarts-container" id="chart-radar" style="width:100%;height:400px;"></div>

<script>
var chart2 = echarts.init(document.getElementById('chart-radar'));
chart2.setOption({
  tooltip: {},
  radar: {
    indicator: [
      { name: 'Trend following', max: 10 },
      { name: 'AI/LLM trading', max: 10 },
      { name: 'Multi-agents', max: 10 },
      { name: 'Cybersécurité', max: 10 },
      { name: 'Open source', max: 10 },
      { name: 'Communauté', max: 10 }
    ],
    shape: 'circle',
    splitNumber: 4,
    axisName: { color: '#94a3b8' },
    splitLine: { lineStyle: { color: ['#334155','#334155','#334155','#334155'] } },
    splitArea: { areaStyle: { color: ['rgba(51,65,85,0.2)','rgba(51,65,85,0.4)'] } }
  },
  series: [{
    name: 'Intensité du signal',
    type: 'radar',
    data: [{
      value: [9, 10, 8, 7, 9, 8],
      name: 'Semaine 23 mars',
      areaStyle: { color: 'rgba(59,130,246,0.3)' },
      lineStyle: { color: '#3b82f6' },
      itemStyle: { color: '#3b82f6' }
    }]
  }]
});
window.addEventListener('resize', () => chart2.resize());
</script>

---

> 💡 **Synthèse** : Cette semaine est dominée par la tension entre **hype IA** (vibe quant, TradingAgents, MiroFish) et **réalité de terrain** (Robot Wealth, données TAA). Le signal le plus fort reste le retour du trend following post-choc tarifaire — un phénomène documenté, mesurable, et directement pertinent pour nos portfolios. L'alerte Trivy/GitHub Actions est à traiter en urgence.

---

**Sources :**
- [Quantocracy — Quant Mashup](https://quantocracy.com/)
- [Robot Wealth — Vibe Quant critique](https://robotwealth.com/more-of-the-disease-faster-what-happens-when-you-ask-an-llm-to-find-you-an-edge/)
- [Alpha Architect — Trend Following retour](https://alphaarchitect.com/the-return-of-the-king-trend-following-is-back-but-will-it-last/)
- [Macrosynergy — Relative value macro-systematic](https://macrosynergy.com/research/unlocking-relative-value-across-asset-classes/)
- [Allocate Smartly — Diversification drag TAA](https://allocatesmartly.com/diversification-has-been-a-huge-drag-on-taa-performance-for-15-years/)
- [TauricResearch/TradingAgents — GitHub](https://github.com/TauricResearch/TradingAgents)
- [666ghj/MiroFish — GitHub](https://github.com/666ghj/MiroFish)
- [langchain-ai/deepagents — GitHub](https://github.com/langchain-ai/deepagents)
- [volcengine/OpenViking — GitHub](https://github.com/volcengine/OpenViking)
- [Socket.dev — Trivy GitHub Actions compromise](https://socket.dev/blog/trivy-under-attack-again-github-actions-compromise)
- [HackerNews](https://news.ycombinator.com/)
- [GitHub Trending Python](https://github.com/trending?l=python&since=weekly)
