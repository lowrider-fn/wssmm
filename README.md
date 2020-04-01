# wssmm 

#### you must definitely install docker, mongo

## Docker
```bash
# show all containers 
docker container ls -aq

# stop all containers
docker container stop $(docker container ls -aq)

# remove all containers
docker container rm $(docker container ls -aq)

# remove all unused object
docker system prune

# show all imgs
docker image ls

# remove all unused imgs 
docker image prune -a

# remove all imgs
docker rmi $(docker images -q)

# show all network
docker network ls

# remove all unused network 
docker network prune

# remove all unused volumes
docker volume prune

```



### docker-compose.yaml
```yaml
#for dev
  build: .
  volumes:
    - '.:/front'
		- '/front/node_modules'
	  
#for prod
image: registry.gitlab.com/lowrider-fn/wssmm/back
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
