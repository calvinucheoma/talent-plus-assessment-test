FROM node:14-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN vite build

EXPOSE 8000

CMD ["npm", "run", "dev"]