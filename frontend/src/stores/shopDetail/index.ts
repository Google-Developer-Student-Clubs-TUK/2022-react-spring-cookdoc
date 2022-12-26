import { atom } from 'recoil';

interface IShopDetail {
	name: string;
	address: string;
	explain: string;
	images: string[];
	category: string;
	phone: string;
	subscribeCost: string;
}

export const shopDetail = atom<IShopDetail>({
	key: 'shopDetail',
	default: {
		name: '',
		address: '',
		explain: '',
		images: [],
		category: '',
		phone: '',
		subscribeCost: '',
	},
});
