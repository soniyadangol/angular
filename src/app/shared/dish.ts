import { Comment } from './comment';

export class Dish {
	id: string;
	name?: string;
	price?: string;
	image?: string;
	category?: string;
	featured?: boolean;
	label?: string;
	description?: string;
	comments?: Comment[];
}