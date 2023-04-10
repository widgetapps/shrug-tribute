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
                <div className="mt-40 p-4 bg-shruggb text-center">
                    <span className={`${ebgaramond.className} text-3xl font-bold`}>
                        A CELEBRATION of Mike Robillard’s Life in Music
                    </span>
                    <div className="grid grid-cols-2">
                        <div>
                            <h3 className={`${inter.className}`}>Featuring performances by:</h3>
                            <ul>
                                <li>4 Really Nice Guys</li>
                                <li>Scissors For Erica</li>
                                <li>Spiderback</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className={`${inter.className}`}>One night only:</h3>
                            <ul>
                                <li>Thursday, Nov 2, 2023</li>
                                <li>Loplops Gallery Lounge</li>
                                <li>Sault Ste Marie, ON</li>
                            </ul>
                        </div>
                    </div>
                    BUTTON
                </div>
            </div>
        </main>
    )
}
