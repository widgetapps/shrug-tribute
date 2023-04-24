import { MongoClient } from 'mongodb'

if (!process.env.MONGODB_URI) {
    throw new Error('Please add your Mongo URI to .env.local')
}

const uri = process.env.MONGODB_URI
const options = {}

let client
let clientPromise: Promise<MongoClient>

if (process.env.MONGODB_URI === 'development') {
    // In dev mode, use a global var so the value is preserves across module reloads caused by Hot Module Replacement
    let globalWithMongo = global as typeof globalThis & {
        _mongoClientPromise?: Promise<MongoClient>
    }

    if (!globalWithMongo._mongoClientPromise) {
        client = new MongoClient(uri, options)
        globalWithMongo._mongoClientPromise = client.connect()
    }
    clientPromise = globalWithMongo._mongoClientPromise
} else {
    // In prod, best not to use a global var
    client = new MongoClient(uri, options)
    clientPromise = client.connect();
}

// Export a module-scoped MongoClient promise. This allows the client to be shared across functions
export default clientPromise
