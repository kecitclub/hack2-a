import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://dhakalsatish2004:cCvLt0w4HgZYNJHp@hackathons.a55ul.mongodb.net/hackathons?retryWrites=true&w=majority&appName=Hackathons';
console.log(MONGODB_URI);

if (!MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable');
}

let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        cached.promise = mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }).then((mongoose) => mongoose);
    }

    cached.conn = await cached.promise;
    return cached.conn;
}

export default dbConnect;