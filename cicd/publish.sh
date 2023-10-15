#!/bin/bash

echo logging in and copying files

echo test ip is $TEST_IP

scp -v -r -p "$REMOTE_PASS" ../build $REMOTE_USER@$REMOTE_IP:~/newbuilds
