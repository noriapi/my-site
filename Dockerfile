FROM mcr.microsoft.com/playwright:v1.54.2-noble
ENV PNPM_HOME="/pnpm"
RUN apt-get purge -y fonts-wqy-zenhei && \
  npm install -g pnpm@latest
WORKDIR /app
RUN --mount=src=package.json,target=package.json \
  --mount=src=pnpm-lock.yaml,target=pnpm-lock.yaml \
  --mount=src=pnpm-workspace.yaml,target=pnpm-workspace.yaml \
  --mount=src=panda.config.ts,target=panda.config.ts \
  --mount=type=cache,target=${PNPM_HOME}/store \
  pnpm --version && \
  pnpm store path && \
  pnpm install --frozen-lockfile
COPY . .
RUN pnpm astro build
CMD ["pnpm", "test:playwright"]
