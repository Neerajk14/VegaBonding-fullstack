 # 🛏️ Vegabonding A full-stack accommodation booking platform 

Developed a full-stack accommodation booking platform using Node.js and Express.js, with features like property listings, secure authentication, and end-to-end booking management.

![Node.js](https://img.shields.io/badge/Node.js-v22.14.0-green)
![Express.js](https://img.shields.io/badge/Express.js-v5.1.0-orange)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-blue)
![EJS](https://img.shields.io/badge/EJS-v3.1.10-yellow)

**Live Demo :** [`https://vegabonding.up.railway.app/listings`]

---

## 🌟 Feature

### 🏚️ Accommodation listings

Our platform provides a complete property listing system that allows users to create, manage, and explore accommodations seamlessly.

- **Create Listings** – Users can add new properties with details like title, description, price, location, images, and category.
- **Edit Listings** – Property owners can update listing details anytime to keep information accurate.
- **Delete Listings** – Users can remove their listings when they are no longer available.
- **View Listings** – All users can browse available properties with detailed information.

### 🗂️ Categories
The platform supports **11 different property categories** to help users easily discover accommodations based on their preferences.


  | 🔥 Trending | 🛏️ Rooms | 🏙️ Iconic Cities |
  | ⛰️ Mountains | 🏰 Castles | 🏊 Amazing Pools |
  | ⛺ Camping | 🐄 Farms | ❄️ Arctic |
  | 🛖 Domes | 🚤 Boats |   

- **Rich Property Details** - Title, description, location, price, images

### 📅 Booking Experience
### 📅 Smart Booking System

- **Intuitive Booking Flow** – Smooth and user-friendly reservation experience  
- **Live Cost Estimation** – Accurate pricing calculated instantly based on stay duration  
- **Adaptive Pricing Engine** – Automatically reflects changes in dates and guest details  
- **Instant Confirmation** – Real-time booking confirmation with detailed summary  
- **Secure Booking Logic** – Prevents self-booking to ensure platform integrity  
- **Personal Trip Management** – केंद्रीकृत dashboard for tracking all reservations  
- **Hassle-Free Cancellation** – Simple and transparent 24-hour cancellation policy  

### 🔍 Search & Filtering
- **Location Search** - Find properties by city, country, or region (case-insensitive)
- **Category Filtering** - Filter by property types with visual icons
- **Combined Filters** - Search and filter simultaneously for precise results
- **All Button** - Reset category filters and show all listings
- **Real-Time Results** - Instant property matching with average ratings displayed

### ⭐ Reviews & Ratings

- **Authentic User Feedback** – Verified users can post detailed reviews and experiences  
- **Interactive Rating System** – Smooth 1–5 star rating with visual indicators  
- **Live Rating Aggregation** – Automatically updated average ratings for every property  
- **Review Analytics** – Display of total review count for better decision-making  
- **User-Controlled Reviews** – Full control to manage or delete personal reviews  
- **Integrated User Profiles** – Centralized view of all user-generated reviews  


### 📱 Responsive UI & UX
- **Mobile-First Design** - Fully responsive for all devices
- **Intuitive Navigation** - Easy-to-use menus with hamburger on mobile
- **Custom Notifications** - Beautiful slide-in toast notifications
- **No Listings Found** - Friendly empty states with helpful messages
- **Loading States** - Smooth transitions and visual feedback
- **Modern Styling** - Airbnb-inspired design with Plus Jakarta Sans font

### 👤 User Profiles
- **Profile Page** - Dedicated page showing user information
- **Review History** - All reviews written by the user displayed
- **Wishlist Preview** - Quick view of saved listings
- **Profile Circle** - User initial displayed in black circle
- **Member Since** - Track when user joined the platform

### ❤️ Wishlist

- **One-Click Favorites** – Effortlessly save properties for future reference  
- **Personalized Wishlist Hub** – Access all saved listings in a unified dashboard  
- **Seamless Management** – Add or remove properties with real-time updates  
- **Dynamic Visual Cues** – Interactive heart icon indicates wishlist status instantly  
- **Session Persistence** – User preferences are reliably stored in the database  

### 🔐 Authentication & User Management
- **User Registration & Login** - Secure password authentication using Passport.js
- **Session Management** - Persistent sessions stored in MongoDB with 7-day expiration
- **User Profiles** - Personalized user experience with profile management and user initials as avatar
- **Password Security** - Encrypted password storage with Passport-local-mongoose
- **Flash Notifications** - Real-time feedback with custom slide-in notifications

### 🔍 Search & Filtering
- **Location Search** - Find properties by city, country, or region (case-insensitive)
- **Category Filtering** - Filter by property types with visual icons
- **Combined Filters** - Search and filter simultaneously for precise results
- **All Button** - Reset category filters and show all listings


---

## 🛠️ Tech Stack

### Backend
| Technology | Version | Purpose |
|------------|---------|---------|
| **Node.js** | v22.14.0 | JavaScript runtime environment |
| **Express.js** | v5.2.1 | Web application framework |
| **Express-session** | ^1.19.0 | Session management middleware |
| **Method-override** |^3.0.0| HTTP method override support |

### Database
| Technology | Version | Purpose |
|------------|---------|---------|
| **MongoDB Atlas** | - | Cloud NoSQL database |
| **Mongoose** | ^9.1.5 | MongoDB object data modeling |
| **Connect-mongo** | v6.0.0 | MongoDB session store |

### Authentication & Security
| Technology | Version | Purpose |
|------------|---------|---------|
| **Passport.js** | v0.7.0 | Authentication middleware |
| **Passport-local** | v1.0.0| Local authentication strategy |
| **Passport-local-mongoose** | v9.0.1 | Mongoose integration |
| **Connect-flash** | v0.1.1 | Flash message support |

### Frontend & Templating
| Technology | Version | Purpose |
|------------|---------|---------|
| **EJS** |^4.0.1 | Templating engine |
| **EJS-mate** | v4.0.0 | Layouts and partials support |
| **Bootstrap 5** | - | CSS framework |
| **Font Awesome 6** | - | Icons |
| **Custom CSS** | - | Responsive styling |
| **Client-side JavaScript** | - | Interactive UI features |

### File & Image Management
| Technology | Version | Purpose |
|------------|---------|---------|
| **Multer** | v2.0.2| File upload handling |
| **Multer-storage-cloudinary** | v4.0.0 | Cloudinary storage integration |
| **Cloudinary** | v1.41.0 | Cloud image hosting and optimization |

### Data Validation
| Technology | Version | Purpose |
|------------|---------|---------|
| **Joi** | v17.13.3 | Schema validation |

### Development Tools
| Technology | Version | Purpose |
|------------|---------|---------|
| **dotenv** | v17.2.3 | Environment variable management |
| **Nodemon** | v3.1.9 | Development auto-restart |
| **Git** | - | Version control |

---

## 📁 Project Structure

```
|── controllers/            # Business logic
│   ├── listings.js         # Listing operations
│   ├── bookings.js         # Booking management
│   ├── reviews.js          # Review operations
│   ├── wishlists.js        # Wishlist operations
│   ├── users.js            # User authentication
│   └── profile.js          # User profile management
├── init/                   #  Testing  Database initialization
│   ├── data.js             # testing data  
│   ├── index.js            # insert data in one go for testing 
├── models/                 # Database schemas
│   ├── listing.js          # Property listing schema
│   ├── booking.js          # Booking schema
│   ├── review.js           # Review & rating schema
│   └── user.js             # User account schema
├── public/                 # Static assets
│   ├── css/                # Stylesheets
│   ├── image/              # website logo in url images
│   ├── js/                 # Client-side scripts
│   │   └── script.js       # scripts form validation 
├── routes/                 # API endpoints
│   ├── listing.js          # Listing routes
│   ├── booking.js          # Booking routes
│   ├── review.js           # Review routes
│   ├── user.js             # Auth routes
│   ├── wishlist.js         # Wishlist routes
│   └── profile.js          # Profile routes
├── utils/                  # Utility functions
│   ├── ExpressError.js     # Custom error class
│   └── wrapAsync.js        # Async error handler
├── views/                  # EJS templates
│   ├── listings/           # Property listing pages
│   ├── users/              # User pages (login, signup, bookings)
│   ├── layouts/            # Layout templates
│   └── includes/           # Reusable components (navbar, footer)
├── app.js                  # Main application file
├── middleware.js           # Custom middleware
├── schema.js               # JOI validation schemas
├── cloudConfig.js          # Cloudinary configuration
└── package.json            # Dependencies
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v22.14.0 or higher)
- **npm** or **yarn** package manager
- **MongoDB Atlas** account (or local MongoDB)
- **Cloudinary** account for image management

### Installation

#### 1. Clone the Repository
```bash
git clone https://github.com/Neerajk14/VegaBonding-fullstack.git
cd <Folder name in which you clone this>
```

#### 2. Install Dependencies
```bash
npm install
```

#### 3. Environment Setup

Create a `.env` file in the root directory:

```env
# Database Configuration
ATLASDB_URL=mongodb+srv://<username>:<password>@cluster.mongodb.net/<database name>
NODE_ENV=production

# Session Management
SECRET=your-secret-key-for-sessions-min-32-characters

# Cloudinary Configuration (Image Storage)
CLOUDINARY_NAME=your-cloudinary-name
CLOUDINARY_KEY=your-cloudinary-api-key
CLOUDINARY_SECRET=your-cloudinary-api-secret

#### 4. Obtain API Keys

- **MongoDB Atlas**: https://www.mongodb.com/cloud/atlas
  - Create a cluster and get your connection string
  - Whitelist Render's IPs: 44.233.151.27, 35.160.120.126, 34.211.200.85

- **Cloudinary**: https://cloudinary.com/
  - Sign up and get your Cloud Name, API Key, and API Secret

#### 5. Start the Server

```bash
# Development
npm run server

# Production
node app.js
```
Server will run on: **http://localhost:8080*

---
## 📖 Usage

### 👤 Guest Experience
- Discover and explore a wide range of properties  
- Use advanced search and filters for personalized results  
- View detailed property insights, reviews, and location maps  
- Sign up to access booking and wishlist features  

### 🔐 User Dashboard
- Secure authentication and account access  
- Save and manage favorite properties  
- Book stays with a seamless reservation flow  
- Share reviews and ratings  
- Track all bookings via a dedicated trips dashboard  
- Manage profile and personal activity  

### 🏡 Host Panel
- Register as a host and list your property  
- Create and publish detailed property listings  
- Upload and manage property images  
- Update or remove listings anytime  
- Monitor guest feedback and ratings  

---

## 🎯 Key Features Implementation

### Search & Filtering Engine
- **Location-based Search**: Case-insensitive regex search across location field
- **Category Filtering**: Exact match filtering for property types
- **Combined Search**: Simultaneous location and category filtering
- **Rating Integration**: Real-time average rating calculation on search results
- **Dynamic Results**: Instant results update without page refresh

### Booking Management System
- **Date Selection**: Interactive date pickers for check-in and check-out
- **Automatic Calculation**: Night count and total price computed automatically
- **Payment Processing**: Total cost = nightly rate × number of nights
- **Validation Layer**: Prevents self-booking and invalid date ranges
- **Confirmation Flow**: Instant booking confirmation with email notifications

### Image Management with Cloudinary
- **Cloud Storage**: Secure cloud hosting for all property images
- **Multer Integration**: Seamless file upload with multer-storage-cloudinary
- **Automatic Optimization**: Images automatically resized and optimized
- **CDN Delivery**: Fast global content delivery through Cloudinary's CDN
- **Multiple Images**: Support for uploading multiple property photos

### Review & Rating System
- **Star Ratings**: 1-5 star rating with visual representation
- **Aggregate Ratings**: Automatic calculation of average ratings
- **Review Display**: Count and average rating shown on listing cards
- **User Reviews**: Only authenticated users can leave reviews
- **Edit & Delete**: Users can modify or remove their own reviews

### Wishlist Functionality
- **Add to Favorites**: One-click wishlist addition from listing cards
- **Persistent Storage**: Wishlist saved to user profile in database
- **Wishlist Page**: Dedicated page to view all saved properties
- **Quick Remove**: Easy removal of properties from wishlist
- **Status Tracking**: Visual indicator of wishlisted properties

### Session & Authentication
- **Passport.js**: Secure local authentication strategy
- **Session Persistence**: 7-day session expiration with MongoDB storage
- **Cookie Security**: HTTP-only, secure cookies with automatic rotation
- **Password Encryption**: Bcrypt hashing with passport-local-mongoose
- **User Serialization**: Efficient user data caching in sessions

---

## 🌐 API Routes Overview

### Authentication Routes
| Method | Route | Description |
|--------|-------|-------------|
| GET | /signup | Signup form |
| POST | /signup | Register new user |
| GET | /login | Login form |
| POST | /login | Authenticate user |
| GET | /logout | Logout user |

### Listings Routes
| Method | Route | Description |
|--------|-------|-------------|
| GET | /listings | View all listings (with search/filter) |
| GET | /listings/new | Create listing form |
| POST | /listings | Create new listing |
| GET | /listings/:id | View listing details |
| GET | /listings/:id/edit | Edit listing form |
| PUT | /listings/:id | Update listing |
| DELETE | /listings/:id | Delete listing |

### Bookings Routes
| Method | Route | Description |
|--------|-------|-------------|
| POST | /listings/:id/bookings | Create new booking |
| GET | /trips | View upcoming trips |
| GET | /trips/past | View past trips |
| GET | /bookings/:bookingId | View booking details |
| POST | /bookings/:bookingId/cancel | Cancel booking |

### Reviews Routes
| Method | Route | Description |
|--------|-------|-------------|
| POST | /listings/:id/reviews | Create review |
| DELETE | /listings/:id/reviews/:reviewId | Delete review |

### Wishlist Routes
| Method | Route | Description |
|--------|-------|-------------|
| GET | /wishlist | View wishlist page |
| GET | /api/wishlist | Get wishlist (API) |
| POST | /api/wishlist/toggle/:id | Add/remove from wishlist (API) |

### Profile Routes
| Method | Route | Description |
|--------|-------|-------------|
| GET | /profile | View user profile |
| GET | /users/:id | View specific user profile |
| GET | /profile/edit | Edit profile form |
| POST | /profile/edit | Update profile |

---
## 📊 Database Models

### User Model
```javascript
{
  username: String (unique),
  email: String (required),
  password: String (hashed),
  wishlist: [ObjectId],     // References to Listings
  bookings: [ObjectId]      // References to Bookings
}
```

### Listing Model
```javascript
{
  title: String (required),
  description: String,
  price: Number,
  location: String,
  country: String,
  image: { url: String, filename: String },
  category: String (11 categories),
  owner: ObjectId,          // Reference to User
  reviews: [ObjectId],      // References to Reviews
  geometry: {
    type: "Point",
    coordinates: [longitude, latitude]
  }
}
```

### Booking Model
```javascript
{
  listing: ObjectId (required),
  user: ObjectId (required),
  checkIn: Date (required),
  checkOut: Date (required),
  guests: Number (required),
  totalPrice: Number (required),
  nights: Number (required),
  status: String (confirmed/cancelled/completed),
  bookingDate: Date,
  cancellationDate: Date
}
```

### Review Model
```javascript
{
  comment: String,
  rating: Number (1-5),
  author: ObjectId,
  listing: ObjectId,
  createdAt: Date
}
```

## 🚀 Security Features

- **Password Encryption** - Bcrypt hashing with passport-local-mongoose
- **Session Management** - Secure, HTTP-only cookies with automatic expiration
- **CSRF Protection** - Method-override for safe form submissions
- **Input Validation** - Comprehensive Joi schema validation
- **Owner Verification** - Authorization checks to prevent unauthorized access
- **Review Author Check** - Only review authors can delete their reviews
- **Booking Validation** - Prevent self-booking and invalid date ranges
- **Environment Variables** - Sensitive data stored in .env file
- **XSS Protection** - EJS auto-escaping for user-generated content

---
## 👨‍💻 Author

**Neeraj Patel**

**LinkedIn :**[https://www.linkedin.com/in/neerajpatel14/]

## ⭐ Support

If you found this project helpful, please give it a star on GitHub!