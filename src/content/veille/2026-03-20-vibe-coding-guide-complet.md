---
title: "Vibe Coding : du prompt à l'app en prod — stack React + Convex + BetterAuth"
date: 2026-03-20T22:00:00
description: "Comment coder une vraie app avec l'IA sans toucher (presque) au code : méthode concrète, outils du podcast IA×No-Code, déploiement avec domaine custom, auth incluse."
category: veille
tags: ["ia", "no-code", "vibe-coding", "react", "convex", "betterauth", "claude", "llm", "dev"]
image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=680&h=400&fit=crop"
---

## 🎬 La vidéo complète

<iframe width="100%" height="420" src="https://www.youtube.com/embed/f1Al3OsBwX8" frameborder="0" allowfullscreen style="border-radius:12px;margin-bottom:24px;"></iframe>

> 💡 **Point clé** : Le vibe coding n'est pas du no-code. C'est du *low-intent coding* — vous pilotez l'intention, le LLM pilote l'exécution. La frontière entre PM et développeur est en train de disparaître.

## 🎙️ Ce que dit le podcast IA×No-Code (épisode 7 — mars 2026)

Le podcast [IA×No-Code — Rejoignez l'avant-garde](https://audio.hosakka.studio/podcast/) vient de publier un épisode dense sur l'état réel des pratiques de vibe coding en 2026. Xavier y raconte comment il a livré **une application complète pour un cabinet vétérinaire en quelques jours**, en gérant ses projets avec une approche modulaire.

### 🛠️ Les outils mentionnés dans l'épisode

| Catégorie | Outils / Modèles |
|-----------|-----------------|
| **Modèles frontières** | [Claude (Anthropic)](https://claude.ai), [Gemini (Google)](https://gemini.google.com), [Codex (OpenAI)](https://openai.com/codex) |
| **Modèles alternatifs** | [Kimi (Moonshot AI)](https://kimi.ai), [Mistral](https://mistral.ai) |
| **Front-end** | [React](https://react.dev) |
| **Back-end / BDD** | [Convex](https://convex.dev) |
| **Authentification** | [BetterAuth](https://better-auth.com) |
| **Workflow / contexte** | PRD (Product Requirements Doc), agents parallèles, context management |
| **Outils agents** | [MCP (Model Context Protocol)](https://modelcontextprotocol.io), Claude Code (fonction planning) |
| **Skills / boilerplates** | Skills (abstraction LLM réutilisables), SpecKit, Bimad |
| **Orchestration** | [OpenClaw](https://openclaw.ai) |

---

## 🚀 C'est quoi le Vibe Coding, concrètement ?

Le vibe coding, c'est **piloter un LLM comme un développeur senior** : vous lui donnez l'intention, le contexte et les contraintes — il produit le code. Vous validez, vous guidez, vous corrigez le *vibe*.

La différence avec "demander à ChatGPT de coder" : vous avez une **méthode**, un **workflow** et une **stack définie** qui tient en prod.

### 📋 La méthode de Xavier : du PRD au déploiement

```
1. Écrire le PRD (Product Requirements Doc)
2. Décomposer en modules indépendants
3. Générer chaque module avec le LLM (Claude Code)
4. Utiliser la fonction planning pour anticiper les dépendances
5. Gérer le contexte : agents parallèles pour les tâches indépendantes
6. Valider en local, puis déployer
```

> ⚠️ **Alerte** : Le principal écueil est la **gestion du contexte**. Quand votre codebase grossit, le LLM "oublie" les décisions précédentes. La solution : des PRD modulaires + des fichiers CLAUDE.md/AGENTS.md dans chaque sous-dossier.

---

## 🏗️ La Stack : React + Convex + BetterAuth

C'est la stack mentionnée dans l'épisode comme **référence 2026** pour vibe coder une app full-stack déployable rapidement.

### Pourquoi cette combinaison ?

<div class="echarts-container" id="chart-stack" style="width:100%;height:380px;"></div>

<script>
var chartStack = echarts.init(document.getElementById('chart-stack'));
chartStack.setOption({
  title: { text: 'Score stack vibe-coding (sur 10)', left: 'center', textStyle: { color: '#e2e8f0' } },
  tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
  legend: { data: ['React', 'Convex', 'BetterAuth'], bottom: 0, textStyle: { color: '#94a3b8' } },
  radar: {
    indicator: [
      { name: 'Setup rapide', max: 10 },
      { name: 'LLM-friendly', max: 10 },
      { name: 'Scalabilité', max: 10 },
      { name: 'DX (DevExp)', max: 10 },
      { name: 'Docs IA', max: 10 },
      { name: 'Déploiement', max: 10 }
    ],
    shape: 'circle',
    splitNumber: 5,
    axisName: { color: '#94a3b8' },
    splitLine: { lineStyle: { color: 'rgba(148,163,184,0.2)' } },
    splitArea: { areaStyle: { color: 'rgba(148,163,184,0.05)' } }
  },
  series: [{
    type: 'radar',
    data: [
      { value: [9, 9, 8, 9, 9, 7], name: 'React', areaStyle: { opacity: 0.2 }, lineStyle: { color: '#3b82f6' }, itemStyle: { color: '#3b82f6' } },
      { value: [10, 9, 9, 10, 8, 9], name: 'Convex', areaStyle: { opacity: 0.2 }, lineStyle: { color: '#22c55e' }, itemStyle: { color: '#22c55e' } },
      { value: [9, 8, 8, 9, 7, 8], name: 'BetterAuth', areaStyle: { opacity: 0.2 }, lineStyle: { color: '#f59e0b' }, itemStyle: { color: '#f59e0b' } }
    ]
  }]
});
window.addEventListener('resize', () => chartStack.resize());
</script>

| Brique | Rôle | Pourquoi LLM l'adore |
|--------|------|----------------------|
| **[React](https://react.dev)** | UI / Front-end | Docs massives dans les training data, patterns ultra-connus |
| **[Convex](https://convex.dev)** | BDD réactive + API + backend | Typage TypeScript natif, zero-config, schema déclaratif = parfait pour les LLM |
| **[BetterAuth](https://better-auth.com)** | Authentification | API simple, bien documentée, moins de magie noire que NextAuth |

---

## 🎯 Comment je m'y prends — Étape par étape

### Étape 1 : Écrire le PRD

Avant de taper un seul prompt, rédigez un **Product Requirements Document** en français simple :

```markdown
# PRD : App agenda cabinet vétérinaire

## Objectif
Permettre aux clients de réserver un RDV en ligne, aux vétérinaires de gérer leur agenda.

## Utilisateurs
- Client : réserver, annuler, voir historique
- Vétérinaire : voir agenda, confirmer RDV, notes patients

## Stack
- Front : React + Vite
- Back : Convex
- Auth : BetterAuth (email + Google OAuth)
- Deploy : Vercel (front) + Convex Cloud (back)
- Domaine : mon-domaine.fr

## Modules
1. Auth (register/login/OAuth)
2. Booking (créer RDV)
3. Dashboard vét (agenda vue semaine)
4. Dashboard client (mes RDV)
5. Admin (gestion créneaux)
```

> 💡 **Point clé** : Le PRD est votre **context anchor**. Collez-le dans chaque conversation avec le LLM. C'est ce qui évite la dérive.

### Étape 2 : Initialiser le projet avec Claude Code

```bash
# Demandez à Claude Code :
"Crée un projet React + Vite + TypeScript avec Convex et BetterAuth. 
Voici le PRD : [coller PRD]. 
Génère la structure de fichiers et le setup initial."
```

[Claude Code](https://docs.anthropic.com/fr/docs/claude-code) va générer :
- `src/` avec composants React
- `convex/` avec schema et fonctions
- `auth.ts` avec la config BetterAuth

### Étape 3 : La fonction Planning (Claude Code)

La **fonction planning** de Claude Code est la clé. Avant de générer du code, demandez :

```
"Avant de coder, liste les dépendances entre les 5 modules. 
Quelle est l'ordre optimal de développement ? 
Quels sont les points de blocage potentiels ?"
```

Ça vous évite de développer le module Booking avant que l'Auth soit stable.

### Étape 4 : Agents parallèles pour les modules indépendants

Modules sans dépendances → lancez **plusieurs conversations en parallèle** :

- Conversation A : Module Dashboard vétérinaire
- Conversation B : Design system / composants UI
- Conversation C : Fonctions Convex (API)

**Ne mélangez pas.** Chaque agent a son contexte limité. Un agent = un module.

---

## 🔐 Authentification avec BetterAuth

[BetterAuth](https://better-auth.com) est mentionné dans l'épisode comme l'alternative moderne à NextAuth/Lucia.

### Setup en 3 prompts

**Prompt 1 — Config serveur** (dans Convex) :
```
"Configure BetterAuth avec email/password et Google OAuth. 
Backend : Convex. Génère auth.ts et les handlers nécessaires."
```

**Prompt 2 — Middleware et session** :
```
"Ajoute la gestion de session côté client React. 
Hook useSession(), protection de routes, redirect si non authentifié."
```

**Prompt 3 — UI Auth** :
```
"Génère les pages Login, Register et le bouton 'Continue with Google'. 
Utilise les composants existants. Style Tailwind."
```

### Ce que BetterAuth gère pour vous

| Feature | Support |
|---------|---------|
| Email + password | ✅ natif |
| Google / GitHub OAuth | ✅ natif |
| Magic link | ✅ natif |
| 2FA | ✅ plugin |
| Sessions JWT | ✅ natif |
| Rate limiting | ✅ natif |
| TypeScript | ✅ 100% typé |

---

## 🌐 Déployer avec votre nom de domaine

### Architecture cible

```
mon-domaine.fr          → Front React (Vercel)
api.mon-domaine.fr      → Convex Cloud (automatique)
```

### 1. Deploy le Front sur Vercel

```bash
# Installer Vercel CLI
npm i -g vercel

# Dans votre projet React
vercel

# Lier votre domaine custom
vercel domains add mon-domaine.fr
```

Dans Vercel dashboard : **Settings → Domains → Add Domain**

Puis chez votre registrar (OVH, Gandi, Namecheap...) :
```
Type    Nom     Valeur
CNAME   @       cname.vercel-dns.com
CNAME   www     cname.vercel-dns.com
```

### 2. Convex Cloud — Backend automatique

Convex déploie son propre cloud. Pas de config serveur.

```bash
npx convex deploy
```

Convex vous donne une URL type `https://happy-animal-123.convex.cloud`. Dans votre `.env.production` :

```env
VITE_CONVEX_URL=https://happy-animal-123.convex.cloud
```

### 3. Variables d'environnement

```env
# .env.production
VITE_CONVEX_URL=https://xxx.convex.cloud
BETTER_AUTH_SECRET=votre-secret-32-chars
GOOGLE_CLIENT_ID=xxx.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=xxx
BETTER_AUTH_URL=https://mon-domaine.fr
```

Dans Vercel : **Settings → Environment Variables** → copiez chaque variable.

> ⚠️ **Alerte** : `BETTER_AUTH_URL` doit pointer vers votre domaine final en production. Sans ça, les redirects OAuth seront cassés.

### 4. Checklist de déploiement

```markdown
□ npm run build → 0 erreur TypeScript
□ Variables d'env définies dans Vercel
□ CNAME / A record configuré chez registrar
□ SSL automatique Vercel (attendre ~5 min)
□ Google Cloud Console → Authorized redirect URIs 
  → ajouter https://mon-domaine.fr/api/auth/callback/google
□ npx convex deploy → fonctions déployées
□ Test auth end-to-end en prod
```

---

## 🔍 Les modèles : lequel choisir pour vibe coder ?

D'après l'épisode, la comparaison des modèles frontières en 2026 :

| Modèle | Points forts vibe coding | Limite |
|--------|--------------------------|--------|
| **[Claude](https://claude.ai)** | Meilleur pour les grandes codebases, contexte long, nuance | Prix |
| **[Gemini](https://gemini.google.com)** | Rapide, bonne intégration Google Cloud | Moins précis sur TypeScript complexe |
| **[Codex](https://openai.com/codex)** | Excellent pour autocomplétion inline | Moins adapté aux sessions longues |
| **[Kimi](https://kimi.ai)** | Contexte ultra-long (1M tokens), gratuit | Moins entraîné sur les stacks modernes |
| **[Mistral](https://mistral.ai)** | Open-source, self-hostable | Moins fort sur les gros projets |

**Recommandation podcast** : Claude pour la génération principale, Gemini en seconde opinion, Kimi pour digérer des grandes codebases legacy.

---

## 💡 Les Skills : la prochaine évolution

L'épisode insiste beaucoup sur les **Skills** — des abstractions LLM réutilisables, packagées comme des modules. L'idée : au lieu de tout re-prompter à chaque projet, vous avez des "compétences" pré-configurées (auth, déploiement, CRUD, etc.) que vous branchez.

C'est exactement ce qu'OpenClaw implémente avec son système de skills local. La tendance de fond : **standardiser le meta-layer de prompting**, pas seulement le code.

---

## 📊 Conclusion : ce qui a changé en 2026

<div class="echarts-container" id="chart-evolution" style="width:100%;height:350px;"></div>

<script>
var chartEvo = echarts.init(document.getElementById('chart-evolution'));
chartEvo.setOption({
  title: { text: 'Temps de livraison app simple — avant vs après vibe coding', left: 'center', textStyle: { color: '#e2e8f0', fontSize: 13 } },
  tooltip: { trigger: 'axis' },
  xAxis: { type: 'category', data: ['Auth', 'CRUD', 'UI', 'Deploy', 'Tests', 'Total'], axisLabel: { color: '#94a3b8' } },
  yAxis: { type: 'value', name: 'heures', axisLabel: { color: '#94a3b8' } },
  legend: { data: ['Dev traditionnel', 'Vibe coding'], bottom: 0, textStyle: { color: '#94a3b8' } },
  series: [
    { name: 'Dev traditionnel', type: 'bar', data: [8, 16, 12, 4, 8, 48], itemStyle: { color: '#ef4444' } },
    { name: 'Vibe coding', type: 'bar', data: [1, 2, 2, 0.5, 1, 6.5], itemStyle: { color: '#22c55e' } }
  ]
});
window.addEventListener('resize', () => chartEvo.resize());
</script>

Le cabinet vétérinaire de Xavier : **livré en quelques jours** contre plusieurs semaines en dev traditionnel. Ce n'est pas une promesse marketing — c'est le résultat d'une méthode (PRD → modules → agents parallèles → planning) et d'une stack LLM-friendly (React + Convex + BetterAuth).

Le vibe coding de 2026, c'est :
- 🎯 **Intention claire** (PRD) + **stack définie** (pas d'improvisation)
- 🔍 **Context management** rigoureux (fichiers AGENTS.md par module)
- 🚀 **Agents parallèles** pour les modules indépendants
- 🛠️ **Skills réutilisables** pour ne pas tout re-prompter
- ✅ **Validation humaine** à chaque étape critique (auth, deploy, sécurité)

---

**Sources :**
- [Podcast IA×No-Code — Épisode 7, mars 2026](https://audio.hosakka.studio/podcast/)
- [Convex — Documentation officielle](https://docs.convex.dev)
- [BetterAuth — Getting started](https://www.better-auth.com/docs/installation)
- [Claude Code — Anthropic docs](https://docs.anthropic.com/fr/docs/claude-code)
- [React — react.dev](https://react.dev)
- [Vercel — Custom domains](https://vercel.com/docs/projects/domains)
- [Model Context Protocol — spec](https://modelcontextprotocol.io)
