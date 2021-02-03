FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./ 

RUN npm install

#COPY server.js modules .
COPY . .

EXPOSE 8080

CMD [ "node", "server.js"]