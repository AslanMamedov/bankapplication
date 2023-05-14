'use client';

import { useRegistrationMutation } from '@/redux/registrationApi';
import { Box, Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@mui/material';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

enum Gender {
	MALE,
	FEMALE,
}

import { User } from '@prisma/client';
import { signIn, useSession } from 'next-auth/react';
import { sign } from 'crypto';

type Registration = User & {};
export const RegistrationForm = () => {
	const { data: session, status, update } = useSession();
	const [regisration, { data }] = useRegistrationMutation();

	const { control, handleSubmit } = useForm<Registration>();

	const onSubmit: SubmitHandler<Registration> = async (data) => {
		console.log({ ...data, birthday: new Date(data.birthday).toISOString() });

		await regisration({ ...data, birthday: new Date(data.birthday).toISOString() });

		const user = await signIn('credentials', {
			phoneNumber: data.phoneNumber,
			redirect: false,
		});
	};
	const dateOnChange = (e: any) => {
		console.log(e);
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
				name="nationality"
				control={control}
				render={({ field }) => <TextField {...field} label="Гражданство" variant="outlined" />}
			/>
			<Controller
				name="placeOfRegistration"
				control={control}
				render={({ field }) => <TextField {...field} label="Место регистрации" variant="outlined" />}
			/>
			<Controller
				name="placeOfResidence"
				control={control}
				render={({ field }) => <TextField {...field} label="Место проживания" variant="outlined" />}
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

			<Button variant="contained" type="submit">
				Зарегистрироваться
			</Button>
		</Box>
	);
};
