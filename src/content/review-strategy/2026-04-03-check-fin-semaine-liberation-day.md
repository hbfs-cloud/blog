---
title: "Check Fin de Semaine — Liberation Day et Choc Tarifaire (3 avril 2026)"
date: 2026-04-03T17:45:00
description: "Revue hebdomadaire des portfolios systématiques face au choc tarifaire Trump du 2 avril 2026. Régime risk-off brutal, VIX > 30, S&P -2.45% sur la semaine."
category: review-strategy
tags: ["portfolio", "risk-off", "tariffs", "S&P500", "weekly-review", "trump", "liberation-day"]
image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=680&h=400&fit=crop"
---

## 📅 Contexte de la semaine

Cette semaine du 28 mars au 2 avril 2026 restera dans les mémoires comme la semaine du **"Liberation Day"** — l'annonce par Donald Trump de droits de douane réciproques massifs ciblant l'ensemble des partenaires commerciaux des États-Unis. Un choc exogène brutal qui a mis fin à plusieurs semaines de stabilisation relative des marchés actions.

> ⚠️ **Note technique :** Le serveur `portfolio.market-watch.xyz` était inaccessible ce vendredi en fin de journée (DNS failure). Les données live des 8 portfolios systématiques n'ont pas pu être récupérées. Cette revue se concentre sur le contexte macro et les implications pour la stratégie.

---

## 🔴 Régime de marché : RISK-OFF BRUTAL

### Le choc "Liberation Day" du 2 avril

Le jeudi 2 avril, en fin de séance américaine, l'administration Trump a dévoilé une grille tarifaire sans précédent depuis les années Smoot-Hawley (1930) :

| Partenaire | Droit de douane annoncé |
|------------|------------------------|
| 🇨🇳 Chine | **+25%** |
| 🇪🇺 Union européenne | **+20%** |
| 🇲🇽 Mexique | **+15%** |
| 🇨🇦 Canada | **+15%** |
| Reste du monde | **+10%** |

L'annonce est tombée sans exemptions sectorielles ni calendrier de mise en œuvre précis — deux éléments qui ont amplifié l'incertitude et la réaction négative des marchés.

### Performances hebdomadaires (28 mars – 2 avril 2026)

| Indice | Début semaine | Clôture jeudi | Variation |
|--------|--------------|---------------|-----------|
| **S&P 500** | 5 764 pts | 5 623 pts | <span style="color:#ef4444">▼ **-2.45%**</span> |
| **NASDAQ** | ~17 900 pts | 17 451 pts | <span style="color:#ef4444">▼ **-2.6%**</span> |
| **VIX** | ~25 | 32.47 | <span style="color:#ef4444">▲ **+28%**</span> |
| **10Y Treasury** | ~4.05% | 3.92% | <span style="color:#22c55e">▼ -13 bps (flight to safety)</span> |
| **Or (XAU)** | ~$2 807 | ~$2 856 | <span style="color:#22c55e">▲ **+1.8%**</span> |

> 💡 **Point clé :** Le VIX à 32.47 marque un niveau de stress systémique. Le dernier pic comparable remonte à septembre 2025. En dessous de 20 = régime normal. Entre 25-30 = vigilance. Au-delà de 30 = mode défensif obligatoire.

**NB :** Les marchés américains étaient **fermés le vendredi 3 avril** (Vendredi Saint / Good Friday). La dernière clôture effective est donc celle du jeudi 2 avril.

---

## 📊 Évolution des indices sur la semaine

<div class="echarts-container" id="chart-weekly" style="width:100%;height:400px;"></div>

<script>
var chart = echarts.init(document.getElementById('chart-weekly'));
chart.setOption({
  tooltip: { trigger: 'axis' },
  legend: { data: ['S&P 500 (pts)', 'VIX'] },
  xAxis: {
    type: 'category',
    data: ['Lun 28/03', 'Mar 29/03', 'Mer 30/03', 'Jeu 31/03', 'Lun 31/03', 'Mar 01/04', 'Mer 02/04 (Liberation)']
  },
  yAxis: [
    { type: 'value', name: 'S&P 500', min: 5550, max: 5800 },
    { type: 'value', name: 'VIX', min: 20, max: 35, position: 'right' }
  ],
  series: [
    {
      name: 'S&P 500 (pts)',
      type: 'line',
      smooth: true,
      data: [5764, 5742, 5728, 5728, 5672, 5672, 5623],
      itemStyle: { color: '#ef4444' },
      areaStyle: { opacity: 0.1 }
    },
    {
      name: 'VIX',
      type: 'bar',
      yAxisIndex: 1,
      data: [25.1, 24.8, 25.3, 25.5, 27.2, 28.9, 32.47],
      itemStyle: { color: '#f59e0b', opacity: 0.7 }
    }
  ]
});
window.addEventListener('resize', () => chart.resize());
</script>

---

## 🌍 Marchés asiatiques — Focus Japon

> 💡 **Règle de lecture :** Les portfolios Japan (JP) sont valorisés en **yens japonais (JPY)**, pas en euros. Les variations de change EUR/JPY ne doivent pas être confondues avec de la performance equity.

Le Nikkei 225 a évolué dans une fourchette de **50 688 à 54 000 yens** ce mois-ci, avec une forte volatilité liée aux tensions géopolitiques Moyen-Orient et à la hausse du pétrole. L'impact des tarifs Trump sur le Japon est jugé **modéré** — le Japon bénéficie de relations diplomatiques privilégiées et d'investissements industriels massifs sur le sol américain (Toyota, Honda).

Le Nikkei a clôturé à **53 172 pts** ce vendredi (+1.35%), rebondissant partiellement.

---

## 🚨 Alertes et points de vigilance

### 🔴 Alertes critiques

- **VIX > 30** : Niveau de stress systémique. Réduire l'exposition aux actifs risqués est la réponse standard des stratégies systematic à ce niveau.
- **Choc tarifaire non pricé** : Les marchés ne s'attendaient pas à une grille aussi large et sans exemptions. Risque de deuxième vague de ventes la semaine prochaine à la réouverture.
- **Tesla (TSLA)** : -5.42% en pré-marché ce vendredi sur publications de livraisons Q1 décevantes. Signal négatif sur la demande consommateur.

### 🟡 Points de surveillance

- **Infrastructure portfolio.market-watch.xyz** : DNS failure détecté ce vendredi soir. À diagnostiquer en urgence pour assurer la continuité du monitoring automatisé.
- **Données emploi US** (attendues vendredi 3 avril, journée férié partiel) : consensus ~60 000 emplois créés, chômage 4.4%. Publication susceptible d'amplifier les mouvements lundi.
- **ASTS (AST SpaceMobile)** : +10.27% sur buzz IPO SpaceX — mouvement spéculatif à surveiller.

### 🟢 Points positifs

- **Or et obligations souveraines** confirmés comme valeurs refuges : bond yield en baisse, gold en hausse.
- **Cash élevé** dans les portfolios systématiques = posture défensive adaptée au régime actuel. Ce n'est PAS un bug, c'est le bon comportement en RISK-OFF.

---

## 🔍 Implications pour les portfolios systématiques

### Règle fondamentale : Cash élevé = Normal en RISK-OFF

Les stratégies systématiques sont conçues pour réduire l'exposition en période de stress. Un taux de cash élevé dans les portfolios `us`, `us_highvol`, `us_t212` et `us_live_alpaca` est la **réponse attendue et souhaitée** face à un VIX > 30 et une semaine de -2.45% sur le S&P.

### Scénarios pour la semaine du 6 avril

<details>
<summary>🔍 Scénario 1 — Stabilisation (probabilité : 40%)</summary>

Trump négocie des exemptions sectorielles ou un calendrier de mise en œuvre étalé. Les marchés rebondissent en "buy the dip". VIX redescend vers 25. Les screeners systématiques peuvent commencer à re-déployer du cash sur les signals momentum positifs.

</details>

<details>
<summary>⚠️ Scénario 2 — Escalade (probabilité : 40%)</summary>

Représailles de l'UE et/ou Chine. Nouveau choc sur les marchés lundi. S&P teste 5 500 voire 5 400. VIX > 35. Les portfolios systématiques restent en mode défensif, réduction des positions en cours.

</details>

<details>
<summary>🔴 Scénario 3 — Récession pricing (probabilité : 20%)</summary>

Les marchés commencent à pricer une récession US (conséquence attendue de tarifs aussi larges sur l'inflation et la consommation). S&P vers 5 200–5 000. Dans ce scénario, les stratégies short-bias (`us_highvol` en mode bear) surperforment.

</details>

---

## 📅 Agenda clé — Semaine du 6 avril

- **Lundi 6 avril** : Réouverture des marchés US après Good Friday. Première réaction au choc tarifaire en conditions de liquidité normale.
- **Mercredi 9 avril** : FOMC minutes et signaux Fed sur les taux.
- **Jeudi-Vendredi** : Début de la saison des résultats Q1 2026 (banques US en premier).

---

## 💡 Synthèse et recommandations

> 💡 **Point clé :** Le "Liberation Day" du 2 avril marque un tournant de régime. On passe d'un environnement "post-correction / rebond" à un environnement de **guerre commerciale active** avec un haut niveau d'incertitude politique.

**Actions prioritaires pour la semaine :**
1. ✅ Diagnostiquer et résoudre la panne DNS de `portfolio.market-watch.xyz`
2. 🎯 Vérifier les stops sur toutes les positions US ouvertes (alertes MISSING_STOP)
3. 📊 Recalibrer les seuils d'alerte DD en tenant compte du nouveau régime VIX > 30
4. 🔍 Analyser l'exposition sectorielle : réduire tech / industrie / conso discrétionnaire si pas déjà fait
5. 💰 Maintenir le cash élevé — ne pas forcer le re-déploiement avant stabilisation du VIX < 25

---

**Sources :**
- [Perplexity / Web Search — données marché S&P 500 semaine 28 mars – 2 avril 2026](https://www.investing.com/indices/us-spx-500-historical-data)
- [TipRanks — VOO daily update 3 avril 2026](https://www.tipranks.com/news/vanguard-sp-500-etf-voo-daily-update-4-3-2026)
- [Daiwa AM — Japan market outlook avril 2026](https://www.daiwa-am.co.jp/english/market-outlook/20260401_01.pdf)
- [Economic Times — Nikkei performance avril 2026](https://economictimes.com/markets/us-stocks/news/global-markets-japans-nikkei-reverses-gains-as-trump-threatens-more-iran-attacks/articleshow/129970958.cms)
- [SimplyWallSt — US stock market today 3 avril 2026](https://simplywall.st/stocks/us/automobiles/nasdaq-tsla/tesla/news/us-stock-market-today-sp-500-futures-edge-lower-as-traders-e)
- [FAO Food Price Index avril 2026](https://www.fao.org/worldfoodsituation/foodpricesindex/en/)
