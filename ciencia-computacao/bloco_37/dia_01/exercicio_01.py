def instability_monitor(collected_values):
    times = []
    counter = 0
    for value in collected_values:
        if value == 1:
            counter += 1
        else:
            if counter > 0:
                times.append(counter)
            counter = 0
    return max(times)


valores_coletados = [0, 1, 1, 1, 0, 0, 1, 1]
print(instability_monitor(valores_coletados))
# resultado = 3

valores_coletados = [1, 1, 1, 1, 0, 0, 1, 1]
print(instability_monitor(valores_coletados))
# resultado = 4
