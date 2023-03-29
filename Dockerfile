FROM node:14-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN vite build

EXPOSE 3000

CMD ["npm", "run", "dev"]