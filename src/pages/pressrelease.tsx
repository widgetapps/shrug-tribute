import {EB_Garamond} from 'next/font/google'
import Link from "next/link";

const ebgaramond = EB_Garamond({subsets: ['latin']})

export default function Pressrelease() {

    return (
        <>
            <div className={`${ebgaramond.className} mx-auto max-w-7xl px-0 lg:px-8 text-shrug-light bg-shrug-dark`}>
                <div className="bg-shrug-light text-shrug-dark p-24">
                    <h3 className="text-2xl">PRESS RELEASE</h3>
                    <h4 className="text-xl">FOR IMMEDIATE RELEASE</h4>
                    <div>October 10, 2023</div>
                    <h1 className="text-4xl mt-10">SPECIAL CONCERT ANNOUNCEMENT</h1>
                    <h2 className="text-2xl mb-6">A CELEBRATION OF MIKE ROBILLARD&apos;s LIFE IN MUSIC</h2>
                    <div className="my-4">
                        <span className="font-bold">Sault Ste. Marie, ON</span>: On November 2nd, current and former members of the local music
                        community will be holding a special event to celebrate the life and music of one of their own who
                        succumbed to cancer in 2022. Mike Robillard was a bass player, writer, artist, and podcaster,
                        whose passing left behind a legacy of passion for the arts. <span className="italic">His former bandmates are
                        determined that his creativity not be forgotten.</span>
                    </div>
                    <div className="my-4">
                        Mike was dedicated to promoting original music in Sault Ste. Marie, where he created &quot;Shrug
                        off reality...&quot;, an event series to host and showcase local talent. Shrug also produced a local
                        compilation (&quot;Extracts&quot; &apos;92) but is best known for the long-lasting friendships which developed
                        there. The spirit of Shrug continued to inspired Mike years later as he explored the Toronto
                        music scene and hosted regular poetry nights at the Savage Garden.
                    </div>
                    <div className="my-4">
                        Having lived in Toronto, Victoria and Prague, Mike returned to Sault Ste. Marie where he
                        became a well-known cab driver and continued playing the bass, often on stage at Loplops
                        where this special concert will occur on November 2nd, a date chosen to celebrate what would have
                        been Mike&apos;s 53rd Birthday.
                    </div>
                    <div className="my-4">
                        Three bands will be reuniting and performing music to celebrate his life. &quot;4 Really Nice Guys&quot;,
                        Mike&apos;s first band formed in the early 90&apos;s during high school and featured fun danceable beats
                        as well as a horn section. &quot;Scissors for Erica&quot; was a Toronto based band made up of former
                        Saultites, and &quot;Spiderback&quot; a band from the early 2000s formed after Mike moved home.
                    </div>
                    <div className="my-4">In addition to celebrating and remembering Mike, the event also hopes to raise money for the
                        installation of a commemorative park bench in his name, where future artists might sit, have
                        coffee, relax and plan their artistic takeover of the world! Any additional funds raised will be
                        donated to the Canadian Cancer Society. See details on the GoFundMe page.
                    </div>
                    <div className="mb-10 font-semibold">
                        Please note that this is a one-off special event and will not be repeated. Some of the
                        musicians involved in this event are still actively performing and writing music, while
                        others have not performed for many years. Whether you were a friend of Mike, a fan of
                        his music, or whether you&apos;re simply curious about the music scene from 30 years ago,
                        we hope you will consider attending the show and following Shrug off reality... on
                        Facebook where more details and special content will be released as the event
                        approaches.
                    </div>
                    <div className="my-4">
                        <div className="font-bold">Date of Event:</div>
                        <div>Thursday Nov 2nd,2023 Doors @ 7pm</div>
                    </div>
                    <div className="my-4">
                        <div className="font-bold">Location:</div>
                        <div>&quot;<Link href="https://www.google.com/maps/place/Loplops/@46.5083156,-84.3288818,15z/data=!4m6!3m5!1s0x4d36384bb362d7a5:0x512bce89c2e74c12!8m2!3d46.5083156!4d-84.3288818!16s%2Fg%2F1tdltxnh?entry=ttu" passHref className="text-shrug-red hover:opacity-50">Loplops Gallery~Lounge</Link>&quot; 651 Queen Street East</div>
                    </div>
                    <div className="my-4">
                        <div className="font-bold">Event:</div>
                        <div>Shrug off reality... 2023 &quot;A Celebration of Mike Robillard&apos;s Life in Music&quot;</div>
                    </div>
                    <div className="my-4">
                        <div className="font-bold">Contact:</div>
                        <div>Darryl Patterson,</div>
                        <div>Shrug Off Reality …</div>
                        <div><Link href="tel:+14167866116" passHref className="text-shrug-red hover:opacity-50">(416) 786-6116</Link></div>
                        <div><Link href="mailto:events@shrugoffreality.com" passHref className="text-shrug-red hover:opacity-50">events@shrugoffreality.com</Link></div>
                    </div>
                    <hr />
                    <div className="my-4">
                        <div className="font-bold">Tickets</div>
                        <div>$15 or $25 @ the door</div>
                        <div>Available online, and @ Case&apos;s Music</div>
                        <div><Link href="https://www.eventbrite.ca/e/a-celebration-of-mike-robillards-life-in-music-tickets-722773855057" passHref className="text-shrug-red hover:opacity-50">https://www.eventbrite.ca/e/a-celebration-of-mike-robillards-life-in-music-tickets-722773855057</Link></div>
                    </div>
                    <div className="my-4">
                        <div className="font-bold">Facebook</div>
                        <div><Link href="https://www.facebook.com/shrugoffreality" passHref className="text-shrug-red hover:opacity-50">https://www.facebook.com/shrugoffreality</Link></div>
                    </div>
                    <div className="my-4">
                        <div className="font-bold">Instagram</div>
                        <div><Link href="https://www.instagram.com/shrugoffreality/" passHref className="text-shrug-red hover:opacity-50">https://www.instagram.com/shrugoffreality/</Link></div>
                    </div>
                    <div className="my-4">
                        <div className="font-bold">GoFundMe &quot;A Bench for Remembering&quot;</div>
                        <div><Link href="https://www.gofundme.com/f/mike-robillard" passHref className="text-shrug-red hover:opacity-50">https://www.gofundme.com/f/mike-robillard</Link></div>
                    </div>
                    <div className="my-4">
                        <div className="font-bold">Music:</div>
                        <div><Link href="https://4reallyniceguys.bandcamp.com/" passHref className="text-shrug-red hover:opacity-50">https://4reallyniceguys.bandcamp.com/</Link></div>
                        <div><Link href="https://spiderback.bandcamp.com/" passHref className="text-shrug-red hover:opacity-50">https://spiderback.bandcamp.com/</Link></div>
                        <div><Link href="https://scissorsforerica.bandcamp.com/" passHref className="text-shrug-red hover:opacity-50">https://scissorsforerica.bandcamp.com/</Link></div>
                    </div>
                    <div className="my-4">
                        <div className="font-bold">Taxi Passenger Review</div>
                        <div><Link href="https://theborderline.ca/the-taxi-passenger-revue" passHref className="text-shrug-red hover:opacity-50">https://theborderline.ca/the-taxi-passenger-revue</Link></div>
                    </div>
                </div>
                <div className={`${ebgaramond.className} text-center px-4 py-10 lg:px-20 lg:py-20 text-md`}>
                    <div>&copy; {(new Date().getFullYear())} Shrug off reality...</div>
                    <div><Link href="https://shrugoffreality.com/" passHref className="underline hover:opacity-50">shrugoffreality.com</Link></div>
                    <div>Bench photo by Cathy Bouchard</div>
                    <div>The <Link href='https://github.com/widgetapps/shrug-tribute' className="underline hover:text-shrug-red">code</Link> is licensed under an MIT License</div>
                </div>
            </div>
        </>
    )
}
