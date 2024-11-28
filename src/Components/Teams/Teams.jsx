/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import teamMembersData from '../../../public/teamMembers.json'; // Adjust the path based on your file structure
import additionalTeamMembersData from '../../../public/employee.json'; // Path for additional team members
import Navbar from '../Navber/Navber';

const TeamCard = ({ name, designation, workDetails, image }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 text-center">
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-20 h-20 mx-auto rounded-full shadow-md border-4 border-white -mt-10 mb-2"
          onError={(e) => (e.target.src = "https://via.placeholder.com/150")}
        />
      </div>
      <h2 className="text-lg font-semibold ">{name}</h2>
      <p className="text-white p-2 font-bold rounded-xl text-sm mb-2 bg-blue-400">{designation}</p>
      <p className="text-gray-600">{workDetails}</p>
    </div>
  );
};

const Teams = () => {
  const allTeamMembers = [...teamMembersData];

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 mt-14">
        <section className="py-10 bg-gray-100">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-center mb-10">Our Members</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {allTeamMembers.map((member, index) => (
                <TeamCard
                  key={index}
                  name={member.name}
                  designation={member.designation}
                  workDetails={member.workDetails}
                  image={member.image}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="py-10 bg-gray-200">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-center mb-10">Our Best Employees</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {additionalTeamMembersData.map((member, index) => (
                <TeamCard
                  key={index}
                  name={member.name}
                  designation={member.designation}
                  workDetails={member.workDetails}
                  workExperience={member.workExperience}
                  image={member.image}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Teams;
