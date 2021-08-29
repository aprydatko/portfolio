import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { Button, Htag } from '../../../../components';
import { Form, FormWrap, Input, Label, InputWrap, Textarea } from './Form.styles';

export const FormBlock = (): JSX.Element => {
	const { t, lang } = useTranslation();
	return (
		<FormWrap>
			<Form>
				<InputWrap>
					<Label htmlFor="name">{t('home:contact.phone.label')}</Label>
					<Input name="name" type="text" id="name" placeholder={t('home:contact.phone.placeholder')} />
				</InputWrap>
				<InputWrap>
					<Label htmlFor="name">{t('home:contact.email.label')}</Label>
					<Input name="name" type="email" id="name" placeholder={t('home:contact.email.placeholder')} />
				</InputWrap>
				<InputWrap>
					<Label htmlFor="name">{t('home:contact.message.label')}</Label>
					<Textarea name="name" id="name" rows={6} cols={50} placeholder={t('home:contact.message.placeholder')}></Textarea>
				</InputWrap>
				<Button appearance="primary" size="middle">{t('home:contact.button')}</Button>
			</Form>
		</FormWrap>
	);
};