FROM node:17

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm run build

COPY . .

ENV PORT=8080

EXPOSE 8080

CMD ["node", "dist/main.js"]