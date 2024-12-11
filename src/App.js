/**
 * App Component - Main entry point of the application.
 * 
 * This file is responsible for rendering the main structure of the application.
 * It includes the navigation, various content sections, and other important
 * components like the footer and chat icon. The components are imported 
 * and arranged in a logical order to form the complete user interface.
 * 
 * The following sections are rendered:
 * - Navigation Bar (`Nav`)
 * - Main Section (`MainSection`)
 * - Achievements Section (`AchievementsSection`)
 * - Use Cases Section (`UseCases`)
 * - Possibilities Section (`Possibilities`)
 * - Reviews Section (`Reviews`)
 * - Platforms Section (`Platforms`)
 * - SignUp Section (`SignUp`)
 * - Footer (`Footer`)
 * - Chat Icon (`ChatIcon`)
 * 
 * External libraries:
 * - Slick Carousel: For carousels, with styles imported for proper display.
 * 
 * @returns {JSX.Element} The main app component that renders the layout of the website.
 */

import './App.css';
import Nav from './components/nav';
import MainSection from './components/main';
import AchievementsSection from './components/achievementsSection';
import Platforms from './components/platforms';
import SignUp from './components/signUp.js';
import Footer from './components/footer/index.js';
import ChatIcon from './components/chat/index.js';
import Reviews from './components/reviews/index.js';
import Possibilities from './components/possibilities/index.js';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import UseCases from './components/useCases/index.js';

function App() {
  return (
    <div className="App">
      <Nav />
      <MainSection />
      <AchievementsSection />
      <UseCases />
      <Possibilities />
      <Reviews />
      <Platforms />
      <SignUp />
      <Footer />
      <ChatIcon />
    </div>
  );
}

export default App;
