import clientPromise from '../lib/mongodb'
import { InferGetServerSidePropsType } from "next";
import Image from 'next/image'
import {EB_Garamond, Inter} from 'next/font/google'
import Subscribe from "../components/subscribe"
import {useState} from "react";
import Link from "next/link";

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
        <div>
            <div className="absolute top-0 left-0 m-5">
                <div className="space-x-3 justify-center items-center text-center">
                    <Link href="https://www.instagram.com/shrugoffreality/" passHref>
                        <button
                            type="button"
                            className="bg-shrug-red mb-2 inline-block rounded-full p-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                fill="currentColor"
                                viewBox="0 0 24 24">
                                <path
                                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                        </button>
                    </Link>
                    <Link href="https://www.facebook.com/shrugoffreality" passHref>
                        <button
                            type="button"
                            className="bg-shrug-red mb-2 inline-block rounded-full p-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                fill="currentColor"
                                viewBox="0 0 24 24">
                                <path
                                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                            </svg>
                        </button>
                    </Link>
                </div>
            </div>
            <Subscribe
            open={open}
            setOpen={setOpen} />
            <main className="flex lg:min-h-screen flex-col items-center justify-between bg-photo-elephant bg-top-elephant sm:bg-top-elephant-sm bg-cover-elephant sm:bg-cover-elephant-md md:bg-cover bg-no-repeat">
                <div className="w-full pt-14 flex flex-col items-center justify-center">
                    <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full bg-white flex justify-center items-center bg-opacity-80 border-4 border-white">
                        <Image
                            src="/img/logo_shrug.svg"
                            alt="Shrug Off Reality Presents"
                            className="w-48 h-48 -mt-5 sm:w-56 sm:-mt-7 md:w-64 md:-mt-9 lg:w-72 lg:-mt-10"
                            width={400}
                            height={400}
                            priority
                        />
                    </div>
                    <div className="w-full sm:w-auto mt-10 sm:mt-40 pt-4 pr-6 pb-6 pl-6 bg-shrug-bg text-center bg-opacity-80 sm:rounded-lg sm:shadow-md">
                        <span className={`${ebgaramond.className} text-2xl md:text-3xl font-bold`}>
                            A CELEBRATION of<br className="sm:hidden" /> Mike Robillard’s Life in Music
                        </span>
                        <div className="grid grid-cols-2 sm:pl-8 sm:pr-8 pt-2 pb-1 mb-4">
                            <div className="text-left">
                                <h3 className={`${inter.className} text-xs sm:text-sm`}>Performances by:</h3>
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
                        Ticket Sales begin Oct 3rd.
                    </div>
                </div>
            </main>

            <div className="mt-4 pb-4">
                <footer className='space-y-2'>
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 text-center text-sm">
                        &copy; {(new Date().getFullYear())} Shrug off reality...
                    </div>
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 text-center text-xs">
                        Elephant photo by EH
                    </div>
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 text-center text-xs">
                        <Link href='https://github.com/widgetapps/shrug-tribute'>The code</Link> is licensed under an MIT License
                    </div>
                </footer>
            </div>
        </div>
    )
}
