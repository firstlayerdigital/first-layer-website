---
name: Proxmox infrastructure
description: Proxmox server with LXC containers including Outline wiki (136), and other self-hosted services
type: reference
---

Proxmox server is accessible via the MCP proxmox tools. Key containers relevant to this project:

- **Outline (136)** — Wiki/docs platform, likely used for internal documentation and LXC guides
- **Umami (153)** — Analytics, integrated into the website (see Umami analytics commit)
- **Claude-bridge (130)** — Bridge for Claude integration
- **Gitea (107)** — Self-hosted Git
- **Nextcloud Talk HPB (103)**, **Collabora (105)** — Collaboration tools
- **Grafana (129)**, **Prometheus (128)**, **InfluxDB (102)**, **Loki (151)** — Monitoring stack
- **Uptime Kuma (127)** — Uptime monitoring
- **Nginx Proxy Manager (123)**, **Cloudflared (122)** — Networking/reverse proxy
- **N8N (131)** — Workflow automation
- **Invoice Ninja (117)** — Invoicing
- **Twenty (132)** — CRM

Full container list: 50+ LXC containers covering media, monitoring, productivity, and infrastructure.
