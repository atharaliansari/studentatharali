import logo from './logo.svg';
import './App.css';
import Navbar from './layout/Navbar';
import Section from './CardSection/CardSection';
import Okfooter from './Okfooter/Okfooter';


function App() {
    return (
        <div>
            <Navbar />
            {/* <div className='bg-gradient-to-r h-screen flex justify-center items-center from-indigo-500 via-purple-500 to-pink-500'>
                <div>
                    <span className="text-3xl md:text-5xl font-bold">My </span>
                    <span className="text-3xl md:text-5xl font-bold">Chatbot </span>
                    <span className="text-3xl md:text-5xl font-bold">AI </span>
                    <span className="text-3xl md:text-5xl font-bold">Assistant </span>
                </div>
            </div> */}
            <div className='container'>
                <Section />
            </div>
            <div className='AllFooter'>
                <Okfooter/>

            </div>
        </div>
    )

}

export default App;

