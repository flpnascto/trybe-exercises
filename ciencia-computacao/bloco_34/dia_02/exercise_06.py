def validade_triangle(SIDE_A, SIDE_B, SIDE_C):
    if SIDE_A + SIDE_B < SIDE_C:
        return False
    elif SIDE_A + SIDE_C < SIDE_B:
        return False
    elif SIDE_C + SIDE_B < SIDE_A:
        return False
    else:
        return True


def triangle(SIDE_A, SIDE_B, SIDE_C):
    if validade_triangle(SIDE_A, SIDE_B, SIDE_C) is False:
        print("Três lados não formam um triângulo")
    elif SIDE_A == SIDE_B and SIDE_A == SIDE_C:
        print("Triângulo Equilátero: três lados iguais")
    elif SIDE_A == SIDE_B or SIDE_A == SIDE_C or SIDE_B == SIDE_C:
        print("Triângulo Isósceles: quaisquer dois lados iguais")
    else:
        print("Triângulo Escaleno: três lados diferentes")


SIDE_A = 3
SIDE_B = 2
SIDE_C = 3

triangle(SIDE_A, SIDE_B, SIDE_C)
