#!/bin/zsh

set -a            
source .env
set +a

echo "Environmental variables set"

podman-compose -p dev-wine-inventory -f dev-docker-compose.yml up -d
podman exec -it dev-wine-inventory_dev-deno-wine-inventory_1 sh

#cd app
#deno task start