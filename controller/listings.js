const Listing = require("../models/listing.js");
const mongoose = require("mongoose");

module.exports.index = async (req, res) => {
  const {location ,category} =req.query;
  let filter={}

  if(location && location.trim() !== ""){
    filter.location={$regex: new RegExp(location,"i")};
  }
  if(category && category.trim() !==""){
  filter.location ={$regex: new RegExp(location,"i")};
  }
  let allListings = await Listing.find(filter).populate("reviews");
  
  const listingsWithRating =await allListings.map((listing)=>{
    const listingObj =listing.toObject();
    
    if (listing.reviews && listing.reviews.length > 0) {
      const totalRating = listing.reviews.reduce(
        (sum, review) => sum + review.rating,
        0,
      );
      listingObj.avgRating = (totalRating / listing.reviews.length).toFixed(1);
      listingObj.reviewCount = listing.reviews.length;
    } else {
      listingObj.avgRating = null;
      listingObj.reviewCount = 0;
    }

    return listingObj;
   });

  res.render("listings/index.ejs", {allListings:listingsWithRating,
    searchQuery:location ||"",
    selectedCategory:category || ""
    });
};

module.exports.renderNewForm = (req, res) => {
  res.render("listings/new.ejs");
};

 
module.exports.showListing = async (req, res) => {
 
  let { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    req.flash("error", "Invalid Listing ID");
    return res.redirect("/listings");
  }

  const listing = await Listing.findById(id)
    .populate({
      path: "reviews",
      populate: {
        path: "author",
      },
    })
    .populate("owner");
  if (!listing) {
    req.flash("error", "Listing you requested for does not exist!");
    return res.redirect("/listings");
  }

  res.render("listings/show.ejs", { listing });
};

module.exports.createListing = async (req, res, next) => {
  let url = req.file.path;
  let filename = req.file.filename;
  const newListing = new Listing(req.body.listing);
  newListing.owner = req.user._id;
  newListing.image ={url,filename};
  await newListing.save();
  req.flash("success", "New Listing Created!");
  res.redirect("/listings");
};

module.exports.renderEditForm = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "Listing you requested for does not exist!");
    return res.redirect("/listings");
  }
  let origionalImageUrl = listing.image.url;
 origionalImageUrl= origionalImageUrl.replace("/upload","/upload/h_300,w_250");
  res.render("listings/edit.ejs", { listing ,origionalImageUrl});
};

module.exports.updateListing = async (req, res) => {
  let { id } = req.params;
  let listing =await Listing.findByIdAndUpdate(id, { ...req.body.listing }, { new: true });

  if( typeof req.file != "undefined"){
   let url = req.file.path;
  let filename = req.file.filename;
  listing.image ={url,filename};
  await listing.save();
  }
  req.flash("success", "Listing Updated!");
  res.redirect(`/listings/${id}`);
};

module.exports.destroyListing = async (req, res) => {
  let { id } = req.params;
  await Listing.findByIdAndDelete(id);
  req.flash("success", "Listing Deleted!");
  res.redirect("/listings");
};
