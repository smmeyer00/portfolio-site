import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/common/navbar";

export default function Home() {
	return (
		<div className="">
			<Head>
				<title>My page title</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<Navbar></Navbar>
			<h1 className="text-9xl text-center">Hello World</h1>
		</div>
	);
}
