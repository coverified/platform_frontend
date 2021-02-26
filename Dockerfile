FROM node:14-alpine as builder

COPY . /app

RUN cd /app \
    && yarn --frozen-lockfile \
    && yarn prod


FROM nginx:alpine

COPY --from=builder /app/public /usr/share/nginx/html
