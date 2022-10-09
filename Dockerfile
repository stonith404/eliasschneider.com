FROM node:16-alpine as builder

COPY package.json package-lock.json ./
RUN ["npm", "install"]
COPY . ./
RUN [ "npm","run","build"]

FROM node:16-alpine 
WORKDIR /usr/src/app
COPY --from=builder package.json package-lock.json  ./
COPY --from=builder build  ./

ENV PORT=80
EXPOSE 80

CMD [ "node", "index.js"]
