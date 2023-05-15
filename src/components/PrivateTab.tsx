import React from 'react';
import { Popover } from './Popover';
import { Box, Container, Typography } from '@mui/material';
import SliderCarousel from './SliderCarousel';

export const PrivateTab = () => {
	return (
		<Box component={'div'}>
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
						title={'Карты'}
						links={[
							{
								text: 'Карты',
								href: '/user',
							},
							{
								text: 'Нео Галактика',
								href: '#',
							},
							{
								text: 'Заказ карты',
								href: '#',
							},
							{
								text: 'Онлайн продление карты',
								href: '#',
							},
							{
								text: 'Сравнение карты',
								href: '#',
							},
							{
								text: 'Дополнительные услуги',
								href: '#',
							},
							{
								text: 'Такрифы / Лимиты / MCC',
								href: '#',
							},
						]}
					/>
					<Popover
						title={'Кредиты'}
						links={[
							{
								href: '',
								text: 'Кредит наличными',
							},
							{ href: '', text: 'Ипотека' },
							{ href: '', text: 'Микро / Агро (Бизнес) кредиты' },
							{ href: '', text: 'Фермерский кредит' },
							{ href: '', text: 'Ламбардные кредиты' },
							{ href: '', text: 'Кредиты под залог недвижимости' },
							{ href: '', text: 'Кредиты под залог депозита' },
							{ href: '', text: 'Автокредиты' },
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
						Денежные переводы
					</Typography>

					<Popover
						title={'Депозиты'}
						links={[
							{ href: '', text: 'Депозит "Срочный"' },
							{ href: '', text: 'Депозит "Выгодное Накопление"' },
						]}
					/>
					<Popover
						title={'Онлайн услуги'}
						links={[
							{
								href: '',
								text: 'Онлайн продление карты',
							},
							{
								href: '',
								text: 'Онлайн заказ карты',
							},
							{
								href: '',
								text: 'Онлайн заказ кредита',
							},
							{
								href: '',
								text: 'Мобильное отделение',
							},
							{
								href: '',
								text: 'Интернет отделение ',
							},
							{
								href: '',
								text: 'FIFD Калькулятор',
							},
							{
								href: '',
								text: 'IBAN конвертор',
							},
						]}
					/>
					<Popover
						title={'Другие услуги'}
						links={[
							{
								href: '',
								text: 'Cчета',
							},
							{
								href: '',
								text: 'Банковские сейфы',
							},
							{
								href: '',
								text: 'KBXM',
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
							imgsrc: './1.png',
							bgcolor: '#36016c',
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
						{
							imgsrc: './2.png',
							bgcolor: '#391770',
							link: '',
							subTitle: '',
							title: '',
						},
						{
							imgsrc: './1.png',
							bgcolor: '#36016c',
							link: '',
							subTitle: '',
							title: '',
						},
						{
							imgsrc: './5.png',
							bgcolor: '#04010a',
							link: '',
							subTitle: '',
							title: '',
						},
						{
							imgsrc: './6.png',
							bgcolor: '#255ec3',
							link: '',
							subTitle: '',
							title: '',
						},
					]}
				/>
			</Box>
		</Box>
	);
};
