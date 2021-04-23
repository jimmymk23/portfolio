import type { AppProps /*, AppContext */ } from 'next/app';
import 'normalize.css';
import '../styles/main.sass';

function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}

export default MyApp;
