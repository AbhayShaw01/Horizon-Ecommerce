import {prisma} from "@/lib/db/prisma";
import {redirect} from "next/navigation";
import FormSubmitButton from "@/components/FormSubmitButton";
import {getServerSession} from "next-auth";
import {authOptions} from "@/lib/authOptions";


export const metadata = {
    title: "Add Product - Horizon",
}


async function addProduct(formData: FormData) {
    "use server";

    const session = await getServerSession(authOptions);
    if (!session) redirect("/api/auth/signin?callackUrl=/add-product");
    const name = formData.get("name")?.toString();
    const description = formData.get("description")?.toString();
    const imageUrl = formData.get("imageUrl")?.toString();
    const price = Number(formData.get("price") || 0);

    if (!name || !description || !imageUrl || !price) {
        throw Error("missing required fields");
    }


    await prisma.product.create({
        data: {name, description, imageUrl, price},
    });

    redirect("/");
}

export default async function AddProductPage() {
    const session = await getServerSession(authOptions);
    if (!session) redirect("/api/auth/signin?callackUrl=/add-product");
    return (
        <div>
            <h1 className="text-lg mb-3 font-bold">Add Product</h1>
            <form action={addProduct}>
                <input required name="name" placeholder="Name" className="mb-3  w-full input input-bordered"
                       type="text"/>
                <textarea required name="description" placeholder="Description"
                          className="textarea textarea-bordered mb-3 w-full"></textarea>
                <input required name="imageUrl" placeholder="Image URL" type="url"
                       className="mb-3  w-full input input-bordered"/>
                <input required name="price" placeholder="Price" className="mb-3  w-full input input-bordered"
                       type="number"/>
                <FormSubmitButton className="btn-block">Add Product</FormSubmitButton>
            </form>
        </div>
    );
};
