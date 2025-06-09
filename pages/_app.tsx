import { initFrontend } from "@/lib/frontendModule";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {

    useEffect(()=>{
        initFrontend();
    },[]);

    return (
        <>
            <Head>
                <title>Convo-Lang NextJs</title>
                <meta name="description" content="Convo-Lang NextJS starter template" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/logo-icon.png" />
            </Head>
            <Component {...pageProps} />
        </>
    )
}
