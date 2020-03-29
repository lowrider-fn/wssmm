FROM node:10

ENV NODE_ENV production
WORKDIR /app

COPY package.json /app/package.json
RUN npm install
RUN npm install nodemon -g
COPY . /app

ENV HOST 0.0.0.0
EXPOSE 7000
CMD ["nodemon","index.js"]

