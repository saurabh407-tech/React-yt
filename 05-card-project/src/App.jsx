import React from 'react'
import Card from './components/card.jsx'
const App = () => {
  const jobOpenings = [
  {
    brandlogo: "https://1000logos.net/wp-content/uploads/2016/11/New-Google-Logo.jpg",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Fresher",
    pay: 55, // dollars per hour
    location: "Bangalore, India"
  },
  {
    brandlogo: "https://thumbs.dreamstime.com/z/amazon-logo-editorial-illustrative-white-background-eps-download-vector-jpeg-banner-ai-amazon-logo-editorial-illustrative-208329107.jpg",
    companyName: "Amazon",
    datePosted: "2 weeks ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 48,
    location: "Hyderabad, India"
  },
  {
    brandlogo: "https://static.vecteezy.com/system/resources/thumbnails/004/201/564/small/meta-social-network-emblem-blue-stylish-letter-m-or-mobius-band-vector.jpg",
    companyName: "Meta",
    datePosted: "1 week ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 60,
    location: "Mumbai, India"
  },
  {
    brandlogo: "https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png",
    companyName: "Apple",
    datePosted: "10 days ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 75,
    location: "Bangalore, India"
  },
  {
    brandlogo: "https://static.vecteezy.com/system/resources/previews/020/336/373/non_2x/netflix-logo-netflix-icon-free-free-vector.jpg",
    companyName: "Netflix",
    datePosted: "3 weeks ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 80,
    location: "Remote, India"
  },
  {
    brandlogo: "https://toppng.com/uploads/preview/microsoft-logo-png-hd-11660471230b6nd5n6huh.png",
    companyName: "Microsoft",
    datePosted: "4 days ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 58,
    location: "Noida, India"
  },
  {
    brandlogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Tesla_logo.png/500px-Tesla_logo.png",
    companyName: "Tesla",
    datePosted: "2 days ago",
    post: "Software Developer",
    tag1: "Full Time",
    tag2: "Fresher",
    pay: 50,
    location: "Pune, India"
  },
  {
    brandlogo: "https://substackcdn.com/image/fetch/$s_!aFzv!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa27a43b7-f1ec-4586-9898-5f43c9b7cdbf_1000x1000.jpeg",
    companyName: "IBM",
    datePosted: "6 weeks ago",
    post: "Java Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: 35,
    location: "Kolkata, India"
  },
  {
    brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIP5KTNtwE18A_XpYzFj5Usn-x2j0ZsyED2A&s",
    companyName: "Oracle",
    datePosted: "8 days ago",
    post: "Database Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 65,
    location: "Chennai, India"
  },
  {
    brandlogo: "https://download.logo.wine/logo/Intel/Intel-Logo.wine.png",
    companyName: "Intel",
    datePosted: "10 weeks ago",
    post: "System Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 52,
    location: "Bangalore, India"
  }
];
   console.log(jobOpenings);
  return (
    <div className='parent'>
      {
        jobOpenings.map(function(elem)
      {
        return <Card company={elem.companyName} logo={elem.brandlogo} date={elem.datePosted} posts={elem.post} tags1={elem.tag1} tags2={elem.tag2} sallary={elem.pay} place={elem.location} />
      })
      }
      <div>Saurabh Shukla</div>
      </div>
  )
}

export default App