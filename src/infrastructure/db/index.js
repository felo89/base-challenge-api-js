const mongoose = require('mongoose')

function loadDBConnection({dbUri}) {
  let db = undefined

  //TODO: pass as argument DB_CREDENTIALS
  return {
    start: async () => {
      db = await mongoose.connect(dbUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        user: 'brandDiscountsUser',
        pass: 'brandDiscountsPassword',
        dbName: 'desafio_walmart'
      })
      console.log('- Connected to MongoDB')
    },
    close: async () => {
      if (db) await db.disconnect()
      console.log('- Closed MongoDB connection')
    },
  }
}

module.exports = {loadDBConnection}
