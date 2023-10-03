import clientPromise from '../lib/mongodb'
import { InferGetServerSidePropsType } from "next";
import Image from 'next/image'
import {EB_Garamond, Inter} from 'next/font/google'
import Subscribe from "../components/subscribe"
import {useState} from "react";
import Link from "next/link";
import Mainnav from "@/components/mainav";

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
                <div className="bg-photo-bench bg-no-repeat b bg-top-bench h-[42rem]">
                    <div className="pt-20 pl-16">
                        <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-72 lg:h-72 rounded-full bg-white flex justify-center items-center border-4 border-shrug-light">
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
                <div className="bg-shrug-light text-shrug-dark">
                    <div className="columns-2">
                        <div>
                            Copy
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
                            Copy
                        </div>
                    </div>
                    <div className="columns-2">
                        <div>
                            Copy
                        </div>
                        <div>
                            <Image src="/img/photo_bench.png" alt="" width={640} height={410} />
                        </div>
                    </div>
                </div>
                <div>
                    Footer
                </div>
            </div>
        </>
    )
}
