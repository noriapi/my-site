FROM mcr.microsoft.com/playwright:v1.54.0-noble
ENV PNPM_HOME="/pnpm"
RUN apt-get purge -y fonts-wqy-zenhei && \
  npm install -g pnpm@10.12.1
WORKDIR /app
RUN --mount=src=pnpm-lock.yaml,target=pnpm-lock.yaml \
  --mount=src=pnpm-workspace.yaml,target=pnpm-workspace.yaml \
  --mount=type=cache,target=${PNPM_HOME} \
  pnpm config set store-dir ${PNPM_HOME} && \
  pnpm fetch
RUN --mount=src=package.json,target=package.json \
  --mount=src=pnpm-lock.yaml,target=pnpm-lock.yaml \
  --mount=src=pnpm-workspace.yaml,target=pnpm-workspace.yaml \
  --mount=src=panda.config.ts,target=panda.config.ts \
  --mount=type=cache,target=${PNPM_HOME} \
  pnpm install -r --offline
COPY . .
RUN pnpm astro build
CMD ["pnpm", "test:playwright"]
