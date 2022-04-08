import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
	console.log('token:', req.headers.authorization);
	return res.status(200).json({ name: 'John Doe' });
};

export default handler;
