import { setupWorker } from 'msw';
import { shopRegistHandlers, shopSubscribeHandlers } from 'apis/mocks';

export const worker = setupWorker(
	...shopRegistHandlers,
	...shopSubscribeHandlers,
);
