#!/usr/bin/env bash

set -e

ENV=$1

echo " Deploying to environment: $ENV"

docker compose \
  --f docker-compose.yml \
  --f docker-compose.$ENV.yml \
  down

docker compose \
  --f docker-compose.yml \
  --f docker-compose.$ENV.yml \
  build --no-cache

docker compose \
  --f docker-compose.yml \
  --f docker-compose.$ENV.yml \
  up -d