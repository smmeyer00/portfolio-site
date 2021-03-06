/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
import Link from "next/link";

const navigation = [
	{ name: "Home", href: "/", current: true },
	{ name: "Experience", href: "/experience", current: false },
	{ name: "Projects", href: "/projects", current: false },
];

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function Example({curr}) {

    // set current to current page
    navigation.forEach((n) => {
        if (n.name == curr) {
            n.current = true;
        } else {
            n.current = false;
        }
    })

	return (
		<Disclosure as="nav" className="bg-black">
			{({ open }) => (
				<>
					<div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
						<div className="relative flex items-center justify-between h-16">
							<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
								{/* Mobile menu button*/}
								<Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none ">
									<span className="sr-only">Open main menu</span>
									{open ? (
										<XIcon className="block h-6 w-6" aria-hidden="true" />
									) : (
										<MenuIcon className="block h-6 w-6" aria-hidden="true" />
									)}
								</Disclosure.Button>
							</div>
							<div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
								<div className="hidden sm:block sm:ml-6">
									<div className="flex space-x-4">
										{navigation.map((item) => (
											<Link href={item.href}>
												<a
													key={item.name}
													href={item.href}
													className={classNames(
														item.current
															? " text-white"
															: "text-gray-500  hover:text-white",
														"px-3 py-2 rounded-md text-xl font-medium"
													)}
													aria-current={item.current ? "page" : undefined}>
													{item.name}
												</a>
											</Link>
										))}
									</div>
								</div>
							</div>
							{/* Container for CV, GH, LI icons */}
							<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
								<div className="bg-black p-1 rounded-full text-gray-400 hover:text-neutral-100 focus:outline-none">
									<span className="sr-only">Resume Link</span>
									<a href={"/files/resume.pdf"}>
										<FiMail className="h-6 w-6" />
									</a>
								</div>
								<div className="bg-black p-1 rounded-full text-gray-400 hover:text-neutral-100 focus:outline-none">
									<span className="sr-only">Github Link</span>
									<a href={"https://github.com/smmeyer00"}>
										<FiGithub className="h-6 w-6" />
									</a>
								</div>
								<div className="bg-black p-1 rounded-full text-gray-400 hover:text-neutral-100 focus:outline-none">
									<span className="sr-only">LinkedIn Link</span>
									<a href={"https://www.linkedin.com/in/smmeyer00/"}>
										<FiLinkedin className="h-6 w-6" />
									</a>
								</div>
							</div>
						</div>
					</div>

					<Disclosure.Panel className="sm:hidden">
						<div className="px-2 pt-2 pb-3 space-y-1">
							{navigation.map((item) => (
								<Disclosure.Button
									key={item.name}
									as="a"
									href={item.href}
									className={classNames(
										item.current ? "text-white" : "text-gray-500 hover:text-white",
										"block px-3 py-2 rounded-md text-base font-medium"
									)}
									aria-current={item.current ? "page" : undefined}>
									{item.name}
								</Disclosure.Button>
							))}
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
}
