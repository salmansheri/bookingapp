import Header from "@/components/header/Header"
import Navbar from "@/components/navbar/Navbar"

export default async function SearchLayout({
    children
}: {
    children: React.ReactNode
}) {
    return(
        <div>
           
            <Header />
            {children}
        </div>
    )
}

