// import React from "react";

// export const Team = (props) => {
//   return (
//     <div id="team" className="text-center">
//       <div className="container">
//         <div className="col-md-8 col-md-offset-2 section-title">
//           <h2>Meet the Team</h2>
//           <p>
//             Quantum Enviro Games is an indie studio led by Sai Chaitanya Kashetty, a dedicated 3D Environment and Prop Artist with a passion for creating memorable gaming experiences. As the founder, artist, and game developer, I wear many hats in the studio but always keep the focus on quality and innovation. As the company grows, we look forward to expanding the team with talented developers and artists who share our vision for creative, story-driven games.
//           </p>
//         </div>
//         <div id="row" className="row" style={{ justifyContent: "center" }}>
//           {props.data
//             ? props.data.map((d, i) => (
//                 <div key={`${d.name}-${i}`} className="col-lg-12 col-md-4 col-sm-6 team" style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
//                   <div className="thumbnail" style={{ textAlign: "center", width: "100%", maxWidth: "250px" }}>
//                     <img src={d.img} alt={d.name} className="team-img" style={{ width: "250px", height: "250px", objectFit: "cover" }} />
//                     <h4>{d.name}</h4>
//                     <p>{d.role}</p>
//                   </div>
//                 </div>
//               ))
//             : "loading"}
//         </div>
//       </div>
//     </div>
//   );
// };

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
      img: "/img/team2.jpeg",
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
