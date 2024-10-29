import React from "react";

const FounderCard = ({ name, role, bio, imageId }) => (
  <div className=" shadow-lg rounded-lg overflow-hidden m-4">
    <div className="px-6 py-8">
      <div className="flex flex-col items-center mb-6">
        <img 
          src={process.env.PUBLIC_URL+`/img/team/${imageId}`} 
          alt={`${name}'s portrait`} 
          className="w-64 h-64 rounded-full object-cover mb-4"
        />
        <h3 className="text-2xl font-semibold text-gray-900 text-center">{name}</h3>
        <p className="text-xl font-medium text-blue-600">{role}</p>
      </div>
      <p className="text-base text-gray-700 leading-relaxed text-center">{bio}</p>
    </div>
  </div>
);

export const Team = (props) => {
  return (
    // <div className="max-w-7xl mx-auto">
    //     <div className="col-md-8 col-md-offset-2 text-center section-title">
    //       <h2>Meet the Team</h2>
    //     </div>
    //   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
    //       {props.data ? props.data.map((founder, index) => (
    //         <FounderCard key={index} {...founder} />
    //       )) : "loading"}
    //     </div>
    //   </div>

<div id = "team" className=" bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
<div className="max-w-7xl mx-auto">
  <div className="section-title">
    <h2 className="text-4xl mb-6 text-center">Meet The Team</h2>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-auto">
    {props.data ? props.data.map((founder, index) => (
      <FounderCard key={index} {...founder} />
    )) : "loading"}
  </div>
</div>
</div>
  );
};
