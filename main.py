from random import *

list1 = []
list2 = []
list3 = []


a = 0
b = 0
c = 0


def setup():
    for _ in range(1):
        list1.append(randint(1, 10))

    for _ in range(1):
        list3.append(0)

    for _ in range(len(list1) * len(list3)):
        list2.append(randint(-10, 10))


def ai():
    c = 0
    a = 0
    for _ in range(len(list3)):
        a += 1
        b = 0
        for _ in range(len(list1)):
            b += 1
            c += 1


setup()
ai()

print("List1: ", list1, "\nList2: ", list2, "\nList3 :", list3)
print("\n\n\nVariable a: ", a, "\nVariable b: ", b, "\nVariable c: ", c)

