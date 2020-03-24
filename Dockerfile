FROM node:10-alpine
ENV APP_ROOT /web
ENV NODE_ENV production

RUN mkdir ${APP_ROOT}
WORKDIR ${APP_ROOT}
ADD . ${APP_ROOT}

RUN npm ci
RUN npm run build

CMD ["npm", "run", "start"]
