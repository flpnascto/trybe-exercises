#!/bin/bash

DATE=$(date +%F)

for FILE in `ls *.png`; do
  mv $FILE ${DATE}-${FILE}
done