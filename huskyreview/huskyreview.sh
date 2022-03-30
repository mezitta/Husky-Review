#!/bin/sh

if [ $# -ne 1 ]
then
        echo "Usage: $0 [<ip_address> | localhost]"
else
        echo "export let destination = {ip: '$1'}" > src/destination.js
        node backend/app.js &
        npm run serve
fi

