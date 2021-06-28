import math


def paint_order(wall_area):
    liters_needed = wall_area / 3.0
    cans_needed = math.ceil(liters_needed / 18)
    cost = cans_needed * 80
    return {"numero de latas": cans_needed, "preço total": cost}


print(paint_order(60))
