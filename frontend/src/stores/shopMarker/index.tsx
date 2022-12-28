import { atom } from 'recoil';

export const shopMarkerState = atom({
	key: 'shopMarkerState',
	default: {
		address: '',
	},
});
