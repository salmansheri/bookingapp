import Header from "@/components/header/Header";
import Mailbox from "@/components/home/Mailbox";

export default async function HotelsLayout({children}: {children: React.ReactNode}) {
    return (
        <div>
            <Header />
            {children}
            <Mailbox />
        </div>
    )
}