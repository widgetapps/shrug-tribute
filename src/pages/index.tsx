import clientPromise from '../lib/mongodb'
import Image from 'next/image'
import {EB_Garamond} from 'next/font/google'
import Link from "next/link";
import {CurrencyDollarIcon} from "@heroicons/react/20/solid";

const ebgaramond = EB_Garamond({subsets: ['latin']})

export async function getServerSideProps() {
    try {
        await clientPromise

        return {
            props: { isConnected: true},
        }
    } catch (e) {
        console.error(e)
        return {
            props: { isConnected: false},
        }
    }
}

export default function Home() {

    return (
        <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-shrug-light bg-shrug-dark">
                <div className="bg-photo-bench bg-no-repeat bg-top-bench h-[42rem]">
                    <div className="pt-20 pl-16">
                        <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-72 lg:h-72 rounded-full bg-white flex justify-center items-center border-4 border-shrug-light">
                            <Image
                                src="/img/logo_shrug.svg"
                                alt="Shrug Off Reality Presents"
                                className="w-48 h-48 -mt-5 sm:w-56 sm:-mt-7 md:w-64 md:-mt-9 lg:w-64 lg:-mt-10"
                                width={400}
                                height={400}
                                priority
                            />
                        </div>
                    </div>
                    <h1 className={`${ebgaramond.className} pt-24 ml-80 text-5xl text-center leading-tight`}>
                        A CELEBRATION of<br/>Mike Robillard’s Life in Music
                    </h1>
                </div>
                <div className="bg-shrug-light text-shrug-dark flex flex-col gap-10">
                    <div className="columns-2">
                        <div className={`${ebgaramond.className} text-center pt-24 pl-20 pr-20`}>
                            <h2 className="text-shrug-red text-4xl mb-2">Loplops Gallery Lounge</h2>
                            <div className="text-2xl mb-5">Thursday, Nov 2nd @ 7pm</div>
                            <div className="text-xl">Tickets $15</div>
                            <div className="text-xl">$25 at the door</div>
                            <div className="mt-5">Tickets available online or at Case’s Music</div>
                        </div>
                        <div>
                            <Image src="/img/photo_mike_1.png" alt="" width={640} height={410} />
                        </div>
                    </div>
                    <div className="columns-2">
                        <div>
                            <Image src="/img/photo_mike_2.png" alt="" width={640} height={410} />
                        </div>
                        <div className={`${ebgaramond.className} text-center pt-24 pl-20 pr-20`}>
                            <h2 className="text-xl mb-4">Featuring performances by:</h2>
                            <ul>
                                <li className="text-shrug-red text-3xl">4 Really Nice Guys</li>
                                <li className="text-shrug-red text-3xl">Scissors for Erica</li>
                                <li className="text-shrug-red text-3xl">Spiderback</li>
                                <li className="text-2xl mt-3">and friends...</li>
                            </ul>
                        </div>
                    </div>
                    <div className="columns-2">
                        <div className="text-center pt-16">
                            <div className={`${ebgaramond.className}  pl-20 pr-20`}>
                                <h2 className="text-shrug-red text-4xl mb-5">A Bench for Remembering</h2>
                                <div className="text-xl leading-tight mb-10">In addition to celebrating and remembering Mike,
                                    the event also hopes to raise money for a park bench in his name, where future
                                    artists might sit, have coffee, and plan their artistic takeover of the world! </div>
                            </div>

                            <Link href="https://www.gofundme.com/f/mike-robillard?utm_campaign=p_lico+share-sheet&utm_medium=copy_link" passHref>
                                <button
                                    type="button"
                                    className="relative inline-flex items-center gap-x-1.5 rounded-md bg-shrug-red px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white hover:text-shrug-red hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    <CurrencyDollarIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
                                    Donate at GoFundMe
                                </button>
                            </Link>
                        </div>
                        <div>
                            <Image src="/img/photo_bench.png" alt="" width={640} height={410} />
                        </div>
                    </div>
                </div>
                <div className={`${ebgaramond.className} text-center p-20 text-md`}>
                    <div>&copy; 2023 Shrug off reality...</div>
                    <div>Bench photo by Cathy Bouchard</div>
                    <div>The <Link href='https://github.com/widgetapps/shrug-tribute' className="underline hover:text-shrug-red">code</Link> is licensed under an MIT License</div>
                </div>
            </div>
        </>
    )
}
