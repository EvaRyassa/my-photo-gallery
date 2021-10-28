/**
 * генерация рандомного числа
 * @param min
 * @param max
 */
function getRandomArbitrary(min: number, max:number) {
    return Math.round(Math.random() * (max - min) + min);
}



const name = [
    'Christopher',
    'Ryan',
    'Ethan',
    'John',
    'Zoey',
    'Sarah',
    'Michelle',
    'Samantha',
]

const surname = [
    'Walker',
    'Thompson',
    'Anderson',
    'Johnson',
    'Tremblay',
    'Peltier',
    'Cunningham',
    'Simpson',
    'Mercado',
    'Sellers'
]

/**
 * Генерация рандомного ФИО
 */
function getRandomPersone () {
    return (`${name[getRandomArbitrary(0, 7)]} ${surname[getRandomArbitrary(0, 9)]}`);
}

export default getRandomPersone;
