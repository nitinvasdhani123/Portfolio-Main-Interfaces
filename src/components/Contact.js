import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <>
    <div id='contact'>
        <h1>Contact Me</h1>
        <div className='contact'>
            <h2>Send Message...</h2>
            <form action="https://formspree.io/f/xknaledq" method="POST">
                <div>
                    {/* <label for='name'>Name : </label> */}
                    <input type="text" name="name" id='name' className='input' placeholder='Enter your name'></input>
                </div>
                <div>
                    {/* <label for='email'>Email : </label> */}
                    <input type="email" name="email" id='email' className='input' placeholder='Enter your email'></input>
                </div>
                {/* <div className='message'> */}
                <div>
                    {/* <label for='textarea'>Message :</label>  */}
                    <textarea id='textarea' className='textarea' rows={3} cols={71} placeholder='Write a messge' name="message"></textarea>
                </div>
                {/* </div> */}
                <button type="submit">Send</button>
            </form>
        </div>
    </div>
    <div className='connect'>
        <h4>Connect With Me....</h4>
    </div>
        <div className='icons'>
            <a href='https://github.com/nitinvasdhani123/' className='github'>
            <i class="fa-brands fa-github fa-beat-fade" ></i>
            </a>
            <a href='https://www.linkedin.com/in/nitin-kumar-vasdhani/' className='linkedin'>
            <i class="fa-brands fa-linkedin fa-beat-fade"></i>
            </a>
            <a href='https://www.instagram.com/nitin_vasdhani/' className='instagram'>
            <i class="fa-brands fa-instagram fa-beat-fade"></i>
            </a>
            <a href='mailto:nitinkumarvasdhani786@gmail.com' className='email'>
            <i class="fa-solid fa-envelope fa-beat-fade"></i>
            </a>
            <a href='tel:9368860517' className='phone'>
            <i class="fa-solid fa-phone fa-beat-fade"></i>
            </a>
        </div>
    <div className='thanks'>
        <h2>Thank You for Visting my Portfolio.....!</h2>
    </div>
    </>
  )
}

export default Contact