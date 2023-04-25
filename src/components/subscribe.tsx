import {Fragment, useState} from "react";
import {Dialog, Transition} from "@headlessui/react";
import {XMarkIcon} from "@heroicons/react/24/outline";
import {EnvelopeIcon} from "@heroicons/react/20/solid";

// @ts-ignore
export default function Subscribe({open, setOpen}) {

    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [shirt, setShirt] = useState(false);
    const [subscribe, setSubscribe] = useState(false);
    const [error, setError] = useState('');
    const [emailError, setEmailError] = useState('');

    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [cta, setCta] = useState('ADD ME TO THE LIST');

    const handleSubscribe = async (e: any) => {
        e.preventDefault();

        if (email) {
            try {
                setSubmitting(true);
                setCta('SUBSCRIBING...');

                let response = await fetch('/api/subscribe', {
                    method: 'POST',
                    body: JSON.stringify({
                        fullname,
                        email,
                        shirt,
                        subscribe
                    }),
                    headers: {
                        Accept: 'application/json, text/plain, */*',
                        'Content-Type': 'application/json'
                    }
                });

                response = await response.json();

                setSubmitting(false);
                setSubmitted(true);
                setCta('SUBSCRIBED')

                //setOpen(false);

            } catch (e: any) {
                setError('There was a server issue, please try again')
            }
        } else {
            return setEmailError('Email address is required');
        }
    }

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                            <Transition.Child
                                as={Fragment}
                                enter="transform transition ease-in-out duration-500 sm:duration-700"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transform transition ease-in-out duration-500 sm:duration-700"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                                    <div className={`flex h-full flex-col overflow-y-scroll bg-white shadow-xl`}>
                                        <div className="bg-shrug-red px-4 py-6 sm:px-6">
                                            <div className="flex items-start justify-between">
                                                <Dialog.Title className="text-base font-semibold leading-6 text-white">
                                                    Advanced Ticket List
                                                </Dialog.Title>
                                                <div className="ml-3 flex h-7 items-center">
                                                    <button
                                                        type="button"
                                                        className="rounded-md text-white hover:text-gray-500 focus:outline-none focus:ring-1 focus:shrug-red-400 focus:ring-offset-1"
                                                        onClick={() => setOpen(false)}
                                                    >
                                                        <span className="sr-only">Close panel</span>
                                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`${!submitted ? 'hidden' : ''} relative mt-6 flex-1 px-4 sm:px-6 text-sm space-y-4`}>
                                            <p>You&apos;ve been added to the advanced ticket list. We anticipate advanced ticket
                                            sales will begin in September 2023.</p>
                                            <p>We&apos;re looking forward to seeing you!</p>

                                            <div className="pt-4 justify-center items-center text-center">
                                                <button
                                                    type="button"
                                                    onClick={() => setOpen(false)}
                                                    className="rounded-md bg-shrug-red px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-shrug-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                                >
                                                    CLOSE
                                                </button>
                                            </div>
                                        </div>
                                        <div className={`${submitted ? 'hidden' : ''} relative mt-6 flex-1 px-4 sm:px-6 text-sm space-y-4`}>
                                            <p>Get early access to ticket sales. Enter your email address for the opportunity
                                                to purchase tickets before they go on sale to the general public.</p>
                                            <p>You&apos;ll have access to event merchandise including t-shirts and more.</p>
                                            <p>Be sure to follow us on Facebook or Instagram.</p>

                                            <form onSubmit={handleSubscribe}>
                                                <div className="pb-8 space-y-4">
                                                    <div>
                                                        <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                                            Name
                                                        </label>
                                                        <div className="mt-2">
                                                            <input
                                                                type="text"
                                                                name="name"
                                                                id="name"
                                                                disabled={submitted}
                                                                className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                                placeholder="Name"
                                                                onChange={(e) => setFullname(e.target.value)}
                                                                value={fullname}
                                                            />
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                                            Email (required)
                                                        </label>
                                                        <div className="relative mt-2 rounded-md shadow-sm">
                                                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                                                <EnvelopeIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                                            </div>
                                                            <input
                                                                type="email"
                                                                name="email"
                                                                id="email"
                                                                disabled={submitted}
                                                                className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                                placeholder="you@example.com"
                                                                onChange={(e) => setEmail(e.target.value)}
                                                                value={email}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>

                                                <fieldset>
                                                    <legend className="sr-only">Opt-ins</legend>
                                                    <div className="space-y-5">
                                                        <div className="relative flex items-start">
                                                            <div className="flex h-6 items-center">
                                                                <input
                                                                    id="shirt"
                                                                    aria-describedby="shirt-description"
                                                                    name="shirt"
                                                                    type="checkbox"
                                                                    disabled={submitted}
                                                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                                                    onChange={(e) => setShirt(e.target.checked)}
                                                                />
                                                            </div>
                                                            <div className="ml-3 text-sm leading-6">
                                                                <label htmlFor="shirt" className="font-medium text-gray-900">
                                                                    I&apos;m interested in buying a t-shirt
                                                                </label>
                                                                <p id="shirt-description" className="text-gray-500">
                                                                    Final price is TBD, but should be $20-$30 each
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="relative flex items-start">
                                                            <div className="flex h-6 items-center">
                                                                <input
                                                                    id="subscribe"
                                                                    aria-describedby="subscribe-description"
                                                                    name="subscribe"
                                                                    type="checkbox"
                                                                    disabled={submitted}
                                                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                                                    onChange={(e) => setSubscribe(e.target.checked)}
                                                                />
                                                            </div>
                                                            <div className="ml-3 text-sm leading-6">
                                                                <label htmlFor="subscribe" className="font-medium text-gray-900">
                                                                    Keep me updated on this event
                                                                </label>
                                                                <p id="subscribe-description" className="text-gray-500">
                                                                    You will be emailed updates for only this event
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </fieldset>

                                                <div className="pt-4 justify-center items-center text-center">
                                                    <button
                                                        type="submit"
                                                        disabled={submitted}
                                                        className={`inline-flex rounded-md bg-shrug-red px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-shrug-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
                                                    >
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`${submitting ? 'animate-spin' : 'hidden' } w-5 h-5`}>
                                                            <path fillRule="evenodd" d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z" clipRule="evenodd" />
                                                        </svg>

                                                        {cta}
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </div>

            </Dialog>
        </Transition.Root>
    )
}