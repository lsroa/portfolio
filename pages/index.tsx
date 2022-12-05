import Head from 'next/head'
import Image from 'next/image'
import { Canvas, ThreeEvent } from '@react-three/fiber'
import {OrbitControls} from '@react-three/drei'
import { Suspense, UIEventHandler,useCallback, useEffect, useState } from 'react'

import { Card } from '@components/Card'
import { Model } from '@components/Model'
import { Vector3,Euler, Color } from 'three'

export default function Home() {
	const origin = new Vector3(0,0,0)
	const [scrollY,setScrollY] = useState(0)

	  const onScroll = useCallback( () => {
      const { pageYOffset, scrollY } = window;

      console.log("yOffset", pageYOffset, "scrollY", scrollY);
      setScrollY(window.scrollY * -0.001);
  }, []);

  useEffect(() => {
    //add eventlistener to window
    window.addEventListener("scroll", onScroll);
    // remove event on unmount to prevent a memory leak with the cleanup
    return () => {
       window.removeEventListener("scroll", onScroll);
    }
  }, [onScroll]);

  return (
    <div className="container mx-auto h-[2000px]">
      <Head>
        <title>lsroa.xyz</title>
        <meta name="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto">
        <h1 className="text-5xl font-bold">
				One man army
        </h1>

		<div className='container h-[800px]' >
				<Canvas>
				<OrbitControls/>
				<directionalLight intensity={0.4} position={new Vector3(8,30,-100)} lookAt={() => origin} />
				<directionalLight intensity={0.2} position={new Vector3(8,20,-100)} lookAt={() => origin} />
				<directionalLight intensity={0.8} color={new Color("00E1FF")} position={new Vector3(0,0,120)} lookAt={() => origin} />
				<ambientLight intensity={0.2}/>
					<Suspense fallback={<p>Loading</p>}>
						<Model scale={0.3} rotation={new Euler(0,105+ scrollY)} />
					</Suspense> 
				</Canvas> 
		</div>
        <p className="my-10">
          Get started by editing{' '}
          <code className="">pages/index.tsx</code>
        </p>

        <div className="container grid grid-cols-2 gap-8">
          <Card title='Documentation &rarr;' body='Find in-depth information about Next.js features and API.'/>
          <Card title='Learn &rarr;' body='Learn about Next.js in an interactive course with quizzes!'/>
          <Card title='Examples &rarr;' body='Discover and deploy boilerplate example Next.js projects.' />
        </div>
      </main>

      <footer className="container mt-4 text-slate-100">
          with love from Zaragoza
      </footer>
    </div>
  )
}
