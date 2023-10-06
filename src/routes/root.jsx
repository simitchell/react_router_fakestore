import { useLoaderData, Link, Outlet } from "react-router-dom"

export async function loader() {
    const url = 'https://fakestoreapi.com/products';
    const prodList = await fetch(url)
        .then(response => response.json());
    console.log("Product List: ");
    return { prodList };
}

export async function getProduct(productNumber) {
    const url = `https://fakestoreapi.com/products/${productNumber}`;
    console.log(url);
    const product = await fetch(url)
        .then(response => response.json());
    return product;
}

export default function Root() {
    const { prodList } = useLoaderData();
    return (
        <>
            <h1>Welcome to Fake Store</h1>
            <Outlet />
            <ul>
                {prodList.map((product) => {
                    return (
                        <li key={product.id}>
                            <Link to={`/products/${product.id}`}>
                                {product.title}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}