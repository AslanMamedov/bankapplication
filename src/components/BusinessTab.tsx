import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import { Popover } from './Popover';
import { SliderCarousel } from './SliderCarousel';

export const BusinessTab = () => {
	return (
		<Box>
			<Container maxWidth="lg">
				<Box
					sx={{
						width: '100%',
						display: 'flex',
						px: '0',
						mt: '25px',
						'& > div:not(:last-child)': {
							marginRight: '40px',
						},
					}}
				>
					<Popover
						title={'Бизнес кредиты'}
						links={[
							{
								text: 'Бизнес кредиты',
								href: '/user',
							},
							{
								href: '#',
								text: 'Кредитная линия',
							},
							{
								href: '#',
								text: 'Фонд развития предпринимательства (SIF)',
							},
							{
								href: '#',
								text: 'Аграрное Агенство Кредитования и Развития (АКИА)',
							},
							{
								href: '#',
								text: 'Льготные (субсидированные) кредиты через фонд ипотечного и кредитного обеспечения',
							},
						]}
					/>
					<Popover
						title={'Не-кредитные продукты'}
						links={[
							{
								href: '#',
								text: 'Рассчетно-кассовые услуги',
							},
							{
								href: '#',
								text: 'Зарплатные проекты',
							},
							{
								href: '#',
								text: 'Депозиты',
							},
							{
								href: '#',
								text: 'Бизнес карты',
							},
							{
								href: '#',
								text: 'Инкассация',
							},
							{
								href: '#',
								text: 'Банковские сейфы',
							},
							{
								href: '#',
								text: 'Экваринг (POS - Терминал)',
							},
							{
								href: '#',
								text: 'Факторинг',
							},
						]}
					/>

					<Popover
						title={'Цифровой банкинг'}
						links={[
							{ href: '', text: 'Мобильный Офис' },
							{ href: '', text: 'Интернет Офис' },
						]}
					/>
					<Popover
						title={'Документарные операции услуги'}
						links={[
							{
								href: 'Гарантия',
								text: '',
							},
							{
								href: '',
								text: 'Аккредитив',
							},
							{
								href: '',
								text: 'Финансирование на основании счетов-фактур',
							},
						]}
					/>

					<Typography
						component={'div'}
						variant="h6"
						sx={{
							fontWeight: '500',
							fontSize: '14px',
							cursor: 'pointer',
							'&:hover': { color: '#485dc6' },
						}}
					>
						Компании
					</Typography>
				</Box>
			</Container>
			<Box
				sx={{
					width: '100%',
					px: 0,
					height: '540px',
				}}
			>
				<SliderCarousel />
			</Box>
		</Box>
	);
};
