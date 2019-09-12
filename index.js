const { Datastore } = require('@google-cloud/datastore')

let entityKey

start()
  .then(() => {
    console.log('Finished')
    const activeHandlers = process._getActiveHandles()
    console.log(activeHandlers)
    const activeRequests = process._getActiveRequests()
    console.log(activeRequests)
  })
  .catch(console.error)

async function start () {
  console.log('Start')
  process.env.CLOUDSDK_CORE_PROJECT = 'test'
  process.env.DATASTORE_EMULATOR_HOST = 'localhost:8081'

  const datastore = new Datastore()
  entityKey = datastore.key({
    namespace: 'test-ns',
    path: ['test-path']
  })
  const testData = {
    testProp: 'test-data'
  }
  const testEntity = {
    key: entityKey,
    data: testData
  }

  console.log(' - Start save the entity')
  await datastore.save(testEntity)
  console.log(' - Finished save the entity')
  // If it is missing then the grpc-js does not have a chance to detect the connection change
  await snooze(1000);
}

async function snooze (ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
