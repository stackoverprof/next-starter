import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
	console.log('token:', req.headers.authorization);

	const sampleUserData = {
		_id: '62537302-5ae0-4385-b067-776ce9bde22e',
		name: 'John Doe',
		username: 'johndoe',
	};

	setTimeout(() => {
		res.status(200).json(sampleUserData);
	}, 2000);
};

export default handler;
