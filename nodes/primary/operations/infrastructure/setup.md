# MeetRobot Foundation Infrastructure Setup

## Planning Session - October 2025

This document captures the initial infrastructure planning and setup decisions for the MeetRobot Foundation.

## Core Philosophy

Everything the foundation does should be incredibly transparent. The entire foundation exists as one public folder hierarchy in a GitHub repository.

## Technology Stack

### Content Management: Obsidian
- **Why**: Markdown-based, works directly with git, professional editing experience
- **Sync**: Obsidian Sync subscription for cross-device access
- **Structure**: The entire GitHub repo IS the Obsidian vault (keep it simple)

### Website: Astro
- **Why**: Fast, content-focused, perfect for static sites
- **Location**: `/site` directory in the repo
- **Content**: Pulls from markdown collections in the repo

### Hosting: Cloudflare Pages
- **Why**: Free tier, auto-deploys from GitHub, fast global CDN
- **Domains**: Already using Cloudflare for domain management (meetrobot.org)
- **Deployment**: Auto-deploy on push to main branch

### Version Control: GitHub
- **Repository**: Single public monorepo
- **Name**: MeetRobot (or nimimbu/MeetRobot)
- **Branch Strategy**: Simple - main branch only to start
- **Transparency**: Everything public except secrets (API keys, passwords, PII)

## Repository Structure

```
/
├── .obsidian/           # Obsidian config (commit for shared settings)
├── site/                # Astro website
├── content/             # Markdown content (values, principles, guides)
├── nodes/               # Network nodes
│   └── primary/         # Primary node (founding node)
│       ├── legal/       # Incorporation docs, bylaws, etc.
│       └── operations/
│           ├── finances/        # Public ledger
│           └── infrastructure/  # Tech stack, deployment, setup docs
├── .gitignore           # Secrets, API keys, PII, cache files
├── README.md            # Foundation overview
└── LICENSE              # Open license (TBD: MIT or CC?)
```

### Future Node Structure

When other nodes join the network:

```
nodes/
├── primary/
│   ├── legal/
│   └── operations/
├── san-francisco/
│   ├── README.md
│   ├── training-data/
│   ├── demos/
│   └── methods/
├── austin/
└── ...
```

Each node folder could contain:
- `README.md` - node information, contact
- `training-data/` - what they're teaching their robots
- `demos/` - videos, logs, documentation
- `methods/` - their approach and learnings

## Terminology Decision: "Nodes" not "Chapters"

**Decision**: Use "nodes" instead of "chapters" throughout all documentation.

**Rationale**:
- Aligns with decentralized network philosophy
- Technical but accessible
- Emphasizes the "network scales through replication" principle
- Less hierarchical/formal than "chapters"

**Action Required**: Update all existing content (values doc, website) to use "node" terminology.

## Content Workflow

1. **Write**: Content created/edited in Obsidian
2. **Commit**: Changes committed to git
3. **Push**: Pushed to GitHub (main branch)
4. **Deploy**: Cloudflare Pages auto-deploys from `/site`
5. **Live**: Changes appear on meetrobot.org

### What Stays Private (.gitignore)

- API keys and passwords
- `.env` files
- Personal contact information (PII)
- Obsidian cache (`.obsidian/workspace`)
- Node modules (`node_modules/`)
- Build artifacts (`.astro/`, `dist/`)

## First Commit Checklist

- [ ] Create folder structure
- [ ] Document infrastructure planning (this file)
- [ ] Update 'chapter' → 'node' in all content
- [ ] Set up .gitignore
- [ ] Move meetrobot-site into /site directory
- [ ] Create foundation README.md
- [ ] Choose and add LICENSE file
- [ ] Initialize git repository
- [ ] Make first commit
- [ ] Push to GitHub
- [ ] Connect Cloudflare Pages for auto-deployment

## Future Infrastructure Considerations

### As the network grows:
- Chapter/node discovery system
- Shared training data repository
- Community forums or discussion platform
- Documentation site (could be part of main site)

### Monitoring & Analytics:
- Simple, privacy-respecting analytics
- Uptime monitoring
- Community metrics (nodes, robots, etc.)

---

*Document started: October 14, 2025*
*Status: Planning phase → First commit*
