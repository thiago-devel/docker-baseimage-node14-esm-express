# node14-esm-express

This project is the source of my tsantana/node14-esm-express docker image

## Image build

1) Clone this project
2) cd into **docker-baseimage-node14-esm-express** cloned folder
3) docker build -t node14-esm-express .

## Run and test the image

1) docker run -it -p 38080:8080 node14-esm-express
2) curl -X GET http://localhost:38080/check
or
access the url `http://localhost:38080/check` via your webbrowser