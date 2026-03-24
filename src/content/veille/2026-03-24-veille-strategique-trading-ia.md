---
title: "Veille stratégique — Trading IA, Agents LLM & Cybersécurité (24 mars 2026)"
date: 2026-03-24T19:00:00
description: "Synthèse hebdomadaire : explosion des frameworks multi-agents LLM pour le trading, montée du 'vibe quant', retour du trend following, attaque supply-chain LiteLLM. 8 sujets d'articles prioritaires pour market-watch.xyz."
category: veille
tags: ["systematic trading", "LLM", "AI agents", "quant finance", "cybersécurité", "trend following", "open source"]
image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=680&h=400&fit=crop"
---

## 🌐 Vue d'ensemble — Semaine du 24 mars 2026

La semaine a été marquée par deux signaux forts : l'**explosion virale des frameworks multi-agents LLM** pour le trading financier sur GitHub, et une **attaque supply-chain majeure** ciblant LiteLLM — un outil massivement utilisé par les traders quantitatifs qui intègrent des LLMs dans leurs pipelines. En parallèle, la communauté quant débat violemment de la vague "vibe quant", ces traders qui délèguent entièrement leur recherche de stratégies aux LLMs.

---

## 🚀 Tendances du moment

### 1. Multi-Agents LLM pour le Trading — Explosion GitHub

[TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) a cumulé **+6 234 étoiles cette semaine** (total : 40k+), devenant l'un des repos finance les plus actifs de GitHub. Le framework orchestre plusieurs agents LLM spécialisés (analyste fondamental, analyste technique, risk manager, portfolio manager) qui collaborent pour prendre des décisions de trading.

Dans la foulée, [hsliuping/TradingAgents-CN](https://github.com/hsliuping/TradingAgents-CN), une version adaptée aux marchés chinois, a gagné +1 984 étoiles.

> 💡 **Signal fort** : Quand un repo finance dépasse 6k étoiles en une semaine, c'est un signal que le sujet sort du cercle des quants pour toucher les développeurs généralistes. La question n'est plus "est-ce que les LLMs vont entrer en finance" mais "comment les industrialiser correctement".

**Autres repos en forte hausse :**
- [bytedance/deer-flow](https://github.com/bytedance/deer-flow) : SuperAgent framework ByteDance, +10 201 étoiles/semaine (42k total)
- [langchain-ai/deepagents](https://github.com/langchain-ai/deepagents) : harness LangGraph avec planification + spawn de sous-agents, +4 831 étoiles
- [666ghj/MiroFish](https://github.com/666ghj/MiroFish) : moteur swarm intelligence pour la prédiction, +11 768 étoiles (41k total)

<div class="echarts-container" id="chart-github" style="width:100%;height:380px;"></div>

<script>
var chart = echarts.init(document.getElementById('chart-github'));
chart.setOption({
  tooltip: { trigger: 'axis' },
  title: { text: 'Stars GitHub — Top repos finance/AI cette semaine', textStyle: { color: '#94a3b8', fontSize: 13 } },
  xAxis: { type: 'category', data: ['MiroFish', 'deer-flow', 'TradingAgents', 'deepagents', 'TradingAgents-CN'], axisLabel: { color: '#94a3b8' } },
  yAxis: { type: 'value', name: 'Stars/semaine', nameTextStyle: { color: '#94a3b8' }, axisLabel: { color: '#94a3b8' } },
  series: [{
    type: 'bar',
    data: [11768, 10201, 6234, 4831, 1984],
    itemStyle: { color: function(params) {
      var colors = ['#8b5cf6', '#3b82f6', '#22c55e', '#f59e0b', '#ef4444'];
      return colors[params.dataIndex];
    }},
    label: { show: true, position: 'top', color: '#e2e8f0', formatter: '{c}' }
  }]
});
window.addEventListener('resize', () => chart.resize());
</script>

### 2. La Controverse "Vibe Quant"

[Robot Wealth](https://robotwealth.com/more-of-the-disease-faster-what-happens-when-you-ask-an-llm-to-find-you-an-edge/) a publié un article qui fait polémique : **"More of the Disease, Faster"**. La thèse centrale : demander à un LLM de trouver des edges de trading est fondamentalement dangereux — non pas parce que le LLM est mauvais, mais parce qu'il bypasse le seul apprentissage qui compte (comprendre _qui perd de l'argent en face de vous et pourquoi_).

> ⚠️ **Citation directe** : *"Le vibe quant ne fait pas de recherche. Il fait quelque chose qui ressemble à de la recherche parce que c'est technique, mais le LLM accélère le tapis roulant sans jamais aller nulle part."*

Ce débat est crucial pour le positionnement éditorial de market-watch.xyz : nous avons un angle fort à prendre — ni anti-AI naïf, ni pro-AI béat.

### 3. Transformers & MVO pour la Gestion de Portefeuille

[Jonathan Kinlay](https://jonathankinlay.com/2026/03/transformer-models-for-alpha-generation-a-practical-guide/) a publié deux articles consécutifs cette semaine :
- *"Transformer Models for Alpha Generation: A Practical Guide"*
- *"From Hype to Reality: Building a Hybrid Transformer-MVO Pipeline"*

Le second décompose en 5 composantes ce qui drive réellement les returns risk-adjusted dans un portefeuille AI. Approche moins hype, plus praticienne — exactement le ton qui manque sur le marché français.

### 4. Le Trend Following est de Retour

[Alpha Architect](https://alphaarchitect.com/the-return-of-the-king-trend-following-is-back-but-will-it-last/) note que le trend following a été l'un des rares actifs protecteurs lors du choc tarifaire Trump d'avril 2025. Performance confirmée sur nos propres portfolios — signal pertinent pour un article avec backtest concret.

---

## 🛡️ Cybersécurité — Alerte Critique

### LiteLLM Compromis par Supply-Chain Attack

🔴 **Incident majeur** : Le package Python [LiteLLM](https://github.com/BerriAI/litellm/issues/24512) a été compromis par une attaque supply-chain. **651 points sur HackerNews**, 256 commentaires — niveau de gravité exceptionnel pour la communauté tech. LiteLLM est utilisé par des dizaines de milliers de développeurs pour router des appels vers différents LLMs (OpenAI, Anthropic, etc.), y compris dans des contextes trading.

> ⚠️ **Impact trading** : Si votre pipeline de trading utilise LiteLLM pour des décisions automatisées, vérifiez immédiatement votre version et les permissions accordées au package.

Le NIST a également publié cette semaine son **Secure DNS Deployment Guide 2026** (SP 800-81r3), mise à jour majeure des bonnes pratiques DNS pour les infrastructures critiques.

---

## 🏦 Concurrents & Écosystème

### Ce que font les concurrents cette semaine :

**QuantConnect / Alpaca** : Pas d'annonce majeure publique cette semaine, mais la montée de TradingAgents intensifie la pression sur les plateformes backtest "classiques" qui n'intègrent pas nativement les LLMs dans leur workflow de recherche.

**Quantocracy (newsletter quant)** : 15 articles publiés cette semaine, dont :
- CAPE Ratio avec ajustement simple : prévisibilité à long terme restaurée ([Alpha Architect](https://alphaarchitect.com/cape-ratios/))
- Friday Gold Trade comme edge conditionnel ([Beyond Passive](https://substack.com/home/post/p-191782986))
- Relative value cross-asset classes via macro-systematic approach ([Macrosynergy](https://macrosynergy.com/research/unlocking-relative-value-across-asset-classes/))
- TAA : la diversification a coûté 2.1%/an vs 60/40 sur 15 ans ([Allocate Smartly](https://allocatesmartly.com/diversification-has-been-a-huge-drag-on-taa-performance-for-15-years/))

**Angle différenciant market-watch.xyz** : la plupart de ces contenus sont en anglais, généraux, et déconnectés de la réalité des retail traders français. Notre avantage = ancrage pratique (portfolios live), données réelles, perspective institutionnelle décomplexée (background SG/Reuters/Euronext).

---

## 🔬 Open Source — Nouveautés Notables

| Outil | Catégorie | Stars/semaine | Lien |
|-------|-----------|:-------------:|------|
| TradingAgents | Multi-agent LLM trading | +6 234 | [GitHub](https://github.com/TauricResearch/TradingAgents) |
| MiroFish | Swarm Intelligence / prédiction | +11 768 | [GitHub](https://github.com/666ghj/MiroFish) |
| deer-flow | SuperAgent harness (ByteDance) | +10 201 | [GitHub](https://github.com/bytedance/deer-flow) |
| deepagents | LangGraph multi-agent | +4 831 | [GitHub](https://github.com/langchain-ai/deepagents) |
| vllm-omni | Inference omni-modal | +549 | [GitHub](https://github.com/vllm-project/vllm-omni) |
| unsloth | Fine-tuning local open models | +3 719 | [GitHub](https://github.com/unslothai/unsloth) |

**Observation** : La semaine est dominée par les frameworks agentic généralistes qui s'appliquent à la finance — pas des libs finance pures. Le mouvement est "AI general → spécialisation finance", pas l'inverse.

---

## 🎯 8 Sujets d'Articles — Ordre de Priorité Éditoriale

**#1 🔥 "Vibe Quant : Pourquoi Confier votre Recherche d'Edge à un LLM est une Erreur Coûteuse"**
- Angle : Prise de position tranchée, analyse de Robot Wealth + notre expérience portfolios live
- Différenciant : Seule analyse critique EN FRANÇAIS qui ne soit pas anti-AI naïve
- Format : Article d'opinion + framework décision "quand utiliser un LLM en trading"

**#2 🔥 "TradingAgents : Le Framework Multi-Agents pour le Trading qui Fait Exploser GitHub (Analyse & Test)"**
- Angle : Décryptage technique + test sur données réelles market-watch.xyz
- Différenciant : Benchmark contre notre propre pipeline systematic
- Format : Tutorial + benchmark

**#3 🚨 "LiteLLM Compromis : Ce que Chaque Trader Utilisant des LLMs Doit Faire Maintenant"**
- Angle : Urgence cybersécurité + guide pratique de mitigation
- Différenciant : Contenu de sécurité pour traders (niche quasi-vide en français)
- Format : Alert + guide en 5 étapes

**#4 📈 "Trend Following en 2026 : Retour en Grâce ou Feu de Paille ?"**
- Angle : Analyse de nos portfolios systematic (données réelles) + contexte macro tarifs
- Différenciant : Données live de portfolio.market-watch.xyz — impossible à répliquer
- Format : Analyse + données portfolio

**#5 🤖 "Transformer + MVO : Comment Construire un Pipeline Hybride pour la Gestion de Portefeuille"**
- Angle : Guide pratique basé sur Kinlay, avec code Python et application aux marchés européens
- Différenciant : Adaptation marchés FR/EU vs US-centric de l'original
- Format : Tutorial deep-dive avec code

**#6 📊 "CAPE Ratio en 2026 : L'Indicateur que Personne n'Utilise Correctement (et l'Ajustement qui Change Tout)"**
- Angle : Alpha Architect + application pratique à l'allocation SP500 vs Europe
- Différenciant : Calcul sur données actuelles avec recommandation d'allocation
- Format : Analyse quantitative

**#7 🌊 "Swarm Intelligence pour la Prédiction Financière : Promesse ou Hype ? (MiroFish, Dezentralize et co.)"**
- Angle : Revue critique des nouvelles approches swarm, test conceptuel sur crypto
- Différenciant : Regard sceptique mais documenté (pas de hype aveugle)
- Format : Revue de littérature + expérimentation

**#8 🏗️ "Comparatif 2026 : TradingAgents vs QuantConnect vs Alpaca — Quel Framework pour Quel Trader ?"**
- Angle : Matrice de décision pratique pour retail trader intermédiaire/avancé
- Différenciant : Basé sur usage réel, pas sur marketing officiel
- Format : Comparatif structuré

---

## 💡 Recommandation Éditoriale

La semaine valide une thèse forte pour market-watch.xyz : **l'IA en finance n'est plus une promesse, c'est un chantier actif avec de vrais risques et de vraies opportunités**. Le contenu qui manque en français est l'analyse praticienne — ni naïvement pro-AI, ni archaïquement anti-tech. Exactement notre positionnement.

Priorité absolue cette semaine : articles #1 (vibe quant) et #3 (LiteLLM security) — tous deux d'actualité immédiate avec une fenêtre éditoriale de 48-72h max.

---

**Sources :**
- [TauricResearch/TradingAgents — GitHub](https://github.com/TauricResearch/TradingAgents)
- [Robot Wealth — More of the Disease, Faster](https://robotwealth.com/more-of-the-disease-faster-what-happens-when-you-ask-an-llm-to-find-you-an-edge/)
- [Jonathan Kinlay — Transformer Models for Alpha Generation](https://jonathankinlay.com/2026/03/transformer-models-for-alpha-generation-a-practical-guide/)
- [Alpha Architect — Trend Following Is Back](https://alphaarchitect.com/the-return-of-the-king-trend-following-is-back-but-will-it-last/)
- [LiteLLM Supply-Chain Attack — GitHub Issue](https://github.com/BerriAI/litellm/issues/24512)
- [Quantocracy — Mashup hebdomadaire](https://quantocracy.com/)
- [GitHub Trending Python — Semaine du 24 mars](https://github.com/trending?since=weekly&l=Python)
- [bytedance/deer-flow — GitHub](https://github.com/bytedance/deer-flow)
- [MiroFish — GitHub](https://github.com/666ghj/MiroFish)
- [Alpha Architect — CAPE Ratio](https://alphaarchitect.com/cape-ratios/)
- [Allocate Smartly — TAA Diversification Drag](https://allocatesmartly.com/diversification-has-been-a-huge-drag-on-taa-performance-for-15-years/)
- [Macrosynergy — Relative Value Cross-Asset](https://macrosynergy.com/research/unlocking-relative-value-across-asset-classes/)
