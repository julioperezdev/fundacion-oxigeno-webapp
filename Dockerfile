# paso 1 compilacion
FROM node:latest as build-step

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

COPY . /usr/src/app

RUN npm install

RUN npm install --save moment react-moment

RUN npm run build

# paso 2 depliegue nginx
FROM nginx:latest

COPY --from=build-step /usr/src/app/build/ /usr/share/nginx/html