import { useLoaderData } from "react-router-dom";

export async function loader({ params }) {
    console.log(params);
    const url = `https://fakestoreapi.com/products/${params.productNumber}`;
    console.log(url);
    const issue = await fetch(url)
    .then(response => response.json());
    console.log(product);
    return { product };
}

export default function Product() {
    const { product } = useLoaderData();
    console.log(product);
    return(
        <>
            <h2>Fake Store Product Details</h2>
            <p>{ product.description}</p>
        </>
    )
}