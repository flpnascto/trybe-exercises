def payment_alcohol(volume):
    price_alcohol = 1.90
    discount = 0.05
    if volume <= 20:
        discount = 0.03
    return price_alcohol * volume * (1 - discount)


def payment_gasoline(volume):
    price_gasoline = 2.50
    discount = volume * 0.06
    if volume <= 20:
        discount = volume * 0.04
    return price_gasoline * volume * (1 - discount)


def payment(type, volume):
    if type == "A":
        total = payment_alcohol(volume)
        print("Total do abastecimento com álcool R$%.2f" % total)
    elif type == "B":
        total = payment_gasoline(volume)
        print("Total do abastecimento com galosina R$%.2f" % total)
    else:
        print("Tipo de abastecimento inválido")


payment("A", 19)
