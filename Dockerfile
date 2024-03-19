FROM node:18.16.0

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm ci

#ENV NODE_ENV=production

COPY . ./

RUN npm run start


CMD [ "npm", "start" ]

