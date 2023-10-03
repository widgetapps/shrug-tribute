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
                Some content
            </div>
        </>
    )
}
