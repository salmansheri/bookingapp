import Button from "@/components/navbar/Button";
import Header from "./components/Header";
import ImagesListItem from "./components/ImagesListItem";


const HotelsPage = () => {
    return(
        <div>
            <div className="container">

           <Header />
            <div className="images grid grid-cols-3 mt-5 gap-10 ">
                <ImagesListItem />
                <ImagesListItem />
                <ImagesListItem />
                <ImagesListItem />
                <ImagesListItem />
                <ImagesListItem />
                <ImagesListItem />
                

            </div>
            <div className="flex flex-row">

            <div className="my-3">
                <h1 className="text-3xl font-semibold mb-3">Stay in the heart of KraKow</h1>
                <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quae officia fugiat praesentium voluptas! Excepturi, nihil reiciendis quisquam suscipit beatae odit consequuntur quos? Natus, quaerat dolores cupiditate tempora vel vero</p>
            </div>
            <div className="basis-1/4 bg-blue-300 bg-opacity-80 p-5 text-black rounded-md flex flex-col gap-2 ">
                <h1 className="text-lg font-medium">Perfect for a 9-night stay!</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ad repellat fugiat explicabo dicta ipsam doloribus iure accusamus quia laborum. Tenetur odit a dignissimos! Beatae nulla vitae molestias sint consequatur?</p>
                <h1 className="text-2xl font-bold">$945 (9 nights)</h1>
                <Button secondary teritiary label="Reserve or Book Now!"  />

            </div>
            </div>
            </div>
        </div>
    )
}

export default HotelsPage; 