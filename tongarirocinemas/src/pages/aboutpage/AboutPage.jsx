import './aboutpage.css'
import React from 'react'
import { Footer, Navbar } from '../../components/component_index'

const AboutPage = () => {
  return (
    <div className='tc__aboutpage'>
      <Navbar />
      <div className='tc__aboutpage-container'>
        <h1>About Us</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus eos quae voluptatem porro impedit explicabo deserunt veritatis, provident obcaecati perferendis tempore fuga in unde modi? Eius, veniam. Odit, repellat cumque et perspiciatis doloremque id eveniet a animi placeat labore ratione maxime repudiandae velit vitae molestiae quam. Ut repudiandae tenetur inventore, magni incidunt minima aliquam vel, aut distinctio est consequatur. Autem corporis harum nostrum, et ex temporibus commodi? Maiores non molestiae possimus delectus! Atque tempore eligendi illum consectetur sit quis dolor facere debitis, porro fuga veritatis eos dolore<br/> excepturi in quaerat ipsum eius, voluptas eaque dicta sed dolorem ex odio? Ipsam, optio earum? Illo debitis, possimus repudiandae placeat ea suscipit, recusandae nihil odit eveniet optio saepe dignissimos alias quia tempore. Numquam eos tenetur suscipit obcaecati necessitatibus, est optio recusandae earum, veritatis itaque possimus debitis repellat harum nihil vitae<br/> in incidunt ea nisi dignissimos eum quas unde. Sapiente itaque molestiae ipsam vel error ipsum accusantium. Excepturi repellendus deserunt adipisci deleniti fugiat amet qui commodi non corrupti praesentium nulla alias modi mollitia blanditiis at laudantium, quos nemo ad eveniet! Consectetur excepturi rerum eligendi odit sint quo ullam iusto veritatis ex nesciunt inventore asperiores facere quis suscipit rem velit nemo et magni, harum architecto!</p>
        <div className='tc__aboutpage-container_content'>
          <div className='tc__aboutpage-container_content-museum'>
            <h3>Museum</h3>
            <img src='' />
          </div> 
          <div className='tc__aboutpage-container_content-findus'>
            <h3>Find Us</h3>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7128.059518038829!2d174.79569171443424!3d-41.309302001315906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d38b1fc49e974cb%3A0xa00ef63a213b470!2sWellington!5e0!3m2!1sen!2snz!4v1663562870521!5m2!1sen!2snz" width="auto" height="auto"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>  
        </div>  
      </div>
      <Footer />
    </div>
  )
}

export default AboutPage