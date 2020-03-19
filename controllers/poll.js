'use src';

const  poll = {
    "payloadGet" : `
[
    { 
        "teste": "testando"
    },
    {
        "outro": "testando novamente"
    }
]`,
    "payloadGetById": `
[
    { 
        "id": "1"
    },
    {
        "poll": "poll"
    }
]`,
}

module.exports = poll;