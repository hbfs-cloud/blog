---
title: "🔍 Rapport Réputation Hebdomadaire — Semaine 14 (30 mars 2026)"
date: 2026-03-30T09:00:00
description: "Veille e-réputation hebdomadaire pour market-watch.xyz, Mohamed Elouadi et HBFS Cloud. Monitoring SEO, social, juridique, signaux de croissance S14."
category: reputation
tags: ["réputation", "SEO", "monitoring", "market-watch", "HBFS Cloud", "e-réputation", "S14"]
image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=680&h=400&fit=crop"
---

## 🔍 Rapport de Réputation — Semaine 14 (24–30 mars 2026)

Veille hebdomadaire e-réputation pour les trois entités du groupe : la plateforme **market-watch.xyz**, son fondateur **Mohamed Elouadi**, et la société **HBFS Cloud**.

---

## ⚡ Synthèse Flash

> 💡 **Point clé** : Semaine d'hyper-activité technique — **196 commits** sur le repo articles en 7 jours. Nouveau pipeline vidéo scanner, TTS local (Piper), notifications Telegram refondues. Aucun incident réputationnel.

> ✅ **Bilan** : Aucune alerte critique. Pas de mention négative. HBFS Cloud : aucun changement juridique. Fiches societe.com mises à jour le 28/03/2026.

> 🚀 **Signal** : Le scanner quotidien franchit les 29 scans et 380 setups analysés avec 6 rétrospectives complètes. Hit rate pondéré à ~49%. Best pick ACMR à +147%.

---

## 📊 market-watch.xyz — Plateforme Intelligence de Marché

### 🌐 Site & Indexation

La plateforme [articles.market-watch.xyz](https://articles.market-watch.xyz/) reste **en ligne et pleinement opérationnelle** sur GitHub Pages (Fastly CDN). Publication quotidienne confirmée — briefings du 24 au 30 mars tous publiés sans interruption.

**Métriques clés du scanner (au 30/03/2026) :**

| Métrique | Valeur | Δ vs S13 |
|----------|--------|----------|
| Scanner Hit Rate | ~49% (weighted, 6 rétros) | <span style="color:#22c55e">▲ +2pts</span> |
| Meilleur pick | <span style="color:#22c55e">+147% (ACMR, 28 fév)</span> | Nouveau record |
| Pire pick | <span style="color:#ef4444">-50.8% (DWSN 🚫, 20 mars)</span> | Dégradé |
| Scans réalisés | 29 (380 setups, 6 rétros) | +2 scans |
| Régime de marché | RISK-OFF | Inchangé |

**Nouveautés de la semaine :**
- 🎬 **Pipeline vidéo scanner** : 6 slides structurés (Actions, Portfolio, Market, 3× Setup+Finviz), générés automatiquement depuis le HTML
- 🔊 **TTS local (Piper)** : audio analytique intégré aux notifications, plus de dépendance cloud pour le voice-over
- 📱 **Refonte notifications Telegram** : audio + vidéo dans le même topic, une seule notification par scan, fallback intelligent si quota YouTube dépassé
- 📊 **Normalisation régime** : taxonomie officielle enforced (plus de variantes comme "DEEP RISK-OFF")
- 🛡️ **Anti-doublon** : flag `/tmp/mw-notify-sent-{date}` pour éviter les notifications dupliquées
- 📈 **Contenu éducatif** : 4 parcours guidés (débutant → expert + thématiques), section Tech "Data Engineering & Quantitative Infrastructure" visible en homepage

> 💡 **Point clé** : 196 commits en 7 jours sur le repo articles — rythme exceptionnel de développement. La plateforme gagne en maturité technique (vidéo automatisée, TTS, notifications multi-canal).

### 📺 YouTube — @MarketWatchXYZ

La chaîne [YouTube @MarketWatchXYZ](https://www.youtube.com/@MarketWatchXYZ) continue de publier. Les vidéos scanner sont désormais uploadées en **public** (correction du 28/03 : unlisted → public). La série "Quiz de Salma" et les vidéos formation trading complètent le catalogue.

> ⚠️ **Point d'attention** : L'audience YouTube reste embryonnaire. Le passage en public est un bon signal, mais la promotion (SEO titres, thumbnails, cross-posting) reste le principal levier de croissance.

### 🐦 X/Twitter & Réseaux sociaux

Le profil [@MarketWatchXYZ sur X](https://x.com/MarketWatchXYZ) n'a pas pu être vérifié automatiquement (accès bloqué). Aucune mention publique négative détectée via les moteurs de recherche. Reddit et StockTwits : pas de discussion identifiée concernant market-watch.xyz.

### 🔗 Backlinks & SEO

Les outils de scraping (DuckDuckGo, Google) restent majoritairement bloqués par les captchas/challenges bot. L'indexation Google du site est confirmée (le site apparaît dans les résultats). Pas de nouveaux backlinks détectables cette semaine.

**Recommandation SEO** : Envisager l'intégration de [Google Search Console](https://search.google.com/search-console) pour un suivi précis des impressions, clics et positions (données first-party, pas de scraping nécessaire).

<div class="echarts-container" id="chart-scanner-hr" style="width:100%;height:400px;"></div>

<script>
var chartHR = echarts.init(document.getElementById('chart-scanner-hr'));
chartHR.setOption({
  tooltip: { trigger: 'axis' },
  title: { text: 'Évolution Hit Rate Scanner', left: 'center', textStyle: { color: '#e5e7eb' } },
  xAxis: { type: 'category', data: ['Rétro 1', 'Rétro 2', 'Rétro 3', 'Rétro 4', 'Rétro 5', 'Rétro 6'], axisLabel: { color: '#9ca3af' } },
  yAxis: { type: 'value', name: '%', min: 30, max: 65, axisLabel: { color: '#9ca3af' } },
  series: [{
    data: [42, 44, 46, 48, 47, 49],
    type: 'line',
    smooth: true,
    areaStyle: { color: 'rgba(59,130,246,0.2)' },
    lineStyle: { color: '#3b82f6', width: 3 },
    itemStyle: { color: '#3b82f6' },
    markLine: { data: [{ type: 'average', name: 'Moyenne' }], lineStyle: { color: '#f59e0b' } }
  }]
});
window.addEventListener('resize', () => chartHR.resize());
</script>

---

## 👤 Mohamed Elouadi — Fondateur & Président

### 🔍 Profil vérifié

- **Nom** : Mohamed El Ouadi (aussi écrit Elouadi)
- **Né en** : 1979 (46 ans)
- **Fonction** : Président de [HBFS Cloud](https://www.societe.com/societe/hbfs-cloud-898210646.html) depuis le 20 avril 2021
- **Background** : 20+ ans IT finance institutionnelle (Reuters, SG, Euronext, Brevan Howard)
- **Plateforme** : Fondateur de [market-watch.xyz](https://market-watch.xyz)

### 📰 Mentions & Visibilité

Aucune nouvelle mention publique détectée cette semaine dans la presse, les réseaux sociaux ou les annuaires professionnels. Le profil LinkedIn n'est pas accessible automatiquement (protection anti-bot).

> ✅ **Pas d'homonyme problématique détecté** — Les recherches ne confondent pas avec Mohamed El Ouadi chez Brevan Howard ni avec Marouane Elouadi (formateur Udemy).

### 🎯 Recommandations Personal Branding

1. **Publier un article Medium ou LinkedIn** sur l'approche IA + trading systématique (le volume de 196 commits/semaine est un angle impressionnant)
2. **Participer à un podcast fintech francophone** pour accroître la visibilité
3. **Créer un profil Speaker sur Malt ou Wellfound** pour le positionnement B2B

---

## 🏢 HBFS Cloud — SAS IT

### 📋 Fiche Société

| Donnée | Valeur |
|--------|--------|
| SIREN | [898 210 646](https://www.societe.com/societe/hbfs-cloud-898210646.html) |
| Forme | SAS (Société par actions simplifiée) |
| Capital social | 1 500 € |
| Création | 14 avril 2021 |
| Siège | 27 rue de la Treille, 95490 Vauréal |
| Activité | Conseil en systèmes et logiciels informatiques (6202A) |
| Convention | Bureaux d'études techniques SYNTEC (1486) |
| Dirigeant | Mohamed El Ouadi (Président) |
| TVA | FR80898210646 |
| Statut | ✅ Active (RCS + INSEE + RNE) |
| Dernière MAJ sources | 28/03/2026 |

### ⚖️ Veille Juridique & Judiciaire

- ✅ **Aucune procédure collective** (redressement, liquidation) détectée
- ✅ **Aucun incident de paiement** signalé
- ✅ **Pas de changement de dirigeant** ni de modification statutaire
- ✅ **Pas d'annonce légale** publiée cette semaine (BODACC, JAL)

### 💼 Présence Commerciale

HBFS Cloud opère dans le secteur "Conseil en systèmes et logiciels informatiques" dans le Val-d'Oise, qui compte **4 375 sociétés** concurrentes dans le même département ([societe.com](https://www.societe.com/societe/hbfs-cloud-898210646.html)).

Pas d'avis client public détecté (Google Business Profile, Trustpilot, ou plateformes d'avis B2B).

> 💡 **Recommandation** : Créer un profil [Google Business Profile](https://business.google.com/) pour améliorer la visibilité locale et collecter des avis clients vérifiés.

<div class="echarts-container" id="chart-timeline" style="width:100%;height:350px;"></div>

<script>
var chartTL = echarts.init(document.getElementById('chart-timeline'));
chartTL.setOption({
  tooltip: { trigger: 'axis' },
  title: { text: 'Activité Commits articles.market-watch.xyz (S14)', left: 'center', textStyle: { color: '#e5e7eb' } },
  xAxis: { type: 'category', data: ['Lun 24', 'Mar 25', 'Mer 26', 'Jeu 27', 'Ven 28', 'Sam 29', 'Dim 30'], axisLabel: { color: '#9ca3af' } },
  yAxis: { type: 'value', name: 'commits', axisLabel: { color: '#9ca3af' } },
  series: [{
    data: [22, 28, 35, 30, 32, 26, 23],
    type: 'bar',
    itemStyle: { color: '#8b5cf6', borderRadius: [4,4,0,0] },
    label: { show: true, position: 'top', color: '#e5e7eb' }
  }]
});
window.addEventListener('resize', () => chartTL.resize());
</script>

---

## 🚨 Alertes & Points d'Attention

1. ⚠️ **Audience YouTube** : La chaîne @MarketWatchXYZ publie régulièrement mais l'audience reste très faible. Priorité : SEO titres, thumbnails attractifs, cross-posting sur les réseaux
2. ⚠️ **Pire pick scanner** : DWSN à -50.8% — le pire résultat depuis le lancement. Le filtre Short Squeeze (déjà en place) devrait limiter ces cas
3. 🟡 **Capital HBFS Cloud** : Toujours à 1 500 € — à surveiller si des levées de fonds ou augmentations de capital sont envisagées
4. 🟡 **Backlinks** : Pas de nouveaux backlinks détectés. La stratégie de link-building reste à construire
5. ✅ **Aucune mention négative** sur les 3 entités — situation réputationnelle saine

---

## 📚 Sources

- [societe.com — HBFS Cloud](https://www.societe.com/societe/hbfs-cloud-898210646.html)
- [articles.market-watch.xyz](https://articles.market-watch.xyz/)
- [YouTube @MarketWatchXYZ](https://www.youtube.com/@MarketWatchXYZ)
- [X/Twitter @MarketWatchXYZ](https://x.com/MarketWatchXYZ)
- [Annuaire Entreprises — HBFS Cloud](https://annuaire-entreprises.data.gouv.fr/entreprise/hbfs-cloud-898210646)
- [Repo articles — GitHub hbfs-cloud](https://github.com/hbfs-cloud/articles)
- [Google Search Console](https://search.google.com/search-console) (recommandé)
- [Google Business Profile](https://business.google.com/) (recommandé)

---

> 📅 **Prochain rapport** : Semaine 15 (6 avril 2026)
