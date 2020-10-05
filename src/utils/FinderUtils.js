export const generateCustomList = (length) => {
  const list = [];
  for (let index = 0; index < length; index++) {
    list.push({
      name: generateRandomName(),
      phone: generateRandomSpainPhoneNumber(),
      display: true,
    });
  }
  return list;
};

function generateRandomSpainPhoneNumber() {
  let number = '+346';
  for (let index = 0; index < 8; index++) {
    number += Math.floor(Math.random() * 10);
  }
  return number;
}

function generateRandomName() {
  const firstName = [
    'Marta',
    'María',
    'José',
    'Andrés',
    'Antonio',
    'Lurdes',
    'Juan',
    'Martina',
    'Roberto',
    'Natalia',
    'Cristina',
    'José Andrés',
    'Pedro',
    'Rodrigo',
    'Jordan',
    'Lorenzo',
    'Valentina',
    'Nico',
    'Samuel',
    'Paula',
  ];
  const lastName = [
    'López',
    'Martínez',
    'Gómez',
    'Fernandez',
    'Gonzalez',
    'Valdivieso',
    'Soldado',
    'Crespo',
    'Robles',
    'Ruiz',
    'Hernandez',
    'Díaz',
    'Moreno',
    'Muñoz',
    'Álvarez',
    'Romero',
  ];

  return `${firstName[pickRandomNumberInRange(firstName.length - 1, 0)]} ${
    lastName[pickRandomNumberInRange(lastName.length - 1, 0)]
  } ${lastName[pickRandomNumberInRange(lastName.length - 1, 0)]}`;
}

function pickRandomNumberInRange(max, min) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
