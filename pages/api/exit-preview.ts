import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
	message: string;
};

export default async function exit(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	const { slug = '' } = req.query;
	// Exit the current user from "Preview Mode". This function accepts no args.
	res.clearPreviewData();

	// set the cookies to None
	const cookies = res.getHeader('Set-Cookie') as unknown as string[];
	res.setHeader(
		'Set-Cookie',
		cookies.map((cookie) =>
			cookie.replace('SameSite=Lax', 'SameSite=None;Secure')
		)
	);

	// Redirect the user back to the index page.
	res.redirect(`/${slug}`);
}
