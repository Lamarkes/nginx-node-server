#!/bin/bash

# Script para automatiza inicializaçao do projeto

echo "##########################"
echo "Rodando Servidores + Nginx"
echo "##########################"

echo "Parando containers antigos..."
docker compose down

echo "Subindo containers..."
docker compose up -d

echo "####################"
echo "Projeto em execuçao!"
echo "####################"

echo "Rotas executando: "

echo "http://hello.127.0.0.1.nip.io:8085"
echo "http://time.127.0.0.1.nip.io:8085"
echo "http://users.127.0.0.1.nip.io:8085"
echo "http://users.127.0.0.1.nip.io:8085/users"