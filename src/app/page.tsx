import { SiteHeader } from "@/components/site-header"; 
import { Icons

 } from "@/components/icons";
export default function Home() {
  return (
    <>
      <SiteHeader />
    <main className="bg-gray-100 text-white">
      <div className="container mx-auto py-8">
        <div className="space-y-8">
          <div className="rounded-lg bg-gray-800 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img
                  alt="Album Cover"
                  className="rounded-md"
                  height={48}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "48/48",
                    objectFit: "cover",
                  }}
                  width={48}
                />
                <div>
                  <h3 className="text-lg font-semibold">Playlist Title</h3>
                  <p className="text-sm text-gray-400">Playlist Creator</p>
                </div>
              </div>
              <div className="flex items-center mt-4">
                <iframe
                  style={{ borderRadius: "12px" }}
                  src="https://open.spotify.com/embed/playlist/37i9dQZF1DXafb0IuPwJyF?utm_source=generator"
                  width="200%"
                  height="152"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                ></iframe>
              </div>
              <div className="flex items-center gap-2">
                <Icons.play className="h-5 w-5" />
                <span className="text-sm">1.2M</span>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Icons.star className="h-5 w-5 text-yellow-500" />
                <span className="text-sm">4.8</span>
              </div>
              <div className="flex items-center gap-2">
                <Icons.trendingUp className="h-5 w-5" />
                <span className="text-sm">Top 10%</span>
              </div>
              <div className="flex items-center gap-2">
                <Icons.globe className="h-5 w-5" />
                <span className="text-sm">Worldwide</span>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-gray-800 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img
                  alt="Album Cover"
                  className="rounded-md"
                  height={48}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "48/48",
                    objectFit: "cover",
                  }}
                  width={48}
                />
                <div>
                  <h3 className="text-lg font-semibold">Playlist Title</h3>
                  <p className="text-sm text-gray-400">Playlist Creator</p>
                </div>
              </div>
              <div className="flex items-center mt-4">
              <iframe style={{ borderRadius: "12px" }}
                      src="https://open.spotify.com/embed/playlist/37i9dQZF1DX0ciAAyw9ZkU?utm_source=generator"
                      width="200%"
                      height="152"
                      allow="autoplay;
                      clipboard-write;
                      encrypted-media;
                      fullscreen;
                      picture-in-picture"
                      loading="lazy">
                </iframe>
              </div>
              <div className="flex items-center gap-2">
                <Icons.play className="h-5 w-5" />
                <span className="text-sm">800K</span>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Icons.star className="h-5 w-5 text-yellow-500" />
                <span className="text-sm">4.5</span>
              </div>
              <div className="flex items-center gap-2">
                <Icons.trendingUp className="h-5 w-5" />
                <span className="text-sm">Top 20%</span>
              </div>
              <div className="flex items-center gap-2">
                <Icons.globe className="h-5 w-5" />
                <span className="text-sm">Worldwide</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    </>
  );
}
