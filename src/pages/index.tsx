import clientPromise from '../lib/mongodb'
import { InferGetServerSidePropsType } from "next";
import Image from 'next/image'
import {EB_Garamond, Inter} from 'next/font/google'
import Subscribe from "../components/subscribe"
import {useState} from "react";
import Link from "next/link";
import Mainnav from "@/components/mainav";
import {CurrencyDollarIcon, TicketIcon} from "@heroicons/react/20/solid";

const inter = Inter({ subsets: ['latin'] })
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

export default function Home({ isConnected }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const [open, setOpen] = useState(false)

    return (
        <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-shrug-light">
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
                    <div className="pt-24 ml-80 text-5xl text-center">
                        A CELEBRATION of<br/>Mike Robillard’s Life in Music
                    </div>
                </div>
                <div className="bg-shrug-light text-shrug-dark flex flex-col gap-10">
                    <div className="columns-2">
                        <div>
                            <div>Thursday, Nov 2nd @ 7pm</div>
                            <div>Loplops Gallery Lounge</div>
                            <div>Tickets $15</div>
                            <div>$25 at the door</div>
                            <div>Tickets available online or at Case’s Music</div>
                        </div>
                        <div>
                            <Image src="/img/photo_mike_1.png" alt="" width={640} height={410} />
                        </div>
                    </div>
                    <div className="columns-2">
                        <div>
                            <Image src="/img/photo_mike_2.png" alt="" width={640} height={410} />
                        </div>
                        <div>
                            <div>Featuring performances by:</div>
                            <ul>
                                <li>4 Really Nice Guys</li>
                                <li>Scissors for Erica</li>
                                <li>Spiderback</li>
                                <li>and friends</li>
                            </ul>
                        </div>
                    </div>
                    <div className="columns-2">
                        <div>
                            <div>A Bench for Remembering</div>
                            <div>Help us raise funds to get Mike a bench in Sault Ste Marie</div>

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
                <div>
                    <div>&copy; 2023 Shrug off reality...</div>
                    <div>Bench photo by Cathy Bouchard</div>
                    <div>The code is licensed under an MIT License</div>
                </div>
            </div>
        </>
    )
}
