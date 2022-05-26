import React from "react";
import Navbar from "../components/common/navbar";
import Head from "next/head";

export default function Experience() {
	return (
		<>
			<Head>
				<title>Experience</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<Navbar curr={"Experience"}></Navbar>
			<div className="mt-10 lg:mt-20 text-white text-center text-6xl font-mono">Experience</div>
			<div className="mt-5 grid grid-cols-9">
				<div className="col-span-3 lg:col-span-4 text-right font-mono border-r-2 pr-4 md:pl-3">
					<div className="text-gray-500 text-xl md:text-2xl">May&nbsp;2022 - Present</div>
				</div>
				<div className="col-span-6 lg:col-span-5 text-left font-mono border-l-2 px-5">
					<div className="text-white text-2xl font-extrabold">Software Development Engineer Intern</div>
					<div className="text-gray-500 italic font-extrabold">Amazon</div>
					<div className="text-white max-w-fit">
						<ul className="list-disc pl-4 font-mono ">
                            <li>Developed APIs with Spring Boot and NodeJS</li>
                            <li>Designed, developed, documented, and tested features <br/> before pushing to production</li>
                            <li>Coordinated with multiple teams to aggregate<br/> data from multiple services</li>
                            <li>Languages Used: JavaScript, Java</li>
                        </ul>
					</div>
				</div>
                {/* Separator */}
                <div className="col-span-3 lg:col-span-4 text-right font-mono border-r-2 pr-4 pt-10">
                    <div className="text-gray-500 text-xl md:text-2xl">Jan&nbsp;2022 - May&nbsp;2022</div>
                </div>
                <div className="col-span-6 lg:col-span-5 text-left font-mono border-l-2 px-5 pt-10">
                    <div className="text-white text-2xl font-extrabold">Supplemental Instruction Leader</div>
					<div className="text-gray-500 italic font-extrabold">Southern Illinois University Edwardsville</div>
					<div className="text-white max-w-fit">
						<ul className="list-disc pl-4 font-mono ">
                            <li>Developed twice-weekly study sessions for physics <br/>students in order to improve student retention and <br/> success within targeted historically difficult <br/>courses</li>
                            <li>Hosted a weekly office hour for students to receive<br/> one on one help with course content</li>
                            <li>Assisted students with mastery of course material</li>
                        </ul>
					</div>
                </div>
                {/* Separator */}
                <div className="col-span-3 lg:col-span-4 text-right font-mono border-r-2 pr-4 pt-10">
                    <div className="text-gray-500 text-xl md:text-2xl">Aug&nbsp;2021 - Dec&nbsp;2021</div>
                </div>
                <div className="col-span-6 lg:col-span-5 text-left font-mono border-l-2 px-5 py-10">
                    <div className="text-white text-2xl font-extrabold">Undergraduate Research Assisstant</div>
					<div className="text-gray-500 italic font-extrabold">Southern Illinois University Edwardsville</div>
					<div className="text-white max-w-fit">
						<ul className="list-disc pl-4 font-mono">
                            <li>Utilized python and VMD to run molecular dynamics <br/> simulations of Hepatitis C virus</li>
                            <li>Developed scripts to automate process of running <br/>simulations for many variants of the Hepatitis C <br/>virus</li>
                            <li>Programmatically parsed and analyzed large amounts <br/>of data generated from simulations</li>
                        </ul>
					</div>
                </div>
			</div>
            <div className="h-32">

            </div>
		</>
	);
}
