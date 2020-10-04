#!/bin/bash

# recebe o diretório através de parâmetro

DIRETORIO=$1

if [ -d "$DIRETORIO" ]; then
  ARQUIVOS=`ls -l $DIRETORIO | wc -l`
  echo "O $DIRETORIO tem $ARQUIVOS arquivos."
  #o comando wc -l contabiliza também as pastas. Rever!
else
  echo "O argumento $DIRETORIO não é um diretório!"
fi