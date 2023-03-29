FROM node:14-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install -g vite

COPY . .

RUN vite build

EXPOSE 3000

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "3000"]