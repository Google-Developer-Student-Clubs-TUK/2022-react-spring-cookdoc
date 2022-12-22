import { atom } from 'recoil';

interface IShops {
	name: string;
	address: string;
	explain: string;
	images: { url: string }[];
	category: string;
	phone: string;
}

export const shopsState = atom<IShops[]>({
	key: 'shopsState',
	default: [],
});
