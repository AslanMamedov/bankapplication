import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import { Popover } from './Popover';
import SliderCarousel from './SliderCarousel';

export const BusinessTab = () => {
	return (
		<Box>
			<Container
				maxWidth="lg"
				sx={{
					zIndex: '1111111111111',
				}}
			>
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
								href: '#',
								text: 'Гарантия',
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
					mt: '20px',
					position: 'relative',
					zIndex: '11',
				}}
			>
				<SliderCarousel
					sliderLists={[
						{
							imgsrc: './6.png',
							bgcolor: '#255ec3',
							link: '',
							subTitle: '',
							title: '',
						},
						{
							imgsrc: './3.png',
							bgcolor: '#003b87',
							link: '',
							subTitle: '',
							title: '',
						},
						// {
						// 	imgsrc: './8.png',
						// 	bgcolor: '#2c2572',
						// 	link: '',
						// 	subTitle: '',
						// 	title: '',
						// },
						// {
						// 	imgsrc: './7.png',
						// 	bgcolor: '#3e74d8',
						// 	link: '',
						// 	subTitle: '',
						// 	title: '',
						// },
						// {
						// 	imgsrc: './9.png',
						// 	bgcolor: '#5615af ',
						// 	link: '',
						// 	subTitle: '',
						// 	title: '',
						// },
					]}
				/>
			</Box>
		</Box>
	);
};
