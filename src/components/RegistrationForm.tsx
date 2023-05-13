'use client';

import { useRegistrationMutation } from '@/redux/registrationApi';
import {
	Box,
	Button,
	Checkbox,
	FormControl,
	FormControlLabel,
	FormLabel,
	Radio,
	RadioGroup,
	TextField,
} from '@mui/material';
import { Controller, FormProvider, SubmitHandler, useForm } from 'react-hook-form';

enum Gender {
	MALE,
	FEMALE,
}
import { useState } from 'react';
import InputField from './InputField';
import { onParseHandler } from '@/libs/parseDate';
import { onFormatHandler } from '@/libs/formatDate';

interface Registration {
	name: string;
	familyName: string;
	surname: string;
	birthday: Date;
	gender: Gender;
}
export const RegistrationForm = () => {
	const [regisration, result] = useRegistrationMutation();

	const { control, handleSubmit } = useForm<Registration>();

	const onSubmit: SubmitHandler<Registration> = async (data) => {
		console.log({ ...data, birthday: new Date(data.birthday).toString() });

		await regisration({ ...data, birthday: new Date(data.birthday).toString() });
	};

	return (
		<Box
			action=""
			component={'form'}
			onSubmit={handleSubmit(onSubmit)}
			sx={{
				display: 'flex',
				flexDirection: 'column',
				marginLeft: '150px',
				gap: '20px',
				marginTop: '150px',
				width: '500px',
			}}
		>
			<Controller
				name="name"
				control={control}
				render={({ field }) => <TextField {...field} label="Имя" variant="outlined" />}
			/>

			<Controller
				name="familyName"
				control={control}
				render={({ field }) => <TextField {...field} label="Фамилия" variant="outlined" />}
			/>
			<Controller
				name="surname"
				control={control}
				render={({ field }) => <TextField {...field} label="Отчество" variant="outlined" />}
			/>

			<Controller
				name="birthday"
				control={control}
				render={({ field }) => <TextField {...field} variant="outlined" type="date" />}
			/>

			<FormControl>
				<FormLabel id="demo-controlled-radio-buttons-group">Выберите пол</FormLabel>
				<Controller
					name="gender"
					control={control}
					render={({ field }) => (
						<RadioGroup aria-labelledby="demo-controlled-radio-buttons-group" row {...field}>
							<FormControlLabel value={Gender[0]} control={<Radio />} label="Женский" />
							<FormControlLabel value={Gender[1]} control={<Radio />} label="Мужской" />
						</RadioGroup>
					)}
				/>
			</FormControl>
			<Controller
				name="birthday"
				control={control}
				render={({ field }) => <TextField {...field} variant="outlined" type="date" />}
			/>

			<Button variant="contained" type="submit">
				Зарегистрироваться
			</Button>
		</Box>
	);
};
