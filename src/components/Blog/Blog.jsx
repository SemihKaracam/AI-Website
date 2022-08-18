import React from 'react'
import Article from '../Article/Article'
import "./blog.css"
import image1 from "../../assets/blog01.png"
import image2 from "../../assets/blog02.png"
import image3 from "../../assets/blog03.png"
import image4 from "../../assets/blog04.png"
import image5 from "../../assets/blog05.png"


const Blog = () => {
  return (
    <div className='blog'>
      <h3 className='blog-title gradient_text'>
        A lot is happening, We are blogging about it.
      </h3>
      <div className='blog-wrapper'>
        <Article className="grid-row-span-2" image={image1} title="GPT-3 and Open AI is the future.Let us explore how it is" date="Sep 26, 2021" />
        <Article className="grid-item" image={image2} title="GPT-3 and Open AI is the future.Let us explore how it is" date="Sep 26, 2021" />
        <Article className="grid-item" image={image3} title="GPT-3 and Open AI is the future.Let us explore how it is" date="Sep 26, 2021" />
        <Article className="grid-item" image={image4} title="GPT-3 and Open AI is the future.Let us explore how it is" date="Sep 26, 2021" />
        <Article className="grid-item" image={image5} title="GPT-3 and Open AI is the future.Let us explore how it is" date="Sep 26, 2021" />
      </div>
    </div>
  )
}

export default Blog

