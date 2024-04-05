"use client";
import Image from "next/image";

import "./index.css";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { AuroraBackground } from "./components/ui/aurora-background";
import dynamic from "next/dynamic";
import { FollowerPointerCard } from "./components/ui/following-pointer";
import { BackgroundGradient } from "./components/ui/background-gradient";
import {
	HoveredLink,
	Menu,
	MenuItem,
	ProductItem,
} from "./components/ui/navbar-menu";
import { cn } from "./utils/cn";
import { Spotlight } from "./components/ui/Spotlight";
// import { IconAppWindow } from "@tabler/icons-react";

import {
	TextRevealCard,
	TextRevealCardDescription,
	TextRevealCardTitle,
} from "./components/ui/text-reveal-card";

const World = dynamic(
	() => import("./components/ui/globe").then((m) => m.World),
	{
		ssr: false,
	}
);

function Navbar({ className }: { className?: string }) {
	const [active, setActive] = useState<string | null>(null);
	return (
		<div
			className={cn(
				"fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 nav",
				className
			)}
		>
			<Menu setActive={setActive}>
				<HoveredLink href="/">Home</HoveredLink>
				<HoveredLink href="/web-dev">Inspect</HoveredLink>
				<HoveredLink href="/web-dev">Log out</HoveredLink>
				<HoveredLink href="/web-dev">Contacts</HoveredLink>
			</Menu>
		</div>
	);
}

export default function Home() {
	const globeConfig = {
		pointSize: 4,
		globeColor: "#062056",
		showAtmosphere: true,
		atmosphereColor: "#FFFFFF",
		atmosphereAltitude: 0.1,
		emissive: "#062056",
		emissiveIntensity: 0.1,
		shininess: 0.9,
		polygonColor: "rgba(255,255,255,0.7)",
		ambientLight: "#38bdf8",
		directionalLeftLight: "#ffffff",
		directionalTopLight: "#ffffff",
		pointLight: "#ffffff",
		arcTime: 1000,
		arcLength: 0.9,
		rings: 1,
		maxRings: 3,
		initialPosition: { lat: 22.3193, lng: 114.1694 },
		autoRotate: true,
		autoRotateSpeed: 0.5,
	};
	const colors = ["#06b6d4", "#3b82f6", "#6366f1"];
	const sampleArcs = [
		{
			order: 1,
			startLat: -19.885592,
			startLng: -43.951191,
			endLat: -22.9068,
			endLng: -43.1729,
			arcAlt: 0.1,
			color: colors[Math.floor(Math.random() * (colors.length - 1))],
		},
		{
			order: 1,
			startLat: 28.6139,
			startLng: 77.209,
			endLat: 3.139,
			endLng: 101.6869,
			arcAlt: 0.2,
			color: colors[Math.floor(Math.random() * (colors.length - 1))],
		},
		{
			order: 1,
			startLat: -19.885592,
			startLng: -43.951191,
			endLat: -1.303396,
			endLng: 36.852443,
			arcAlt: 0.5,
			color: colors[Math.floor(Math.random() * (colors.length - 1))],
		},
		{
			order: 2,
			startLat: 1.3521,
			startLng: 103.8198,
			endLat: 35.6762,
			endLng: 139.6503,
			arcAlt: 0.2,
			color: colors[Math.floor(Math.random() * (colors.length - 1))],
		},
		{
			order: 2,
			startLat: 51.5072,
			startLng: -0.1276,
			endLat: 3.139,
			endLng: 101.6869,
			arcAlt: 0.3,
			color: colors[Math.floor(Math.random() * (colors.length - 1))],
		},
		{
			order: 2,
			startLat: -15.785493,
			startLng: -47.909029,
			endLat: 36.162809,
			endLng: -115.119411,
			arcAlt: 0.3,
			color: colors[Math.floor(Math.random() * (colors.length - 1))],
		},
		{
			order: 3,
			startLat: -33.8688,
			startLng: 151.2093,
			endLat: 22.3193,
			endLng: 114.1694,
			arcAlt: 0.3,
			color: colors[Math.floor(Math.random() * (colors.length - 1))],
		},
		{
			order: 3,
			startLat: 21.3099,
			startLng: -157.8581,
			endLat: 40.7128,
			endLng: -74.006,
			arcAlt: 0.3,
			color: colors[Math.floor(Math.random() * (colors.length - 1))],
		},
		{
			order: 3,
			startLat: -6.2088,
			startLng: 106.8456,
			endLat: 51.5072,
			endLng: -0.1276,
			arcAlt: 0.3,
			color: colors[Math.floor(Math.random() * (colors.length - 1))],
		},
		{
			order: 4,
			startLat: 11.986597,
			startLng: 8.571831,
			endLat: -15.595412,
			endLng: -56.05918,
			arcAlt: 0.5,
			color: colors[Math.floor(Math.random() * (colors.length - 1))],
		},
		{
			order: 4,
			startLat: -34.6037,
			startLng: -58.3816,
			endLat: 22.3193,
			endLng: 114.1694,
			arcAlt: 0.7,
			color: colors[Math.floor(Math.random() * (colors.length - 1))],
		},
		{
			order: 4,
			startLat: 51.5072,
			startLng: -0.1276,
			endLat: 48.8566,
			endLng: -2.3522,
			arcAlt: 0.1,
			color: colors[Math.floor(Math.random() * (colors.length - 1))],
		},
		{
			order: 5,
			startLat: 14.5995,
			startLng: 120.9842,
			endLat: 51.5072,
			endLng: -0.1276,
			arcAlt: 0.3,
			color: colors[Math.floor(Math.random() * (colors.length - 1))],
		},
		{
			order: 5,
			startLat: 1.3521,
			startLng: 103.8198,
			endLat: -33.8688,
			endLng: 151.2093,
			arcAlt: 0.2,
			color: colors[Math.floor(Math.random() * (colors.length - 1))],
		},
		{
			order: 5,
			startLat: 34.0522,
			startLng: -118.2437,
			endLat: 48.8566,
			endLng: -2.3522,
			arcAlt: 0.2,
			color: colors[Math.floor(Math.random() * (colors.length - 1))],
		},
		{
			order: 6,
			startLat: -15.432563,
			startLng: 28.315853,
			endLat: 1.094136,
			endLng: -63.34546,
			arcAlt: 0.7,
			color: colors[Math.floor(Math.random() * (colors.length - 1))],
		},
		{
			order: 6,
			startLat: 37.5665,
			startLng: 126.978,
			endLat: 35.6762,
			endLng: 139.6503,
			arcAlt: 0.1,
			color: colors[Math.floor(Math.random() * (colors.length - 1))],
		},
		{
			order: 6,
			startLat: 22.3193,
			startLng: 114.1694,
			endLat: 51.5072,
			endLng: -0.1276,
			arcAlt: 0.3,
			color: colors[Math.floor(Math.random() * (colors.length - 1))],
		},
		{
			order: 7,
			startLat: -19.885592,
			startLng: -43.951191,
			endLat: -15.595412,
			endLng: -56.05918,
			arcAlt: 0.1,
			color: colors[Math.floor(Math.random() * (colors.length - 1))],
		},
		{
			order: 7,
			startLat: 48.8566,
			startLng: -2.3522,
			endLat: 52.52,
			endLng: 13.405,
			arcAlt: 0.1,
			color: colors[Math.floor(Math.random() * (colors.length - 1))],
		},
		{
			order: 7,
			startLat: 52.52,
			startLng: 13.405,
			endLat: 34.0522,
			endLng: -118.2437,
			arcAlt: 0.2,
			color: colors[Math.floor(Math.random() * (colors.length - 1))],
		},
		{
			order: 8,
			startLat: -8.833221,
			startLng: 13.264837,
			endLat: -33.936138,
			endLng: 18.436529,
			arcAlt: 0.2,
			color: colors[Math.floor(Math.random() * (colors.length - 1))],
		},
		{
			order: 8,
			startLat: 49.2827,
			startLng: -123.1207,
			endLat: 52.3676,
			endLng: 4.9041,
			arcAlt: 0.2,
			color: colors[Math.floor(Math.random() * (colors.length - 1))],
		},
		{
			order: 8,
			startLat: 1.3521,
			startLng: 103.8198,
			endLat: 40.7128,
			endLng: -74.006,
			arcAlt: 0.5,
			color: colors[Math.floor(Math.random() * (colors.length - 1))],
		},
		{
			order: 9,
			startLat: 51.5072,
			startLng: -0.1276,
			endLat: 34.0522,
			endLng: -118.2437,
			arcAlt: 0.2,
			color: colors[Math.floor(Math.random() * (colors.length - 1))],
		},
		{
			order: 9,
			startLat: 22.3193,
			startLng: 114.1694,
			endLat: -22.9068,
			endLng: -43.1729,
			arcAlt: 0.7,
			color: colors[Math.floor(Math.random() * (colors.length - 1))],
		},
		{
			order: 9,
			startLat: 1.3521,
			startLng: 103.8198,
			endLat: -34.6037,
			endLng: -58.3816,
			arcAlt: 0.5,
			color: colors[Math.floor(Math.random() * (colors.length - 1))],
		},
		{
			order: 10,
			startLat: -22.9068,
			startLng: -43.1729,
			endLat: 28.6139,
			endLng: 77.209,
			arcAlt: 0.7,
			color: colors[Math.floor(Math.random() * (colors.length - 1))],
		},
		{
			order: 10,
			startLat: 34.0522,
			startLng: -118.2437,
			endLat: 31.2304,
			endLng: 121.4737,
			arcAlt: 0.3,
			color: colors[Math.floor(Math.random() * (colors.length - 1))],
		},
		{
			order: 10,
			startLat: -6.2088,
			startLng: 106.8456,
			endLat: 52.3676,
			endLng: 4.9041,
			arcAlt: 0.3,
			color: colors[Math.floor(Math.random() * (colors.length - 1))],
		},
		{
			order: 11,
			startLat: 41.9028,
			startLng: 12.4964,
			endLat: 34.0522,
			endLng: -118.2437,
			arcAlt: 0.2,
			color: colors[Math.floor(Math.random() * (colors.length - 1))],
		},
		{
			order: 11,
			startLat: -6.2088,
			startLng: 106.8456,
			endLat: 31.2304,
			endLng: 121.4737,
			arcAlt: 0.2,
			color: colors[Math.floor(Math.random() * (colors.length - 1))],
		},
		{
			order: 11,
			startLat: 22.3193,
			startLng: 114.1694,
			endLat: 1.3521,
			endLng: 103.8198,
			arcAlt: 0.2,
			color: colors[Math.floor(Math.random() * (colors.length - 1))],
		},
		{
			order: 12,
			startLat: 34.0522,
			startLng: -118.2437,
			endLat: 37.7749,
			endLng: -122.4194,
			arcAlt: 0.1,
			color: colors[Math.floor(Math.random() * (colors.length - 1))],
		},
		{
			order: 12,
			startLat: 35.6762,
			startLng: 139.6503,
			endLat: 22.3193,
			endLng: 114.1694,
			arcAlt: 0.2,
			color: colors[Math.floor(Math.random() * (colors.length - 1))],
		},
		{
			order: 12,
			startLat: 22.3193,
			startLng: 114.1694,
			endLat: 34.0522,
			endLng: -118.2437,
			arcAlt: 0.3,
			color: colors[Math.floor(Math.random() * (colors.length - 1))],
		},
		{
			order: 13,
			startLat: 52.52,
			startLng: 13.405,
			endLat: 22.3193,
			endLng: 114.1694,
			arcAlt: 0.3,
			color: colors[Math.floor(Math.random() * (colors.length - 1))],
		},
		{
			order: 13,
			startLat: 11.986597,
			startLng: 8.571831,
			endLat: 35.6762,
			endLng: 139.6503,
			arcAlt: 0.3,
			color: colors[Math.floor(Math.random() * (colors.length - 1))],
		},
		{
			order: 13,
			startLat: -22.9068,
			startLng: -43.1729,
			endLat: -34.6037,
			endLng: -58.3816,
			arcAlt: 0.1,
			color: colors[Math.floor(Math.random() * (colors.length - 1))],
		},
		{
			order: 14,
			startLat: -33.936138,
			startLng: 18.436529,
			endLat: 21.395643,
			endLng: 39.883798,
			arcAlt: 0.3,
			color: colors[Math.floor(Math.random() * (colors.length - 1))],
		},
	];
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    // This code will run when the component mounts
    // You can perform asynchronous operations here, such as fetching data
    const id = localStorage.getItem('userid');
    const fetchData = async () => {
      try{
      const response = await fetch(`http://localhost:4000/user/${id}`);
      const result = await response.json();
      
      setData(result.user);
      console.log(data)}
      catch(error){
        console.log(error);
      }
    };

    fetchData();

    
  }, []);
  if(data)
	return (
		<main>
			<Navbar className="top-2" />

			<div className="box">
				<div className=" ">
					{/* <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="div"
        >
          <h2 className="text-center text-xl md:text-4xl font-bold text-black dark:text-white">
            military 
          </h2>
          <p className="text-center text-base md:text-lg font-normal text-neutral-700 dark:text-neutral-200 max-w-md mt-2 mx-auto">
            This globe is interactive and customizable. Have fun with it, and
            don&apos;t forget to share it. :)
          </p>
        </motion.div> */}
					{/* <div className="absolute w-full bottom-0 inset-x-0 h-40 bg-gradient-to-b pointer-events-none select-none from-transparent dark:to-black to-white z-40" /> */}
					<div className="absolute mx-auto w-full -bottom-20 h-72 md:h-full boxi">
						<World data={sampleArcs} globeConfig={globeConfig} />;
					</div>
				</div>
				<div className="right-pane">
					<div className="private-key container">
						<div className="gradient relative shadow-xl overflow-hidden hover:shadow-2xl group rounded-xl p-5 transition-all duration-500 transform">
							<div className="flex items-center gap-4">
								<img
									src={data.profileImage}
									className="w-32 group-hover:w-36 group-hover:h-36 h-32 object-center object-cover rounded-full transition-all duration-500 delay-500 transform"
								/>
								<div className="">
									<h1 className="text-gray-600 dark:text-gray-200 font-bold">
                  {data.firstName} {" "} {data.lastName}
									</h1>
									<p className="text-gray-400">{data.authorityLevel}</p>
									<a className="text-xs text-gray-500 dark:text-gray-200 group-hover:opacity-100 opacity-0 transform transition-all delay-300 duration-500">
										{data.phoneNumber}
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="private-key">
						<div className="container w-full flex-1 p-8 order-1 shadow-xl rounded-3xl bg-gray-900 text-gray-400 sm:w-96 lg:w-full lg:order-2 lg:mt-0">
							<div className="mb-8 pb-8 flex items-center border-b border-gray-600">
								<img
									src="https://res.cloudinary.com/williamsondesign/abstract-2.jpg"
									alt=""
									className="rounded-3xl w-20 h-20"
								/>
								<div className="ml-5">
									<span className="block text-2xl font-semibold text-white">
										Personal details
									</span>
									{/* <span><span class="font-medium text-xl align-top">$&thinsp;</span><span class="text-3xl font-bold text-white">24 </span></span><span class="font-medium">/ user</span> */}
								</div>
							</div>
							<ul className="mb-10 font-medium text-xl">
								<li className="flex mb-6">
									<img src="https://res.cloudinary.com/williamsondesign/check-white.svg" />
									<span className="ml-3">
										First name: <span className="text-white">{data.firstName}</span>
									</span>
								</li>
								<li className="flex mb-6">
									<img src="https://res.cloudinary.com/williamsondesign/check-white.svg" />
									<span className="ml-3">
										Last name: <span className="text-white">{data.lastName}</span>
									</span>
								</li>
								<li className="flex">
									<img src="https://res.cloudinary.com/williamsondesign/check-white.svg" />
									<span className="ml-3">
										<span className="text-white">Date of birth: </span> {data.dateOfBirth.slice(0,10)}
									</span>
								</li>
							</ul>
							<a
								href="#/"
								className="flex justify-center items-center bg-indigo-600 rounded-xl py-3 px-2 text-center text-white text-2xl"
							>
								More Info
								<img
									src="https://res.cloudinary.com/williamsondesign/arrow-right.svg"
									className="ml-2"
								/>
							</a>
						</div>
					</div>
				</div>
				<div className="left-pane">
					<div className="private-key">
						<BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-black dark:bg-zinc-900">
							<h4 className="p-text">Private key</h4>
							<h6 className="key">{data.privateKey.slice(27,50)}...</h6>
							<br />
							<h4 className="p-text">Public key</h4>
							<h6 className="key">{data.publicKey.slice(27,50)}...</h6>
						</BackgroundGradient>
					</div>
					<div className="private-key">
						<BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-black dark:bg-zinc-900">
							<img
								src="https://eco-cdn.iqpc.com/eco/images/channel_content/images/railgun.webp"
								alt="jordans"
								height="200"
								width="600"
								className="object-contain"
							/>
							<p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
								Air Jordan 4 Retro Reimagined
							</p>

							<p className="text-sm text-white">
								The Railgun is an advanced electromagnetic projectile launcher
								capable of firing projectiles at velocities exceeding Mach 7
							</p>
							<button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
								<span>Inspect</span>
							</button>
						</BackgroundGradient>
						{/* <div class="max-w-sm  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="rounded-t-lg" src="https://eco-cdn.iqpc.com/eco/images/channel_content/images/railgun.webp" alt="" />
    </a>
    <div class="p-5 weapon">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-white-900 dark:text-white">Hyperion Railgun</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">The Hyperion Railgun utilizes electromagnetic propulsion to accelerate projectiles to hypersonic speeds, delivering devastating kinetic energy</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div> */}
					</div>
				</div>
			</div>
			{/* <AuroraBackground>
       <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
          Background lights are cool you know.
        </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
          And this, is chemical burn.
        </div>
        <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
          Debug now
        </button>
      </motion.div>
    </AuroraBackground> */}
		</main>
	);
}
