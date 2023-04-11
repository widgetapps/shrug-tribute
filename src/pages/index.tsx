import Image from 'next/image'
import {EB_Garamond, Inter} from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const ebgaramond = EB_Garamond({subsets: ['latin']})

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between bg-photo-elephant bg-top-elephant bg-cover bg-no-repeat">
            <div className="w-full pt-14 flex flex-col items-center justify-center">
                <div className="relative w-96 h-96 rounded-full bg-white flex justify-center items-center bg-opacity-80 border-4 border-white">
                    <Image
                        src="/img/logo_shrug.svg"
                        alt="Shrug Logo"
                        className="w-80 -mt-12"
                        width={250}
                        height={250}
                        priority
                    />
                </div>
                <div className="mt-40 p-4 bg-shrug-bg text-center">
                    <span className={`${ebgaramond.className} text-3xl font-bold`}>
                        A CELEBRATION of Mike Robillard’s Life in Music
                    </span>
                    <div className="grid grid-cols-2">
                        <div className="text-left">
                            <h3 className={`${inter.className}`}>Featuring performances by:</h3>
                            <ul className="text-left">
                                <li>4 Really Nice Guys</li>
                                <li>Scissors For Erica</li>
                                <li>Spiderback</li>
                            </ul>
                        </div>
                        <div className="text-right">
                            <h3 className={`${inter.className}`}>One night only:</h3>
                            <ul className="text-right">
                                <li>Thursday, Nov 2, 2023</li>
                                <li>Loplops Gallery Lounge</li>
                                <li>Sault Ste Marie, ON</li>
                            </ul>
                        </div>
                    </div>
                    <button
                        type="button"
                        className="rounded-md bg-shrug-red px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-shrug-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        GET ON THE ADVANCED TICKET LIST
                    </button>
                </div>
            </div>
        </main>
    )
}
