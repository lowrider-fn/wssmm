FROM node:alpine

ENV NODE_ENV development

WORKDIR /front
RUN apk update\
	&& apk upgrade \
	&& apk add --no-cache

COPY package.json /front/package.json

RUN npm set progress=false && \
    npm install --silent
RUN npm install @vue/cli -g

COPY . /front
# RUN npm run build

ENV HOST 0.0.0.0
ENV PORT 3000

EXPOSE 3000

CMD ["npm", "run", "dev"]
# CMD ["npm", "run", "start"]
