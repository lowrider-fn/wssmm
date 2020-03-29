FROM node:12-alpine as build-stage

ENV NODE_ENV production

WORKDIR /app
RUN apk update && \
    apk upgrade 

COPY package.json /app/package.json

RUN npm set progress=false && \
    npm install --silent
RUN npm install @vue/cli -g

COPY . /app
RUN npm run build

ENV HOST 0.0.0.0
EXPOSE 3000

CMD ["npm", "run", "start"]
