FROM node:22-bookworm-slim
WORKDIR /usr/app
COPY package.json package-lock.json ./
RUN npm install
COPY ./api/*.mjs ./src/
ENTRYPOINT ["node"]
CMD ["src/index.mjs"]