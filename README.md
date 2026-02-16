# VegaBonding-fullstack

# 🌍 VegaBonding

**Live Demo:** https://vegabonding.onrender.com
A full-stack rental marketplace where users can list and book flats, villas, farms, and hotel rooms for rent.It made accomodation easy for people who are planning vacation to diffrent region from their home only without hassle. 

---

## 🚀 Tech Stack

* **Backend:** Node.js, Express.js
* **Frontend:** EJS, Bootstrap
* **Database:** MongoDB + MongoDB Atlas
* **Authentication & Sessions:** express-session
* **Image Uploads:** Cloudinary
* **Routing:** Express Router
* **Deployment:** Render

---

## ✨ Features

### 🔐 Authentication & Authorization
* Normal user can search see listing view revies only.
* User Signup & Login system
* Session-based authentication using express-session
* Only logged-in users can create listings or post reviews
* Authorization checks to ensure:

  * Only listing owners can edit/update/delete their listings
  * Only review authors can delete their reviews

---

### 🏠 Listings System

* Create, Edit, Update & Delete your own listings
* Upload property images via Cloudinary
* List Flats, Rooms, Villas, Farms & Hotels
* Secure error handling implemented across routes
* custom error handling implement on every route

---

### ⭐ Reviews & Ratings

* Add reviews to listings
* Average rating calculation for each listing
* Only the user who created a review can delete it

---

### 🔎 Search Functionality

* Search properties based on:

  * Location
  * Place name
  * listing name

---

### 🛡 Error Handling

* Centralized error handling middleware
* Custom error messages
* Validation and route protection

---

## 🌐 Deployment

The application is deployed on **Render** and uses MongoDB Atlas for cloud database hosting.

---

## 📦 Installation (For Local Setup)

```bash
git clone <your-repo-url>
cd vegabonding
npm install
```

 


Run the project:

```bash
npm start
```

---

## 👨‍💻 Author

Neeraj Patel
Full Stack Developer

---

## 📄 License

This project is open-source and available for learning purposes.

---

## 💡 Future Improvements

* Booking system with date selection
* Payment integration
* Wishlist feature
* Admin dashboard
* Advanced filters

---

⭐ If you like this project, give it a star on GitHub!
