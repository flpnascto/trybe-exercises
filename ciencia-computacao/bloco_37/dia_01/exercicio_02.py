def cards_shuffle(cards, part):
    shuffle = []
    for index in range(len(cards) - part):
        shuffle.append(cards[index])
        shuffle.append(cards[index + part])
    return shuffle


cartas = [2, 6, 4, 5]
part = 2
print(cards_shuffle(cartas, part))

cartas = [1, 4, 4, 7, 6, 6]
part = 3
print(cards_shuffle(cartas, part))
