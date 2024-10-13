import React from 'react';

const founderData = [
  {
    name: " Shivam Rana",
    role: "CEO & Co-founder",
    bio: "Shivam himslef is a healthcare professional with an industry expirence of 8 years in the healtcare industry.",
    imageId: "Shivam.jpg"
  },
  {
    name: "Akshay Rathore",
    role: "COO & Co-founder",
    bio: "",
    imageId: "Akshay.png"
  },
  {
    name: "Prashit Raj",
    role: "Technical Team",
    bio: "",
    imageId: "Prashit.png"
  },
  {
    name: "Pratik Marudwar",
    role: "Technical Team",
    bio: "",
    imageId: "Pratik.png"
  }
];

const FounderCard = ({ name, role, bio, imageId }) => (
  <div className=" shadow-lg rounded-lg overflow-hidden m-4">
    <div className="px-6 py-8">
      <div className="flex flex-col items-center mb-6">
        <img 
          src={process.env.PUBLIC_URL+`/images/founders/${imageId}`} 
          alt={`${name}'s portrait`} 
          className="w-32 h-32 rounded-full object-cover mb-4"
        />
        <h3 className="text-xl font-semibold text-gray-900 text-center">{name}</h3>
        <p className="text-sm font-medium text-blue-600">{role}</p>
      </div>
      <p className="text-base text-gray-700 leading-relaxed text-center">{bio}</p>
    </div>
  </div>
);

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-8">About Us</h1>
        <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
          We are a team of passionate individuals dedicated to revolutionizing the way people make their healthcare and clinical decisions.
          Our mission is to make AI-powered chatbots to assists users with healtcare needs.
        </p>
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Founders</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {founderData.map((founder, index) => (
            <FounderCard key={index} {...founder} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;