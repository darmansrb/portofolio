# ---------- build stage ----------
FROM node:22-alpine AS build
WORKDIR /app

# Install deps with a clean cache layer
COPY package.json bun.lock* ./
RUN npm install --no-audit --no-fund

# Build the Svelte app
COPY . .
RUN npm run build

# ---------- runtime stage ----------
FROM nginx:1.27-alpine AS runtime

# SPA-friendly nginx config + gzip
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Static assets from the Vite build
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -qO- http://127.0.0.1/ >/dev/null || exit 1

CMD ["nginx", "-g", "daemon off;"]
