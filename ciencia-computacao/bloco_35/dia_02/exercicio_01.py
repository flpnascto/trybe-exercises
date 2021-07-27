class TV:
    def __init__(self, tamanho):
        self.__volume = 50
        self.__canal = 1
        self.__tamanho = tamanho
        self.__ligada = False

    def aumentar_volume(self):
        if self.volume < 99:
            self.volume += 1

    def diminuir_volume(self):
        if self.volume > 0:
            self.volume -= 1

    def modificar_canal(self, canal):
        if canal > 99 or canal < 1:
            raise ValueError("Canal Indisponível")
        else:
            self.__canal = canal

    def ligar_desligar(self):
        self.__ligada = not self.__ligada
