# gmw 

## Оглавление
- [Инициализация проекта](#инициализация-проекта)
- [Работа с окружением](#работа-с-окружением)
    - [Docker](#docker)
    - [docker-compose.yaml](#docker-compose.yaml)
    - [Mongo](#mongo)
    - [Линтинг](#линтинг)
    - [Heroku](#heroku)
- [Ссылки на ресурсы](#ссылки-на-ресурсы)

### Инициализация проекта

Необходимо установить [Docker](https://docs.docker.com/v18.09/) 

``` bash
# клонируем репо
git clone https://gitlab.com/lowrider-fn/gmw.git

# переходим в дирректорию проекта
cd gmw

# запускаем docker-compose
npm run up:build
```

### Работа с окружением

#### Docker

```bash
# Собрать и запустить образы
npm up:build

# Запустить  образы
npm up

# Посмотреть все контейнеры
npm run cont

# Остановить все контейнеры
npm run cont:stop

# Удалить все контейнеры
npm run cont:rm

# Удалить все неиспользуемые объекты
npm run rm-a

# Посмотреть все образы
npm run img

# Удалить все неиспользуемые образы 
npm run img:rm-a

# Удалить все образы
npm run img:rm

# Посмотреть все сети
npm run net

# Удалить все неиспользуемые сети 
npm run net:rm-a

# Удалить все неиспользуемые тома
npm run vol:rm-a
```

#### Mongo
```bash
#Сделать дамп базы данных
npm run db:dump

#Загрузить данные из дамп файла
npm run db:dump-up
```

#### docker-compose.yaml
```yaml
#for dev
  build: .
  volumes:
    - '.:/dir'
		- '/<dir>/node_modules'
	  
#for prod
image: registry.gitlab.com/<repo>
```

#### Линтинг 
``` bash 
# stylelint
npm run stylelint

# eslint
npm run eslint
```

#### Heroku

```bash
# init heroku 
heroku create <name>
```
- [Nuxt to heroku](https://ru.nuxtjs.org/faq/heroku-deployment/)
- [Heroku deploy with git](https://devcenter.heroku.com/categories/deploying-with-git)
- [Heroku deploy with docker](https://devcenter.heroku.com/articles/container-registry-and-runtime)

### Ссылки на ресурсы:

- Документация:
	- [Nuxt.js docs](https://nuxtjs.org).
	- [webpack proxy error](http://pokuwagata.hatenablog.com/entry/2019/07/28/191649)
	- [Nuxt typescript](https://typescript.nuxtjs.org/guide/)
