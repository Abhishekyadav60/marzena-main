# Marzena Project – Folder Structure

```
marzena/
├── public/
│   ├── icons/           # Header/footer assets (logo, cart, user, flowers)
│   └── images/          # Hero, banners, product images
│
├── src/
│   ├── app/
│   │   ├── api/                    # Backend API routes
│   │   │   ├── auth/
│   │   │   │   └── [...nextauth]/
│   │   │   │       └── route.js    # NextAuth config
│   │   │   ├── menu/
│   │   │   │   └── route.js        # GET /api/menu – nav items for Header
│   │   │   └── register/
│   │   │       └── route.js        # POST /api/register – user signup
│   │   │
│   │   ├── admin/
│   │   │   └── page.js
│   │   ├── dashboard/
│   │   │   └── page.js
│   │   ├── login/
│   │   │   └── page.js
│   │   ├── register/
│   │   │   └── page.js
│   │   ├── layout.js               # Root layout (Header + Footer)
│   │   ├── middleware.js
│   │   └── page.js                 # Home page
│   │
│   ├── components/
│   │   ├── Header.js               # Fetches menu from /api/menu
│   │   ├── Footer.js
│   │   ├── PrimaryButton.js
│   │   └── NotFoundPage.js
│   │
│   ├── data/
│   │   └── products.js             # Static data (homeData, footerData, etc.)
│   │
│   ├── lib/
│   │   ├── db.js                   # MongoDB connection
│   │   └── menu.js                 # Menu data source (used by /api/menu)
│   │
│   └── models/
│       └── User.js                 # Mongoose User model
│
├── .env.local                      # MONGODB_URI, NEXTAUTH_SECRET, etc.
├── package.json
├── tailwind.config.js
└── next.config.js
```

## Backend flow for Header menu

1. **`src/lib/menu.js`** – Defines menu items (can later be swapped for MongoDB)
2. **`src/app/api/menu/route.js`** – `GET /api/menu` returns menu JSON
3. **`src/components/Header.js`** – `useEffect` fetches `/api/menu` and renders links
