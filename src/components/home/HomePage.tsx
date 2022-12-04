import React, { FC } from "react";
import { Web3Button } from "@web3modal/react";
import { useAccount, useBalance } from "wagmi";
import styled from "styled-components";

const ContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const DataWrapper = styled.div`
	margin-top: 16px;
`;

const Balance = styled.span`
	font-size: 18px;
	color: darkblue;
	font-weight: 600;
`;

const HomePage: FC = () => {
	const { address, isConnecting, isDisconnected } = useAccount();
	const { data, isError, isLoading } = useBalance({
		address,
	});
	const hasBalanceData = data?.formatted && data?.symbol;

	return (
		<ContentWrapper>
			<Web3Button />
			<DataWrapper>
				{!address && isConnecting && "Connecting wallet..."}
				{isDisconnected && "Wallet is disconnected."}
				{address && (
					<>
						Your address is: <strong>{address}</strong>
					</>
				)}
			</DataWrapper>
			<DataWrapper>
				{isError && "Something went wrong :("}
				{isLoading && "Getting balance data..."}
				{hasBalanceData && (
					<Balance>{`${data.formatted} ${data.symbol}`}</Balance>
				)}
			</DataWrapper>
		</ContentWrapper>
	);
};

export default HomePage;
