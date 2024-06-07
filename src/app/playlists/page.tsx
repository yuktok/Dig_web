import { SiteHeader } from "@/components/site-header"; 
import { PlaylistSidebar } from "@/app/playlists/playlists-sidebar";
import { PageContent } from "@/app/playlists/Content"; 
import { playlists } from "@/data/playlists"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

export default function Home() {
  return (
    <>
      <SiteHeader />
      <ResizablePanelGroup
        direction="horizontal"
      >
        <ResizablePanel defaultSize={35}>
          <PlaylistSidebar playlists={playlists} className=" mx-4 "/>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={65}>
          <PageContent/>/
        </ResizablePanel>
      </ResizablePanelGroup>
    </>
  );
}