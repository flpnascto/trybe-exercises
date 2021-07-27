class Room:
    def __init__(self, number, floor, max_guest_number, price):
        self.number = number
        self.floor = floor
        self.max_guest_number = max_guest_number
        self.price = price
        self.reserved = False


class HotelGuest:
    def __init__(self, name, cpf):
        self.name = name
        self.cpf = cpf


class Booking:
    def __init__(self, room, guest):
        self.room = room
        self.guest = guest


class Hotel:
    def __init__(self, name, rooms, bookings):
        self.name = name
        self.rooms = rooms
        self.bookings = bookings

    def check_in(self, guests):
        try:
            room_avaliable = self.available_rooms(len(guests))[0]
        except (IndexError):
            raise IndexError(
                "Não há quartos disponíveis para essa quantidade de hóspedes"
            )
        else:
            for guest in guests:
                self.bookings.append(Booking(room_avaliable, guest))
            room_avaliable.reserved = True

    def check_out(self, room):
        room.reserved = False
        self.bookings = [
            booking for booking in self.bookings if booking.room != room
        ]

    def available_rooms(self, guest_number):
        available_rooms_list = []
        for room in self.rooms:
            if room.reserved is False and room.max_guest_room >= guest_number:
                available_rooms_list.append(room)
        return list(available_rooms_list)
