FROM node:alpine

ENV NODE_ENV development

WORKDIR /back
RUN apk update\
 	&& apk upgrade \
	&& apk add --no-cache --virtual .gyp python make g++ 

COPY package.json /back/package.json

RUN npm set progress=false && \
    npm install --silent
RUN npm install nodemon -g

COPY . /back

ENV HOST 0.0.0.0
ENV PORT 7000

EXPOSE 7000

CMD ["nodemon","index.js"]

