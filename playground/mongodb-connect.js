// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

const mongoConnectOptions = {
    useNewUrlParser: true
};

MongoClient.connect('mongodb://localhost:27017/TodoApp', mongoConnectOptions, (err, client) => {
    if (err) {
        return console.log('Unable to connect to mongodb server');
    }
    console.log('Connected to mongodb server');

    const db = client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => { 
    //     if (err) {
    //         return console.log('could not insert data.', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    db.collection('Users').insertOne({
        name: 'Usman',
        age: 23,
        location: 'Islamabad'
    }, (err, result) => {
        if (err) {
            return console.log('could not insert data.', err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    client.close();
});