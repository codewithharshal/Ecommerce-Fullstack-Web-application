# Full-Stack MERN E-Commerce Project

## Project Overview

This is a complete full-stack e-commerce application built using the MERN stack (MongoDB, Express.js, React, Node.js). The project consists of three main components:

- **Frontend**: Customer-facing React application for browsing products, managing cart, and placing orders [Frontend Main](https://admin-ehjx.onrender.com)
- **Admin**: Admin panel for managing products, orders, and site administration [Frontend Admin](https://ecommerce-fullstack-web-application-2.onrender.com)
- **Backend**: RESTful API server handling all business logic, database operations, and external integrations

## Tech Stack

### Backend

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JSON Web Tokens (JWT)
- **File Upload**: Multer
- **Image Storage**: Cloudinary
- **Payment Processing**: Razorpay and Stripe
- **Validation**: Validator.js
- **Security**: bcrypt for password hashing, CORS

### Frontend & Admin

- **Framework**: React 19
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **HTTP Client**: Axios
- **Notifications**: React Toastify
- **Icons & Assets**: Custom SVG/PNG assets

## Features

### User Features (Frontend)

- User registration and login
- Product browsing and search
- Shopping cart management
- Order placement and tracking
- Payment integration (Razorpay/Stripe)
- Responsive design for mobile and desktop

### Admin Features (Admin Panel)

- Admin authentication
- Product management (add, list, update, delete)
- Order management and tracking
- Dashboard for overview

### Backend Features

- RESTful API endpoints
- User authentication and authorization
- Product CRUD operations
- Cart management
- Order processing
- Payment gateway integration
- Image upload and management
- Data validation and error handling

## Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 16 or higher)
- **MongoDB** (local installation or MongoDB Atlas)
- **Git** (for cloning the repository)
- **npm** or **yarn** (package manager)

## Installation & Setup

### Backend Setup

1. Navigate to the Backend directory:

   ```bash
   cd Backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the Backend directory with the required environment variables (see Environment Variables section below).

4. Start the development server:
   ```bash
   npm run server
   ```
   The backend will run on `http://localhost:8000` (or the port specified in your `.env`).

### Frontend Setup

1. Navigate to the frontend directory:

   ```bash
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the frontend directory if needed (for backend URL configuration).

4. Start the development server:
   ```bash
   npm run dev
   ```
   The frontend will run on `http://localhost:5173` (default Vite port).

### Admin Panel Setup

1. Navigate to the Admin directory:

   ```bash
   cd Admin
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the Admin directory if needed (for backend URL configuration).

4. Start the development server:
   ```bash
   npm run dev
   ```
   The admin panel will run on `http://localhost:5174` (or next available port).

## Environment Variables

### Backend (.env)

Create a `.env` file in the Backend directory with the following variables:

```env
# Database
MONGODB_URI=mongodb://localhost:27017/ecommerce_db
# Or for MongoDB Atlas: mongodb+srv://username:password@cluster.mongodb.net/ecommerce_db

# JWT Secret
JWT_SECRET=your_jwt_secret_key_here

# Cloudinary Configuration
CLOUDINARY_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_secret_key

# Payment Gateways
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret

STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key

# Server Port (optional, defaults to 8000)
PORT=8000
```

### Frontend & Admin (.env)

If needed, create `.env` files in frontend and Admin directories:

```env
# Backend URL
VITE_BACKEND_URL=http://localhost:8000
```

## API Endpoints

### User Routes

- `POST /api/user/register` - User registration
- `POST /api/user/login` - User login
- `GET /api/user/profile` - Get user profile

### Product Routes

- `GET /api/product/list` - Get all products
- `POST /api/product/add` - Add new product (Admin only)
- `POST /api/product/remove` - Remove product (Admin only)
- `POST /api/product/single` - Get single product

### Cart Routes

- `POST /api/cart/add` - Add item to cart
- `POST /api/cart/update` - Update cart item
- `POST /api/cart/get` - Get user cart

### Order Routes

- `POST /api/order/place` - Place new order
- `POST /api/order/verify` - Verify payment
- `POST /api/order/userorders` - Get user orders
- `GET /api/order/list` - Get all orders (Admin only)
- `POST /api/order/status` - Update order status (Admin only)

## Usage

1. Start the Backend server first
2. Start the Frontend and Admin panels
3. Access the customer frontend at `http://localhost:5173`
4. Access the admin panel at `http://localhost:5174`
5. Use the admin panel to add products and manage orders
6. Customers can browse products, add to cart, and place orders on the frontend

## Project Structure

```
/
├── Admin/                 # Admin panel (React)
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── assets/
│   ├── package.json
│   └── vite.config.js
├── Backend/               # API server (Node.js/Express)
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
├── frontend/              # Customer frontend (React)
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   └── assets/
│   ├── package.json
│   └── vite.config.js
├── .gitignore
└── README.md
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License - see the LICENSE file for details.

## Author

Harshal S

---

For any questions or support, please contact the project maintainer.
