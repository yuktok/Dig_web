import { cn } from "@/lib/utils"
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import Link from "next/link"

import * as React from "react"
 
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

const names = [
    "John Doe",
    "Jane Smith",
    "Michael Johnson",
    "Emily Williams",
    "David Brown",
    "Sarah Davis",
    "Christopher Miller",
    "Jessica Wilson",
    "Matthew Moore",
    "Ashley Taylor",
    // 他の人物名を追加してください
   ];

const comments = [
    "Not a bad follow-up and I appreciate the change of direction into more of a fusion-jazz sound. Don't expect to find the smooth neo-soul of their previous singles. The group establishes themselves as a multi-faceted unit with what I imagine is a great live experience.",
    "You could almost call this a Fishmans knockoff. A lot of it has that dreamy dub-funk-rock sound that makes their music so unique. But Fishmans are a nearly flawless band, and there's no reason no one else can't make music in a similar style. In fact, I'd love to hear more people try. These guys here really hit the spot with it.",
    "A quality album from the first song to the last, accompanied by the light, mellow voice of 髙城晶平 [Shohei Takagi]. Similar mood to Toki Asako's Twilight, I would say. 'Fdf' stands out for being unexpectedly fun and catchy, while the ballad 'Angelus Novus' implement layers of texture which slightly remind me of Flipper's Guitar's 'Aquamarine'. 'Fuha' could be a Cornelius song. 'Cupola' and 'Sleepra' are remarkable too, as almost all of the songs in 'e o'.",
    "The fifth album from the Japanese-based band shows a continuation of their unique blends of psychedelic music and various shades of pop music. Take the light indie pop ballad opener “Epigraph” which gets into a really jagged and memorable art and jazz pop track. Everything here is well presented and performed. My biggest complaint is that everything does have a hard time landing with me, making this not all that memorable. But when it is on there are a lot of interesting ideas to keep you engaged.",
    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    // 他のコメントを追加してください
];

const tags = Array.from({ length: 50 }).map(
    (_, i, a) => `v1.2.0-beta.${a.length - i}`
   );
   

export function PageContent() {
    return (
        <div className="mx-4 text-foreground mt-4">
            <h1 className="text-2xl font-semibold">
                アーティスト基本情報
            </h1>
            <div className="grid grid-cols-3 gap-2">
                <Image
                    src="/cero-e-o-cover-art.webp"
                    alt="Example Image"
                    width={350}
                    height={350}
                    className="col-span-1 rounded-lg shadow-md mt-4 "
                />
                <div className="col-span-2 space-y-4 ml-4">
                    <h2 className="text-3xl font-bold underline">Cero</h2>
                    <div>
                        <h3 className="text-xs font-semibold text-muted-foreground">Formed</h3>
                        <p className="text-base">2004, Japan</p>
                    </div>
                    <div>
                        <h3 className="text-xs font-semibold text-muted-foreground">Currently</h3>
                        <p className="text-base">Tokyo, Tokyo, Japan</p>
                    </div>
                    <div>
                        <h3 className="text-xs font-semibold text-muted-foreground">Members</h3>
                        <ul className="list-disc list-inside space-y-1 text-base">
                            <li>髙城晶平 [Shohei Takagi] (vocals, guitar, flute)</li>
                            <li>荒内佑 [Yu Arauchi] (keyboards, sampler, backing vocals)</li>
                            <li>柳智之 [Tomoyuki Yanagi] (drums, 2004-11)</li>
                            <li>橋本翼 [Tsubasa Hashimoto] (guitar, backing vocals, 2006-present)</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xs font-semibold text-muted-foreground">Genres</h3>
                        <p className="text-base">
                            Indie Pop, Art Pop, Neo-Soul, Indietronica, Jazz-Rock, Neo-Psychedelia
                        </p>
                    </div>
                </div>
            </div>
            <div className="my-4">
                <div className="flex flex-wrap gap-4">
                    <Button asChild variant="default" size="lg">
                        <Link href="/">#Cero</Link>
                    </Button>
                    <Button asChild variant="default" size="lg">
                        <Link href="/">#Sisei</Link>
                    </Button>
                    <Button asChild variant="default" size="lg">
                        <Link href="/">#シティポップ</Link>
                    </Button>
                    <Button asChild variant="default" size="lg">
                        <Link href="/">Login</Link>
                    </Button>
                </div>
            </div>
            <ScrollArea className=" rounded-md border">
                <div className="p-4">
                    <h4 className="mb-4 text-xl font-medium leading-none">このプレイリストに関連する投稿</h4>
                    {tags.map((tag, index) => (
                        <>
                            <div key={tag} className="flex items-center space-x-4 my-2">
                                <Skeleton className="h-12 w-12 rounded-full" />
                                <div className="flex-1">
                                    <div className="text-sm font-medium text-primary">{names[index % names.length]}</div>
                                    <div className="text-sm">{comments[index % comments.length]}</div>
                                    <div className="text-sm text-muted-foreground font-light">{tag}</div>
                                </div>
                            </div>
                            <Separator className="my-2" />
                        </>
                    ))}
                </div>
            </ScrollArea>
        </div>
    )
}