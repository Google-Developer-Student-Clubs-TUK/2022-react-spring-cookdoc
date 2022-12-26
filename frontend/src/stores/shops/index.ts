import { atom } from 'recoil';

interface IShops {
	name: string;
	address: string;
	explain: string;
	images: string[];
	category: string;
	phone: string;
	subscribeCost: string;
}

export const shopsState = atom<IShops[]>({
	key: 'shopsState',
	default: [],
});
