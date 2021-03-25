import type { AppProps /*, AppContext */ } from 'next/app';
import '../styles/main.sass';

function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}

export default MyApp;
