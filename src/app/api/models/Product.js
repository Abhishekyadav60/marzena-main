// import mongoose from "mongoose";

// // 1. Header & Footer Settings
// const GlobalSchema = new mongoose.Schema({
//   menuItems: [{ name: String, path: String }],
//   footer: {
//     decorations: { 
//       left: { type: String, default: "/icons/flower-left.png" }, 
//       top: { type: String, default: "/icons/flower-top.png" }, 
//       right: { type: String, default: "/icons/flower-right.png" } 
//     },
//     brand: { 
//       logo: { type: String, default: "/icons/footer-logo.png" }, 
//       tagline: String, 
//       socials: [{ icon: String, link: String }] 
//     },
//     links: [{
//       title: String,
//       items: [String]
//     }],
//     newsletter: { title: String, description: String },
//     payments: [String]
//   }
// });

// // 2. Products
// const ProductSchema = new mongoose.Schema({
//   title: String,
//   image: String, // Path: "/images/p1.png"
//   price: String,
//   oldPrice: String,
//   discount: String,
//   rating: String,
//   tag: String, 
//   isBestSeller: { type: Boolean, default: false }
// });

// // 3. Home Page Sections
// const HomeContentSchema = new mongoose.Schema({
//   hero: { image: String, title: String, subtitle: String, button: String },
//   whySection: { heading: String, items: [{ title: String, desc: String }] },
//   banner: { image: String, title: String, button: String },
//   marquee: [String],
//   categories: [{ title: String, desc: String, image: String, reverse: Boolean }],
//   features: [{ image: String, title: String, desc: String }]
// });

// export const Global = mongoose.models.Global || mongoose.model("Global", GlobalSchema);
// export const Product = mongoose.models.Product || mongoose.model("Product", ProductSchema);
// export const HomeContent = mongoose.models.HomeContent || mongoose.model("HomeContent", HomeContentSchema);


import mongoose from "mongoose";

const GlobalSchema = new mongoose.Schema({
  menuItems: [{ 
    name: String, 
    path: String 
  }],
  // Images aur Icons ke paths
  headerSettings: {
    logo: { type: String, default: "/icons/brand-logo.png" },
    flowerTop: { type: String, default: "/icons/flower-top.png" },
    flowerRight: { type: String, default: "/icons/flower-right.png" },
    userIcon: { type: String, default: "/icons/user.png" },
    wishlistIcon: { type: String, default: "/icons/hart.png" },
    cartIcon: { type: String, default: "/icons/cart.png" },
  }
});

export const Global = mongoose.models.Global || mongoose.model("Global", GlobalSchema);