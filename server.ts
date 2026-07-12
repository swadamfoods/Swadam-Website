import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import fs from 'fs';

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Set Link Headers for homepage
  app.use((req, res, next) => {
    if (req.path === '/' || req.path === '/index.html') {
      res.setHeader('Link', '</.well-known/api-catalog>; rel="api-catalog", </docs/api>; rel="service-doc"');
    }
    next();
  });

  // Serve Markdown Negotiation for homepage
  app.get('/', (req, res, next) => {
    const accepts = req.accepts(['html', 'text/markdown']);
    if (accepts === 'text/markdown') {
      res.type('text/markdown');
      res.send(`# Swadam Foods\n\nOrder fresh, traditional Indian snacks, sweets, and namkeen prepared fresh with refined rice bran oil by Vidya Dandekar in Dhayari, Pune.\n\n## Products\n- Salted Shankarpali\n- Tangy Shankarpali\n- Special Chivda\n\nContact: +91 88888 51522`);
      return;
    }
    next();
  });

  // Well-known endpoints for Agent Discoverability
  app.get('/.well-known/api-catalog', (req, res) => {
    res.type('application/linkset+json');
    res.json({
      linkset: [
        {
          anchor: "https://swadamfoods.eu.cc/api",
          "service-desc": [{ href: "https://swadamfoods.eu.cc/openapi.json", type: "application/openapi+json" }],
          "service-doc": [{ href: "https://swadamfoods.eu.cc/docs" }],
          status: [{ href: "https://swadamfoods.eu.cc/api/health" }]
        }
      ]
    });
  });

  app.get('/.well-known/openid-configuration', (req, res) => {
    res.json({
      issuer: "https://swadamfoods.eu.cc",
      authorization_endpoint: "https://swadamfoods.eu.cc/oauth/authorize",
      token_endpoint: "https://swadamfoods.eu.cc/oauth/token",
      jwks_uri: "https://swadamfoods.eu.cc/oauth/jwks",
      grant_types_supported: ["authorization_code", "client_credentials"]
    });
  });

  app.get('/.well-known/oauth-authorization-server', (req, res) => {
    res.json({
      issuer: "https://swadamfoods.eu.cc",
      authorization_endpoint: "https://swadamfoods.eu.cc/oauth/authorize",
      token_endpoint: "https://swadamfoods.eu.cc/oauth/token",
      jwks_uri: "https://swadamfoods.eu.cc/oauth/jwks",
      grant_types_supported: ["authorization_code", "client_credentials"],
      agent_auth: {
        register_uri: "https://swadamfoods.eu.cc/oauth/register"
      }
    });
  });

  app.get('/.well-known/oauth-protected-resource', (req, res) => {
    res.json({
      resource: "https://swadamfoods.eu.cc/api",
      authorization_servers: ["https://swadamfoods.eu.cc"],
      scopes_supported: ["read", "write"]
    });
  });

  app.get('/auth.md', (req, res) => {
    res.type('text/markdown');
    res.send(`# Agent Authentication\n\nTo authenticate with our API, register via our developer portal and use OAuth 2.0 client credentials.`);
  });

  app.get('/.well-known/mcp/server-card.json', (req, res) => {
    res.json({
      serverInfo: {
        name: "Swadam Foods MCP",
        version: "1.0.0"
      },
      transport: {
        type: "sse",
        endpoint: "https://swadamfoods.eu.cc/mcp"
      },
      capabilities: {
        resources: true,
        tools: true
      }
    });
  });

  app.get('/.well-known/agent-skills/index.json', (req, res) => {
    res.json({
      "$schema": "https://agentskills.io/schema/v0.2.0/index.schema.json",
      skills: [
        {
          name: "swadam-ordering",
          type: "openapi",
          description: "Order snacks from Swadam Foods.",
          url: "https://swadamfoods.eu.cc/openapi.json",
          sha256: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"
        }
      ]
    });
  });

  app.get('/.well-known/ucp', (req, res) => {
    res.type('application/json');
    res.json({
      protocol: "UCP",
      version: "1.0",
      commerce_endpoint: "https://swadamfoods.eu.cc/api/commerce"
    });
  });

  app.get('/.well-known/acp.json', (req, res) => {
    res.json({
      version: "1.0",
      agents: {
        order_endpoint: "https://swadamfoods.eu.cc/api/acp/order"
      }
    });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*all', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
