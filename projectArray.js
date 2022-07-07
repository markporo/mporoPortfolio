import nasa from './public/assets/nasa.jpg';
import robros from './public/assets/robrosPHoto.png';
// import wedding from './public/assets/Wedding Site.jpeg'
// import poro from './public/assets/Poro site.jpg';
import jokes from './public/assets/JOKES.jpg';
import encounters from './public/assets/Encounters.png';
import emailPhoto from './public/assets/emailbandphoto.jpg';
import spotify from './public/assets/spotifyLogo.png';
import todo from './public/assets/TODO.png';
import wmp from './public/assets/WMP-square.png';
import newPortfolio from './public/assets/newPortfolio.png';
import firePhoto from './public/assets/firePhoto.png'

export const projects = [
  { src: firePhoto, id: 11, title: "FirePhoto", alt: "fire photos", githubUrl: "https://github.com/markporo/firephoto", liveUrl: "https://fire-photo-mporo.web.app/", description: "Add a photo for future inspiration to this instagram like photo album.  It uses react for front end and firebase for database storage and hosting." },
  { src: newPortfolio, id: 10, title: "This Portfolio", alt: "mporo portfolio", githubUrl: "https://github.com/markporo/mporoPortfolio", liveUrl: "https://mporo.netlify.app/", description: "My redesigned portfolio where you can view some of the projects I have worked on!  It is built with Next.Js framework and uses mostly Tailwind for styling." },
  { src: robros, id: 0, title: "Robros", alt: "Robot Friends", githubUrl: "https://github.com/markporo/myrobros", liveUrl: "https://robros.netlify.app/", description: "This project features an address book for all my robot friends.  The focus of this project was to get acquainted with a few 2022 React updates as well as styling the site with the Tailwind css-framework.  In this clean layout, you can search for a specific robot friend and receive their information with the help from a few API requests." },
  { src: "https://i.ibb.co/sQHC9Wf/Wedding-Site.jpg", id: 2, title: "The Wedding", alt: "M + S: THE WEDDING", githubUrl: "https://github.com/markporo/theWedding", liveUrl: "https://young-savannah-18383.herokuapp.com/", description: "This was a special project for obvious reasons. Before I enrolled and graduated from Bloom Institute of Technology I built this with strictly HTML, CSS, Javascript, and Mongoose/ Mongo DB.  The main feature includes an RSVP form that allowed guests to submit data.  Try it out with the name --Mark Porostosky!" },
  { src: wmp, id: 3, title: "Water My Plants App", alt: "WMPlants", githubUrl: "https://github.com/ptpt-water-my-plants-2/back-end-markporo", liveUrl: "https://water-my-plants-app2.netlify.app/", description: "Do you have green thumbs?  If not, maybe this is the app for you. Register yourself and start uploading your plants and information on how to take care of them.  I built the backend with Postgres, Node, and Express.  I built most of the front end using React.  Try logging in with markporo and 1234 or create your own user!" },
  { src: "https://i.ibb.co/f9h3F22/Poro-site.jpg", id: 4, title: "Music Site", alt: "Poro Music", githubUrl: "https://github.com/markporo/poro-website", liveUrl: "https://poromusic.com/", description: "This is a responsive and clean looking band website!  It utilizes HTML/ CSS and Javascript. It is designed with a custom layout and deployed via Netlify." },
  { src: nasa, id: 1, title: "NASA Photo Of The Day", alt: "Nasa Photo of the Day", githubUrl: "https://github.com/markporo/nasa-photo-of-day", liveUrl: "https://markporo-loves-outer-space.netlify.app/", description: "Who doesn't love outer space! This project requests images and data from NASA! Thanks to React, API's, Axios, and HTML/ CSS we can learn and see a little bit more about the universe!" },
  { src: encounters, id: 5, title: "Author Site", alt: "Encounters Devo Series", githubUrl: "https://www.candyporostosky.com/", liveUrl: "https://www.candyporostosky.com/", description: "This site was customized for a local author using the world's most popular CMS, Wordpress. WooCommerce was used for selling and hosting books!" },
  { src: emailPhoto, id: 6, title: "HTML Email", alt: "TLATW EMAIL Template", githubUrl: "https://github.com/markporo/tlatwEmail", liveUrl: "https://oneofmytlatwemails.netlify.app/", description: "This is an email template for a band that I have played in for over 11 years. Emails have to be kept pretty basic so this template uses simply table elements to structure the layout, but it still looks good on any device! " },
  { src: spotify, id: 7, title: "Figma Spotify Design", alt: "Spotify Layout", githubUrl: "", liveUrl: "https://www.figma.com/proto/kdP2Apis686UyWg8fXEut0/Spotify-UI?node-id=2%3A10&scaling=scale-down&page-id=0%3A1&starting-point-node-id=2%3A10", description: "This is a clone of a Spotify layout for mobile using Figma!" },
  { src: todo, id: 8, title: "To Do List", alt: "To DO", githubUrl: "", liveUrl: "https://shrouded-mesa-93336.herokuapp.com/", description: "This is a to do list web app created with ejs, API requests, and traditional front end technologies. Mongo DB is being used to storing the to do's. " },
  { src: jokes, id: 9, title: "Joke Book", alt: "We Are Laughing", githubUrl: "https://github.com/markporo/worstBestJokes", liveUrl: "https://morning-taiga-90296.herokuapp.com/", description: "Need a laugh or have a joke to share?  This is a site I created to remember the best of the worst jokes.  It uses javascript, lodash, ejs, Mongo DB, and other technologies to keep you laughing for minutes!" },

]
