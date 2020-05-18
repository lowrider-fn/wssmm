# gmw front

#### you must definitely install docker, mongo

## Setup

```bash
# install dependencies
git clone https://gitlab.com/lowrider-fn/gmw.git

cd gmw/front

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
# docker create img
docker build -t registry.gitlab.com/lowrider-fn/gmw/front .

# docker check img
docker run -p 3000:3000 registry.gitlab.com/lowrider-fn/gmw/front

# docker push img
docker push registry.gitlab.com/lowrider-fn/gmw/front

# docker up
docker-compose up --build

#docker in the background
docker <command> -d
```

### docker-compose.yaml
```yaml
#for dev
  build: .
  volumes:
    - '.:/front'
		- '/front/node_modules'
	  
#for prod
image: registry.gitlab.com/lowrider-fn/gmw/back
```

## Heroku

```bash
# init heroku 
heroku create <name>
```
[Nuxt to heroku](https://ru.nuxtjs.org/faq/heroku-deployment/)

[Heroku deploy with git](https://devcenter.heroku.com/categories/deploying-with-git)

[Heroku deploy with docker](https://devcenter.heroku.com/articles/container-registry-and-runtime)

## Documentations
[Nuxt.js docs](https://nuxtjs.org).
