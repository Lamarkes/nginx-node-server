# Node Server + Nginx

### Sobre
Um projeto simples utilizando Node, para estudos de containers Docker(Dockerfile + docker-compose) e implementação de proxy reverse com Ngnix.

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

4. Execute o Dockerfile

```shell
docker build -t node-server .
```

5. Execute o docker-compose

```shell
docker compose up -d
```

6. Acesse o caminho:
```shell
http://node.127.0.0.1.nip.io:8085
```

7. Será exibida a mensagem:

```'Hello, this is a Node Server'```
