FROM balenalib/amd64-alpine-node:latest
USER root
#RUN apk add --update --no-cache curl py-pip
#RUN apk add build-base
RUN npm cache clear --force
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
CMD ["npm", "start"]
EXPOSE 8080