#!/bin/bash

echo logging in and copying files

scp -r -p "$REMOTE_PASS" ../build $REMOTE_USER@$REMOTE_IP:~/newbuilds
