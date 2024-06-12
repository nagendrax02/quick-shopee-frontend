import React from "react";
import "./DesktopProductsSection.css"

interface Product{
    id: number,
    name: string,
    image: string
}

interface Products {
    products: Product[]
}


function DesktopProductsSection({products}: Products): JSX.Element{

return (
    <div className="desktop-products-section">
        {products.map((product: Product)=>{
            return <div className="desktop-product-section">
                <img src ={product.image}/>
                <span>{product.name}</span>
            </div>
        })}
    </div>
)
}

export default DesktopProductsSection