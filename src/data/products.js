export const menuItems = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "Category 1",
    path: "/category",
  },
  {
    id: 3,
    name: "Best Sellers",
    path: "/best seller",
  },
  {
    id: 4,
    name: "Contact Us",
    path: "/contact",
  },
  {
    id: 5,
    name: "About",
    path: "/about",
  },
];

export const footerData = {
  decorations: {
    left: "/icons/flower-left.png",
    top: "/icons/flower-top.png",
    right: "/icons/flower-right.png",
  },

  brand: {
    logo: "/icons/footer-logo.png",
    tagline: "The Dreamed One",
    socials: [
      { icon: "/icons/facebook.png", link: "#" },
      { icon: "/icons/instagram.png", link: "#" },
      { icon: "/icons/linkedin.png", link: "#" },
      { icon: "/icons/youtube.png", link: "#" },
      { icon: "/icons/x.png", link: "#" },
    ],
  },

  links: [
    {
      title: "Home",
      items: ["Nav 1", "Nav 2", "Nav 3", "Nav 4", "Nav 5", "Nav 6"],
    },
    {
      title: "Other Links",
      items: ["Link 1", "Link 2", "Link 3", "Link 4", "Link 5", "Link 6"],
    },
  ],

  newsletter: {
    title: "Newsletter",
    description: "Get new products promotion in your inbox.",
  },

  payments: [
    "/icons/amex.png",
    "/icons/apple.png",
    "/icons/google.png",
    "/icons/visa1.png",
    "/icons/mastercard.png",
    "/icons/paypal.png",
    "/icons/visa.png",
  ],
};

export const homeData = {
  hero: {
    image: "/images/hero-main.jpg", 
    title: "ETERNAL ELEGANCE",
    subtitle: "Embrace Timeless Elegance — Where Tradition Meets Modern Grace",
    button: "SHOP NOW",
  },

  collections: {
    heading: "Collections",
    button: "View All",
    items: [
      { id: 1, title: "Category 1", image: "/images/cart1.png", height: "h-[710px]" },
      { id: 2, title: "Category 2", image: "/images/cart2.png", height: "h-[710px]" },
      { id: 3, title: "Category 3", image: "/images/cart3.png", height: "h-[316px]" },
      { id: 4, title: "Category 4", image: "/images/cart4.png", height: "h-[312px]" },
    ],
  },

  marquee: {
    text: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    ],
  },

  bestSellers: {
    heading: "Best Sellers",
    button: "View All",
    items: [
      {
        id: 1,
        image: "/images/p1.png",
        title: "Lorem ipsum vestibulum adipiscing",
        price: "₹ 18,000",
        oldPrice: "₹ 22,500",
        discount: "10% off",
        rating: "4.7",
        tag: "Bundle",
      },
      {
        id: 2,
        image: "/images/p2.png",
        title: "Lorem ipsum vestibulum adipiscing",
        price: "₹ 32,500",
        oldPrice: "₹ 47,500",
        discount: "10% off",
        rating: "4.7",
        tag: "Bundle",
      },
      {
        id: 3,
        image: "/images/p3.png",
        title: "Lorem ipsum vestibulum adipiscing",
        price: "₹ 54,800",
        oldPrice: "₹ 68,500",
        discount: "10% off",
        rating: "4.7",
        tag: "Bundle",
      },
    ],
  },

  whySection: {
    heading: "Why we do it better ?",
    items: [
      {
        id: 1,
        title: "Lorem ipsum nulla",
        desc: "Lorem ipsum amet eget nullam ornare amet lobortis ut platea consequat sit sed massa egestas tortor lectus.",
      },
      {
        id: 2,
        title: "Lorem ipsum nulla",
        desc: "Lorem ipsum amet eget nullam ornare amet lobortis ut platea consequat sit sed massa egestas tortor lectus.",
      },
      {
        id: 3,
        title: "Lorem ipsum nulla",
        desc: "Lorem ipsum amet eget nullam ornare amet lobortis ut platea consequat sit sed massa egestas tortor lectus.",
      },
      {
        id: 4,
        title: "Lorem ipsum nulla",
        desc: "Lorem ipsum amet eget nullam ornare amet lobortis ut platea consequat sit sed massa egestas tortor lectus.",
      },
    ],
  },

  banner: {
    image: "/images/image3.jpg",
    title: "Own the Moment",
    button: "SHOP NOW",
  },

  categories: [
    {
      id: 1,
      title: "CATEGORY",
      desc: "Lorem ipsum dolor sit amet consectetur. Dolor et volutpat in non. Luctus sit libero urna viverra sed non dui elementum Dolor et volutpat in non.",
      image: "/images/image1.png",
      reverse: false,
    },
    {
      id: 2,
      title: "CATEGORY",
      desc: "Lorem ipsum dolor sit amet consectetur. Dolor et volutpat in non. Luctus sit libero urna viverra sed non dui elementum Dolor et volutpat in non.",
      image: "/images/image2.png",
      reverse: true,
    }
  ],

  reviews: {
    heading: "Customer Reviews",
    subtext: "Pellentesque ante neque, faucibus et delito an pretium vestibulum del varius quam.",
    button: "View All",
    items: [
      {
        id: 1,
        image: "/images/review1.jpg",
        text: "Pellentesque ante neque faucibus et delito pretium del varius quam Temporibus autem quibusdam.",
        name: "voluptates repudiandae",
      },
      {
        id: 2,
        image: "/images/review2.jpg",
        text: "Pellentesque ante neque faucibus et delito pretium del varius quam Temporibus autem quibusdam.",
        name: "voluptates repudiandae",
      },
      {
        id: 3,
        image: "/images/review3.jpg",
        text: "Pellentesque ante neque faucibus et delito pretium del varius quam Temporibus autem quibusdam.",
        name: "voluptates repudiandae",
      },
    ],
  },

  features: [
    {
      id: 1,
      image: "/icons/frame.png",
      title: "Free Shipping",
      desc: "Lorem ipsum sed in egestas blandit diam molestie volutpat egestas nisl facilisi.",
    },
    {
      id: 2,
      image: "/icons/layer.png",
      title: "Easy Free Returns",
      desc: "Lorem ipsum sed in egestas blandit diam molestie volutpat egestas nisl facilisi.",
    },
    {
      id: 3,
      image: "/icons/vector.png",
      title: "Genuine Products",
      desc: "Lorem ipsum sed in egestas blandit diam molestie volutpat egestas nisl facilisi.",
    },
  ],

  instagram: {
    heading: "Follow Us On Instagram",
    subtext: "Lorem ipsum fames nunc curabitur massa vitae.",
    images: [
        "/images/insta1.jpg", 
        "/images/insta2.jpg", 
        "/images/insta3.jpg", 
        "/images/insta4.jpg", 
        "/images/insta5.jpg"
    ],
 button: {
    text: "FOLLOW US",
    link: "https://instagram.com/yourprofile"
  }
}
};