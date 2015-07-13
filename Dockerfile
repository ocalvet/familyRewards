FROM node:slim

MAINTAINER Ovidio Calvet <calveto@gmail.com>

RUN npm install npm -g

RUN npm config set registry http://registry.npmjs.org/

RUN npm config set strict-ssl false

RUN npm install -g sails
RUN npm install -g grunt
RUN npm install -g bower

ADD . /server
VOLUME ["/server"]

WORKDIR /server

RUN npm install

EXPOSE 1337
