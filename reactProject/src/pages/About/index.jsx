import React from "react";
import './_About.scss';

const Card = ({ image, title }) => (
  <div className="col-3">
    <div className="card">
      <div className="card-image">
        <img src={image} alt={title} />
      </div>
      <div className="card-name">
        <h2>{title}</h2>
      </div>
    </div>
  </div>
);

const About = () => {
  const products = [
    { image: "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600", title: "Men's Clothing" },
    { image: "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600", title: "Women's Clothing" },
    { image: "https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600", title: "Jewelery" },
    { image: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600", title: "Electronics" },
  ];

  return (
    <>
      <section id="about-us">
        <div className="container">
          <h1 className="about-heading">About Us</h1>
          <hr />
          <div className="about-text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum facere doloremque veritatis odit similique sequi. Odit amet fuga nam quam quasi facilis sed doloremque saepe sint perspiciatis explicabo totam vero quas provident ipsam, veritatis nostrum velit quos recusandae est mollitia esse fugit dolore laudantium. Ex vel explicabo earum unde eligendi autem praesentium, doloremque distinctio nesciunt porro tempore quis eaque labore voluptatibus ea necessitatibus exercitationem tempora molestias. Ad consequuntur veniam sequi ullam tempore vel tenetur soluta dolore sunt maxime aliquam corporis est, quo saepe dolorem optio minus sint nemo totam dolorum! Reprehenderit delectus expedita a alias nam recusandae illo debitis repellat libero, quasi explicabo molestiae saepe, dolorem tempore itaque eveniet quam dignissimos blanditiis excepturi harum numquam vel nihil? Ipsum 
            </p>
          </div>
        </div>
      </section>

      <section id="our-products">
        <div className="container">
          <h1 className="our-products-heading">Our Products</h1>
          <div className="row">
            {products.map((product, index) => (
              <Card key={index} image={product.image} title={product.title} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
