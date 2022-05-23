import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/common/navbar";

export default function Projects() {
	return (
		<>
			<Head>
				<title>Projects</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<Navbar curr={'Projects'} />

            <div className="text-white text-center text-6xl font-mono mt-20">
                Under Construction
            </div>
			
		</>
	);
}