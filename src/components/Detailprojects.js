import React from 'react'
import './Detailprojects.css'
// import Navbar1 from './Navbar1'
import netflixclone from './netflixclone.jpeg'
import myfoodservices from './myfoodservices.jpeg'
import Hacker from './Hacker.jpeg'
import infohunt from './infohunt.jpeg'
import normalcalculator from './normalcalculator.jpeg'
import bmicalculator from './bmicalculator.jpeg'
import todo from './todo.jpeg'
import unacademysymbol from './unacademysymbol.jpeg'
import quote from './quote.jpeg'
import weather from './weather.jpeg'
import tictactoegame from './tictactoegame.jpeg'

function Detailprojects() {
  return (
    <div id='detailproject'>
        <h2>My Projects</h2>
        <div className='Projectcards'>
            <div className="card text-bg-secondary p-3 m-5" style={{width: "20rem"}}>
                <img className="card-img-top" src={netflixclone} alt='error'/>
                <div className="card-body">
                    <h5 className="card-title">Netflix Clone</h5>
                    <a href="https://netflix-clone-d.netlify.app/" className="btn btn-outline-warning">Visit</a>
                </div>
            </div>
            <div className="card text-bg-secondary p-3 m-5" style={{width: "20rem"}}>
                <img className="card-img-top" src={myfoodservices} alt='error'/>
                <div className="card-body">
                    <h5 className="card-title">My Food Services Webpage</h5>
                    <a href="https://myfood-services.netlify.app/" className="btn btn-outline-warning">Visit</a>
                </div>
            </div>
            <div className="card text-bg-secondary p-3 m-5" style={{width: "20rem"}}>
                <img className="card-img-top" src={Hacker} alt='error'/>
                <div className="card-body">
                    <h5 className="card-title">Hacker's website</h5>
                    <a href="https://hackers-website-bootstrap.netlify.app/" className="btn btn-outline-warning">Visit</a>
                </div>
            </div>
            <div className="card text-bg-secondary p-3 m-5" style={{width: "20rem"}}>
                <img className="card-img-top" src={infohunt} alt='error'/>
                <div className="card-body">
                    <h5 className="card-title">Info Hunt Search Engine</h5>
                    <a href="https://infohunt-searchengine.netlify.app/" className="btn btn-outline-warning">Visit</a>
                </div>
            </div>
            <div className="card text-bg-secondary p-3 m-5" style={{width: "20rem"}}>
                <img className="card-img-top" src={normalcalculator} alt='error'/>
                <div className="card-body">
                    <h5 className="card-title">Normal Calculator</h5>
                    <a href="https://normal-calculator-nkv.netlify.app/" className="btn btn-outline-warning">Visit</a>
                </div>
            </div>
            <div className="card text-bg-secondary p-3 m-5" style={{width: "20rem"}}>
                <img className="card-img-top" src={bmicalculator} alt='error'/>
                <div className="card-body">
                    <h5 className="card-title">BMI Calculator</h5>
                    <a href="https://bmi-calculator-nkv.netlify.app/" className="btn btn-outline-warning">Visit</a>
                </div>
            </div>
            <div className="card text-bg-secondary p-3 m-5" style={{width: "20rem"}}>
                <img className="card-img-top" src={todo} alt='error'/>
                <div className="card-body">
                    <h5 className="card-title">My TODO List</h5>
                    <a href="https://my-todo-web-app-reactjs.netlify.app/" className="btn btn-outline-warning">Visit</a>
                </div>
            </div>
            <div className="card text-bg-secondary p-3 m-5" style={{width: "20rem"}}>
                <img className="card-img-top" src={unacademysymbol} alt='error'/>
                <div className="card-body">
                    <h5 className="card-title">Unacademy symbol</h5>
                    <a href="https://unacademy-symbol.netlify.app/" className="btn btn-outline-warning">Visit</a>
                </div>
            </div>
            <div className="card text-bg-secondary p-3 m-5" style={{width: "20rem"}}>
                <img className="card-img-top" src={quote} alt='error'/>
                <div className="card-body">
                    <h5 className="card-title">Random Quote's Generator</h5>
                    <a href="https://random-quotes-generator-using-api-nkv.netlify.app/" className="btn btn-outline-warning">Visit</a>
                </div>
            </div>
            <div className="card text-bg-secondary p-3 m-5" style={{width: "20rem"}}>
                <img className="card-img-top" src={weather} alt='error'/>
                <div className="card-body">
                    <h5 className="card-title">Weather checking Web App</h5>
                    <a href="https://weather-web-app-nkv.netlify.app/" className="btn btn-outline-warning">Visit</a>
                </div>
            </div>
            <div className="card text-bg-secondary p-3 m-5" style={{width: "20rem"}}>
                <img className="card-img-top" src={tictactoegame} alt='error'/>
                <div className="card-body">
                    <h5 className="card-title">Tic Tac Toe Web App game</h5>
                    <a href="https://tic-tac-toe-web-app-game.netlify.app/" className="btn btn-outline-warning">Visit</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Detailprojects