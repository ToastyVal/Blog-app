import Footer from './components/footer';
import BlogPost from './components/blogPost';
import NavBar from './components/navBar';
import './App.css';
// import './styles.css'

function App() {
  return (
    <div className="App">
      <NavBar />
      <article>
        <BlogPost />
      </article>

      {/* this is the footer that should be on every page */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
