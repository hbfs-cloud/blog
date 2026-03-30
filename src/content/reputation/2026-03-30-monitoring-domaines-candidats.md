---
title: "Monitoring domaines candidats — Rapport du 30 mars 2026"
date: 2026-03-30T09:30:00
description: "Analyse de disponibilité de 5 domaines candidats pour remplacer market-watch.xyz : elouadi.com, alphadesk.fr, alphadesk.io, ouadi.io, elouadi.finance."
category: reputation
tags: ["domaines", "monitoring", "e-réputation", "marque", "WHOIS"]
image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=680&h=400&fit=crop"
---

## 🔍 Contexte

Dans le cadre de la stratégie de marque autour de **market-watch.xyz**, une veille régulière est effectuée sur 5 domaines candidats susceptibles de remplacer ou renforcer l'identité numérique. Ce rapport présente l'état au **30 mars 2026**, basé sur des lookups WHOIS/RDAP en temps réel et des vérifications DNS.

Les critères d'évaluation : disponibilité, prix annuel estimé, mémorabilité, adéquation avec l'identité de marque (HBFS Cloud / MarketWatch).

---

## 📊 Tableau de synthèse

| Domaine | Statut | DNS actif | Expiry registré | Registrar | Prix/an estimé | Recommandation |
|---|---|---|---|---|---|---|
| **elouadi.com** | 🟢 DISPO | Non | — | — | ~12–15 € | ⭐ PRIORITÉ 1 — À enregistrer immédiatement |
| **alphadesk.fr** | 🔴 PRIS | Oui | 2027-02-05 | Hostinger | — | ❌ Indisponible |
| **alphadesk.io** | 🔴 PRIS | Oui | 2027-01-02 | Gandi SAS | — | ❌ Indisponible |
| **ouadi.io** | 🟢 DISPO | Non | — | — | ~35–50 € | ✅ Option intéressante |
| **elouadi.finance** | 🟡 INCERTAIN | Non | Objet RDAP sans expiry | N/A | ~50–80 € | ⚠️ Vérification manuelle requise |

---

## 🟢 elouadi.com — **DISPONIBLE** 🚨 ALERTE URGENTE

> ⚠️ **Alerte critique** : `elouadi.com` est **disponible** à l'enregistrement. C'est un domaine `.com` premium qui correspond directement au nom de famille **El Ouadi**. Il doit être enregistré immédiatement avant qu'un tiers ne le prenne.

**Analyse :**
- Aucun enregistrement DNS A, NS ou MX actif
- [whois.com](https://www.whois.com/whois/elouadi.com) confirme la disponibilité
- RDAP Verisign ne retourne aucun objet pour ce domaine
- Le `.com` est la TLD la plus prestigieuse, la plus mémorable, la mieux référencée sur Google

**Points forts :**
- Correspond au nom personnel du fondateur → crédibilité institutionnelle maximale
- Idéal pour un portfolio professionnel, une page de présentation, ou comme domaine principal HBFS Cloud
- Prix d'enregistrement standard : **~12–15 €/an** via OVH, Namecheap, Gandi
- Transfert ultérieur facile si besoin de migration

**Action recommandée :** Enregistrer via [OVH](https://www.ovhcloud.com/fr/domains/) ou [Namecheap](https://www.namecheap.com/) **dans les 24h**.

---

## 🔴 alphadesk.fr — PRIS

**alphadesk.fr** est enregistré et actif :
- DNS résout vers **147.93.50.30** (hébergement actif)
- Registrar : **Hostinger operations UAB**
- Date d'expiration : **5 février 2027**
- Enregistré depuis le **5 février 2019** (7 ans de présence)

Il s'agit d'un domaine utilisé activement. Pas d'opportunité de rachat à court terme sauf négociation directe. Le site semble hébergé sur une infrastructure partagée Hostinger.

**Recommandation :** ❌ Abandonner cette option pour l'instant. À re-monitorer en janvier 2027 si non renouvelé.

---

## 🔴 alphadesk.io — PRIS

**alphadesk.io** est également enregistré et actif :
- DNS résout vers **217.70.184.38**
- Registrar : **Gandi SAS** (registrar français premium)
- Date d'expiration : **2 janvier 2027**
- Enregistrement géré via un registrar de qualité → propriétaire probablement actif

Le choix de Gandi comme registrar indique un propriétaire conscient de son domaine, peu susceptible d'oublier le renouvellement.

**Recommandation :** ❌ Option fermée. Surveiller expiry janvier 2027.

---

## 🟢 ouadi.io — DISPONIBLE

**ouadi.io** semble disponible :
- Aucun enregistrement DNS actif
- RDAP IANA retourne **404 "Object not found"** → domaine non enregistré
- TLD `.io` populaire dans les startups tech et fintech

**Points forts :**
- Court, mémorable, moderne
- `.io` est perçu positivement dans l'écosystème tech/finance
- Correspondance avec le nom de famille (variante courte)

**Points de vigilance :**
- `.io` est géré par l'Internet Computer Bureau (ICB) — TLD de l'île Christmas
- Prix plus élevé que `.com` : ~35–50 €/an selon le registrar
- Moins de crédibilité institutionnelle que `.com` pour une audience financière traditionnelle

**Recommandation :** ✅ Option valable comme domaine secondaire ou pour un projet tech/startup. Priorité 2 après elouadi.com.

---

## 🟡 elouadi.finance — INCERTAIN

**elouadi.finance** présente un statut ambigu :
- Aucun enregistrement DNS actif (pas d'IP, pas de site accessible)
- RDAP retourne un objet **sans date d'expiry ni registrar identifié**
- Statut RDAP : `[]` (vide) — peut indiquer un domaine en période de grace ou en transit

Ce comportement peut signifier :
1. Domaine enregistré récemment sans déploiement DNS (parking)
2. Domaine en période de rédemption post-expiry
3. Anomalie de l'API RDAP pour cette TLD

**Recommandation :** ⚠️ Vérifier manuellement via [ICANN Lookup](https://lookup.icann.org/en/lookup) ou auprès d'un registrar supportant les TLD `.finance` (ex: Gandi, OVH). Prix estimé : 50–80 €/an (TLD premium gérée par Donuts/Identity Digital).

---

## 📊 Comparatif visuel — Score d'opportunité

<div class="echarts-container" id="chart-domains" style="width:100%;height:380px;"></div>

<script>
var chart = echarts.init(document.getElementById('chart-domains'));
chart.setOption({
  tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
  legend: { data: ['Disponibilité (0=pris, 1=dispo)', 'Score marque /10', 'Prix/an (€)'] },
  xAxis: { type: 'category', data: ['elouadi.com', 'alphadesk.fr', 'alphadesk.io', 'ouadi.io', 'elouadi.finance'] },
  yAxis: [
    { type: 'value', name: 'Score', max: 10 },
    { type: 'value', name: 'Prix (€)', max: 100 }
  ],
  series: [
    {
      name: 'Score marque /10',
      type: 'bar',
      data: [9, 8, 7, 6, 8],
      itemStyle: { color: '#3b82f6' }
    },
    {
      name: 'Prix/an (€)',
      type: 'bar',
      yAxisIndex: 1,
      data: [13, 0, 0, 42, 65],
      itemStyle: { color: '#f59e0b' }
    },
    {
      name: 'Disponible (1=oui)',
      type: 'line',
      data: [1, 0, 0, 1, 0.5],
      itemStyle: { color: '#22c55e' },
      lineStyle: { width: 3 },
      symbol: 'circle',
      symbolSize: 10
    }
  ]
});
window.addEventListener('resize', () => chart.resize());
</script>

---

## 💡 Synthèse et plan d'action

### Priorités immédiates

1. 🚨 **elouadi.com** → Enregistrement immédiat (moins de 24h). ~12–15 €/an. ROI maximal pour l'identité personnelle et professionnelle.
2. ✅ **ouadi.io** → Option secondaire disponible, enregistrable si besoin d'une présence tech/startup. ~35–50 €/an.
3. ⚠️ **elouadi.finance** → Vérification manuelle requise avant toute décision.

### Surveillance continue

| Domaine | Prochaine échéance | Action |
|---|---|---|
| alphadesk.fr | Fév 2027 | Vérifier non-renouvellement |
| alphadesk.io | Jan 2027 | Vérifier non-renouvellement |
| elouadi.finance | N/A | Audit ICANN manuel |

> 💡 **Point clé** : `elouadi.com` disponible à ce prix est une opportunité rare. Un domaine `.com` avec le nom du fondateur est un actif stratégique — pour la crédibilité, le SEO personnel, et la séparation future des projets business/personnel.

---

**Sources :**
- [RDAP IANA — ouadi.io](https://rdap.iana.org/domain/ouadi.io)
- [RDAP AFNIC — alphadesk.fr](https://rdap.nic.fr/domain/alphadesk.fr)
- [RDAP Identity Digital — alphadesk.io](https://rdap.identitydigital.services/rdap/domain/alphadesk.io)
- [whois.com — elouadi.com](https://www.whois.com/whois/elouadi.com)
- [OVH enregistrement domaine](https://www.ovhcloud.com/fr/domains/)
- [Namecheap — recherche domaine](https://www.namecheap.com/)
- [ICANN Lookup](https://lookup.icann.org/en/lookup)
