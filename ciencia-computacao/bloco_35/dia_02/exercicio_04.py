from abc import ABC, abstractmethod


class ManipuladorDeLog(ABC):
    @abstractmethod
    @classmethod
    def log(cls, message):
        raise NotImplementedError


class LogEmTela(ManipuladorDeLog):
    @classmethod
    def log(cls, message):
        print(message)


class LogEmArquivo(ManipuladorDeLog):
    @classmethod
    def log(cls, message):
        with open('logs.txt', 'w', encoding='utf-8') as file:
            file.writelines(message)


class Log(ManipuladorDeLog):
    def __init__(self, manipuladores):
        self.manipuladores = set(manipuladores)

    def log(self):
        pass

    def info(self)