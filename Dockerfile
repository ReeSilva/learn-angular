FROM nginx

MAINTAINER Renato Biancalana da Silva <renato.biancalana.silva@gmail.com>

RUN apt-get update
RUN apt-get install git -y
RUN apt-get install npm -y
RUN apt-get install node -y
RUN apt-get install nodejs-legacy -y
RUN npm install -g bower
