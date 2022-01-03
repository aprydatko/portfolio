import React from 'react';
import axios from 'axios';
import {
   Formik,
   FormikHelpers,
   FormikProps,
   Form,
   Field,
   FieldProps,
 } from 'formik';
import useTranslation from 'next-translate/useTranslation';
import { Button, Htag } from '../../../../components';
import { FormWrap, Input, Label, InputWrap, Textarea } from './Form.styles';

interface Values {
  name: string;
  email: string;
  message: string;
}

export const FormBlock = (): JSX.Element => {
	const { t, lang } = useTranslation();
	return (
		<FormWrap>
			<Formik
				initialValues={{
					name: '',
					email: '',
					message: '',
				}}
				onSubmit={(
					values: Values,
					{ setSubmitting }: FormikHelpers<Values>
				) => {
					axios.post('http://others.artyrpridatko.5k5.ru/api/mail.php', values)
					.then(function (response) {
						console.log(response);
						alert('Сообщение отправлено успешно!');
					})
					.catch(function (error) {
						console.log(error);
						alert('Сообщение не удалось отправить!');
					});
					
					setSubmitting(false);
				}}
			>
				<Form>
					<InputWrap>
						<Label htmlFor="name">{t('home:contact.phone.label')}</Label>
						<Field className="input" name="name" type="text" id="name" placeholder={t('home:contact.phone.placeholder')} />
					</InputWrap>
					<InputWrap>
						<Label htmlFor="email">{t('home:contact.email.label')}</Label>
						<Field className="input" name="email" type="email" id="email" placeholder={t('home:contact.email.placeholder')} />
					</InputWrap>
					<InputWrap>
						<Label htmlFor="textarea">{t('home:contact.message.label')}</Label>
						<Field as="textarea" className="textarea" name="message" id="textarea" type="text" rows={6} cols={50} placeholder={t('home:contact.message.placeholder')} />
					</InputWrap>

					<Button type="submit" appearance="primary" size="middle">{t('home:contact.button')}</Button>
				</Form>
			</Formik>
		</FormWrap>
	);
};