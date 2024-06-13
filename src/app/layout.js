import { Toaster } from "react-hot-toast";
import "./globals.css";
import { Quicksand } from "next/font/google";

const inter = Quicksand({ subsets: ["latin"] });

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3586181999451961" crossOrigin={"anonymous"}></script>
			</head>
			<body className={inter.className}>
				<Toaster />
				{children}
			</body>
		</html>
	);
}
