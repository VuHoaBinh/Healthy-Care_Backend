## NODEJS - SERN

## NODE (v20.3.1)

## 💻 GETTING STARTED

``` bash
git clone https://github.com/VuHoaBinh/Health-Care-Backend.git
```
Use the npm init command to create a package.json file for your application:
``` bash
npm init
```
Install Express in the my-app directory and save it in the dependencies list:
``` bash
npm install express
```

## start
`npm start`
`npm install --save body-parser@1.19.0 dotenv@8.2.0 ejs@3.1.5 express@4.17.1`
` npm install --save-dev @babel/core@7.12.10 @babel/preset-env@7.12.10 @babel/node@7.12.10 nodemon@2.0.7`

## sequelize/cli
`npm install --save-dev sequelize-cli@6.2.0`
-> link: https://sequelize.org/docs/v6/other-topics/migrations/#installing-the-cli
->link: https://mherman.org/blog/node-postgres-sequelize/

`npm install --save sequelize@6.6.2`

## Create Model
`npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string`

## install mysql2
`npm install --save mysql2@2.2.5`

## running migrations
`npx sequelize-cli db:migrate`

## Creating the first Seed
`npx sequelize-cli seed:generate --name demo-user`

## running seeds
`npx sequelize-cli db:seed:all`

## Getting started( with sequelize): https://sequelize.org/docs/v6/getting-started/

## Run database
`npx sequelize-cli db:migrate`

## Run seeder
`npx sequelize-cli db:seed:all`

## hash 
`npm install --save bcryptjs@2.4.3`
https://www.npmjs.com/package/bcrypt

## hide password
https://stackoverflow.com/questions/49761768/how-to-do-where-in-sequelize-but-exclude-nested-model


## Installing NVM Window ( install multiple node versions)
-> https://github.com/coreybutler/nvm-windows/releases ( install 1.1.11)
That's it, folks. Now you can have multiple versions of node installed on your machine. To recap, run:

`nvm install <version> `to install a specified version.<br>
`nvm use <version>` to switch between different versions.<br>
`nvm list` to list all versions installed on your workstation.<br>

``` bash
nvm install 20.3.1
```
