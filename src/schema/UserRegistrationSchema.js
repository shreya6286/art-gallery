import { z } from 'zod';
import validator from 'validator';

export const UserRegistrationSchema = z.object({
	_id: z.string({
		invalid_type_error: '_id must be of type string'}).optional(),
    person_name: z.string({
        required_error: 'Enter person name',
        invalid_type_error: 'person_name must be of type string'}).max(40, { message: 'person_name field can have maximum 40 characters' }),
	first_name: z.string({
		required_error: 'Enter first name',
		invalid_type_error: 'first_name must be of type string'	}).max(20, { message: 'first_name field can have maximum 20 characters' }),
	last_name: z.string({
		required_error: 'Enter last name',
		invalid_type_error: 'last_name must be of type string'	}).max(20, { message: 'last_name field can have maximum 20 characters' }),
	phone: z.string({
        required_error: 'Enter phone number',
		invalid_type_error: 'phone must be of type string'})
        .min(10, { message: 'phone field can have minimum 10 characters' })
        .max(10, { message: 'phone field can have maximum 10 characters' })
        .refine(validator.isMobilePhone),
	email_id: z.string({
		required_error: 'Enter email address',
		invalid_type_error: 'email_id must be of type string'}).max(50, { message: 'email_id field can have maximum 50 characters' }).email('Please enter valid email id'),
	password: z.string({
		required_error: 'Enter password',
		invalid_type_error: 'password must be of type string'}).max(20, { message: 'password field can have maximum 20 characters' }),
    message: z.string({
        required_error: 'Enter message',
        invalid_type_error: 'message must be of type string'}),
})