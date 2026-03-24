export const menuItems = [
  {
    id: 1,
    name: "Home",
    path: "/dashboard",
  },
  {
    id: 2,
    name: "Collection 1",
    path: "/dashboard/collection",
  },
  {
    id: 3,
    name: "Best Sellers",
    path: "/dashboard/best seller",
  },
  {
    id: 4,
    name: "Contact Us",
    path: "/dashboard/contact",
  },
  {
    id: 5,
    name: "About",
    path: "/dashboard/about",
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
    "/icons/shopify.png",
    "/icons/mastercard.png",
    "/icons/paypal.png",
    "/icons/visa.png",
  ],
};

// Hero Data
export const heroData = {
  image: "/images/hero-main.jpg",
  title: "ETERNAL ELEGANCE",
  subtitle: "Embrace Timeless Elegance — Where Tradition Meets Modern Grace",
  button: "Shop Now"
};

// HomePage data

export const homeData = {
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

export const aboutData = {
  hero: {
    title: "About Us",
    image: "/images/hero-main.jpg",
  },
  main: {
    title: "ABOUT MARZENA",
    description:
      "Lorem ipsum lacus nisl dapibus tellus nisi amet sit tortor id neque massa facilisis habitasse erat rhoncus aliquet lobortis eu pharetra nibh rhoncus faucibus aliquet aliquam tincidunt ac tristique et neque eu proin at augue facilisi etiam viverra sem quam lacus sed non eu tortor ipsum sed massa tincidunt non.",
  },
  mission: {
    title: "OUR MISSION",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sodales eu tellus leo sed in urna magna velit. Pharetra sed augue faucibus tempor tempor. In aliquet imperdiet nam velit ornare urna viverra eget.",
    image: "/images/mission.png",
  },
  vision: {
    title: "OUR VISION",
    description:
      "Lorem ipsum dolor sit amet consectetur. Lobortis dignissim viverra faucibus mauris. Massa turpis odio id amet cursus. Nunc consequat in amet suspendisse lectus faucibus tristique scelerisque. Posuere eu sed cras proin.",
    image: "/images/vision.png",
  },

   stats: {
    heading:
      "Lorem ipsum dolor sit amet consectetur. Vivamus euismod quam vulputate.",

    description:
      "Lorem ipsum dolor sit amet consectetur. Scelerisque consectetur porttitor erat aliquet sagittis massa ornare vitae facilisi. Mattis feugiat cras proin fames malesuada sollicitudin arcu viverra quam.",

    items: [
      {
        number: "180+",
        label: "Lorem ipsum",
      },
      {
        number: "40+",
        label: "Lorem ipsum",
      },
      {
        number: "100%",
        label: "Lorem ipsum",
      },
      {
        number: "500+",
        label: "Lorem ipsum",
      },
    ],
  },

  difference: {
    heading: "WHAT MAKES US DIFFERENT?",
    image: "/images/model-image.png",

    features: [
      {
        icon: "/icons/vector1.png",
        title: "Lorem ipsum",
        description:
          "Lorem ipsum dolor sit amet consectetur. In nunc condimentum porta tortor elementum a massa malesuada.",
      },
      {
        icon: "/icons/frame1.png",
        title: "Lorem ipsum",
        description:
          "Lorem ipsum dolor sit amet consectetur. In nunc condimentum porta tortor elementum a massa malesuada.",
      },
      {
        icon: "/icons/line.png",
        title: "Lorem ipsum",
        description:
          "Lorem ipsum dolor sit amet consectetur. In nunc condimentum porta tortor elementum a massa malesuada.",
      },
      {
        icon: "/icons/group.png",
        title: "Lorem ipsum",
        description:
          "Lorem ipsum dolor sit amet consectetur. In nunc condimentum porta tortor elementum a massa malesuada.",
      },
    ],
  },
};

// Contact Data
export const contactData = {
  banner: {
    image: "/images/contact-banner.jpg",
    title: "Contact Us"
  },

  heading: "GET IN TOUCH",

  form: {
    title: "Send us an email",
    subtitle: "Ask us anything! We're here to help.",
    fields: [
      { label: "Name", type: "text", name: "name" },
      { label: "Phone number", type: "text", name: "phone" },
      { label: "Email *", type: "email", name: "email" },
      { label: "Comment *", type: "textarea", name: "comment" }
    ],
    button: "Submit Contact"
  },

  help: {
    title: "Live Help",
    description:
    "Lorem ipsum vitae orci eget suscipit posuere metus mauris pulvinar urna enim mauris luctus amet commodo placerat etiam quis metus fermentum nullam dictumst mattis dignissim habitant semper laoreet suspendisse arcu posuere vulputate rutrum id quis maecenas ornare mauris euismod dui amet in ornare commodo nulla risus mauris.",
    button: "Message us",
    contacts: [
      { icon: "/icons/message-dots.png", text: "TEXT: 091-123-ELLA" },
      { icon: "/icons/mage_email-fill.png", text: "TEXT: 091-123-ELLA" }
    ],
    note:
      "Lorem ipsum urna semper egestas ultricies at lacus purus."
  }
};

// Collections page
export const products = [
  {
    id: 1,
    name: "Love Buzz",
    image: "/images/p4.png",
    price: 79500,
    oldPrice: 88000,
    discount: 10,
    rating: 4.7
  },
  {
    id: 2,
    name: "Blush Dynasty",
    image: "/images/p5.png",
    price: 79500,
    oldPrice: 93500,
    discount: 15,
    rating: 4.7
  },
  {
    id: 3,
    name: "Dessert Dawn Saree",
    image: "/images/p6.png",
    price: 46750,
    oldPrice: 55500,
    discount: 15,
    rating: 4.7
  },
  {
    id: 4,
    name: "Champagne Drape",
    image: "/images/p7.png",
    price: 145000,
    oldPrice: 184000,
    discount: 15,
    rating: 4.7
  },
  {
    id: 5,
    name: "Midnight Marina saree set",
    image: "/images/p8.png",
    price: 156500,
    oldPrice: 180000,
    discount: 10,
    rating: 4.7
  },
  {
    id: 6,
    name: "Meena Harris - Bloush Pink Embelished",
    image: "/images/p9.png",
    price: 165500,
    oldPrice: 262000,
    discount: 15,
    rating: 4.7
  },
  {
    id: 7,
    name: "Dessert Dawn Saree",
    image: "/images/p10.png",
    price: 46750,
    oldPrice: 55500,
    discount: 15,
    rating: 4.7
  },
  {
    id: 8,
    name: "Champagne Drape",
    image: "/images/p11.png",
    price: 145000,
    oldPrice: 184000,
    discount: 15,
    rating: 4.7
  },
  {
    id: 9,
    name: "Royal Aqua saree set",
    image: "/images/p12.png",
    price: 99500,
    oldPrice: 99000,
    discount: 5,
    rating: 4.7
  },
  {
    id: 10,
    name: "Seven Seas Saree",
    image: "/images/p13.png",
    price: 149500,
    oldPrice: 150500,
    discount: 15,
    rating: 4.7
  },
  {
    id: 11,
    name: "Jasmine Jubilee",
    image: "/images/p14.png",
    price: 112500,
    oldPrice: 55500,
    discount: 15,
    rating: 4.7
  },
  {
    id: 12,
    name: "Taupe it up saree set",
    image: "/images/p15.png",
    price: 118500,
    oldPrice: 184000,
    discount: 15,
    rating: 4.7
  },
  {
    id: 13,
    name: "Rose Quartz Romance-pre-stitched saree",
    image: "/images/p16.png",
    price: 181500,
    oldPrice: 185000,
    discount: 10,
    rating: 4.7
  },
  {
    id: 14,
    name: "Ivory & Red Saree Set",
    image: "/images/p17.png",
    price: 244500,
    oldPrice: 255500,
    discount: 15,
    rating: 4.7
  },
  {
    id: 15,
    name: "Sobhita in Blue & Gold Saree Set",
    image: "/images/p18.png",
    price: 200500,
    oldPrice: 300500,
    discount: 15,
    rating: 4.7
  },
  {
    id: 16,
    name: "Jessica Wang in Olive Shaded ",
    image: "/images/p19.png",
    price: 122500,
    oldPrice: 140000,
    discount: 15,
    rating: 4.7
  },
]

 export const features = [
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
  ]


  // Product Data

export const productData = {
  title: "Sky Blue To Peach Satin Organza Lehenga With Blouse And Dupatta",
  price: 186500,
  oldPrice: 199000,
  discount: "10% Off",
  rating: 4.4,
  taxe: "incl. of all taxes.",
  reviews: 1180,
  stockLeft: 13,
  deliveryWeeks: "6-7 Weeks",

  images: [
    "/images/skyblue-lehenga-1.jpg",
    "/images/skyblue-lehenga-2.jpg",
    "/images/skyblue-lehenga-3.jpg",
    "/images/skyblue-lehenga-4.jpg",
    "/images/skyblue-lehenga-5.jpg"
  ],

  sizes: [
  { label: "XS", stock: 5 },
  { label: "S", stock: 3 },
  { label: "M", stock: 2 },
  { label: "L", stock: 6 },
  { label: "XL", stock: 1 },
  { label: "2XL", stock: 4 },
  { label: "3XL", stock: 2}
],

info: [
  {
    id: 1,
    text: "100% hand-embroidered",
  },
  {
    id: 2,
    text: "COD Available",
  },
  {
    id: 3,
    text: "Shipping Worldwide",
  },
],

deliveryData: {
  deliveryDays: 3,
  cutoffHours: 24,

  features: [
    { id: 1, label: "7 Days Exchange" },
    { id: 2, label: "1 Year Warranty" },
    { id: 3, label: "Free Shipping" },
    { id: 4, label: "Pro Active Customer Support" },
  ],
},

 descriptionData: {
  title: "Description",
  content: `Turn heads with this Sky Blue to Peach Satin Organza Lehenga, paired with an intricately designed blouse and dupatta. The soft ombré blend from serene 
  sky blue to warm peach creates a refreshing yet elegant appeal, while the satin organza fabric offers a luxurious sheen and graceful drape.

  Beautifully detailed with delicate embroidery and hand-painted artistry, the ensemble shimmers with sequins and beadwork, adding just the right amount of sparkle. Perfectly balanced between traditional charm and contemporary sophistication, this lehenga is ideal for making a statement at grand celebrations.`,

  details: [
    { label: "Fabric", value: "Satin Organza" },
    { label: "No of Components", value: "3 (dupatta, lehenga, blouse)" },
    { label: "Color", value: "Sky Blue to Peach" },
    { label: "Embroidery", value: "Hand Paint, Sequin, Bead Work" },
    { label: "Care Instructions", value: "Dry Clean Only" },
    { label: "Delivery Time", value: "6-7 Weeks" },
  ],
},
  accordionData: [
    {
      title: "Contact Our Stylist",
      content:
        "Need help choosing your size or styling this lehenga? Our stylist team is available to assist you.",
    },
    {
      title: "Delivery & Shipping",
      content:
        "Worldwide shipping available. Orders are processed within 24-48 hours.",
    },
    {
      title: "Returns & Exchange",
      content:
        "7 days easy exchange policy available for size issues.",
    },
  ],

  payments: [
    "/icons/gpay.png",
    "/icons/paytm.png",
    "/icons/phonePay.png",
    "/icons/amex.png",
    "/icons/apple.png",
    "/icons/google.png",
    "/icons/mastercard.png",
    "/icons/visa.png",
    "/icons/paypal.png",
    "/icons/shopify.png",
  ],

  frequentlyBoughtData: {
    discount: 10,

    buttonText: "Add To Cart",

    products: [
      {
        id: 1,
        name: "Azra Lehenga Set",
        price: 78500,
        oldPrice: 80000,
        image: "/images/p20.png",
      },
      {
        id: 2,
        name: "Summer Yellow Chiffon Saree with Blouse",
        price: 158500,
        oldPrice: 159000,
        image: "/images/p21.png",
      },
      {
        id: 3,
        name: "Rosalie Handpainted Organza Lehenga",
        price: 114500,
        oldPrice: 116000,
        image: "/images/p23.png",
      }
    ]
  },

   discover: [
    {
      id: 1,
      title: "Discover Kaftan Set",
      desc: "Lorem ipsum dolor sit amet consectetur. Dolor et volutpat in non. Luctus sit libero urna viverra sed non dui elementum Dolor et volutpat in non. Luctus sit libero urna viverra.",
      image: "/images/kaftan.png",
      reverse: false,
    },
    {
      id: 2,
      title: "Discover Kurta Sets",
      desc: "Lorem ipsum dolor sit amet consectetur. Dolor et volutpat in non. Luctus sit libero urna viverra sed non dui elementum Dolor et volutpat in non. Luctus sit libero urna viverra .",
      image: "/images/kurta.png",
      reverse: true,
    }
  ],
  recommendations: [
  {
    id: 1,
    name: "Akshara Saree Set",
    price: "₹ 189,000.00",
    image: "/images/akshara-saree.png",
    isNew: true,
  },
  {
    id: 2,
    name: "Floral ruching cape set",
    price: "₹ 47,900.00",
    image: "/images/floral-ruching.png",
  },
  {
    id: 3,
    name: "Cutdana embroidered cape set",
    price: "₹ 139,000.00",
    image: "/images/cutdana-set.png",
  },
  {
    id: 4,
    name: "Nadiah saree set",
    price: "₹ 149,000.00",
    image: "/images/nadiah-saree.png",
  },
],
discountData: {
  title: "Get special discounts on checkout",
  countryCode: "+91",
  placeholder: "Phone Number",
  buttonText: "UNLOCK",
  checkboxText: "Get updates on WhatsApp. You may opt out anytime",
},

faqData: [
  {
    id: 1,
    question: "Lorem ipsum sit elit enim ultricies quis?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    question: "Lorem ipsum sit elit enim ultricies quis?",
    answer:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 3,
    question: "Lorem ipsum sit elit enim ultricies quis?",
    answer:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: 4,
    question: "Lorem ipsum sit elit enim ultricies quis?",
    answer:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 5,
    question: "Lorem ipsum sit elit enim ultricies quis?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
],
 relatedProducts: [
  {
    id: 1,
    title: "Peach Printed Kaftan Paired With Pants",
    price: 439000,
    oldPrice: 500000,
    discount: "15% off",
    rating: 4.7,
    image: "/images/kaftan-with-pants.png",
    bestseller: true,
  },
  {
    id: 2,
    title: "Dusty Pink Kurta Set",
    price: 56900,
    oldPrice: 58000,
    discount: "15% off",
    rating: 4.7,
    image: "/images/pink-kurta.png",
    bestseller: true,
  },
  {
    id: 3,
    title: "Lvory Gown",
    price: 298000,
    oldPrice: 300000,
    discount: "15% off",
    rating: 4.7,
    image: "/images/lvory-gown.png",
    bestseller: true,
  },
  {
    id: 4,
    title: "Wrap Jacket Dress Set",
    price: 49000,
    oldPrice: 50000,
    discount: "15% off",
    rating: 4.7,
    image: "/images/wrap-jacket.png",
    bestseller: true,
  },
]
};

export const reviewsPageData = {
  header: "Reviews",
  sortOptions: ["Most Recent"],

  gallery: [
    "/images/p24.png",
    "/images/p25.png",
    "/images/p26.png",
  ],

  reviews: [
    {
      id: 1,
      name: "Anita Venugopal",
      image: "/images/user1.png",
      rating: 4,
      verified: true,
      date: "August 14, 2025",
      text: "Lorem ipsum neque aliquam enim vitae pharetra magna imperdiet volutpat auctor viverra nec vitae donec dui massa mauris.",
    },
    {
      id: 2,
      name: "Anita Venugopal",
      image: "/images/user2.png",
      rating: 4,
      verified: true,
      date: "August 14, 2025",
      text: "Lorem ipsum neque aliquam enim vitae pharetra magna imperdiet volutpat auctor viverra nec vitae donec dui massa mauris.",
    },
    {
      id: 3,
      name: "Anita Venugopal",
      image: "/images/user3.png",
      rating: 4,
      verified: true,
      date: "August 14, 2025",
      text: "Lorem ipsum neque aliquam enim vitae pharetra magna imperdiet volutpat auctor viverra nec vitae donec dui massa mauris.",
    },
    {
      id: 4,
      name: "Anita Venugopal",
      image: "/images/user4.png",
      rating: 4,
      verified: true,
      date: "August 14, 2025",
      text: "Lorem ipsum neque aliquam enim vitae pharetra magna imperdiet volutpat auctor viverra nec vitae donec dui massa mauris.",
    },
    {
      id: 5,
      name: "Anita Venugopal",
      image: "/images/user2.png",
      rating: 5,
      verified: true,
      date: "August 15, 2025",
      text: "Lorem ipsum neque aliquam enim vitae pharetra magna imperdiet volutpat auctor viverra nec vitae donec dui massa mauris.",
    },
  ],
};


// Cart Data
export const cartPageData = {
  header: "Your Cart",
  freeShippingText: "Only ₹110 away from Free Shipping",
  hurryText:
    "Please, hurry! Someone has placed ab order on one of the items you have in the cart. We'll keep it for you for 39:54 minutes.",

  orderSummary: {
    title: "ORDER SUMMARY",
    subtotal: "Subtotal",
    couponPlaceholder: "Enter Coupon Code",
    total: "TOTAL:",
    button: "Proceed to Checkout",
  },

  giftText: "WANT TO MAKE IT SPECIAL? GIFT WRAP FOR ₹10",
  deliveryText: "Order in the next 20 hours 50 minutes to get it by MONDAY 27",
  taxes: "Taxes and shipping are calculated at checkout",
  youMayAlsoLike: "You May Also Like",
};

export const initialCart = [
  {
    id: 1,
    name: "Blush Dynasty",
    desc: "Description",
    price: 79500,
    oldPrice: 80000,
    quantity: 1,
    image: "/images/p5.png",
  },
  {
    id: 2,
    name: "Dessert Dawn Saree",
    desc: "Description",
    price: 46750,
    oldPrice: 53000,
    quantity: 1,
    image: "/images/p6.png",
  },
];

export const suggestedProducts = [
  {
    id: 3,
    name: "Grapefruit",
    desc: "Description",
    price: 1440,
    oldPrice: 1500,
    quantity: 1,
    image: "/images/p3.png",
  },
  {
    id: 4,
    name: "Cajeput",
    desc: "Description",
    price: 840,
    oldPrice: 1000,
    quantity: 1,
    image: "/images/p4.png",
  },
];

export const orderSummaryData = {
  title: "ORDER SUMMARY",
  subtotal: "Subtotal",
  couponPlaceholder: "Enter Coupon Code",
  total: "TOTAL:",
  note: "Tax included and shipping calculated at checkout",
  termsText: "I agree with Terms and Conditions",
  button: "Proceed to Checkout",
  error: "Please accept Terms & Conditions",
};