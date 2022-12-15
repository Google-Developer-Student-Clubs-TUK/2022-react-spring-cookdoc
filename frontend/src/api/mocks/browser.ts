import { setupWorker } from 'msw';
import { shopRegistHandlers } from 'api/mocks';

export const worker = setupWorker(...shopRegistHandlers);
