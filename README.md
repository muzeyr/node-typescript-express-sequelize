 
# Introduction

Typescript Node + Express + Sequelize(mysql)
## Installation

```bash
npm install
```

## Installation -2
```bash
npm -g install gulp-cli
```

## Installation -3
DB
```bash
npm install --save mysql // For both mysql and mariadb dialects
npm install --save sqlite3
npm install --save tedious // MSSQL
```

## Configure your database

Sequelize configuration and entities can be found in /Src/sqlz directory.

| Directory | Description |
|---|---|
| config  | Your database configuration. |

## Run the project

```bash
npm start
```

Your web server is now exposed on http://localhost:3000

## Roadmap
- [x] Add Sequelize Typescript example with association
- [x] Manage multiple database configuration with NODE_ENV
- [ ] Add Swagger API Framework


## Auto-Generate model
 sequelize-auto -h uzeyrozcan.com -d monetapo_egitim -u monetapo_egitim -x 'm!350951K' -p 3306  -e mysql  -o src/models