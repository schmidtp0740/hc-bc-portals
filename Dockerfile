FROM node:latest

WORKDIR /usr/src/app

COPY package.json .
RUN npm install

COPY public public
COPY src src

CMD ["npm", "start"]
