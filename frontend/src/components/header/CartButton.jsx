export default function CartButton() {
    return (
        <button className="cart-button" aria-label="Shopping cart">
            <a href="/carrito">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none"
                    xmlns="http://www.w3.org/2000/svg" className="cart-icon">
                    <path
                        d="M10.62 10H4.62M11.1 10L15.42 25.68C15.7806 26.9165 16.5295 28.0041 17.556 28.7821C18.5825 29.5601 19.8321 29.9871 21.12 30H38.6V10H11.1ZM24.62 37C24.62 38.6569 23.2768 40 21.62 40C19.9631 40 18.62 38.6569 18.62 37C18.62 35.3431 19.9631 34 21.62 34C23.2768 34 24.62 35.3431 24.62 37ZM38.62 37C38.62 38.6569 37.2768 40 35.62 40C33.9631 40 32.62 38.6569 32.62 37C32.62 35.3431 33.9631 34 35.62 34C37.2768 34 38.62 35.3431 38.62 37Z"
                        stroke="#EE5F0D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    />
                </svg>
                <span className="cart-count"></span>
            </a>
        </button>
    )
}