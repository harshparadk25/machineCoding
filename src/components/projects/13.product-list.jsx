import { useProducts } from "../context/product-context";
import { Card,CardTitle } from "@/components/ui/card";

function ProductList() {

    const { loading,productList} = useProducts();
    console.log("ProductList", loading, productList);
    return ( 
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 p-4">
            <h2 className="text-xl font-semibold mb-4">Product List</h2>
           <div className="mt-6">
        {loading ? (
          <p className="text-gray-700">Loading...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {productList.map((p) => (
              <Card className={"p-4 rounded-2xl shadow-md"}>
                <img
                  src={p.thumbnail}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <CardTitle className="text-lg font-semibold mb-1">
                  {p.title}
                </CardTitle>
              </Card>
            ))}
          </div>
        )}
      </div>
        </div>
     );
}

export default ProductList;