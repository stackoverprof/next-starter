import React, { useState } from 'react';
import MainLayout from '@components/_layouts/MainLayout';
import Link from '@components/_shared/Link';
import useForm from '@core/hooks/useForm';

interface FormType {
	nickname: string;
	city: string;
	story: string;
}

const Form = (): JSX.Element => {
	const [isLoading, setIsLoading] = useState(false);

	const { form, mutateForm, resetForm } = useForm<FormType>({
		nickname: '',
		city: '',
		story: '',
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsLoading(true);

		setTimeout(() => {
			console.log(form);
			alert('submitted');
			resetForm();
			setIsLoading(false);
		}, 1000);
	};

	return (
		<MainLayout title="Form" className="flex-cc col">
			<h1 className="mb-4 text-4xl font-bold">Form</h1>

			<form onSubmit={handleSubmit} className="flex-cs col gap-4 mb-12">
				<input
					type="text"
					name="nickname"
					value={form.nickname}
					onChange={mutateForm}
					placeholder="who are you?"
					className="border"
				/>
				<input
					type="text"
					name="city"
					value={form.city}
					onChange={mutateForm}
					placeholder="where you from?"
					className="border"
				/>
				<textarea
					name="story"
					value={form.story}
					onChange={mutateForm}
					placeholder="What is your story?"
					className="border"
				/>

				<button
					type="submit"
					className="bg-black text-white p-2 ml-auto"
					data-loading={isLoading}
				>
					SUBMIT <i className="spinner"></i>
				</button>
			</form>

			<Link href="/" className="px-4 py-2 text-white bg-accent hover:bg-opacity-80">
				BACK HOME
			</Link>
		</MainLayout>
	);
};

// Example use of :
// useForm, unified form state control
// built in loading style button with data-loading= true or false

export default Form;
