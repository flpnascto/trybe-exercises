#!/bin/bash

# recebe o caminho do através de parâmetro

CAMINHOS=$1

for CAMINHO in $CAMINHOS; do

  if [ -f "$CAMINHO" ]; then
    echo "$CAMINHO é um arquivo comum."
  elif [ -d "$CAMINHO" ]; then
    echo "$CAMINHO é um diretório."
  else
    echo "$CAMINHO é outro tipo de arquivo."
  fi
  ls -l $CAMINHO
  
done