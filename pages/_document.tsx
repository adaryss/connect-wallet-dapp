import React from "react";
import Document, {
	Head,
	Main,
	NextScript,
	Html,
	DocumentInitialProps,
	DocumentContext,
} from "next/document";
import { ServerStyleSheet } from "styled-components";


// styled-components setup based on https://dev.to/adambaialiev/how-to-add-styled-components-to-next-js-project-using-typescript-2nl4
export default class MyDocument extends Document {
	static async getInitialProps(
		ctx: DocumentContext
	): Promise<DocumentInitialProps> {
		const { renderPage } = ctx;
		const sheet = new ServerStyleSheet();

		try {
			ctx.renderPage = () =>
				renderPage({
					enhanceApp: (App) => (props) =>
						sheet.collectStyles(<App {...props} />),
				});

			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			};
		} finally {
			sheet.seal();
		}
	}

	render() {
		return (
			<Html>
				<Head />
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}