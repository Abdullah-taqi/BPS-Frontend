import React, {useState} from 'react'
import './Slider.css'

export default function Slider( props ) {

    const imgs = [`${process.env.PUBLIC_URL}/Imgs/img-1.jpg`, `${process.env.PUBLIC_URL}/Imgs/img-2.jpg`, `${process.env.PUBLIC_URL}/Imgs/img-3.jpg`, `${process.env.PUBLIC_URL}/Imgs/img-4.jpg`];

    const [slideIndex, setSlideIndex] = useState(1)
    const [nindex,setnindex]=useState(0)


    return (
        <div className="container-slider">
            {imgs.map((obj, index) => {
                setTimeout(() => {
                    setnindex(nindex+1)
                    index=(nindex+1)%4;
                    setSlideIndex(index);
                    setnindex(index)

                  }, 5000);
                return (
                    <div
                    key={obj.id}
                    className={slideIndex === index ? "slide active-anim" : "slide"}
                    >
                        <img src={obj} alt="img"/>
                    </div>
                )
            })}

            <div className="container-dots">
                {Array.from({length: props.length}).map((item, index) => (
                    <div 
                    className={slideIndex === index  ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
        </div>
    )
}
