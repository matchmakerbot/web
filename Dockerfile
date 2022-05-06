FROM node:16-alpine AS appbuild
WORKDIR /app
COPY . ./
RUN apk add --no-cache curl && curl -sL https://unpkg.com/@pnpm/self-installer | node
RUN pnpm install
RUN pnpm run build

FROM node:16-alpine
WORKDIR /app
COPY --from=appbuild ./app/dist ./
COPY package.json ./
EXPOSE 80

CMD ["node", "."]
