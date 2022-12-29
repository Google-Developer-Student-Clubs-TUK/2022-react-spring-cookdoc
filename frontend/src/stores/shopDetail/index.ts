import { atom } from 'recoil';

interface IShopDetail {
	name: string;
	address: string;
	detail: string;
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
		detail: '',
		images: [],
		category: '',
		phone: '',
		subscribeCost: '',
	},
});
