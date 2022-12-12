import { setupWorker } from 'msw';
import { shopRegistHandlers, shopSubscribeHandlers } from 'api/mocks';

export const worker = setupWorker(
	...shopRegistHandlers,
	...shopSubscribeHandlers,
);
