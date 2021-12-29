import React from "react";

export default function CouponsComponent(){

    return(
        <div className="admin-coupons">
            <h1>Coupon Manager</h1>
            <section className="coupons-actions">
                <button>New</button>
                <button>Edit</button>
                <button>Delete</button>
            </section>
            <section className="coupons-container">
                <table border="1" className="coupons-table">
                    <thead className="coupons-table-head">
                        <tr>
                            <th>Coupon Code</th>
                            <th>Discount Percentage</th>
                            <th>Category</th>
                            <th>Expiry Date</th>
                        </tr>
                    </thead>
                    <tbody className="coupons-table-body">
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    );

}