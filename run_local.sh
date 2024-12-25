#!/bin/zsh

set -a            
source .env
set +a

echo "Environmental variables set"

cd app
deno task start