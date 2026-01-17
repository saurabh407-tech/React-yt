import React from 'react'
import Card from './components/card.jsx'

const App = () => {
  const profiles =[
    {
      name: "Saurabh Shukla",
      role: "Fullstack Developer",
      rate: "$500/hr",
      skills: ["HTML", "CSS", "JavaScript", "ReactJS"],
      description: "I am a full stack developer having 1 years of experience worked on multiple projects.",
      availability: "Available",
      imageUrl: "https://images.unsplash.com/photo-1615109398623-88346a601842?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fHww"
      
    },
    {
      name: "Sachin Shukla",
      role: "Backend Developer",
      rate: "$600/hr",
      skills: ["NodeJS", "Express", "MongoDB","ReactJS"],
      description: "Experienced backend developer with a focus on scalable web applications.",
      availability: "Busy",
      imageUrl: "https://c.pxhere.com/photos/1e/73/portrait_man_man_portrait_male_person_adult_face_caucasian-601668.jpg!d" 
    },
    {
      name: "Adarsh Dubey",
      role: "Full Stack Developer",
      rate: "$700/hr",
      skills: ["HTML", "JavaScript", "NodeJS", "MongoDB"],
      description: "Skilled full stack developer with expertise in both frontend and backend technologies.",
      availability: "Available",
      imageUrl: "https://images.stockcake.com/public/a/3/9/a398c3fc-790b-4c2c-8715-c8d5c627b08a_large/smiling-professional-man-stockcake.jpg"
    },
     {
      name: "Dhruv Gupta",
      role: "UI/UX Designer",
      rate: "$400/hr",
      skills: ["Figma", "Adobe XD", "Sketch","HTML"],
      description: "Creative UI/UX designer with a passion for user-centered design.",
      availability: "Available",
      imageUrl: "https://thumbs.dreamstime.com/b/young-attractive-business-man-standing-corporate-portrait-isolated-white-background-smiling-folded-arms-shirt-43486226.jpg"
     },
     {
      name: "Priya Sharma",
      role: "DevOps Engineer",
      rate: "$800/hr",
      skills: ["AWS", "Docker", "Kubernetes", "MongoDB"],
      description: "Experienced DevOps engineer specializing in cloud infrastructure and automation.",
      availability: "Busy",
      imageUrl: "https://img.freepik.com/free-photo/business-concept-portrait-confident-young-businesswoman-keeping-arms-crossed-looking-camera-w_1258-104422.jpg?semt=ais_hybrid&w=740&q=80"
     },
     {
      name: "Rohan Sharma",
      role: "Mobile App Developer",
      rate: "$650/hr",
      skills: ["React Native", "Flutter", "Swift", "MongoDB"],
      description: "Passionate mobile app developer with experience in cross-platform development.",
      availability: "Available",
      imageUrl: "https://thumbs.dreamstime.com/b/young-indian-business-man-2648949.jpg"
     },
     {
      name: "Aman Singh",
      role: "Data Scientist",
      rate: "$900/hr",
      skills: ["Python", "R", "Machine Learning","ReactJS"],
      description: "Data scientist with expertise in statistical analysis and machine learning algorithms.",
      availability: "Busy",
      imageUrl: "https://img.freepik.com/free-photo/smiling-young-male-professional-standing-with-arms-crossed-while-making-eye-contact-against-isolated-background_662251-838.jpg?semt=ais_hybrid&w=740&q=80"
     },
     {
      name: "Sneha Patel",
      role: "Quality Assurance Engineer",
      rate: "$450/hr",
      skills: ["Selenium", "JIRA", "Test Automation","ReactJS"],
      description: "Detail-oriented QA engineer with a focus on ensuring software quality and reliability.",
      availability: "Available",
      imageUrl: "https://static.vecteezy.com/system/resources/thumbnails/065/736/554/small/confident-professional-woman-smiling-with-arms-crossed-in-a-modern-office-setting-during-daytime-photo.jpeg"
     }
  ];
  console.log(profiles);
  return (
    <div className="parent">
      {
        profiles.map(function(ele){
          return <Card
          name={ele.name}
          role={ele.role}
          rate={ele.rate}
          skills={ele.skills}
          description={ele.description}
          availability={ele.availability}
          imageUrl={ele.imageUrl}
          />
        })
      }
  
    </div>
  )
}

export default App