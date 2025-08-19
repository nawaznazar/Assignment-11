import React from "react";

const About = () => {
  return (
    <div className="page-container">
      <h1>About Safa Water</h1>
      <p>
        Safa Water is a leading provider of premium-quality drinking water in Qatar,
        committed to delivering purity, freshness, and health in every drop. Our water
        is carefully purified and naturally balanced with essential minerals, ensuring
        it meets the highest international standards. We serve both households and
        businesses with reliable and timely delivery, making hydration easy and
        convenient for everyone.
      </p>

      <div>
        <h2>Our Mission & Values</h2>
        <p>
          At Safa Water, our mission is to promote safe and healthy hydration across Qatar.
          We believe that access to clean drinking water is essential for wellness and
          productivity. Sustainability is at the heart of our operations — we encourage
          the use of reusable bottles and eco-friendly dispensers to reduce plastic waste.
          Our dedicated team works tirelessly to maintain quality, reliability, and customer
          satisfaction, ensuring that every client receives the best possible water experience.
        </p>
      </div>

      <div>
        <h2>Why Choose Safa Water?</h2>
        <ul>
          <li>High-quality, mineral-balanced drinking water</li>
          <li>Reliable and punctual delivery service</li>
          <li>Eco-friendly practices to reduce environmental impact</li>
          <li>Trusted by thousands of homes and businesses across Qatar</li>
        </ul>
      </div>

      <div className="md-section mt-8 p-4 border rounded-lg shadow-md bg-blue-50">
        <h3 className="text-xl font-bold">Nawaz A. Nazar</h3>
        <p className="text-gray-700">Managing Director</p>
        <p className="mt-2 text-gray-600">
          Nawaz A. Nazar leads Safa Water with dedication and a clear vision to provide
          safe, healthy, and sustainable drinking water to all households and businesses
          in Qatar. Her commitment to quality and customer satisfaction drives the
          company’s success and strong reputation in the market.
        </p>

        <div className="md-comment mt-4 p-3 border-l-4 border-blue-400 bg-blue-100">
          <p>
            "At Safa Water, our priority is your health and hydration. We strive every
            day to bring the purest water to your homes and offices. Our team is
            committed to excellence, and we value the trust of every customer who
            chooses Safa Water. Together, let's make hydration safe, simple, and
            sustainable."
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;