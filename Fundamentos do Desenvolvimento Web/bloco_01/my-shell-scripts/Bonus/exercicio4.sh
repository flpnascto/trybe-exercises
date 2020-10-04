#!/bin/bash

DATE=$(date +%F)

CAMINHO=$1
EXTENSAO=$2

cd $CAMINHO

for FILE in `ls *.$EXTENSAO`; do
  FILEOLD=$FILE
  mv $FILE ${DATE}-${FILE}
  echo "Arquivo $FILEOLD renomeado para $FILE"
done