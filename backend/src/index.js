const {loadConfig} = require('./infrastructure/config')
const {loadWebServer} = require('./infrastructure/server/server')
const {loadDBConnection} = require('./infrastructure/db')

async function main() {
  const appConfig = loadConfig()
  const dbModule = loadDBConnection({
    dbUri: appConfig.DB_URI,
    dbUser: appConfig.DB_USER,
    dbPass: appConfig.DB_PASS,
    dbName: appConfig.DB_NAME,
  })
  const webServerModule = loadWebServer({port: appConfig.PORT})

  await dbModule.start()
  webServerModule.start()

  const signals = ['SIGINT', 'SIGTERM']
  signals.forEach(s =>
    process.once(s, async () => {
      console.log('...Closing App...')
      webServerModule.close()
      await dbModule.close()
      console.log('...App Closed...')
    }),
  )

  const errorTypes = ['unhandledRejection', 'uncaughtException']
  errorTypes.map(type => {
    process.on(type, async e => {
      try {
        console.log(`process.on ${type}`)
        console.error(e)
        webServerModule.close()
        await dbModule.close()
        process.exit(0)
      } catch (_) {
        process.exit(1)
      }
    })
  })
}

main()
