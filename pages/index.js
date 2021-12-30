//imports
import Head                  from 'next/head'
import Navbar                from '../components/navbar'
import useVisitor            from '../hooks/useVisitor'
import {useState, useEffect} from 'react'
import Loading               from'../components/loading'
import Stepper               from'../components/stepper'


export default function Home({actions}) {
	//useStates
	const [lang, loading, allowed] = useVisitor()

	//main render
	return (
		<div>
			<Head>
				<title>Home - Diamonds Legends</title>
				<meta name="description" content="free mobile legends diamonds for all mobile legends germs and fans, diamonds gratis" />
				<meta name="keywords"    content="mobile legends, diamonds, mobile legends diamonds, moontoon, mobile legends gratis, mobile legends diamonds gratis"/>
				<meta name="viewport"    content="width=device-width initial-scale=1.0 user-scalable=no"/>
				<link rel="icon" href="https://i.imgur.com/cNNizpw.png" />
				
			</Head>
			
			<main className='w-full min-h-screen pb-10 bg-[url(/images/mobile-legends-diamonds-gratis.jpg)] bg-cover bg-center'>

				{/* N A V B A R */}
				<Navbar active={1}/>

				{/* L O G O */}
				<img src="https://i.imgur.com/cNNizpw.png" alt="Free Diamonds for all mobile legends gamers" className='cssanimation pushReleaseFrom [animation-delay:0.2s] mx-auto md:w-96 mb-10 sm:w-72 w-72'/>

				{/* V I D E O */}
				<main className="my-6 relative py-3 px-3 cssanimation blurInTop [animation-delay:0.8s] w-5/6 md:w-2/6 bg-black border-[1px] bg-opacity-50 backdrop-blur-sm shadow-lg border-white mx-auto rounded-lg text-white text-center">
					<iframe width="100%" height="315" src="https://www.youtube-nocookie.com/embed/Dann6oFOTMc?autoplay=1" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
				</main>

				{/* S T E P P E R */}
				<main className="relative py-3 px-3 cssanimation blurInTop [animation-delay:0.8s] w-5/6 md:w-2/6 bg-black border-[1px] bg-opacity-50 backdrop-blur-sm shadow-lg border-white mx-auto rounded-lg text-white text-center">
					{loading ? <Loading /> : 
					!allowed ? <h1>GO TO : www.diamonds-legends.com</h1> :
					<Stepper actions={actions} lang={lang}/>}
				</main>
			</main>
		</div>
	)
}
