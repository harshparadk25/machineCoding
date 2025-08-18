import { Children, createContext, useContext, useEffect, useState } from "react";

const ProductContext = createContext(null);

const ProductProvider = ({children})=>{

    const [ loading, setLoading ] = useState(false);
    const [productList, setProductList] = useState([]);

    async function fetchList(){
       setLoading(true);
       const response = await fetch("https://dummyjson.com/products");
         const data = await response.json();

         if(data && data.products){
            setProductList(data.products);
            setLoading(false);
         }else{
            setLoading(false);
            setProductList([]);
            console.error("Failed to fetch product list");
         }
    }
    useEffect(()=>{
        fetchList();
    },[]);


    return (
    <ProductContext.Provider value={{loading,productList}}>{children}</ProductContext.Provider>

    )
}

export const useProducts =()=> useContext(ProductContext);
export default ProductProvider;