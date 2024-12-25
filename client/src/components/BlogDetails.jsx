import React from 'react';
import ReactDOM from 'react-dom';
import HorizontalCard from './HorizontalCard';
import { useParams } from 'react-router-dom';
import image1 from '../images/image1.png';
import image2 from '../images/image2.png';
import image3 from '../images/image3.png'; 

function BlogDetails(){
    const { id } = useParams();

    const blogData = [
        { id: 1, title: 'Blog 1', content: 'Placement Blogs', background: image1},
        { id: 2, title: 'Blog 2', content: 'Internship Blogs', background: image2},
        { id: 3, title: 'Blog 3', content: 'Course Blogs', background: image3},
    ];

    const overlayStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.65)', 
        zIndex: 1, 
    };

    const blog = blogData.find((b) => b.id === parseInt(id, 10));

    if (!blog) {
        return <h1>Blog not found</h1>;
    }

    return(
        <div className='gradient_background'>
          
            <div
              style={{
                backgroundImage: `url(${blog.background})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh',
                width: '100vw',
                
                }}
            >
               <div style = {{overlayStyle}}>  </div> 
                <h1
                style={{
                    position: 'absolute',
                    left: '50%',
                    top: '40%',
                    transform: 'translate(-50%, -50%)',
                    fontSize: '60px',
                }}
                >
                  {blog.content}
                </h1>
               <h1
                  style={{
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    fontSize: '60px',
                    
                  }}
               > 
               
               <span style={{ color: '#6082B6', fontFamily: 'serif' }}>EESA  </span>
               <span style={{ color: '', fontFamily: 'inherit' }}>  IIT Indore</span>
               </h1>
                 
            </div >
            <div className = 'gradient_background' style ={{padding: '20px'}}>
               <HorizontalCard />
               <HorizontalCard />
            </div>   
        </div>
    );
}

export default BlogDetails;