import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/common/navbar";

export default function Home() {
	return (
		<div className="">
			<Head>
				<title>Home</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<Navbar />
			<div className="md:flex md:flex-row md:py-20 md:gap-x-20 md:justify-center">
				<div className="text-center rounded-full">
					{/* <h1 className=" text-6xl text-white text-center">Hello world</h1> */}
					<Image
						className="bg-gray-500 rounded-full"
						src="/pixelselfie.PNG"
						width={300}
						height={300}></Image>
				</div>
				<div className="px-5">
					<h1 className="text-6xl text-white font-mono text-center">Hi, I'm Steven</h1>
					<div className="max-w-fit">
						<p className="text-lg text-white mt-8 mx-2 font-mono">
							I am a computer science student with a deep interest in Software Engineering and AI/ML. In
							May of 2023 I will graduate with my B.S. in Computer Science and will be ready to enter the workforce. I have always been interested
							in how computers work, and have enjoyed tinkering with them on my own. Feel free to check
							out some of my projects!
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
