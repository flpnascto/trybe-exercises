def media_aritimetica(NUMBER_LIST):
    soma = 0.0
    for number in NUMBER_LIST:
        soma += number
    return soma / len(NUMBER_LIST)


list_number = [1, 2, 3, 10, 5]

print(media_aritimetica(list_number))
