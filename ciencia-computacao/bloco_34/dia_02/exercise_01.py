mensage = input("Digite uma mensagem: ")

tamanho = len(mensage)

while tamanho > 0:
    print(mensage[:tamanho])
    tamanho -= 1
