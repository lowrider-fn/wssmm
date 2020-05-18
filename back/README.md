# gmw back

#### you must definitely install docker, mongo

## Setup

```bash
# install dependencies
git clone https://gitlab.com/lowrider-fn/gmw.git

cd gmw/back

npm install

# serve with hot reload at localhost:7000
$ npm run server or docker-compose up --build

```

## Docker

```bash
# docker create img
docker build -t registry.gitlab.com/lowrider-fn/gmw/back .

# docker check img
docker run -p 7000:7000 registry.gitlab.com/lowrider-fn/gmw/back

# docker push img
docker push registry.gitlab.com/lowrider-fn/gmw/back

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
    - '.:/back'
		- '/back/node_modules'
	  
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
