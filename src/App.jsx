import React,{ useState } from "react";
import "./App.css";
import { FaUser } from 'react-icons/fa';
import Form from "./components/Form";
import Card from "./components/Card";
import ReviewCard from "./components/ReviewCard";
import { starIcons } from './components/ReviewStars';


function App() {
  const [reviews, setReviews]= useState([{id: 1, name:"Wilder Ondieki", review:"This shirt fades easily on first wash, poor quality material. My husband hates it", ratings:""},{id: 2, name:"Kelvin Kimaru", review:"The available sizes are too small for me. I wish they could have made bigger ones", ratings:""}])
  const [ratings, setRatings]= useState(106)
  const userProfile=<FaUser/>
  const title="Simon Carter Green Shirt"
  const image="https://imagescdn.simoncarter.in/img/app/product/4/404834-2469768.jpg"
  const description="The Simon Carter Green Shirt is a stylish and versatile wardrobe staple that effortlessly combines classic design with contemporary flair. Made with high-quality materials and meticulous craftsmanship, this shirt exudes sophistication and refinement"
  const handleForm = (formData) => {
    const newId = reviews.length + 1;
    const newReview = { id: newId, ...formData };
    setReviews([...reviews, newReview]);
    setRatings(prevRatings=>prevRatings+1)
  };
  
  return (
    <>
      <Card title={title} image={image} description={description} ratings={ratings} starIcons={starIcons}/>
      <div>
      <h1 className="reviews">Product Reviews</h1>
      {reviews.map((review, id) => (
        <ReviewCard key={id} name={review.name} Stars={starIcons} userProfile={userProfile} review={review.review} />
      ))}
    </div>
      <Form handleForm={handleForm} />
    </>
  );
}

export default App;
