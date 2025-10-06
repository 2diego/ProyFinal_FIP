import carritoIcon from "../../assets/carritoIcon.svg";

export default function CartButton() {
    return (
        <button className="cart-button" aria-label="Shopping cart">
            <a href="/carrito">
                <img src={carritoIcon} alt="carrito" />
                <span className="cart-count"></span>
            </a>
        </button>
    )
}