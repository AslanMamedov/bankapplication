'use client';

import { Box, Container } from '@mui/material';
import LangList from './LangList';
import SearchIcon from '@mui/icons-material/Search';
import { Search } from './Search';
import { BasicTabs } from './BasicTabs';
import { Popover } from './Popover';
import clsx from 'clsx';
export const Header = () => {
	return (
		<>
			<Container maxWidth="lg" className="header__top">
				<Box
					component={'header'}
					className="header"
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
						px: '40px',
						py: '20px',
						height: '93px',
					}}
				>
					<Box className="logo">
						<Box component={'img'} src="./logo.svg" alt="Bank_Logo" />
					</Box>
					<Box className="navigation" sx={{ display: 'flex', alignItems: 'center' }}>
						<Box
							className=""
							sx={{
								marginRight: '25px',
								display: 'flex',
								alignItems: 'center',
							}}
						>
							<Box
								component={'ul'}
								sx={{
									width: '500px',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'space-between',
									'& > li:hover': {
										color: '#485dc6',
										cursor: 'pointer',
									},
									'& > li': {
										fontWeight: '500',
									},
								}}
							>
								<Box component={'li'}>Курсы валют</Box>
								<Box
									component={'li'}
									sx={{
										zIndex: '1111',
									}}
								>
									<Popover
										title={'О нас'}
										links={[
											{
												href: '',
												text: 'О нас',
											},
											{
												href: '',
												text: 'Банковские реквизиты',
											},
											{
												href: '',
												text: 'Внутренние комитеты',
											},
											{
												href: '',
												text: 'Отчеты',
											},
											{
												href: '',
												text: 'Руководство',
											},
											{
												href: '',
												text: 'Организационная структура',
											},
											{
												href: '',
												text: 'Управление рисками',
											},
											{
												href: '',
												text: 'Вакансии',
											},
											{
												href: '',
												text: 'Новости',
											},
										]}
									/>
								</Box>
								<Box component={'li'}>Филиалы и банкоматы</Box>
								<Box component={'li'}>Свяжитесь с нами</Box>
							</Box>

							<Search />
						</Box>
						<LangList />
					</Box>
				</Box>
			</Container>
			<BasicTabs />
		</>
	);
};
