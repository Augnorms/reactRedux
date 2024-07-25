FROM node:20-alpine

WORKDIR /reactApp

COPY package.json /reactApp/

RUN npm install

COPY . /reactApp/

EXPOSE 5000

CMD ["npm", "run", "dev"]