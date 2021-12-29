import React from "react";
import AdminProductItemComponent from './AdminProductItemComponent';

export default function AdminProductListComponent(){
    return(
        <div className="admin-product-list">
            <h1>Product Manager</h1>
            <section className="list-actions">
                <input type="text" name="search-bar" placeholder="" />
                <button>Search</button>
                <button>Add</button>
            </section>
            <section className="list-container">
                <AdminProductItemComponent />
                <AdminProductItemComponent />
                <AdminProductItemComponent />
            </section>
        </div>
    );
}