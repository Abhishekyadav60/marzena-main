// "use client";
// import { createContext, useContext, useEffect, useState } from "react";

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);
//   const [mounted, setMounted] = useState(false);

//   // LOAD CART
//   useEffect(() => {
//     setMounted(true);
//     const storedCart = localStorage.getItem("cart");
//     if (storedCart) {
//       setCart(JSON.parse(storedCart));
//     }
//   }, []);

//   // SAVE CART
//   useEffect(() => {
//     if (mounted) {
//       localStorage.setItem("cart", JSON.stringify(cart));
//     }
//   }, [cart, mounted]);

//   // ADD TO CART (with quantity logic)
//   const addToCart = (product) => {
//     setCart((prev) => {
//       const existing = prev.find((item) => item.id === product.id);

//       if (existing) {
//         return prev.map((item) =>
//           item.id === product.id
//             ? { ...item, quantity: (item.quantity || 1) + 1 }
//             : item
//         );
//       }

//       return [...prev, { ...product, quantity: 1 }];
//     });
//   };

  
//   const removeFromCart = (id) => {
//     setCart((prev) => prev.filter((item) => item.id !== id));
//   };

 
//   const updateQuantity = (id, type) => {
//     setCart((prev) =>
//       prev.map((item) => {
//         if (item.id === id) {
//           const qty = type === "inc"
//             ? item.quantity + 1
//             : item.quantity - 1;

//           return { ...item, quantity: qty < 1 ? 1 : qty };
//         }
//         return item;
//       })
//     );
//   };

//   return (
//     <CartContext.Provider
//       value={{ cart, addToCart, removeFromCart, updateQuantity }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);