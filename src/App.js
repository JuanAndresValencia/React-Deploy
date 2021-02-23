import './App.css';
import Developerimg from './assets/img-header.jpg'
import Linkedinlogo from './assets/linkedin.svg'
import Githublogo from './assets/github.svg'
import Twitterlogo from './assets/gorjeo.svg'
import Instagramlogo from './assets/instagram.svg'
import Youtubelogo from './assets/youtube.svg'

const Header = () => {
   return (
     <div>
       <div className="img-container">
         <img src={Developerimg} />
       </div>
       
       <div className="developer-information">
         <h1> Hello Im David </h1>
         <p> Im a Frontend Developer and i Really 
           Love Build Websites, With Html, Css and Javascript
         </p>
       </div>
     </div>
   )
}

const Logos = () => {
  return (
    <div>
      <div className="contenedor-logos"> 
         <img src={Linkedinlogo} />
         <img src={Githublogo} />
         <img src={Instagramlogo} />
         <img src={Twitterlogo} />
         <img src={Youtubelogo} />
      </div>
    </div>
  )
}


function App() {
  return (
    <div className="App">
      <Header />
      <Logos />
    </div>
  );
}

export default App;
