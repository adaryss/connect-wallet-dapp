import {
	EthereumClient,
	modalConnectors,
	walletConnectProvider,
} from "@web3modal/ethereum";

import { chain, configureChains, createClient } from "wagmi";

const chains = [chain.goerli];

const { provider } = configureChains(chains, [
	walletConnectProvider({
		projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID ?? '',
	}),
]);

export const wagmiClient = createClient({
	autoConnect: false,
	connectors: modalConnectors({ appName: "simple-dapp-wallet", chains }),
	provider,
});

export const ethereumClient = new EthereumClient(wagmiClient, chains);
