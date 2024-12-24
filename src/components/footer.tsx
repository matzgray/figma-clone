import Image  from "next/image";
import footerpic from "../../public/Frame 53.png"

export default function Footer() {
    return (
        <div>
            <footer className="footer bg-base-200 text-base-content p-10 flex flex-wrap justify-evenly bg-gray-100 ">
                <aside>
                 <h1 className="text-4xl font-extrabold py-2 ">SHOP.CO</h1>
                    <p className="py-4">
                        ACME Industries Ltd.
                        <br />
                        Providing reliable tech since 1992
                    </p>
                </aside>
                <div className="flex flex-wrap  justify-evenly  gap-10 sm:gap-20">
                <nav className="list-none text-gray-500 w-[40%] md:w-[16%] mx-auto">
                    <h6 className="  footer-title md:text-lg font-bold text-black py-2">Company</h6>
                   <li className="py-2"><a className="link link-hover">About</a></li>
                   <li className="py-2"><a className="link link-hover">Features</a></li> 
                    <li className="py-2"><a className="link link-hover">Works</a></li>
                    <li className="py-2"><a className="link link-hover">Careers</a></li>
                </nav>
                <nav className="list-none text-gray-500 w-[40%] md:w-[16%] mx-auto">
                    <h6 className="footer-title text-lg font-bold text-black py-2">Help</h6>
                   <li className="py-2"><a className="link link-hover">Customer Support</a></li>
                   <li className="py-2"><a className="link link-hover">Delivery Matirial</a></li> 
                    <li className="py-2"><a className="link link-hover">Terms And Conditions</a></li>
                    <li className="py-2"><a className="link link-hover">Privicy Policy</a></li>
                </nav>

                <nav className="list-none text-gray-500 w-[40%] md:w-[16%] mx-auto">
                    <h6 className="footer-title text-lg font-bold text-black py-2">FAQ</h6>
                   <li className="py-2"><a className="link link-hover">Account</a></li>
                   <li className="py-2"><a className="link link-hover">Manage Deliveries</a></li> 
                    <li className="py-2"><a className="link link-hover">Orders</a></li>
                    <li className="py-2"><a className="link link-hover">Payments</a></li>
                </nav>

                <nav className="list-none text-gray-500 py-2 w-[40%] md:w-[16%] mx-auto">
                    <h6 className="footer-title text-lg font-bold text-black py-2 ">Resources</h6>
                   <li className="py-2"><a className="link link-hover py-2">Free Ebooks</a></li>
                   <li className="py-2"><a className="link link-hover">Development tutorial</a></li>
                   <li className="py-2"><a className="link link-hover">How to-Blog</a></li> 
                  
                    <li><a className="link link-hover">youtube Playlist</a></li>
                </nav>
                </div>
                <hr />
            </footer>
           
           <hr />
            <div className="flex flex-wrap justify-between px-[10%]  bg-gray-100 py-10">
                <h1>Shop.co © 2000-2023, All Rights Reserved</h1>
                <Image src={footerpic}
                alt="footer"></Image>
            </div>
        </div>

    );
}
