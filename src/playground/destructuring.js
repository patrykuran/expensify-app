const book = {
    title: 'Ego',
    author: 'Ryan',
    publisher: {
        name: 'Penguin'
    }
}

const { name: publisherName = 'Self-Published' } = book.publisher

console.log(publisherName)

const item = ['Coffee (hot)', '$25353.00', '$25325325.50', '$5.00'];

const [name, , medium] = item

console.log(`A medium ${name} costs ${medium}`)