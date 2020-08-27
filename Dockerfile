# Setup and build the client

FROM node:10 as client

WORKDIR /usr/app/client/
COPY client/package*.json ./
RUN yarn install
COPY client/ ./
RUN yarn run build


# Setup the server

FROM node:10

WORKDIR /usr/app/
COPY --from=client /usr/app/client/build/ ./client/build/

WORKDIR /usr/app/server/
COPY server/package*.json ./
RUN yarn
COPY server/ ./

EXPOSE 5000

CMD ["npm", "start"]