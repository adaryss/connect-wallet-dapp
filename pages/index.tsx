import Head from "next/head";
import { FC } from "react";
import styled from "styled-components";
import HomePage from "../src/components/home/HomePage";

const Main = styled.main`
	background: #f0f0f0;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 24px;
	min-height: 100vh;
`;

const Home: FC = () => {
	return (
		<div>
			<Head>
				<title>Connect wallet</title>
				<meta name="description" content="Connect wallet" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Main>
				<HomePage />
			</Main>
		</div>
	);
};

export default Home;
