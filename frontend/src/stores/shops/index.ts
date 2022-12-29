import { atom } from 'recoil';

interface IShops {
	name: string;
	address: string;
	detail: string;
	shop_images: string[];
	category: string;
	phone: string;
	payment: string;
}

export const shopsState = atom<IShops[]>({
	key: 'shopsState',
	default: [],
});
