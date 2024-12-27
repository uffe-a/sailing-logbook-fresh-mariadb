#!/bin/zsh

set -a            
source .env
set +a

echo "Environmental variables set"

podman-compose -p dev-sailing-logbook -f dev-docker-compose.yml up -d
podman exec -it dev-sailing-logbook_dev-deno-sailing-logbook_1 sh

#cd app
#deno task start