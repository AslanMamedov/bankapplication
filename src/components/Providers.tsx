'use client';
import { FC, ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';

interface ProvidersProps {
	children: ReactNode;
}

const Providers: FC<ProvidersProps> = ({ children }) => {
	return (
		<SessionProvider>
				<Provider store={store}>{children}</Provider>
		</SessionProvider>
	);
};

export default Providers;
