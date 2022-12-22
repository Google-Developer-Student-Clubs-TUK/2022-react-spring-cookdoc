import { rest } from 'msw';
import { apiUrl } from 'common/apiUrl';

export const shopSubscribeHandlers = [
	rest.post(`${apiUrl}/shops`, (req, res, ctx) => {
		return res(ctx.status(201), ctx.json(req.body));
	}),
];
