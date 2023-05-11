import Featured from "@/components/featured/Featured";
import FeaturedProperties from "@/components/featured/FeaturedProperties";
import Header from "@/components/header/Header";
import Mailbox from "@/components/home/Mailbox";
import Property from "@/components/home/Property";


export default function Home() {
  return (
    <main>
     
      <Header isHome />
      <div className="container  flex flex-col  gap-8 ">
        <Featured />
        <Property />
        <FeaturedProperties />
        <Mailbox />
      </div>
    </main>
  );
}
