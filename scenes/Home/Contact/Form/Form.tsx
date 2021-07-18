import React from 'react';
import { Button, Htag } from '../../../../components';
import { Form, FormWrap, Input, Label, InputWrap, Textarea } from './Form.styles';

export const FormBlock = (): JSX.Element => {
	return (
		<FormWrap>
			<Form>
				<InputWrap>
					<Label htmlFor="name">Name</Label>
					<Input name="name" type="text" id="name" placeholder="Enter your full name" />
				</InputWrap>
				<InputWrap>
					<Label htmlFor="name">Email Address</Label>
					<Input name="name" type="email" id="name" placeholder="Enter your email address" />
				</InputWrap>
				<InputWrap>
					<Label htmlFor="name">Message</Label>
					<Textarea name="name" id="name" rows={6} cols={50}></Textarea>
				</InputWrap>
				<Button appearance="primary" size="middle">Send Message</Button>
			</Form>
		</FormWrap>
	);
};