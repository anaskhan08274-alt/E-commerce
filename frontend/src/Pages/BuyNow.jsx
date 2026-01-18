import {QRCodeCanvas} from "qrcode.react";
import { useNavigate, useLocation } from "react-router-dom";

export function BuyNow() {
    const location = useLocation();
    const navigate = useNavigate();

    const product = location.state?.product;

    if(!product){
        return ( 
        <div>
             <h2>Invaild Purchase</h2>
             <h2>No Product selected from products route</h2>
            </div>
        )
    }
    const upiID = "9116244250@ptaxis"
    const upiAmount = product.price;
    const upiPayeeName = "Mohd Anas"

    const upiURL = `upi://pay?pa=${upiID}&pn=${encodeURIComponent(upiPayeeName)}&am=${upiAmount}&cu=INR`;

    return (
        <>
        <div>
            <h3>{product.title}</h3>
            <p><strong>Price:</strong> {product.price}</p>
            <div>
                <div>
                    <QRCodeCanvas value={upiURL} size={200}/>
                </div>
            </div>
        </div>        
        </>
    )

}
    