FROM node:12.16.3-alpine AS build

ADD package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /app && cp -a /tmp/node_modules /app/

WORKDIR /app
ADD . /app
RUN npm run build

FROM node:12.16.3-alpine

WORKDIR /app

COPY --from=build /app/dist ./dist
COPY --from=build /app/env.yaml .
COPY --from=build /app/package.json .

RUN npm install --production

CMD [ "npm", "run", "start:production" ]
