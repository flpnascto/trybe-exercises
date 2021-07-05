import random

word_list = ["banana", "mamao", "goiaba", "abacate"]

word = random.choice(word_list)

scrambled_word = "".join(random.sample(word, len(word)))

print(f"Qual é a palavra: {scrambled_word} ? ")

user_word = ""
counter = 1
while counter < 4:
    user_word = input(f"Tentativa {counter}/3: ")
    if user_word == word:
        print("Parabéns, você acertou")
        break
    if counter == 3:
        print(f"Fim de jogo! A palavra correta é: {word}")
    counter += 1
