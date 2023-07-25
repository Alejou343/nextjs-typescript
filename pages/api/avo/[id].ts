import Database from '@/database/db'
import { NextApiRequest, NextApiResponse } from 'next';

const allAvos = async(req: NextApiRequest, res: NextApiResponse) => {

    const db = new Database()
    const entry = await db.getById(String(req.query.id))

    res.status(200).json({data: entry})   // --> Ambas alternativas son equivalentes
}

export default allAvos