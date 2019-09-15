FROM node:slim

WORKDIR /app
COPY package*.json ./

RUN apt-get update
RUN npm install

COPY . /app
# -or-
# COPY . .

EXPOSE 1337
CMD ["npm", "start"]