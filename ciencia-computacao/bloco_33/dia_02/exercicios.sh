# Exercício 01
# 1.1 Faça uma chamada GET, utilizando o cURL.
curl http://localhost:3000
# 1.2 Faça uma chamada POST, utilizando o cURL, passando um JSON no body da requisição.
 curl --location --request POST 'localhost:3000/brokerage' \
--header 'Content-Type: application/json' \
--data-raw '{"name":"Felipe"}'

# Exercício 02
# 2.1 Faça uma chamada GET, utilizando o cURL, para "google.com"
curl google.com

#2.2 Faça uma nova chamada a "google.com", porém agora utilizando o parâmetro -L ou --location , que serve para "seguir redirecionamentos".
curl -L google.com

# Exercício 03