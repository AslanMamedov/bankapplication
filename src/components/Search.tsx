'use client';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';

import SearchIcon from '@mui/icons-material/Search';
import { Fragment, useState } from 'react';
import { Container, InputAdornment, TextField, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';
type Anchor = 'top';

export const Search = () => {
	const [state, setState] = useState({
		top: false,
	});
	const [links, setLinks] = useState([
		{
			text: 'Онлайн оплата кредита',
			href: '',
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
			text: 'Онлайн заказ карты',
		},
		{
			href: '',
			text: 'Пластиковые карты',
		},
		{
			href: '',
			text: 'Наличный кредит',
		},
	]);

	const toggleDrawer = (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
		if (
			(event.type === 'Escape' && (event as React.KeyboardEvent).key === 'Tab') ||
			(event as React.KeyboardEvent).key === 'Shift'
		) {
			return;
		}

		setState({ ...state, [anchor]: open });
	};

	const list = (anchor: Anchor) => (
		<Box
			sx={{ width: anchor === 'top' ? 'auto' : 250, height: '480px', borderBottom: '1px solid #485dc6' }}
			role="presentation"
			onKeyDown={toggleDrawer(anchor, true)}
		>
			<Container
				maxWidth="lg"
				sx={{
					py: '20px',
				}}
			>
				<Box
					component={'div'}
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
					}}
				>
					<Typography
						sx={{
							color: '#485dc6',
							fontWeight: '600',
							fontSize: '20px',
						}}
					>
						Bank Respublika
					</Typography>
					<CloseIcon
						onClick={toggleDrawer(anchor, false)}
						sx={{
							cursor: 'pointer',
						}}
					/>
				</Box>
				<Box
					sx={{
						mt: '50px',
						display: 'flex',
						justifyContent: 'center',
						flexDirection: 'column',
						alignItems: 'center',
					}}
					component={'div'}
				>
					<Typography
						sx={{
							fontWeight: '400',
							fontSize: '20px',
							textAlign: 'center',
						}}
					>
						Поиск по новостям, кампаниям и продуктам
					</Typography>
					<TextField
						sx={{
							width: '680px',
							mt: '30px',
						}}
						id="outlined-basic"
						label="Введите ключевое слово"
						variant="outlined"
						color="primary"
						InputProps={{
							endAdornment: (
								<InputAdornment position="end">
									<SearchIcon />
								</InputAdornment>
							),
						}}
					/>
				</Box>
				<Box sx={{ mt: '40px', display: 'flex', flexDirection: 'column' }} component={'div'}>
					<Typography
						sx={{
							color: '#485dc6',
							fontWeight: '400',
							fontSize: '18px',
						}}
					>
						Часто ищут
					</Typography>
					<Box
						component={'ul'}
						sx={{
							display: 'flex',
							mt: '10px',
							justifyContent: 'space-between',
							'&> li': {
								'&:not(:first-child)': {
									paddingLeft: '25px',
								},
								'&:not(:last-child)': {
									borderRight: '1px solid rgba(0,0,0, .1)',
								},
							},
						}}
					>
						<Box
							component={'li'}
							sx={{
								flex: 1,
							}}
						>
							<Box
								component={'ul'}
								sx={{
									'& > li': {
										cursor: 'pointer',
									},
									'&> li': {
										'&:not(:first-child)': {
											marginTop: '15px',
										},
									},
								}}
							>
								{links.length &&
									links.map(({ href, text }, index) => (
										<Box
											key={index}
											component={'li'}
											sx={{
												fontSize: '14px',
												wordBreak: 'break-word',
												textTransform: 'uppercase',

												transition: 'padding-left .2s ease-in-out',
												'&:hover': {
													paddingLeft: '10px',
													transition: 'padding-left .2s ease-in-out',
												},
												'&:hover a': {
													color: '#485dc6',
													transition: 'padding-left .2s ease-in-out',
												},
												'& > a': {
													fontSize: '14px',
													textTransform: 'capitalize',
													color: 'black',
													transition: 'padding-left .2s ease-in-out',
												},
											}}
										>
											<Link href={href}>{text}</Link>
										</Box>
									))}
							</Box>
						</Box>
						<Box
							component={'li'}
							sx={{
								flex: 1,
							}}
						>
							<Box
								component={'ul'}
								sx={{
									'& > li': {
										cursor: 'pointer',
									},
									'&> li': {
										'&:not(:first-child)': {
											marginTop: '15px',
										},
									},
								}}
							>
								{links.length &&
									links.map(({ href, text }, index) => (
										<Box
											key={index}
											component={'li'}
											sx={{
												fontSize: '14px',
												wordBreak: 'break-word',
												textTransform: 'uppercase',

												transition: 'padding-left .2s ease-in-out',
												'&:hover': {
													paddingLeft: '10px',
													transition: 'padding-left .2s ease-in-out',
												},
												'&:hover a': {
													color: '#485dc6',
													transition: 'padding-left .2s ease-in-out',
												},
												'& > a': {
													fontSize: '14px',
													textTransform: 'capitalize',
													color: 'black',
													transition: 'padding-left .2s ease-in-out',
												},
											}}
										>
											<Link href={href}>{text}</Link>
										</Box>
									))}
							</Box>
						</Box>
						<Box
							component={'li'}
							sx={{
								flex: 1,
							}}
						>
							<Box
								component={'ul'}
								sx={{
									'& > li': {
										cursor: 'pointer',
									},
									'&> li': {
										'&:not(:first-child)': {
											marginTop: '15px',
										},
									},
								}}
							>
								{links.length &&
									links.map(({ href, text }, index) => (
										<Box
											key={index}
											component={'li'}
											sx={{
												fontSize: '14px',
												wordBreak: 'break-word',
												textTransform: 'uppercase',

												transition: 'padding-left .2s ease-in-out',
												'&:hover': {
													paddingLeft: '10px',
													transition: 'padding-left .2s ease-in-out',
												},
												'&:hover a': {
													color: '#485dc6',
													transition: 'padding-left .2s ease-in-out',
												},
												'& > a': {
													fontSize: '14px',
													textTransform: 'capitalize',
													color: 'black',
													transition: 'padding-left .2s ease-in-out',
												},
											}}
										>
											<Link href={href}>{text}</Link>
										</Box>
									))}
							</Box>
						</Box>
						<Box
							component={'li'}
							sx={{
								flex: 1,
							}}
						>
							<Box
								component={'ul'}
								sx={{
									'& > li': {
										cursor: 'pointer',
									},
									'&> li': {
										'&:not(:first-child)': {
											marginTop: '15px',
										},
									},
								}}
							>
								{links.length &&
									links.map(({ href, text }, index) => (
										<Box
											key={index}
											component={'li'}
											sx={{
												fontSize: '14px',
												wordBreak: 'break-word',
												textTransform: 'uppercase',

												transition: 'padding-left .2s ease-in-out',
												'&:hover': {
													paddingLeft: '10px',
													transition: 'padding-left .2s ease-in-out',
												},
												'&:hover a': {
													color: '#485dc6',
													transition: 'padding-left .2s ease-in-out',
												},
												'& > a': {
													fontSize: '14px',
													textTransform: 'capitalize',
													color: 'black',
													transition: 'padding-left .2s ease-in-out',
												},
											}}
										>
											<Link href={href}>{text}</Link>
										</Box>
									))}
							</Box>
						</Box>
					</Box>
				</Box>
			</Container>
		</Box>
	);

	return (
		<Fragment>
			{(['top'] as const).map((anchor) => (
				<Fragment key={anchor}>
					<SearchIcon
						onClick={toggleDrawer(anchor, true)}
						sx={{
							'&:hover': {
								color: '#485dc6',
								cursor: 'pointer',
							},
							marginLeft: '35px',
						}}
					/>
					<Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
						{list(anchor)}
					</Drawer>
				</Fragment>
			))}
		</Fragment>
	);
};
