FROM mcr.microsoft.com/playwright:v1.53.1-noble
WORKDIR /app
RUN npm install -g pnpm
RUN --mount=src=package.json,target=package.json \
  --mount=src=pnpm-lock.yaml,target=pnpm-lock.yaml \
  --mount=src=pnpm-workspace.yaml,target=pnpm-workspace.yaml \
  --mount=src=panda.config.ts,target=panda.config.ts \
  pnpm install --frozen-lockfile
COPY --chown=pwuser:pwuser . .
RUN pnpm astro build
CMD ["pnpm", "test:playwright"]
