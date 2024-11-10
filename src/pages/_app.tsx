import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { useRouter } from "next/router";

import Layout  from '../components/layouts/Layout';

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter();
    const excludeLayout = ['/login'].includes(router.pathname);

    if (excludeLayout) {
        return <Component {...pageProps} />;
    }

    return (
        <>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    )
}