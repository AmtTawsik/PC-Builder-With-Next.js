// pages/products/[productId].js
import { useRouter } from "next/router";

const ProductDetails = ({ product }) => {
    const router = useRouter();
    const { productId } = router.query;

    const cardStyle = {
        border: '',
        padding: '',
        borderRadius: '10px',
        // Add more styles as needed
    };

    return (
        <div>
            <h2 className="text-center text-2xl font-bold">Product Details:</h2>
            <hr  className="my-2"/>
            <div className="flex justify-center items-center">
                <div>
                    {product ? (
                        <div className="grid grid-cols-12 items-center bg-slate-100 gap-5 p-5" style={cardStyle}>
                            <div className="md:flex items-center md:col-span-6 col-span-12 h-full">
                                <img
                                    src={product.Image}
                                    alt={product.ProductName}
                                    className="w-full"
                                />
                            </div>
                            <div className="md:col-span-6 col-span-12">
                                <h2 className="text-lg font-bold">{product.ProductName}</h2>
                                <p>Category: <span className="text-yellow-500">{product.Category}</span></p>
                                <p>
                                    Status:{" "}
                                    <span className="text-green-600">{product.Status === "In Stock" ? "In Stock" : "Out of stock"}</span>
                                </p>
                                <p>Price: <span className="font-bold">${product.Price}</span></p>
                                <h3>Description:</h3>
                                <p className="text-sm text-gray-600">{product.Description}</p>
                                <hr className="my-2"/>
                                <h3 className="text-lg font-bold">Key Features:</h3>
                                <div>
                                    {Object.entries(product.KeyFeatures).map(([key, value]) => (
                                        <p key={key}>
                                            <strong>{key}: </strong>
                                            {value}
                                        </p>
                                    ))}
                                </div>
                                <p>Individual Rating: {product.IndividualRating} out of 5 stars</p>
                                <p>Average Rating: {product.AverageRating} out of 5 stars</p>
                                <hr className="my-2"/>
                                <h3 className="font-bold">Reviews:</h3>
                                {product?.Reviews?.map((review, index) => (
                                    <div key={index}>
                                        <p>{review}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;

// This function is necessary to pre-render the dynamic product pages
export async function getServerSideProps({ params }) {
    const { productId } = params;

    // Fetch the detailed product data using the productId here
    // For demonstration purposes, we'll return dummy data based on productId
    const response = await fetch(`https://buils-amt-next.vercel.app/api/pc?_id=${productId}`);
    const data = await response.json();
    const product = data.data[0];

    return {
        props: {
            product,
        },
    };
}