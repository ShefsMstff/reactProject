import React from 'react'
import './_Home.scss'
const Home = () => {
  return (
   <>
    <section id='home-image'>
        <img src="https://reactjs-ecommerce-app.vercel.app/assets/main.png.jpg"/>
        <div className="home-image-text">
            <h1>New Season Arrivals</h1>
            <p>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
    </section>


    <section id='about-us' >
<h1 className='about-heading'>About Us</h1>
<div className='about-text'>
   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim dolorum voluptatibus est nisi doloribus nemo possimus fugiat neque? Ducimus optio reiciendis minus recusandae repellat cumque, omnis minima rerum facere pariatur a saepe veniam sunt architecto ratione cum dolores at expedita placeat accusamus. Voluptates eligendi ad quibusdam deserunt consequuntur quisquam tempora! Enim sunt saepe eligendi vel! Numquam ratione sint dolorum hic consectetur veritatis tempora praesentium animi deserunt vitae fugit libero iste cumque necessitatibus voluptatum ut totam, nam dolorem incidunt laudantium rem pariatur voluptas aliquid. Aliquid culpa laudantium sed repellat voluptate repellendus, maiores ea id cum expedita doloremque exercitationem alias ad eveniet quo! Laborum ipsam numquam sed magni adipisci officia dolorem quis.</p>
</div>

    </section>
   </>

    
  )
}

export default Home