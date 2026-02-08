import React from 'react'
import Card from './assets/card'
import User from './assets/user'

const App = () => {
  const jobs = [
    {
      id: 1,
      companyImg: "https://thumbs.dreamstime.com/b/amazon-logo-white-background-montreal-canada-july-printed-paper-98221126.jpg",
      daysLeft: "5 days to go",
      role: "UI/UX Designer",
      type: "Part Time",
      level: "Senior Level",
      location: "Mumbai, Maharashtra",
      salary: "$120/hr",
    },
    {
      id: 2,
      companyImg: "https://fabrikbrands.com/wp-content/uploads/Apple-Logo-History-1-1155x770.png",
      daysLeft: "3 days to go",
      role: "Frontend Developer",
      type: "Full Time",
      level: "Mid Level",
      location: "Bangalore, Karnataka",
      salary: "$100/hr",
    },
    {
      id: 3,
      companyImg: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      daysLeft: "7 days to go",
      role: "Backend Engineer",
      type: "Remote",
      level: "Junior Level",
      location: "Remote",
      salary: "$80/hr",
    },
    {
      id: 4,
      companyImg: "https://www.shutterstock.com/image-photo/new-york-usa-july-17-260nw-2659171287.jpg",
      daysLeft: "2 days to go",
      role: "Software Engineer",
      type: "Full Time",
      level: "Senior Level",
      location: "Hyderabad, Telangana",
      salary: "$110/hr",
    },
    {
      id: 5,
      companyImg: "https://i.ytimg.com/vi/GV3HUDMQ-F8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBDX0meXWntQams20Wn3jArUnablg",
      daysLeft: "6 days to go",
      role: "React Developer",
      type: "Contract",
      level: "Mid Level",
      location: "Pune, Maharashtra",
      salary: "$95/hr",
    },
    {
      id: 6,
      companyImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMW9AB13KyfzyL04pPQ6MNSttPFG3O06v9ig&s",
      daysLeft: "4 days to go",
      role: "Product Designer",
      type: "Hybrid",
      level: "Senior Level",
      location: "Gurgaon, Haryana",
      salary: "$105/hr",
    },
    {
      id: 7,
      companyImg: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
      daysLeft: "8 days to go",
      role: "Data Analyst",
      type: "Full Time",
      level: "Junior Level",
      location: "Chennai, Tamil Nadu",
      salary: "$70/hr",
    },
    {
      id: 8,
      companyImg: "https://static.vecteezy.com/system/resources/previews/060/100/954/non_2x/adobe-logo-free-download-adobe-logo-free-png.png",
      daysLeft: "1 day to go",
      role: "UX Researcher",
      type: "Part Time",
      level: "Mid Level",
      location: "Noida, Uttar Pradesh",
      salary: "$90/hr",
    },
    {
      id: 9,
      companyImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEy0cgSHTCshtUnw9x-ArcasdhWQFF5ZIdbg&s",
      daysLeft: "9 days to go",
      role: "Full Stack Developer",
      type: "Remote",
      level: "Senior Level",
      location: "Remote",
      salary: "$130/hr",
    },
    {
      id: 10,
      companyImg: "https://i0.wp.com/ittech-pulse.com/wp-content/uploads/2026/01/Infosys-is-the-Fastest-Growing-IT-Services-Brand-Globally-with-a-CAGR-of-15-in-Brand-Value-01.png?fit=1920%2C1080&ssl=1",
      daysLeft: "10 days to go",
      role: "Java Developer",
      type: "Full Time",
      level: "Mid Level",
      location: "Mysore, Karnataka",
      salary: "$85/hr",
    },
  ];

  console.log(jobs)


  return (
    <div className="cards">
      {jobs.map(function (elem, idx) {
        return <div key={idx}>
          <Card logo={elem.companyImg} salary={elem.salary} days={elem.daysLeft}

            role={elem.role} type={elem.type} level={elem.level} location={elem.location} />
        </div>

      })}
    </div>

  )
}

export default App
