'use client'
import React from 'react'
import fs from 'fs';
const SlidesGeneratorBody = () => {
    const apiUrl = 'https://api.openai.com/v1/engines/davinci-codex/completions';

    const generateSlides = async (content) => {
        try {
          const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${process.env.OPENAI_KEY}`,
            },
            body: JSON.stringify({
              prompt: content,
              max_tokens: 500,
            }),
          });
    
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
    
          const responseData = await response.json();
          const generatedSlides = responseData.choices[0].text;
    
          
          fs.writeFileSync('public/generated_slides.pdf', generatedSlides);
    
          console.log('Slides generated and saved successfully.');
        } catch (error) {
          console.error('Error generating slides:', error.message);
          throw error;
        }
      };

  return (
    <div>
        <button onClick={()=>generateSlides('generate a presentation about health care')}> enrate</button>
    </div>
  )
}

export default SlidesGeneratorBody