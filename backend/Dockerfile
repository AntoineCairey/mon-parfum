FROM node:21-alpine
RUN apk add --no-cache libc6-compat
WORKDIR /srv/app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "start"]
