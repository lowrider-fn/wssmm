# wssmm

## Build Setup

```bash
# install dependencies
git clone https://gitlab.com/lowrider-fn/wssmm.git

cd wssmm

npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

## Docker

```bash
#add to nuxt.config
server: {
    port: 3000,
    host: '0.0.0.0',
},

# docker create img
docker build -t registry.gitlab.com/lowrider-fn/wssmm .

# docker open
docker run -p 3000:3000 registry.gitlab.com/lowrider-fn/wssmm

# docker push
docker push registry.gitlab.com/lowrider-fn/wssmm

# docker up
docker-compose up

#docker in the background
docker --command-- -d
```


## Heroku

```bash
# init heroku 
heroku create <name>
```
[Nuxt to heroku](https://ru.nuxtjs.org/faq/heroku-deployment/)
## Documentations
[Nuxt.js docs](https://nuxtjs.org).
