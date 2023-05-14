import { Box } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { FC } from 'react';
import Link from 'next/link';

type TLinks = {
	href: string;
	text: string;
};

interface IPopoverProps {
	title: string;
	links: TLinks[];
}

export const Popover: FC<IPopoverProps> = ({ title = '', links = [] }) => {
	return (
		<Box
			component={'div'}
			sx={{
				position: 'relative',
				display: 'flex',
				alignItems: 'center',
				cursor: 'pointer',
				'&:hover': { color: '#485dc6' },
				'&:hover > ul': {
					display: 'block',
				},
				'&:hover > svg.arrow': {
					rotate: '180deg',
				},
				zIndex: '111',
			}}
		>
			{title}
			<KeyboardArrowDownIcon className="arrow" />
			<Box
				component={'ul'}
				sx={{
					bgcolor: '#ffff',
					borderRadius: '1px',
					boxShadow: '0px 0px 1px 0px gray',
					position: 'absolute',
					display: 'none',
					minWidth: '280px',
					left: '0',
					zIndex: '11111',
					top: '22px',
					py: '15px',
					px: '15px',
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
								width: '100%',
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
	);
};
