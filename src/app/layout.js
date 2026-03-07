
// "use client"
// import Header from "@/app/components/Header";
// import Footer from "@/app/components/Footer";
// import { SessionProvider } from "next-auth/react";
// import { Toaster } from "react-hot-toast";
// import "./globals.css";
// export default function RootLayout({ children }) {
//   return (
//     <html>
//       <body>
      
//         <Header/>
//           <SessionProvider>
//            <Toaster
//           position="top-right"
//           toastOptions={{
//             duration: 3000,
//             style: {
//               background: "#2F2F2F",
//               color: "#fff",
//               borderRadius: "12px",
//               padding: "14px 18px",
//             },
//           }}
//         />
//           <main>{children}</main>
//           </SessionProvider>
//           <Footer/>
        
        
//       </body>
//     </html>
//   );
// }

"use client"
import Providers from "./provider";
import "./globals.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
