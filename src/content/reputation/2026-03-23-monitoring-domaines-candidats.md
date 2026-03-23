---
title: "Monitoring domaines candidats — Rapport du 23 mars 2026"
date: 2026-03-23T09:30:00
description: "Vérification hebdomadaire de la disponibilité des 5 domaines candidats pour succéder à market-watch.xyz : elouadi.com, alphadesk.fr, alphadesk.io, ouadi.io, elouadi.finance."
category: reputation
tags: ["domaines", "monitoring", "market-watch", "elouadi", "alphadesk", "dns", "whois"]
image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=680&h=400&fit=crop"
---

## 🎯 Contexte du monitoring

Dans le cadre de la réflexion stratégique sur l'évolution de **market-watch.xyz**, un suivi régulier est effectué sur 5 domaines candidats potentiels. Ce rapport hebdomadaire consolide les résultats du **23 mars 2026** obtenus via RDAP ([rdap.org](https://rdap.org)), vérification DNS, et tests d'accessibilité HTTP.

> 💡 **Objectif** : Détecter dès qu'un domaine prioritaire devient disponible pour permettre une acquisition immédiate avant tout cybersquatting.

---

## 📊 Résultats de la vérification

### Synthèse des 5 domaines

| Domaine | Statut | DNS | HTTP | Prix estimé/an | Recommandation |
|---------|--------|-----|------|---------------|----------------|
| elouadi.com | 🟡 **INCERTAIN** | ✗ Aucun | Timeout | ~12 €/an | ⚠️ Surveiller — possible libération |
| alphadesk.fr | 🔴 **PRIS** | ✓ Actif | 301 OK | ~7 €/an | Réenregistré jusqu'en 2027 |
| alphadesk.io | 🔴 **PRIS** | ✓ Actif | 200 OK | ~45 €/an | Parked chez Gandi — propriétaire actif |
| ouadi.io | 🟡 **INCERTAIN** | ✗ Aucun | Timeout | ~45 €/an | Possible disponibilité |
| elouadi.finance | 🟢 **DISPO** | ✗ Aucun | Timeout | ~65 €/an | RDAP 404 confirmé — libre |

<div class="echarts-container" id="chart-domaines" style="width:100%;height:350px;"></div>

<script>
var chart = echarts.init(document.getElementById('chart-domaines'));
chart.setOption({
  tooltip: { trigger: 'item' },
  legend: { bottom: '5%', left: 'center', textStyle: { color: '#94a3b8' } },
  series: [{
    name: 'Statut domaines',
    type: 'pie',
    radius: ['35%', '65%'],
    avoidLabelOverlap: false,
    itemStyle: { borderRadius: 8, borderColor: '#1e293b', borderWidth: 2 },
    label: { show: true, formatter: '{b}: {d}%', color: '#e2e8f0' },
    data: [
      { value: 2, name: '🔴 Pris (2)', itemStyle: { color: '#ef4444' } },
      { value: 2, name: '🟡 Incertain (2)', itemStyle: { color: '#f59e0b' } },
      { value: 1, name: '🟢 Disponible (1)', itemStyle: { color: '#22c55e' } }
    ]
  }]
});
window.addEventListener('resize', () => chart.resize());
</script>

---

## 🔍 Analyse détaillée par domaine

### 1. elouadi.com — 🟡 INCERTAIN (~12 €/an)

**Source RDAP** : Aucun enregistrement trouvé sur le serveur [Verisign RDAP](https://rdap.verisign.com/com/v1/domain/elouadi.com) — retourne une erreur de résolution.  
**DNS** : Aucun enregistrement A, AAAA ou NS.  
**HTTP** : Timeout (connexion impossible).

L'absence totale de DNS et de données RDAP est un signal fort de **domaine non enregistré**. Cependant, la base .com peut avoir un délai de propagation ou le registrar peut utiliser le privacy shielding. Classé INCERTAIN par précaution.

> ⚠️ **Statut prioritaire** : Si disponible, ce domaine est le plus stratégique. Nom de famille + extension universelle = identité professionnelle permanente.

**Prix estimé** : ~12 €/an chez OVH, Namecheap ou Gandi.

---

### 2. alphadesk.fr — 🔴 PRIS (non disponible)

**Source RDAP** : [AFNIC RDAP](https://rdap.nic.fr) — statut `active`, créé le **5 février 2019**, expire le **5 février 2027**.  
**DNS** : Actif — `147.93.50.30` (IPv4) + `2a02:4780:27:1754:0:2a5a:8937:8` (IPv6).  
**HTTP** : 301 redirect → site actif (Hostinger "Page par défaut").

Le domaine est enregistré et renouvelé récemment (dernier changement : août 2025). Le propriétaire est actif.

**Prochaine libération potentielle** : Février 2027 — à surveiller à J-90.

---

### 3. alphadesk.io — 🔴 PRIS (parked)

**Source** : Site accessible, message explicite de [Gandi.net](https://www.gandi.net) : *"This domain name has been registered with Gandi.net. It is currently parked by the owner."*  
**DNS** : `217.70.184.38`.  
**HTTP** : 200 OK.

Domaine enregistré et parké — le propriétaire l'a acheté sans l'utiliser. Valeur spéculative possible, mais acquisition compliquée (contacter le propriétaire ou attendre expiration).

> 💡 **Option** : Gandi propose un service de [courtage de domaine](https://www.gandi.net/en/domain/transfer) pour négocier directement avec le propriétaire.

---

### 4. ouadi.io — 🟡 INCERTAIN (~45 €/an)

**Source RDAP** : Serveur Afilias ([rdap.afilias.net](https://rdap.afilias.net)) — aucune donnée retournée.  
**DNS** : Aucun enregistrement.  
**HTTP** : Timeout.

Même profil qu'`elouadi.com` — absence de DNS + RDAP vide → **probablement disponible**. Extension .io premium (populaire dans la tech), prix élevé.

**Moins prioritaire** qu'`elouadi.com` car .io est perçu comme startup tech plutôt que finance institutionnelle.

---

### 5. elouadi.finance — 🟢 DISPONIBLE (~65 €/an)

**Source RDAP** : [Identity Digital RDAP](https://rdap.identitydigital.services/rdap/domain/elouadi.finance) — retourne explicitement `errorCode: 404` + `"title": "Object not found"`. C'est la confirmation la plus fiable de disponibilité.  
**DNS** : Aucun enregistrement.  
**HTTP** : Timeout (impossible d'y accéder).

**Domaine confirmé disponible.** Extension `.finance` gérée par Identity Digital — prix plus élevé (~65 €/an) mais très ciblé pour une plateforme financière.

> ✅ **Confirmation** : RDAP 404 explicite = domaine non enregistré. Achetable immédiatement.

---

## 🏆 Recommandations stratégiques

<div class="echarts-container" id="chart-priorite" style="width:100%;height:380px;"></div>

<script>
var chart2 = echarts.init(document.getElementById('chart-priorite'));
chart2.setOption({
  tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
  grid: { top: 20, bottom: 60, left: 120, right: 40 },
  xAxis: { type: 'value', max: 10, name: 'Score /10', nameLocation: 'end', axisLabel: { color: '#94a3b8' } },
  yAxis: { type: 'category', data: ['elouadi.finance', 'ouadi.io', 'alphadesk.io', 'alphadesk.fr', 'elouadi.com'], axisLabel: { color: '#e2e8f0' } },
  series: [{
    type: 'bar',
    data: [
      { value: 6, itemStyle: { color: '#22c55e' } },
      { value: 5, itemStyle: { color: '#f59e0b' } },
      { value: 2, itemStyle: { color: '#ef4444' } },
      { value: 1, itemStyle: { color: '#ef4444' } },
      { value: 9, itemStyle: { color: '#3b82f6' } }
    ],
    label: { show: true, position: 'right', color: '#e2e8f0', formatter: '{c}/10' },
    barMaxWidth: 30
  }]
});
window.addEventListener('resize', () => chart2.resize());
</script>

### Priorité 1 — elouadi.com (score 9/10)
**Action recommandée : Vérifier manuellement et acheter si disponible.**  
Nom patronymique + .com = combinaison la plus forte pour une identité numérique durable. Prix dérisoire (~12 €/an). Si le RDAP et DNS confirment absence d'enregistrement, achat immédiat conseillé.

Vérification manuelle : [Namecheap](https://www.namecheap.com/domains/registration/results/?domain=elouadi.com) | [OVH](https://www.ovhcloud.com/fr/domains/) | [Gandi](https://www.gandi.net/en/domain/suggest?search=elouadi.com)

### Priorité 2 — elouadi.finance (score 6/10)
**Disponible confirmé.** Idéal pour un positionnement finance premium. Plus cher mais très mémorable dans le secteur.

### Priorité 3 — ouadi.io (score 5/10)
Probablement disponible. Extension .io pertinente pour une plateforme tech/data mais moins formelle pour la finance institutionnelle.

---

## 📅 Historique des vérifications

| Date | elouadi.com | alphadesk.fr | alphadesk.io | ouadi.io | elouadi.finance |
|------|------------|--------------|--------------|----------|-----------------|
| 23 mars 2026 | 🟡 Incertain | 🔴 Pris | 🔴 Pris | 🟡 Incertain | 🟢 Dispo |

---

## 🔧 Méthodologie

Les vérifications sont effectuées via :
- **RDAP** : Protocole standard IANA/ICANN ([rdap.org](https://rdap.org)) — plus fiable que WHOIS classique
- **DNS** : Requêtes `dig` A + AAAA + NS
- **HTTP** : `curl` avec timeout 8s pour détecter les sites actifs
- **Fréquence** : Hebdomadaire (lundi 9h30 Paris)

---

**Sources :**
- [RDAP.org — service centralisé](https://rdap.org)
- [Verisign RDAP pour .com](https://rdap.verisign.com/com/v1/)
- [AFNIC RDAP pour .fr](https://rdap.nic.fr)
- [Identity Digital RDAP pour .finance](https://rdap.identitydigital.services)
- [Gandi.net — registrar alphadesk.io](https://www.gandi.net)
- [Namecheap — vérification disponibilité](https://www.namecheap.com/domains/registration/results/?domain=elouadi.com)
- [OVH — registrar domaines](https://www.ovhcloud.com/fr/domains/)
