def greatter_name(name_list):
    big_name = ""
    for name in name_list:
        if len(name) > len(big_name):
            big_name = name
    return big_name


list_name = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]

print(greatter_name(list_name))
