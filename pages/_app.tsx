import "src/styles/globals.css";
import type { AppProps } from "next/app";
import { WagmiConfig } from "wagmi";
import { Web3Modal } from "@web3modal/react";
import { ethereumClient, wagmiClient } from "../web3Client";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<WagmiConfig client={wagmiClient}>
				<Component {...pageProps} />
			</WagmiConfig>
			<Web3Modal
				projectId={process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID}
				ethereumClient={ethereumClient}
			/>
		</>
	);
}
