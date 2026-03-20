---
title: "Vibe Coding — Déployer une App Pro en 1h avec Claude Code (0€)"
date: 2026-03-20T22:00:00
description: "Guide complet : architecture vibe coding, setup Claude Code, front Vercel, backend Supabase, auth Clerk, domaine custom. Tout gratuit."
category: veille
tags: ["tech", "tutorial", "ai", "claude-code", "vibe-coding", "devops"]
image: "https://img.youtube.com/vi/Pq1itfblf-Y/maxresdefault.jpg"
---

<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:12px;margin-bottom:2rem">
<iframe style="position:absolute;top:0;left:0;width:100%;height:100%" src="https://www.youtube.com/embed/Pq1itfblf-Y" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## Le Vibe Coding, c'est quoi ?

Le vibe coding, c'est coder en décrivant ce qu'on veut en langage naturel et laisser l'IA générer le code. Avec **Claude Code** (CLI d'Anthropic), on peut construire une application complète — front, back, auth, déploiement — en une heure, sans écrire une seule ligne manuellement.

Ce guide couvre l'architecture complète pour déployer une app pro **pour 0€** en utilisant uniquement des SaaS gratuits.

## Stack recommandée (100% gratuit)

| Composant | Service | Tier gratuit |
|-----------|---------|-------------|
| **Frontend** | Vercel ou Netlify | Illimité (sites statiques) |
| **Backend/DB** | Supabase | 500MB DB, 1GB storage, 50K auth users |
| **Auth** | Clerk ou Supabase Auth | 10K MAU (Clerk) / illimité (Supabase) |
| **ORM** | Drizzle ou Prisma | Open source |
| **Domaine** | Cloudflare (DNS) | Gratuit (domaine ~10€/an) |
| **CI/CD** | GitHub Actions | 2000 min/mois |
| **Monitoring** | Sentry | 5K events/mois |

## 1. Installer Claude Code

```bash
npm install -g @anthropic-ai/claude-code
claude login
```

Claude Code s'installe en une commande. Il a accès au terminal, peut lire/écrire des fichiers, exécuter des commandes, et itérer sur les erreurs.

## 2. Créer le projet

```bash
mkdir mon-app && cd mon-app
claude "Crée un projet Next.js 14 avec App Router, TypeScript, 
Tailwind CSS, Supabase pour la DB et l'auth. Structure : 
src/app pour les routes, src/components pour les composants, 
src/lib pour les utilitaires. Ajoute un .env.example."
```

Claude va :
- Initialiser le projet Next.js
- Configurer Tailwind
- Créer la structure de dossiers
- Installer les dépendances Supabase
- Générer le `.env.example`

## 3. Configurer Supabase (Backend + Auth)

1. Créer un projet sur [supabase.com](https://supabase.com)
2. Copier l'URL et la clé anon dans `.env.local`

```bash
claude "Configure Supabase avec ces credentials. Crée un client 
Supabase dans src/lib/supabase.ts. Ajoute l'auth avec login 
email/password et Google OAuth. Crée un middleware pour protéger 
les routes /dashboard/*."
```

## 4. Créer le frontend

```bash
claude "Crée une landing page moderne avec hero section, features 
grid (3 colonnes), pricing table, et footer. Design minimaliste 
avec des gradients subtils. Mobile-first. Ajoute un header avec 
navigation et boutons Login/Signup."
```

Puis les pages protégées :

```bash
claude "Crée un dashboard avec sidebar, header avec avatar user, 
et une page principale qui affiche les données de l'utilisateur 
depuis Supabase. Ajoute un formulaire de profil éditable."
```

## 5. Déployer sur Vercel (0€)

```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel

# Configurer les variables d'env
vercel env add NEXT_PUBLIC_SUPABASE_URL
vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY
```

C'est en production en 30 secondes.

## 6. Domaine custom

1. Acheter un domaine (~10€/an sur Namecheap, Gandi, OVH)
2. Transférer le DNS vers Cloudflare (gratuit)
3. Dans Vercel : Settings → Domains → Ajouter le domaine
4. Dans Cloudflare : ajouter le CNAME vers `cname.vercel-dns.com`

HTTPS est automatique (Let's Encrypt via Vercel).

## 7. Bonnes pratiques vibe coding

- **Itérer petit** : une feature à la fois, pas tout d'un coup
- **Committer souvent** : `claude "/commit"` après chaque feature qui marche
- **Lire le code généré** : Claude Code est puissant mais pas infaillible
- **Tests** : demander à Claude de générer les tests unitaires
- **CLAUDE.md** : documenter les conventions du projet pour que Claude reste cohérent

## Résultat

En 1h, vous avez :
- Une app Next.js avec un design pro
- Auth complète (email + Google)
- Base de données PostgreSQL (Supabase)
- Déployée en production sur Vercel
- Domaine custom avec HTTPS
- CI/CD automatique via GitHub

**Coût total : 0€** (hors domaine ~10€/an).

---

*Cette vidéo a été générée automatiquement par le pipeline Market Watch (TTS + Remotion + YouTube API).*
