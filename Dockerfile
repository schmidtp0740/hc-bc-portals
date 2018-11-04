# Prod Dockerfile
FROM node:latest

WORKDIR /usr/app/src

RUN npm install -g serve

COPY package*.json ./
RUN npm install

EXPOSE 5000
CMD ["serve", "-s", "build"]

COPY public public
COPY src src
RUN npm run-script build

