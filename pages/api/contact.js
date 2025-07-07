import {MongoClient} from 'mongodb';

async function handler(req, res) {
    if (req.method === 'POST') {
        const {email, name, message} = req.body;

        if (
            !email || !email.includes('@') || !name || name.trim() === '' || !message || message.trim() === ''
        ) {
            res.status(422).json({message: 'Invalid input.'});
            return;
        }

        const newMessage = {email, name, message};
        let client;

        // ✅ به این شکل از متغیر محیطی امن و واحد استفاده کنید
        const connectionString = process.env.MONGODB_CONNECTION_STRING;

        // اگر متغیر تعریف نشده بود، خطا بده
        if (!connectionString) {
            console.error('MONGODB_CONNECTION_STRING environment variable is not set.');
            res.status(500).json({message: 'Server configuration error.'});
            return;
        }

        try {
            client = await MongoClient.connect(connectionString);
        } catch (error) {
            console.error("DATABASE CONNECTION FAILED:", error);
            res.status(500).json({message: 'Could not connect to database.'});
            return;
        }

        const db = client.db();

        try {
            await db.collection('messages').insertOne(newMessage);
        } catch (error) {
            client.close();
            console.error("STORING MESSAGE FAILED:", error);
            res.status(500).json({message: 'Storing message failed!'});
            return;
        }

        client.close();
        res.status(201).json({message: 'Successfully stored message!'});
    }
}

export default handler;