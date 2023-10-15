#!/bin/bash

scp -r -i $REMOTE_SSK_KEY ../build $REMOTE_USER@$REMOTE_IP:~/newbuilds