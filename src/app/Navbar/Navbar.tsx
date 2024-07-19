import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.svg"
import {redirect} from "next/navigation";
import {getCart} from "@/lib/db/cart";
import ShoppingCartButton from "@/app/Navbar/ShoppingCartButton";
import UserMenuButton from "@/app/Navbar/UserMenuButton";
import {getServerSession} from "next-auth";
import {authOptions} from "@/lib/authOptions";


async function searchProducts(formData: FormData) {
    "use server";
    const searchQuery = await formData.get("searchQuery")?.toString();
    if (searchQuery) {
        redirect("/search?query=" + searchQuery);
    }
}

export default async function Navbar() {
    const cart = await getCart();
    const session = await getServerSession(authOptions);
    return (
        <div className="bg-base-100">
            <div className="navbar max-w-7xl m-auto flex-col sm:flex-row gap-2">

                <div className="flex-1">
                    <Link href="/" className="btn btn-ghost text-xl  normal-case">
                        <Image src={logo} height={40} width={40} alt="Horizon -logo"/></Link>
                    Horizon
                </div>
                <div className="flex-none gap-2">
                    <form action={searchProducts}>
                        <div className="form-control">
                            <input name="searchQuery" placeholder="Search"
                                   className="input input-bordered w-full min-w-[100px]"/>
                        </div>
                    </form>
                    <ShoppingCartButton cart={cart}/>
                    <UserMenuButton session={session}/>

                </div>
            </div>
        </div>
    )
}