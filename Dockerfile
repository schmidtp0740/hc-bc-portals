FROM node:latest

WORKDIR /usr/app/src

COPY package.json .
RUN npm install

COPY public public
COPY src src

CMD ["npm", "start"]
