# Node Server + Nginx

### Sobre
Um projeto simples utilizando Node, para estudos de containers Docker(Dockerfile + docker-compose) e implementação de proxy reverse com Ngnix.

O projeto utiliza nip.io ( serviço DNS gratuito e de código aberto que mapeia qualquer endereço IP para um nome de host (domínio)) utilizado para facilitar nos testes.

Atualmente o projeto esta dividido em 3 serviços simples rodando em node:

- app-api (uma aplicaçao simples simulando uma api de usuarios)
- app-hello (aplicação simples com uma mensagem)
- app-time (aplicação que gera mensagem de acordo com o horario)

### Como rodar

#### Requisitos:
1. Certifique-se de que possui o Docker instalado e esteja executando:
```shell
docker --version 
```

2.  Clone o repositório:

```shell
git clone https://github.com/Lamarkes/nginx-node-server.git
```

3. Entre na pasta do projeto:
```shell
cd nginx-node-server
```

4. Torne o script 'start.sh' executavel

```shell
chmod +x start.sh
```

5. Acesse o caminho:
```shell
http://node.127.0.0.1.nip.io:8085
```