'use client';
import { FC, ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
interface ProvidersProps {
	children: ReactNode;
}
const theme = createTheme({});
const Providers: FC<ProvidersProps> = ({ children }) => {
	return (
		<SessionProvider>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Provider store={store}>{children}</Provider>
			</ThemeProvider>
		</SessionProvider>
	);
};

export default Providers;
