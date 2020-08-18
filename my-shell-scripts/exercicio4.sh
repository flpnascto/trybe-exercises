#!/bin/bash

CAMINHO="/home/caminho/arquivo.sh"
  if [ -e "$CAMINHO" ]
    then
       echo "O caminho $CAMINHO está habilitado!"
  fi
  if [ -w "$CAMINHO" ]
    then
      echo "Você tem permissão para editar $CAMINHO"
    else
      echo "Você NÃO foi autorizado a editar $CAMINHO"
  fi