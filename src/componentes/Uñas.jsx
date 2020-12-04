import React, { useState } from "react";
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
  } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";

const items = [
    {
      src: "manicure-pedicure.jpeg",
      altText: 'Primera imagen'
    },
    {
      src: "manicure-semi.jpeg",
      altText: 'Segunda imagen'
    },
    {
      src: "manicure-tradicional",
      altText: 'Tercera imagen'
    }
  ];

function Uñas(props){
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
      }
    
      const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
      }
    
      const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
      }
    
      const slides = items.map((item) => {
        return (
          <CarouselItem
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={item.src}
          >
            <img src={item.src} alt={item.altText} width="100%" height="400px"/>
            <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
          </CarouselItem>
        );
      });

    return(
       <div >
          <div className="container" style={{width:"1200px", height:"780px", marginTop:"100px",marginBottom:"40px", background:"rgba(255,226,195, .6)", color:"#c5a011", padding:"20px", boxShadow:"0px 0px 10px 3px grey"}}>
            <h3>Por que hacerte este servicio?</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil soluta repudiandae nobis eveniet! Quaerat provident pariatur aliquam debitis quo. Excepturi similique dicta, quas magni exercitationem iure vitae repudiandae harum quia cum doloribus est non veritatis esse quaerat itaque facere quo enim ullam totam saepe velit fugiat et. Optio, nihil laborum.</p>
            <hr/>
            <h3>Cuanto tiempo demora?</h3>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim perspiciatis rerum autem error quo, quibusdam iure earum fuga aliquam non quia, culpa cumque voluptas cupiditate officia exercitationem sapiente ducimus laborum.
            <hr/>
            <h3>Mira los resultados</h3>
            <Carousel activeIndex={activeIndex} next={next} previous={previous}>
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
            </Carousel>

          </div>
       </div>
    );
};

export default Uñas;