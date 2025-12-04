FROM node:alpine

WORKDIR /usr/src/app

COPY package* ./

RUN npm install

COPY . .

RUN mkdir -p ./files

CMD ["npm", "start"]