import Image from 'next/image'
import {EB_Garamond, Inter} from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const ebgaramond = EB_Garamond({subsets: ['latin']})

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between bg-photo-elephant bg-top-elephant sm:bg-top-elephant-sm bg-cover-elephant sm:bg-cover-elephant-md md:bg-cover bg-no-repeat">
            <div className="w-full pt-14 flex flex-col items-center justify-center">
                <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full bg-white flex justify-center items-center bg-opacity-80 border-4 border-white">
                    <Image
                        src="/img/logo_shrug.svg"
                        alt="Shrug Logo"
                        className="w-48 h-48 -mt-5 sm:w-56 sm:-mt-7 md:w-64 md:-mt-9 lg:w-72 lg:-mt-10"
                        width={400}
                        height={400}
                        priority
                    />
                </div>
                <div className="mt-10 sm:mt-40 pt-4 pr-6 pl-6 bg-shrug-bg text-center bg-opacity-80">
                    <span className={`${ebgaramond.className} text-2xl md:text-3xl font-bold`}>
                        A CELEBRATION of Mike Robillard’s Life in Music
                    </span>
                    <div className="grid grid-cols-2 sm:pl-8 sm:pr-8 pt-2 pb-1 mb-4">
                        <div className="text-left">
                            <h3 className={`${inter.className} text-xs sm:text-sm`}>Featuring performances by:</h3>
                            <ul className="text-left text-sm sm:text-base">
                                <li>4 Really Nice Guys</li>
                                <li>Scissors For Erica</li>
                                <li>Spiderback</li>
                            </ul>
                        </div>
                        <div className="text-right">
                            <h3 className={`${inter.className} text-xs sm:text-sm`}>One night only:</h3>
                            <ul className="text-right text-sm sm:text-base">
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
