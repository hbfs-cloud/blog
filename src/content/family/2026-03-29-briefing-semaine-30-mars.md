---
title: "Briefing Semaine — 30 mars au 5 avril 2026"
date: 2026-03-29T19:15:00
description: "Organisation familiale, priorités scolaires et planning de la semaine du 30 mars pour la famille El Ouadi. Soufiane en ligne droite pour le BAC, Parcoursup, Youssef, Salma — tout est là."
category: family
tags: ["organisation", "famille", "école", "planning", "semaine", "parcoursup"]
image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=680&h=400&fit=crop"
---

## 📅 Semaine du 30 mars au 5 avril 2026

Dimanche soir, reprise de semaine. Voici le briefing complet pour la famille El Ouadi pour la semaine à venir.

> 💡 **Point clé** : Semaine académiquement chargée pour Soufiane (dernier trimestre avant le BAC), avec Parcoursup en cours. Pour Yassine, semaine de travail en prépa. Semaine normale pour Youssef et Salma.

---

## 👨‍👩‍👧‍👦 Planning par membre

### 🎓 Yassine — Prépa PSCI (19 ans)

Yassine est en classe préparatoire PSCI (Politique, Social, Communication, Institutions). La semaine de fin mars est typiquement intense avec la préparation des colles et devoirs maison.

**Priorités semaine :**
- Révisions pour les éventuelles colles de la semaine
- Maintien du rythme de travail régulier
- Coordination sur l'organisation logistique maison

> 📚 En prépa PSCI, le rythme est soutenu toute l'année. L'important est de maintenir la régularité sans se laisser dépasser par les petits creux de motivation de fin mars.

---

### 📋 Soufiane — Terminale (17 ans) — BAC 2026

Soufiane est dans la dernière ligne droite avant le BAC 2026. **Parcoursup** est actif — les vœux ont dû être formulés, et la phase d'admission commence bientôt.

**Priorités semaine :**
- Suivi des dossiers Parcoursup
- Révisions des matières de spécialité
- Préparation aux éventuelles épreuves du 3ème trimestre

| Échéance Parcoursup | Date | Statut |
|---|---|---|
| Saisie des vœux | 20 mars 2026 | ✅ Terminé |
| Confirmation vœux | 3 avril 2026 | ⚠️ À vérifier |
| Phase d'admission | Mai 2026 | 📅 À venir |

> ⚠️ **Alerte Parcoursup** : La date limite de confirmation des vœux approche (début avril). Vérifier que tous les vœux sont bien confirmés avant le 3 avril.

---

### ⚽ Youssef — 5ème (13 ans)

Youssef est au collège en classe de 5ème. Foot le dimanche, Coran et arabe en parallèle.

**Priorités semaine :**
- Devoirs du week-end à boucler lundi matin
- Programme Coran + arabe à suivre
- Foot dimanche 5 avril

---

### 🏀 Salma — CE2 (8 ans)

Salma est en CE2. Basket le samedi matin, Coran et arabe.

**Priorités semaine :**
- Lecture quotidienne
- Programme Coran + arabe
- Basket samedi 4 avril

---

## 📊 Vue d'ensemble semaine

<div class="echarts-container" id="chart-planning" style="width:100%;height:350px;"></div>

<script>
var chart = echarts.init(document.getElementById('chart-planning'));
chart.setOption({
  tooltip: { trigger: 'axis' },
  legend: { data: ['École/Cours', 'Sport', 'Révisions/Travail', 'Activités'] },
  grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['Lun 30', 'Mar 31', 'Mer 1', 'Jeu 2', 'Ven 3', 'Sam 4', 'Dim 5']
  },
  yAxis: { type: 'value', name: 'Intensité', max: 5 },
  series: [
    {
      name: 'École/Cours',
      type: 'line',
      smooth: true,
      data: [5, 5, 5, 5, 5, 0, 0],
      lineStyle: { color: '#3b82f6' },
      areaStyle: { opacity: 0.1 }
    },
    {
      name: 'Sport',
      type: 'line',
      smooth: true,
      data: [0, 0, 0, 0, 0, 3, 3],
      lineStyle: { color: '#22c55e' },
      areaStyle: { opacity: 0.1 }
    },
    {
      name: 'Révisions/Travail',
      type: 'line',
      smooth: true,
      data: [3, 3, 4, 3, 3, 4, 3],
      lineStyle: { color: '#f59e0b' },
      areaStyle: { opacity: 0.1 }
    },
    {
      name: 'Activités',
      type: 'line',
      smooth: true,
      data: [1, 1, 2, 1, 1, 3, 3],
      lineStyle: { color: '#8b5cf6' },
      areaStyle: { opacity: 0.1 }
    }
  ]
});
window.addEventListener('resize', () => chart.resize());
</script>

---

## 📈 Contexte Marchés — Semaine du 30 mars

La semaine s'annonce chargée côté marchés avec plusieurs publications économiques majeures. Le contexte reste sous tension tarifaire (Trump) depuis la semaine précédente.

**Événements clés à suivre :**

| Jour | Événement | Impact |
|---|---|---|
| Lundi 30 | Ouverture marchés US post-weekend | 🟡 Moyen |
| Mercredi 1er | ISM Manufacturing PMI (US) | 🔴 Fort |
| Jeudi 2 | ADP Employment Report + OPEC+ | 🔴 Fort |
| Vendredi 3 | NFP — Non-Farm Payrolls US | 🔴 Fort |
| Vendredi 3 | Réunion OPEC+ (niveau de production) | 🟡 Moyen |

> 📉 **Contexte S&P500** : La semaine du 23-28 mars a été marquée par un choc tarifaire Trump (-5 à -8% sur les indices). Les portfolios systematic trading sont en mode défensif (EARLY_RISK_OFF / RISK_OFF). Le NFP vendredi sera déterminant pour la direction court terme.

<details>
<summary>🔍 Détails sur les impacts portfolio</summary>

Les 8 portfolios systematic trading sont actuellement en mode risk-off suite au choc tarifaire de la semaine précédente. Les stops trailing ont été déclenchés sur plusieurs positions. C'est un comportement **normal et souhaité** de la stratégie en régime de volatilité élevée.

**Portfolios en cours de suivi :**
- 🟢 US Trend Hybrid, US Alpaca, JP Momentum, Crypto — OK
- 🟡 US HighVol, Ultra v4 Saxo, US T212, AmericanBulls — en régime risk-off

</details>

---

## 🎯 Actions prioritaires pour Mohamed

| Priorité | Action | Deadline |
|---|---|---|
| 🔴 Urgent | Confirmer vœux Parcoursup Soufiane | Avant 3 avril |
| 🟡 Important | Review portfolios (choc tarifaire) | Lundi 30 |
| 🟡 Important | Suivi drift monitor — référence stats à mettre à jour | Semaine |
| 🟢 Normal | Coran + arabe Youssef + Salma | Quotidien |
| 🟢 Normal | Basket Salma samedi, Foot Youssef dimanche | Weekend |

---

## 🕌 Coran & Éducation Islamique

La semaine du 30 mars correspond à la période post-Ramadan 2026 (si applicable) ou à une semaine normale du calendrier islamique. Le programme Coran et arabe pour Youssef et Salma continue.

> 💡 **Rappel** : La régularité dans l'apprentissage du Coran prime sur l'intensité. 15-20 minutes quotidiennes sont plus efficaces qu'une session longue le weekend.

---

## 💡 Insight Semaine

Cette semaine marque la fin du premier trimestre du deuxième semestre pour la plupart des lycées et collèges. Pour Soufiane, c'est une période charnière : les notes du troisième trimestre entrent dans le dossier Parcoursup et influencent les décisions des commissions d'admission.

**Pour Yassine**, à 19 ans en prépa, la persévérance de fin d'année (mars-mai) est souvent le facteur différenciant entre une bonne et une très bonne résultante au concours.

> 🚀 **Opportunité** : La période mars-avril est idéale pour que Soufiane consolide son projet d'orientation. Si des doutes persistent sur ses vœux, c'est maintenant qu'il faut en discuter — pas en mai quand les admissions arrivent.

---

**Sources :**
- [Parcoursup 2026 — Calendrier officiel](https://www.parcoursup.gouv.fr/index.php?desc=calendrier)
- [Calendrier vacances scolaires 2025-2026 Zone C](https://www.education.gouv.fr/les-vacances-scolaires-2025-2026-35246)
- [Calendrier économique Investing.com](https://fr.investing.com/economic-calendar/)
- [Portfolio market-watch.xyz](https://portfolio.market-watch.xyz)
- [Scanner quotidien market-watch.xyz](https://articles.market-watch.xyz/)
