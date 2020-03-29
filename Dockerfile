FROM node:10-alpine

ENV APP_ROOT /app
ENV NODE_ENV production

RUN mkdir ${APP_ROOT}
WORKDIR ${APP_ROOT}
ADD . ${APP_ROOT}

RUN npm ci
RUN npm run build

ENV HOST 0.0.0.0

CMD ["npm", "run", "start"]
