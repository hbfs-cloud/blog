---
title: "🔍 Veille Stratégique S12 — Vibe Quants, Azure Invisible, MiroFish et l'explosion des agents IA"
date: 2026-03-20T18:00:00
description: "Synthèse hebdomadaire de veille : trends quant finance, cybersécurité Azure, repos GitHub trending, et sujets d'articles prioritaires pour market-watch.xyz"
category: veille
tags: ["veille", "quant-finance", "AI-agents", "cybersecurity", "systematic-trading", "LLM", "open-source"]
image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=680&h=400&fit=crop"
---

## 📊 1. Trends du moment

### 🤖 Le phénomène "Vibe Quant" — LLMs et recherche de stratégies

Le sujet le plus brûlant de la semaine dans la communauté quant : le **vibe quanting**. [Robot Wealth](https://robotwealth.com/more-of-the-disease-faster-what-happens-when-you-ask-an-llm-to-find-you-an-edge/) a publié un article viral ("More of the Disease, Faster") qui démonte méthodiquement cette approche consistant à demander à un LLM de trouver des stratégies de trading, les backtester et les mettre en production.

> 💡 **Point clé** : La question fondamentale "qui perd de l'argent de l'autre côté du trade, et pourquoi continuera-t-il ?" est absente du corpus d'entraînement des LLMs. Résultat : ils produisent de beaux backtests sans edge réel.

[Kris Longmore](https://substack.com/home/post/p-190257777) a prolongé le débat avec "AI Will Create Millions of Quants" — l'IA rend la construction de backtests triviale, mais elle ne remplace pas la compréhension de la microstructure du marché.

### 🧠 Transformers pour la génération d'alpha

[Jonathan Kinlay](https://jonathankinlay.com/2026/03/transformer-models-for-alpha-generation-a-practical-guide/) a publié un guide pratique complet : implémentation PyTorch end-to-end d'un modèle Transformer appliqué au trading. Points notables :
- Le mécanisme d'attention permet un accès direct à n'importe quel timestep (pas de bottleneck séquentiel des RNN/LSTM)
- Multi-head attention capture simultanément momentum court terme, mean-reversion, et structure de régime
- **Mise en garde** : les poids d'attention ne sont PAS des explications causales fiables (Jain & Wallace, 2019)

### 📈 Autres articles remarquables sur Quantocracy

- **[Quantpedia](https://quantpedia.com/timing-value-vs-growth-evidence-from-100-years-of-small-value-large-growth-spread/?a=6080)** — Timing Value vs Growth avec 100 ans de données small value/large growth
- **[Allocate Smartly](https://allocatesmartly.com/diversification-has-been-a-huge-drag-on-taa-performance-for-15-years/?aff=634)** — La diversification a coûté 2.1%/an en TAA sur 15 ans (vs timing pur)
- **[Alpha Architect](https://alphaarchitect.com/defensive-investment-strategies/)** — Meilleures stratégies défensives sur 2 siècles
- **[Jonathan Kinlay](https://jonathankinlay.com/2026/03/reinforcement-learning-for-portfolio-optimization-from-theory-to-implementation/)** — RL pour l'optimisation de portefeuille : Markowitz → DRL
- **[Beyond Passive](https://beyondpassive.substack.com/p/the-calendar-ensemble-building-an)** — Calendar Ensemble : overlay alpha event-driven
- **[Financial Hacker](https://financial-hacker.com/the-one-euro-filter/)** — One Euro Filter d'Ehlers : smoother adaptatif ultra low-latency
- **[Harbour Fronts](https://blog.harbourfronts.com/2026/03/11/machine-learning-for-derivative-pricing-and-crash-prediction/)** — ML pour pricing de dérivés et prédiction de crash

<div class="echarts-container" id="chart-trends" style="width:100%;height:400px;"></div>

<script>
var chartTrends = echarts.init(document.getElementById('chart-trends'));
chartTrends.setOption({
  title: { text: 'Topics dominants — Semaine du 17 mars 2026', left: 'center', textStyle: { color: '#e5e7eb' } },
  tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
  xAxis: { type: 'value', name: 'Score de buzz (mentions + engagement)', nameTextStyle: { color: '#9ca3af' }, axisLabel: { color: '#9ca3af' } },
  yAxis: { type: 'category', data: ['One Euro Filter', 'RL Portfolio', 'Defensive 200y', 'Transformers Alpha', 'Calendar Alpha', 'Diversification Drag', 'Vibe Quanting'], axisLabel: { color: '#e5e7eb' } },
  series: [{ type: 'bar', data: [25, 40, 45, 65, 50, 55, 95], itemStyle: { color: '#3b82f6' }, barWidth: '60%' }]
});
window.addEventListener('resize', () => chartTrends.resize());
</script>

---

## 🔒 2. Cybersécurité — Azure Entra ID : 4 bypass de logs d'authentification

Nouvelle explosive sur [HackerNews](https://news.ycombinator.com/) cette semaine (248 points, 77 commentaires) : [TrustedSec](https://trustedsec.com/blog/full-disclosure-a-third-and-fourth-azure-sign-in-log-bypass-found) a révélé les **3ème et 4ème bypass** des logs de connexion Azure Entra ID en 3 ans.

> ⚠️ **Alerte** : Ces vulnérabilités permettaient d'obtenir des tokens valides (bearer + refresh) via le endpoint OAuth2 ROPC **sans aucune trace dans les sign-in logs** — les logs sur lesquels les admins du monde entier se reposent pour détecter les intrusions.

| Bypass | Découvert | Corrigé | Impact |
|--------|-----------|---------|--------|
| GraphNinja | 08/2023 | 05/2024 | Validation password sans log |
| GraphGhost | 12/2024 | 04/2025 | Validation via paramètres invalides |
| Bypass #3 | 2025 | 2026 | Tokens complets sans log |
| Bypass #4 | 2025 | 2026 | Tokens complets sans log |

Également notable sur HN : **Super Micro** chute de 25% après l'inculpation de son co-fondateur dans un complot de contrebande de puces AI à 2.5 milliards $ ([Forbes](https://www.forbes.com/sites/tylerroush/2026/03/20/super-micro-shares-plunge-25-after-co-founder-charged-in-25-billion-ai-chip-smuggling-plot/)).

Et côté OPSEC : **Le Monde a localisé le porte-avions français en temps réel** via Strava ([Le Monde](https://www.lemonde.fr/en/international/article/2026/03/20/stravaleaks-france-s-aircraft-carrier-located-in-real-time-by-le-monde-through-fitness-app_6751640_4.html)) — les fitness apps restent un cauchemar pour la sécurité militaire.

---

## 🚀 3. GitHub Trending — Repos de la semaine

### 🐟 MiroFish — 36,800 ⭐ (+17,600 cette semaine)

[MiroFish](https://github.com/666ghj/MiroFish) : moteur de "swarm intelligence" universel pour la prédiction. Approche biomimétique (essaims) appliquée à n'importe quel jeu de données. Le repo le plus starté de la semaine toutes catégories.

### 📈 daily_stock_analysis — 23,700 ⭐ (+4,200 cette semaine)

[daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) : analyseur de stocks A/H/US piloté par LLM. Multi-sources, news temps réel, dashboard de décision IA, push multi-canal. **Concurrent direct** de notre pipeline market-watch.

### 🤖 Explosion des agents IA

- **[open-swe](https://github.com/langchain-ai/open-swe)** (LangChain) — 7,500 ⭐ : agent de coding asynchrone open-source
- **[deepagents](https://github.com/langchain-ai/deepagents)** (LangChain) — 15,900 ⭐ : harness d'agents avec planification, filesystem, sub-agents
- **[hermes-agent](https://github.com/NousResearch/hermes-agent)** (NousResearch) — 9,400 ⭐ : "The agent that grows with you"
- **[OpenViking](https://github.com/volcengine/OpenViking)** (Volcengine) — 16,800 ⭐ : base de données contextuelle pour agents IA
- **[hindsight](https://github.com/vectorize-io/hindsight)** — 5,400 ⭐ : mémoire d'agent qui apprend
- **[cognee](https://github.com/topoteretes/cognee)** — 14,400 ⭐ : moteur de connaissance pour mémoire d'agent

### 🧰 Autres repos notables

- **[BitNet](https://github.com/microsoft/BitNet)** (Microsoft) — 36,000 ⭐ : framework d'inférence pour LLMs 1-bit
- **[unsloth](https://github.com/unslothai/unsloth)** — 57,000 ⭐ : UI unifiée pour entraîner/exécuter des modèles ouverts localement
- **[openrag](https://github.com/langflow-ai/openrag)** — 3,450 ⭐ : plateforme RAG basée sur Langflow + Docling + OpenSearch
- **[claude-plugins-official](https://github.com/anthropics/claude-plugins-official)** (Anthropic) — 13,500 ⭐ : répertoire officiel de plugins Claude Code

<div class="echarts-container" id="chart-repos" style="width:100%;height:400px;"></div>

<script>
var chartRepos = echarts.init(document.getElementById('chart-repos'));
chartRepos.setOption({
  title: { text: 'GitHub Trending Python — Stars cette semaine', left: 'center', textStyle: { color: '#e5e7eb' } },
  tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
  xAxis: { type: 'category', data: ['MiroFish', 'OpenViking', 'deepagents', 'BitNet', 'heretic', 'daily_stock', 'hermes', 'claude-plugins', 'unsloth', 'openrag'], axisLabel: { rotate: 30, color: '#9ca3af' } },
  yAxis: { type: 'value', name: '⭐ cette semaine', nameTextStyle: { color: '#9ca3af' }, axisLabel: { color: '#9ca3af' } },
  series: [{ type: 'bar', data: [17584, 10158, 4877, 4792, 4772, 4240, 3241, 2747, 2693, 2315], itemStyle: { color: function(params) { return ['#f59e0b','#8b5cf6','#3b82f6','#3b82f6','#ef4444','#22c55e','#3b82f6','#8b5cf6','#22c55e','#3b82f6'][params.dataIndex]; } } }]
});
window.addEventListener('resize', () => chartRepos.resize());
</script>

---

## 🏢 4. Concurrents et écosystème

### Ce que font les plateformes

- **QuantConnect / Lean** : continue de pousser le cloud-based backtesting. Communauté active, mais modèle freemium qui limite la différenciation.
- **Alpaca** : API commission-free, cible les développeurs individuels. Pas de contenu éditorial — c'est de l'infra pure.
- **Interactive Brokers** : expansion des APIs, mais positionnement institutionnel. Peu de contenu pédagogique.
- **Bloomberg / Refinitiv** : inaccessibles au retail. Terminal à 24k$/an. Leur contenu reste enfermé derrière des paywalls.

### Blogs quant et newsletters — Qui publie quoi

- **[Quantocracy](https://quantocracy.com/)** : agrégateur, pas de contenu original. Position de hub.
- **[Robot Wealth](https://robotwealth.com/)** : contenu de fond exceptionnel cette semaine (vibe quant). Cible : traders individuels sérieux.
- **[Quantpedia](https://quantpedia.com/)** : database de stratégies académiques. Forte valeur ajoutée mais payant.
- **[Alpha Architect](https://alphaarchitect.com/)** : recherche académique vulgarisée. Focus facteurs et allocation.
- **[Man Institute](https://www.man.com/maninstitute)** : contenu institutionnel de très haut niveau. Podcasts (AHL Explains, Long Story Short), collaboration Oxford-Man Institute.
- **[Edge Alchemy](https://edgealchemy.robotwealth.com/)** (Robot Wealth) : newsletter premium sur AI + trading research.

---

## 🌐 5. Communautés et réseaux sociaux

### Reddit r/algotrading (1.84M abonnés)

La communauté continue de croître fortement. Discussions actives cette semaine sur :
- Fiabilité des données HFT des nouveaux providers
- Debate sur le vibe quanting (écho de l'article Robot Wealth)
- Outils et plateformes de backtesting

### HackerNews — Signaux pertinents finance/tech

- **Azure sign-in bypasses** : 248 points — la cybersécurité cloud reste un sujet chaud
- **Super Micro / contrebande puces IA** : 97 points — supply chain AI sous pression géopolitique
- **Flash-KMeans** (arxiv) : 127 points — nouvel algo K-Means rapide et memory-efficient, applicable au clustering de régimes
- **ArXiv déclare son indépendance de Cornell** : 603 points — implications pour la recherche open-access

---

## 🎯 6. Sujets d'articles proposés pour market-watch.xyz

Par ordre de priorité éditoriale, avec angle différenciant :

### 1. 🥇 "Vibe Quanting : pourquoi les LLMs ne trouveront jamais votre edge"
**Angle MW** : On a notre propre pipeline IA (MCP + screener + LLM analysis). On peut comparer honnêtement ce qu'un LLM fait bien (screening, résumé, data prep) vs ce qu'il fait mal (edge discovery, microstructure). Tester concrètement avec notre stack.

### 2. 🥈 "Transformers pour le trading : guide pratique et résultats réels"
**Angle MW** : Adapter le guide de Kinlay à nos données de screener/portfolios. Benchmark Transformer vs notre stack actuelle (facteurs + screener). Publier les résultats bruts.

### 3. 🥉 "Azure Entra ID : 4 bypasses en 3 ans — votre SOC est-il aveugle ?"
**Angle MW** : Article cybersécurité appliqué aux infras fintech. Requêtes KQL de détection. Checklist pour traders/firms utilisant Azure AD.

### 4. "MiroFish et l'intelligence en essaim pour la prédiction de marché"
**Angle MW** : Review technique du repo à 36k ⭐. Test sur nos données. Comparaison swarm intelligence vs facteurs classiques.

### 5. "Reinforcement Learning pour l'allocation : de Markowitz au DRL"
**Angle MW** : Application directe à nos 8 portfolios systematic. Backtester un allocateur RL sur nos données réelles.

### 6. "Le One Euro Filter d'Ehlers : smoothing adaptatif pour le trading systematic"
**Angle MW** : Intégrer le filtre dans notre pipeline de signaux. Benchmark vs EMA/SMA classiques sur nos portefeuilles.

### 7. "L'explosion des agents IA open-source : cartographie mars 2026"
**Angle MW** : On utilise nous-mêmes des agents IA (OpenClaw). Review des 6 principaux frameworks agents trending. Implications pour l'automatisation trading.

### 8. "Diversification drag : 15 ans de sous-performance TAA — et après ?"
**Angle MW** : Nos portfolios sont diversifiés multi-stratégie. Mesurer notre propre diversification drag. Est-ce que la concentration aurait payé davantage ?

---

**Sources :**
- [Robot Wealth — More of the Disease, Faster](https://robotwealth.com/more-of-the-disease-faster-what-happens-when-you-ask-an-llm-to-find-you-an-edge/)
- [Jonathan Kinlay — Transformer Models for Alpha Generation](https://jonathankinlay.com/2026/03/transformer-models-for-alpha-generation-a-practical-guide/)
- [TrustedSec — Azure Sign-In Log Bypass](https://trustedsec.com/blog/full-disclosure-a-third-and-fourth-azure-sign-in-log-bypass-found)
- [Quantocracy](https://quantocracy.com/)
- [GitHub Trending Python](https://github.com/trending/python?since=weekly)
- [Alpha Architect — Defensive Strategies](https://alphaarchitect.com/defensive-investment-strategies/)
- [Quantpedia — Value vs Growth 100 Years](https://quantpedia.com/timing-value-vs-growth-evidence-from-100-years-of-small-value-large-growth-spread/?a=6080)
- [Financial Hacker — One Euro Filter](https://financial-hacker.com/the-one-euro-filter/)
- [HackerNews](https://news.ycombinator.com/)
- [Forbes — Super Micro](https://www.forbes.com/sites/tylerroush/2026/03/20/super-micro-shares-plunge-25-after-co-founder-charged-in-25-billion-ai-chip-smuggling-plot/)
- [Le Monde — StravaLeaks](https://www.lemonde.fr/en/international/article/2026/03/20/stravaleaks-france-s-aircraft-carrier-located-in-real-time-by-le-monde-through-fitness-app_6751640_4.html)
- [MiroFish](https://github.com/666ghj/MiroFish)
- [daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis)
- [Allocate Smartly — Diversification Drag](https://allocatesmartly.com/diversification-has-been-a-huge-drag-on-taa-performance-for-15-years/?aff=634)
- [Man Institute](https://www.man.com/maninstitute)
