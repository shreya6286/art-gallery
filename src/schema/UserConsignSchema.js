import { z } from 'zod';

export const UserConsignSchema = z.object({
	_id: z.string({
		invalid_type_error: '_id must be of type string'}).optional(),
    artist_name: z.string({
        required_error: 'Enter artist name',
        invalid_type_error: 'artist_name must be of type string'}).max(30, { message: 'artist_name field can have maximum 30 characters' }),
    title: z.string({
		required_error: 'Enter title',
		invalid_type_error: 'title must be of type string'}).max(100, { message: 'title field can have maximum 100 characters' }),
    materials: z.string({
        required_error: '',
		invalid_type_error: 'materials must be of type string'}).max(100, { message: 'materials field can have maximum 100 characters' }).optional(),
    art_year: z.string({
        required_error: 'Enter art_year',
		    invalid_type_error: 'art_year must be of type string'}).max(4, { message: 'art_year field can have maximum 4 characters' }).min(4, { message: 'art_year field can have maximum 4 characters' }),
    price: z.string({
        required_error: 'Enter price',
        invalid_type_error: 'price must be of type string'}).max(10, { message: 'price field can have maximum 10 characters' }).min(3, { message: 'art_year field can have maximum 3 characters' }),
    rarity: z.string({
		    required_error: 'Enter rarity',
		    invalid_type_error: 'rarity must be of type string'}).max(30, { message: 'rarity field can have maximum 30 characters' }),
    provenance: z.string({
        required_error: '',
		    invalid_type_error: 'provenance must be of type string'}).max(100, { message: 'provenance field can have maximum 100 characters' }).optional(),
    medium: z.string({
        required_error: 'Enter medium',
        invalid_type_error: 'medium must be of type string'}).max(50, { message: 'medium field can have maximum 50 characters' }),
    height: z.number({
        required_error: 'Enter height',
        invalid_type_error: 'height must be of type number'}),
    depth: z.number({
        required_error: '',
        invalid_type_error: 'depth must be of type number'}),
    width: z.number({
        required_error: 'Enter width',
        invalid_type_error: 'width must be of type number'})
})