import React from "react";

export const Team = () => {
  const teamMembers = [
    {
      name: "Sai Chaitanya Kashetty",
      role: "Founder & CEO",
      img: "/img/team1.jpeg",
    },
    {
      name: "Saketh Madabushi",
      role: "Developer",
      img: "/img/team4.jpeg",
    }
  ];

  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Meet the Team</h2>
          <p>
            Quantum Enviro Games is an indie studio led by Sai Chaitanya Kashetty, a dedicated 3D Environment and Prop Artist with a passion for creating memorable gaming experiences. As the founder, artist, and game developer, I wear many hats in the studio but always keep the focus on quality and innovation. As the company grows, we look forward to expanding the team with talented developers and artists who share our vision for creative, story-driven games.
          </p>
        </div>
        <div className="team-container">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <div className="thumbnail">
                <img
                  src={member.img}
                  alt={member.name}
                  className="team-img"
                />
                <h4>{member.name}</h4>
                <p>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
