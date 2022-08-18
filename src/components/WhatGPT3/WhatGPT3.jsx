import React from 'react'
import Feature from '../Feature/Feature'
import "./whatgpt3.css"

const WhatGPT3 = () => {
    return (
        <div className='what-gpt3'>
            <div className='what-gpt3-wrapper'>
                <div className='top-gpt3'>
                    <Feature title="What is GPT-3" />
                    <Feature info="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by." />
                </div>
                <div className='middle-gpt'>
                    <h3 className='gradient_text'>The possibilities are beyond your imagination</h3>
                    <p>Explore The Library</p>
                </div>
                <div className='bottom-gpt3'>
                    <Feature title="Chatbots" info="We so opinion friends me message as delight. Whole front do of plate heard oh ought." />
                    <Feature title="Knowledgebase" info="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments" />
                    <Feature title="Education" info="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments" />
                </div>
            </div>
        </div>
    )
}

export default WhatGPT3