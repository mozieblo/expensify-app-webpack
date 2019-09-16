// Destructing objects

const person = {
    //name: 'Magda',
    age: 32,
    location: {
        //city: 'Lodz',
        temp: 17
    }
};

const { name: firstName = 'Anonymous', age} = person;
const { city = 'Promises Earth', temp } = person.location;
console.log(`${firstName} is ${age}.`);

if (city && temp) {
    console.log(`In ${city} is ${temp} Celcius degree.`)
}

const book = {
    title: 'Harry Potter and Goblet of fire',
    author: 'J.K. Rowling',
    publisher: {
        //name: 'Media Rodzina'
    }
} 

const { title, author } = book;
const { name: publisherName = 'self-published' } = book.publisher;
console.log(publisherName) // MEdia rodzina, self-published


// Destructing arrays

const address = ['Poland', 'Lodz', 'Piotrkowska street', '55']

const [ country, city, street, number ] = address;

console.log(`I live in ${country} ${city}.`);


const shop = [ 'Coffee (hot)', '$2.00', '$2.50', '$2.80'];

const [ drink, , , large] = shop;

console.log(`I drink ${drink} which costs ${large}.`)