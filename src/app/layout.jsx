import { Inter } from "next/font/google";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Nutrition Calculator",
	description: "Calculate the nutrients of a meal",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				{children}
				<footer>
					Made by <a href="https://vdfuste.com" target="_blank">vdfuste↗</a>
				</footer>
			</body>
		</html>
	);
}
