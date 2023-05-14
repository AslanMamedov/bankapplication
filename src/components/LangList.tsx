'use client';

import { Box, Typography } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useMemo, useState } from 'react';
const LangList = () => {
	const [selectLang, setSelectLang] = useState('ru');
	const langLinst = useMemo(() => ['ru', 'az', 'en'], []);

	const selectedHandler = (lang: string) => {
		setSelectLang(lang);
	};

	return (
		<Box
			component={'div'}
			sx={{
				bgcolor: '#ffff',
				borderRadius: '1px',
				position: 'relative',
				display: 'flex',
				alignItems: 'center',
				py: '4px',
				px: '10px',
				maxWidth: '90px',
				boxShadow: '0px 0px 1px 0px gray',
				'&:hover > ul': {
					display: 'block',
				},
				'&:hover > svg.arrow': {
					rotate: '180deg',
				},
			}}
		>
			<LanguageIcon
				sx={{
					color: '#485dc6',
				}}
			/>
			<Typography
				variant="h6"
				sx={{
					cursor: 'pointer',
					textTransform: 'uppercase',
					marginLeft: '10px',
					fontSize: '14px',
				}}
			>
				{selectLang}
			</Typography>
			<KeyboardArrowDownIcon className="arrow" />
			<Box
				component={'ul'}
				sx={{
					bgcolor: '#ffff',
					borderRadius: '1px',
					boxShadow: '0px 0px 1px 0px gray',
					position: 'absolute',
					display: 'none',
					right: '0',
					top: '30px',
					py: '8px',
					px: '15px',
					'& > li': {
						cursor: 'pointer',
					},
					'&:not(:first-child) > li': {
						marginTop: '15px',
					},
				}}
			>
				{langLinst.length &&
					langLinst.map((lang, i) => (
						<Box
							key={i}
							onClick={() => selectedHandler(lang)}
							component={'li'}
							sx={{
								fontSize: '14px',
								textTransform: 'uppercase',
								'&:hover': {
									color: '#485dc6',
								},
							}}
						>
							{lang}
						</Box>
					))}
			</Box>
		</Box>
	);
};

export default LangList;
