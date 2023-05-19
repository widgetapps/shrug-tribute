import clientPromise from "@/lib/mongodb";
import {NextApiRequest, NextApiResponse} from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const client = await clientPromise;
        const db = client.db(process.env.DB_NAME);
        const { fullname, email, shirt, subscribe, discord } = req.body;

        const post = await db.collection('subscribers').insertOne({
            fullname,
            email,
            shirt,
            subscribe,
            discord,
            'date': new Date()
        });

        res.json(post);
    } catch(e: any) {
        console.error(e);
        throw new Error(e);
    }
}