# Stage 1: Installation des dépendances
FROM node:22-bookworm-slim AS builder

WORKDIR /usr/app

COPY package.json package-lock.json ./
RUN npm install --omit=dev

# Stage 2: Build
FROM node:22-bookworm-slim

WORKDIR /usr/app

# Copier les parties nécessaire depuis le builder
COPY --from=builder /usr/app/node_modules ./node_modules
COPY ./api/*.mjs ./src/

ENTRYPOINT ["node"]
CMD ["--env-file", "src/.env", "src/index.mjs"]