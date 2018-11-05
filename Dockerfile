# Prod Dockerfile
FROM node:latest

WORKDIR /usr/app/src

RUN npm install -g serve

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run-script build

EXPOSE 5000
CMD ["serve", "-s", "build"]

