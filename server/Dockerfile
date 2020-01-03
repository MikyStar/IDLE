FROM node:10.6.0

RUN mkdir -p /usr/src/idle

WORKDIR /usr/src/idle

COPY package.json /usr/src/idle
COPY package-lock.json /usr/src/idle
RUN npm install

COPY . /usr/src/idle

EXPOSE 5001

CMD [ "npm", "start" ]
