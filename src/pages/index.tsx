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
            <div className="mx-auto max-w-7xl px-0 lg:px-8 text-shrug-light bg-shrug-dark">
                <div className="bg-photo-bench bg-no-repeat bg-top-bench bg-cover-bench sm:bg-top-bench-sm md:bg-top-bench-md md:h-[30rem] h-[23rem] lg:h-[42rem]">
                    <div className="pt-6 pl-8 sm:pt-8 sm:pl-10 lg:pt-20 lg:pl-16">
                        <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 lg:w-72 lg:h-72 rounded-full bg-white flex justify-center items-center border-4 border-shrug-light">
                            <Image
                                src="/img/logo_shrug.svg"
                                alt="Shrug Off Reality Presents"
                                className="w-32 h-32 -mt-5 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-64 lg:-mt-10"
                                width={400}
                                height={400}
                                priority
                            />
                        </div>
                    </div>
                    <h1 className={`${ebgaramond.className} pt-20 ml-24 text-2xl sm:pt-20 sm:ml-36 sm:text-3xl md:pt-20 md:ml-52 md:text-4xl lg:pt-24 lg:ml-80 lg:text-5xl text-center leading-tight`}>
                        A CELEBRATION of<br/>Mike Robillard’s Life in Music
                    </h1>
                </div>
                <div className="bg-shrug-light text-shrug-dark flex flex-col gap-10">
                    <div className="flex flex-col-reverse md:flex-row">
                        <div className={`${ebgaramond.className} text-center pt-8 px-1.5 lg:pt-24 lg:px-20 basis-full lg:basis-1/2`}>
                            <h2 className="text-shrug-red text-3xl lg:text-4xl mb-2">Loplops Gallery Lounge</h2>
                            <div className="text-xl lg:text-2xl mb-5">Thursday, Nov 2nd @ 7pm</div>
                            <div className="text-xl">Tickets $15</div>
                            <div className="text-xl">$25 at the door</div>
                            <div className="mt-5">Tickets available online or at Case’s Music</div>
                        </div>
                        <div className={'basis-full lg:basis-1/2'}>
                            <Image src="/img/photo_mike_1.png" alt="" width={640} height={410} className="w-full" />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row">
                        <div className={'basis-full lg:basis-1/2'}>
                            <Image src="/img/photo_mike_2.png" alt="" width={640} height={410} className="w-full" />
                        </div>
                        <div className={`${ebgaramond.className} text-left pt-8 px-1.5 lg:pt-20 lg:px-20 basis-full lg:basis-1/2`}>
                            <h2 className="text-xl mb-4">Featuring performances by:</h2>
                            <ul>
                                <li className="text-shrug-red text-3xl">
                                    <Link href="https://4reallyniceguys.bandcamp.com/album/shrug-off-reality-extracts-remixed" passHref className="hover:opacity-50">
                                        <Image src="/img/bandcamp-button-circle-aqua-32.png" className="inline-block mr-2" alt="" width={32} height={32} />
                                        <span>4 Really Nice Guys</span>
                                    </Link>
                                </li>
                                <li className="text-shrug-red text-3xl">
                                    <div className="inline-block w-[32px] mr-2"></div>
                                    Scissors for Erica
                                </li>
                                <li className="text-shrug-red text-3xl">
                                    <Link href="https://spiderback.bandcamp.com/album/acrobiotics-2023-remaster" passHref className="hover:opacity-50">
                                        <Image src="/img/bandcamp-button-circle-aqua-32.png" className="inline-block mr-2" alt="" width={32} height={32} />
                                        <span>Spiderback</span>
                                    </Link>
                                </li>
                                <li className="text-2xl mt-3">and friends...</li>
                            </ul>
                            <div className="mt-4">

                                <Image src="/img/bandcamp-button-circle-aqua-32.png" className="inline-block mr-2" alt="" width={24} height={24} />
                                Check out their music on Bandcamp!
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col-reverse md:flex-row">
                        <div className="text-center py-8 basis-full lg:basis-1/2">
                            <div className={`${ebgaramond.className}  px-4`}>
                                <h2 className="text-shrug-red text-3xl lg:text-4xl mb-5">A Bench for Remembering</h2>
                                <div className="text-lg lg:text-xl leading-tight mb-10">In addition to celebrating and remembering Mike,
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
                        <div className={'basis-full lg:basis-1/2'}>
                            <Image src="/img/photo_bench.png" alt="" width={640} height={410} className="w-full" />
                        </div>
                    </div>
                </div>
                <div className={`${ebgaramond.className} text-center px-4 py-10 lg:px-20 lg:py-20 text-md`}>
                    <div>&copy; {(new Date().getFullYear())} Shrug off reality...</div>
                    <div>Bench photo by Cathy Bouchard</div>
                    <div>The <Link href='https://github.com/widgetapps/shrug-tribute' className="underline hover:text-shrug-red">code</Link> is licensed under an MIT License</div>
                </div>
            </div>
        </>
    )
}
