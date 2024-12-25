import React from "react";
import ReactDOM from "react-dom";
import CardLayers3d from "./CardLayers3d";
import { useNavigate } from 'react-router-dom'; 

const cards = [
  {id:1, cardTitle: 'Placement Series', coverImage: 'Image1' },
  {id:2, cardTitle: 'Internship Series', coverImage: 'Image2'},
  {id:3, cardTitle: 'Course Blogs', coverImage: 'Image3'},
];

function BlogsPage(){
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/blog/${id}`);
   };

    return(
        <div className='gradient_background'>
            <h1>Blogs Page</h1>
              <div style={{
                display: 'flex', 
                flexDirection: 'row',
                alignItems: 'center', 
                justifyContent: 'space-between', 
                gap: '80px',
                padding: '200px' 
              }}>
                {cards.map((card, index) =>(
                <div
                        key={card.id}
                        onClick={() => handleCardClick(card.id)}
                        style={{ cursor: 'pointer' }}
                >
                  <CardLayers3d 
                    key = {card.id}
                    cardTitle={card.cardTitle}
                    coverImage={card.coverImage}
                    // contentText={card.coverText}
                  />
                </div>  
                ))}
              </div>  
        </div>
    );
}

export default BlogsPage;