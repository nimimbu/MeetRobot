# MeetRobot Foundation

Training humanoid robots for the common good—openly, transparently, by the people they serve.

## What This Repository Is

This is the entire MeetRobot Foundation. Everything we do, learn, and build lives here:

- **Website** → [meetrobot.org](https://meetrobot.org)
- **Values & Principles** → [content/values.md](content/values.md)
- **Node Operations** → Primary node legal, finances, and infrastructure
- **Network Data** → Training methods, demos, and learnings from all nodes

## Our Philosophy

Robots should be trained by the people they serve, not the companies that profit from them. This repository embodies radical transparency—all our code, methods, and finances are public. Only passwords and personal information stay private.

## Repository Structure

```
/
├── .obsidian/          # Obsidian vault configuration
├── site/               # MeetRobot.org website (Astro)
├── content/            # Markdown documentation
├── nodes/              # Network nodes
│   └── primary/        # Founding node
│       ├── legal/      # Incorporation docs, bylaws
│       └── operations/
│           ├── finances/      # Public ledger
│           └── infrastructure/ # Tech stack, deployment docs
├── .gitignore
├── README.md
└── LICENSE
```

## Get Involved

- **Start a node** → Buy a robot, do a demo, see where it goes
- **Join a node** → Find a local group and help train
- **Support the network** → Donate to keep the infrastructure running
- **Fork and improve** → Take our methods and make them better

## Tech Stack

- **Content Management**: Obsidian (this repo IS the vault)
- **Website**: Astro static site
- **Hosting**: Cloudflare Pages (auto-deploys from main branch)
- **Everything Else**: Markdown files in git

## How It Works

1. Content created/edited in Obsidian or any markdown editor
2. Changes committed to git
3. Pushed to GitHub
4. Cloudflare Pages automatically rebuilds and deploys the site
5. Changes appear live at meetrobot.org

## Transparency by Design

This isn't a documentation repo. This IS the foundation. Everything except secrets (API keys, passwords, PII) lives here in public.

See [nodes/primary/operations/infrastructure/setup.md](nodes/primary/operations/infrastructure/setup.md) for the full infrastructure documentation.

## License

See [LICENSE](LICENSE) for terms.

## Contact

- Website: [meetrobot.org](https://meetrobot.org)
- GitHub: [@nimimbu/MeetRobot](https://github.com/nimimbu/MeetRobot)

---

*Robots trained in public, for the public good.*
