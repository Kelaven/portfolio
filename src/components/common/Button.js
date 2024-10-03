'use client';

function Button({ children }) {
    return (
        <button className="px-4 py-2 border border-white rounded-sm text-white bg-black text-sm font-medium hover:bg-white hover:text-black transition-colors ease-in-out duration-300">{children}</button>
    )
}

export default Button