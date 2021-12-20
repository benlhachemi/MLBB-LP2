//imports
import Head                  from 'next/head'
import Navbar                from '../components/navbar'
import useVisitor            from '../hooks/useVisitor'
import {useState, useEffect} from 'react'
import Loading               from'../components/loading'
import Stepper               from'../components/stepper'

export default function Home() {
	//useStates
	const [lang, loading] = useVisitor()

	//main render
	return (
		<div>
			<Head>
				<title>Home - Diamonds Legends</title>
				<meta name="description" content="free mobile legends diamonds for all mobile legends germs and fans, diamonds gratis" />
				<meta name="keywords"    content="mobile legends, diamonds, mobile legends diamonds, moontoon, mobile legends gratis, mobile legends diamonds gratis"/>
				<meta name="viewport"    content="width=device-width initial-scale=1.0 user-scalable=no"/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			
			<main className='w-full min-h-screen pb-10 bg-[url(/images/mobile-legends-diamonds-gratis.jpg)] bg-cover bg-center'>

				{/* N A V B A R */}
				<Navbar active={1}/>

				{/* L O G O */}
				<img src="/images/mobile-legends-diamonds-legends-logo.png" alt="Free Diamonds for all mobile legends gamers" className='cssanimation pushReleaseFrom [animation-delay:0.2s] mx-auto md:w-96 mb-10 sm:w-72 w-72'/>

				{/* S T E P P E R */}
				<main className="relative py-3 px-3 cssanimation blurInTop [animation-delay:0.8s] w-5/6 md:w-2/6 bg-black border-[1px] bg-opacity-50 backdrop-blur-sm shadow-lg border-white mx-auto rounded-lg text-white text-center">
					{loading ? <Loading /> : <Stepper lang={lang}/>}
				</main>
			</main>
		</div>
	)
}
