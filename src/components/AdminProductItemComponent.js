import React from "react";

export default function AdminProductItemComponent(){
    return(
        <article className="product-item">
            <div className="product-img">
                <img src="https://via.placeholder.com/150" alt="" />
            </div>
            <div className="product-info">
                <h2>Product name</h2>
                <h4>Brand Name</h4>
                <h3>Description</h3>
                <p>Product's details and description</p>
                <h2>Price: $59.99</h2>
                <label>Quantity</label>
                <input type="number" name="quantity" defaultValue={0} />
            </div>
            <div className="product-actions">
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </article>
    );
}