#!/bin/zsh

set -a            
source .env
set +a

echo "Environmental variables set"

docker-compose -p dev-sailing-logbook -f dev-docker-compose.yml up -d
docker exec -it dev-sailing-logbook-dev-deno-sailing-logbook-1 sh

#cd app
#deno task start