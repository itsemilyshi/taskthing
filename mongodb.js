//crud creat read update delete

const { MongoClient, ObjectID} = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017'; //localhost IP
//using localhost sometimes does a bad but the IP does not do the bad
const databaseName = 'taskapp';

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log('unable to connect to database')
    }

    const db = client.db(databaseName);

    db.collection('tasks').deleteOne({
        description: "feed foot"
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

    // db.collection('users').updateOne({
    //     _id: new ObjectID("5d8511dc1f971fc2ed2db527")
    // }, {
    //     $inc: {
    //         age: 1
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

});
