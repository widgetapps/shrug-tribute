import clientPromise from "@/lib/mongodb";
import {NextApiRequest, NextApiResponse} from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const client = await clientPromise;
        const db = client.db('shrug-dev');
        const { fullname, email, shirt, subscribe } = req.body;

        const post = await db.collection('subscribers').insertOne({
            fullname,
            email,
            shirt,
            subscribe
        });

        res.json(post);
    } catch(e: any) {
        console.error(e);
        throw new Error(e);
    }
}