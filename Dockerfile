FROM mcr.microsoft.com/playwright:v1.53.2-noble
WORKDIR /app
RUN apt-get purge -y fonts-wqy-zenhei && \
  npm install -g pnpm
RUN --mount=src=package.json,target=package.json \
  --mount=src=pnpm-lock.yaml,target=pnpm-lock.yaml \
  --mount=src=pnpm-workspace.yaml,target=pnpm-workspace.yaml \
  --mount=src=panda.config.ts,target=panda.config.ts \
  --mount=type=cache,id=pnpm-store,target=/root/.pnpm-store \
  pnpm install --frozen-lockfile
COPY --chown=pwuser:pwuser . .
RUN pnpm astro build
CMD ["pnpm", "test:playwright"]
