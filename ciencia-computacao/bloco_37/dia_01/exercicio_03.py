def combinations(products):
    indexes = []
    for index in range(len(products)):
        for pos in range(index + 1, len(products)):
            if products[index] == products[pos]:
                indexes.append((index, pos))
    return indexes


produtos = [1, 3, 1, 1, 2, 3]
print(combinations(produtos))
