
import { Navbar } from "@/components/globle/Navbar"
import Footer from "../globle/Footer"

export const SiteLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  )
}
