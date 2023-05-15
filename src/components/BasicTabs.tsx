import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useState } from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import WebIcon from '@mui/icons-material/Web';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import { PrivateTab } from './PrivateTab';
import { BusinessTab } from './BusinessTab';
import { Container } from '@mui/material';
interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number;
}

const TabPanel = (props: TabPanelProps) => {
	const { children, value, index, ...other } = props;

	return (
		<Box
			component={'div'}
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && <>{children}</>}
		</Box>
	);
};

const a11yProps = (index: number) => {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
};

export const BasicTabs = () => {
	const [value, setValue] = useState(0);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	return (
		<Box className={'header__bottom'} sx={{
			
		}}>
			<Container maxWidth="lg" sx={{ width: '100%', px: '40px' }}>
				<Box
					sx={{
						borderBottom: 1,
						borderColor: 'divider',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
					}}
				>
					<Tabs
						value={value}
						onChange={handleChange}
						aria-label="basic tabs example"
						sx={{
							'& > div span.css-1aquho2-MuiTabs-indicator': {
								backgroundColor: '#485dc6',
							},
						}}
					>
						<Tab
							label="Частным"
							{...a11yProps(0)}
							sx={{
								color: '#485dc6',
								'&.MuiTab-textColorPrimary': {
									color: '#485dc6',
								},
								textTransform: 'capitalize',
								marginRight: '50px',
								fontWeight: '500',
							}}
						/>
						<Tab
							label="Бизнес"
							{...a11yProps(1)}
							sx={{
								fontWeight: '500',
								textTransform: 'capitalize',
								color: '#485dc6',
								'&.MuiTab-textColorPrimary': {
									color: '#485dc6',
								},
							}}
						/>
					</Tabs>
					<Box
						component={'ul'}
						sx={{
							display: 'flex',
							width: '550px',
							justifyContent: 'space-between',
							'& > li:not(:fist-child)': {
								marginRight: '25px',
							},
							'& > li svg': {
								'&:hover': {
									color: '#485dc6',
								},
								marginRight: '10px',
							},
							'& > li': {
								display: 'flex',
								alignItems: 'center',
								cursor: 'pointer',
								fontWeight: '500',
								'&:hover': {
									color: '#485dc6',
								},
							},
						}}
					>
						<Box component={'li'}>
							<WhatsAppIcon />
							Чат-бот в WhatsApp
						</Box>
						<Box component={'li'}>
							<WhatshotIcon />
							Интернет Офис
						</Box>
						<Box component={'li'}>
							<WebIcon />
							Интернет Отделение
						</Box>
					</Box>
				</Box>
			</Container>
			<TabPanel value={value} index={0}>
				<PrivateTab />
			</TabPanel>
			<TabPanel value={value} index={1}>
				<BusinessTab />
			</TabPanel>
		</Box>
	);
};
