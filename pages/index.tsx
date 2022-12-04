import Head from 'next/head'
import Image from 'next/image'

import { Card } from '@components/Card'

export default function Home() {
  return (
    <div className="container mx-auto">
      <Head>
        <title>lsroa.xyz</title>
        <meta name="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto">
        <h1 className="text-5xl font-bold">
				One man army
        </h1>

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
