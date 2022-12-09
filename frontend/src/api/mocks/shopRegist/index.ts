import { rest } from 'msw';
import { apiUrl } from 'common/apiUrl';

export const shopRegistHandlers = [
	rest.post(`${apiUrl}/shops`, (req, res, ctx) => {
		return res(ctx.status(200), ctx.json(req.body));
	}),
];
