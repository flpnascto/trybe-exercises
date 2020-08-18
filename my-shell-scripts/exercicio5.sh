#!/bin/bash

echo "Digite o caminho do diretório ou arquivo desejado: "

read CAMINHO

if [ -f "$CAMINHO" ]; then
  echo "$CAMINHO é um arquivo comum."
elif [ -d "$CAMINHO" ]; then
  echo "$CAMINHO é um diretório."
else
  echo "$CAMINHO é outro tipo de arquivo."
fi
ls -l $CAMINHO