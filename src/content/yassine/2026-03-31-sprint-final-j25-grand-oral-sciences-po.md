---
title: "J-25 Sciences Po : le sprint final — planning, grand oral et méthode pour les 3 dernières semaines"
date: 2026-03-31T08:04:00
description: "À 25 jours du concours Sciences Po IEP (25 avril 2026), voici le plan d'attaque semaine par semaine, les clés du grand oral et les erreurs à ne plus commettre. Le moment de tout donner."
category: yassine
tags: ["Sciences Po", "concours", "grand oral", "planning", "prépa PSCI", "méthode", "J-25"]
image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=680&h=400&fit=crop"
---

**Mardi 31 mars 2026. Il reste exactement 25 jours.**

Le 25 avril approche à toute vitesse. Les grandes bases théoriques sont posées. Maintenant commence la phase la plus décisive : transformer ce que tu sais en performance réelle le jour J. Ce n'est plus le moment d'apprendre — c'est le moment de *consolider, pratiquer, et affûter*.

Voici le plan d'attaque complet pour les 3 dernières semaines.

---

## 📅 Le compte à rebours réaliste

<div class="echarts-container" id="chart-countdown" style="width:100%;height:350px;"></div>

<script>
var chart = echarts.init(document.getElementById('chart-countdown'));
chart.setOption({
  title: { text: 'Sprint final — Répartition des 25 jours', textStyle: { color: '#e2e8f0', fontSize: 14 } },
  backgroundColor: 'transparent',
  tooltip: { trigger: 'item' },
  legend: { orient: 'vertical', left: 'left', textStyle: { color: '#94a3b8' } },
  series: [{
    type: 'pie',
    radius: ['40%', '70%'],
    data: [
      { value: 10, name: 'Semaine 1 : Consolidation', itemStyle: { color: '#3b82f6' } },
      { value: 8, name: 'Semaine 2 : Simulations', itemStyle: { color: '#8b5cf6' } },
      { value: 5, name: 'Semaine 3 : Affûtage', itemStyle: { color: '#22c55e' } },
      { value: 2, name: 'J-2/J-1 : Calme actif', itemStyle: { color: '#f59e0b' } }
    ],
    label: { color: '#e2e8f0' }
  }]
});
window.addEventListener('resize', () => chart.resize());
</script>

---

## 🗓️ Semaine 1 (31 mars – 6 avril) : Consolidation des fondamentaux

**Objectif : zéro lacune sur les grands thèmes**

C'est la semaine où tu identifies les angles mal maîtrisés et tu les traites. Pas de nouveaux sujets — tu fermes les trous.

**Programme jour par jour :**

| Jour | Matin (2h) | Après-midi (2h) | Soir (1h) |
|------|-----------|-----------------|-----------|
| Lun | Géopolitique : Indo-Pacifique | Dissertation blanche (plan seul) | Actualité 30 min |
| Mar | Histoire : XXe siècle post-1945 | Économie : mondialisation en crise | Fiche de révision |
| Mer | Culture générale : philosophie politique | Grand oral simulation (5 min) | Bilan de semaine |
| Jeu | Relations internationales : ONU/OTAN | Dissertation complète (3h) | Correction |
| Ven | Transition écologique | Oral méthode : questions |  Fiche thème |
| Sam | Rattrapage + révision active | Lecture presse (Le Monde, The Economist) | Repos |
| Dim | **Repos** | — | — |

> 💡 **Point clé** : Le dimanche est sacré. Un esprit reposé révise 40% plus efficacement qu'un esprit épuisé. [Des études sur la mémoire](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3768102/) le confirment : le sommeil consolide les acquis mieux que les révisions nocturnes.

---

## 🗓️ Semaine 2 (7 – 13 avril) : Simulations intensives

**Objectif : reproduire les conditions du concours**

La semaine des blancs. Chaque exercice se fait dans les conditions réelles : chronomètre, feuille vierge, sans notes.

**Exercices clés :**
- **2 dissertations complètes** en 3h chrono (sujet type Sciences Po : grand oral inclus)
- **3 oraux blancs** de 15 minutes avec un tiers (parent, ami, prof) qui note la structure, le vocabulaire, la posture
- **Révision thématique flash** : 30 min par grand thème, format flashcard

**Les thèmes à simuler en priorité pour 2026 :**
- L'ordre mondial multipolaire et ses fractures
- L'Europe face à ses crises (réarmement, démographie, souveraineté)
- Intelligence artificielle : régulation, éthique, géopolitique des données
- Le retour du fait religieux dans les relations internationales
- Transition énergétique : entre urgence climatique et réalisme géopolitique

> ⚠️ **Alerte méthode** : Ne jamais "réviser" passivement (relire des fiches). Tout passe par la production active. Si tu ne peux pas écrire 5 arguments en 5 minutes sur un thème, c'est que tu ne le maîtrises pas vraiment.

---

## 🗓️ Semaine 3 (14 – 20 avril) : Affûtage final

**Objectif : confiance + précision**

Tu ne dois plus chercher tes idées — tu dois les sentir venir naturellement.

**Ce que tu fais :**
- Révision légère des fiches (pas de nouvelle matière)
- **1 dissertation blanche** maximum — se corriger sévèrement sur la forme (introduction, transitions, conclusion)
- **Répétitions orales** : 10-15 min par jour, à voix haute, seul face à un miroir ou enregistré
- **Presse quotidienne** : 20-30 min de [Le Monde](https://www.lemonde.fr), [Courrier International](https://www.courrierinternational.com) ou [The Economist](https://www.economist.com)

---

## 🎤 Maîtriser le Grand Oral Sciences Po

Le grand oral est souvent sous-estimé par les candidats qui se concentrent sur l'écrit. Tort. Il représente une part significative du jury et il se joue sur des détails.

### La structure en 4 temps

<div class="echarts-container" id="chart-oral" style="width:100%;height:320px;"></div>

<script>
var chart2 = echarts.init(document.getElementById('chart-oral'));
chart2.setOption({
  backgroundColor: 'transparent',
  tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
  xAxis: {
    type: 'category',
    data: ['Accroche', 'Problématique', 'Développement', 'Ouverture'],
    axisLabel: { color: '#94a3b8' }
  },
  yAxis: {
    type: 'value',
    name: 'Minutes',
    axisLabel: { color: '#94a3b8' },
    nameTextStyle: { color: '#94a3b8' }
  },
  series: [{
    type: 'bar',
    data: [
      { value: 1, itemStyle: { color: '#f59e0b' } },
      { value: 1.5, itemStyle: { color: '#3b82f6' } },
      { value: 10, itemStyle: { color: '#22c55e' } },
      { value: 1.5, itemStyle: { color: '#8b5cf6' } }
    ],
    barWidth: '50%',
    label: { show: true, position: 'top', color: '#e2e8f0' }
  }]
});
window.addEventListener('resize', () => chart2.resize());
</script>

**1. L'accroche (1 min)** : Un fait marquant, une citation, une actualité récente. Exemple : *"En mars 2026, pour la première fois depuis 1945, l'Allemagne a voté un budget de défense dépassant 2% du PIB..."*

**2. La problématique (1,5 min)** : Reformuler le sujet en enjeu réel. Poser la tension, pas la question évidente. Le jury veut voir que tu penses, pas que tu récites.

**3. Le développement (10 min)** : 2 à 3 parties maximum. Chaque partie = 1 thèse + 2 arguments + 1 exemple concret. Pas plus. Mieux vaut 2 parties solides que 3 parties floues.

**4. L'ouverture (1,5 min)** : Un angle nouveau, une limite de ton raisonnement, une question pour l'avenir. C'est ce que le jury retient en dernier.

### Les 5 erreurs classiques à éviter

- ❌ **Lire ses notes** — le jury le voit immédiatement et ça casse tout
- ❌ **Parler trop vite** — signe de stress et de manque de maîtrise
- ❌ **Les exemples vagues** ("certains pays européens...") — toujours nommer, dater, chiffrer
- ❌ **L'introduction trop longue** — si tu n'as pas posé ta problématique en 2 min, tu as perdu
- ❌ **L'ouverture bateau** ("ce sujet soulève de nombreuses questions...") — trouver un vrai rebond

> 💡 **Technique pro** : Enregistre-toi en vidéo sur ton téléphone. Regarde 5 minutes de toi en train de parler. Ce que tu vois (tics, regard, débit) te donnera plus d'informations qu'une heure de "préparation" passive.

---

## 🧠 Les thèmes chauds pour le 25 avril

À surveiller de près dans la presse ces 25 derniers jours :

| Thème | Pourquoi c'est chaud | Source à lire |
|-------|---------------------|---------------|
| Réarmement européen | Débat OTAN/autonomie stratégique post-Trump | [Le Grand Continent](https://legrandcontinent.eu) |
| IA et régulation | EU AI Act en application, course USA/Chine | [The Economist](https://www.economist.com) |
| Moyen-Orient | Après Gaza : redessiner l'ordre régional | [Orient XXI](https://orientxxi.info) |
| Chine-Taiwan | Tensions mer de Chine du Sud | [Courrier International](https://www.courrierinternational.com) |
| Transition énergétique | COP31 en vue, backlash politique en Europe | [Le Monde](https://www.lemonde.fr/planete/) |

---

## 📅 J-2 / J-1 : le protocole du calme actif

**J-2 (23 avril) :**
- Relecture légère de tes 5 meilleures fiches (pas les mauvaises)
- 1 simulation orale courte (10 min) pour "chauffer la voix"
- Coucher à 22h max

**J-1 (24 avril) :**
- AUCUNE révision intensive
- Préparer le matériel physique (stylos, pièce d'identité, convocation)
- Marche ou sport léger 30 min
- Dîner normal, pas d'alcool, coucher à 22h

**Matin du concours (25 avril) :**
- Lever 1h30 avant le départ minimum
- Petit déjeuner protéiné (œufs, pas de sucre rapide seul)
- Pas de révisions "de dernière minute" — ça crée du stress sans apporter de valeur
- Arriver 20 min en avance sur le lieu du concours

> 💡 **Le vrai secret** : Les candidats qui réussissent le plus souvent ne sont pas les plus brillants. Ce sont ceux qui gèrent le mieux leur énergie et leur stress les 3 derniers jours.

---

## 🏆 Mindset : pourquoi ces 25 jours comptent vraiment

La prépa Sciences Po, c'est un marathon. Mais les 3 dernières semaines, c'est le sprint final — et c'est là que les classements se font.

Chaque heure de travail ciblé compte désormais double. Les erreurs de méthode sur une dissertation peuvent te coûter 3 rangs. Un oral fluide, structuré, avec de la présence peut t'en faire gagner 10.

Tu as les bases. Maintenant il faut les transformer en automatismes. 

**25 jours. 1 objectif. Tout donner.**

---

**Sources :**
- [Sciences Po Paris — Modalités des concours IEP](https://www.sciencespo.fr/admissions/)
- [Le Grand Continent — Géopolitique européenne](https://legrandcontinent.eu)
- [NIH — Sleep and memory consolidation](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3768102/)
- [Le Monde — Actualité internationale](https://www.lemonde.fr)
- [The Economist — Intelligence artificielle et géopolitique](https://www.economist.com)
- [Courrier International — Synthèse presse mondiale](https://www.courrierinternational.com)
- [Orient XXI — Moyen-Orient décrypté](https://orientxxi.info)
