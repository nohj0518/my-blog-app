import { useState } from "react";
const IMG_1 =
  "https://images.unsplash.com/photo-1727209093337-4e9ba71e3f26?q=80&w=3105&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const IMG_2 =
  "https://images.unsplash.com/photo-1723306743371-38f6666be1a3?q=80&w=2980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const IMG_3 =
  "https://images.unsplash.com/photo-1710973087064-d0feb252e866?q=80&w=2981&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export default function Carousel() {
  const [activeImage, setActiveImage] = useState(1);
  return (
    <>
      <div>
        <div className="carousel">
          <ul className="carousel__slides">
            <input
              type="radio"
              name="radio-buttons"
              id="img-1"
              checked={activeImage === 1}
              readOnly
            />
            <li className="carousel__slide-container">
              <div className="carousel__slide-img">
                <img alt="scenery-1" src={IMG_1} />
              </div>
              <div className="carousel__controls">
                <label
                  onClick={() => setActiveImage(3)}
                  className="carousel__slide-prev"
                >
                  <span>&lsaquo;</span>
                </label>
                <label
                  onClick={() => setActiveImage(2)}
                  className="carousel__slide-next"
                >
                  <span>&rsaquo;</span>
                </label>
              </div>
            </li>
            <input
              type="radio"
              name="radio-buttons"
              id="img-2"
              checked={activeImage === 2}
              readOnly
            />
            <li className="carousel__slide-container">
              <div className="carousel__slide-img">
                <img alt="scenery-2" src={IMG_2} />
              </div>
              <div className="carousel__controls">
                <label
                  onClick={() => setActiveImage(1)}
                  className="carousel__slide-prev"
                >
                  <span>&lsaquo;</span>
                </label>
                <label
                  onClick={() => setActiveImage(3)}
                  className="carousel__slide-next"
                >
                  <span>&rsaquo;</span>
                </label>
              </div>
            </li>
            <input
              type="radio"
              name="radio-buttons"
              id="img-3"
              checked={activeImage === 3}
              readOnly
            />
            <li className="carousel__slide-container">
              <div className="carousel__slide-img">
                <img alt="scenery-3" src={IMG_3} />
              </div>
              <div className="carousel__controls">
                <label
                  onClick={() => setActiveImage(2)}
                  className="carousel__slide-prev"
                >
                  <span>&lsaquo;</span>
                </label>
                <label
                  onClick={() => setActiveImage(1)}
                  className="carousel__slide-next"
                >
                  <span>&rsaquo;</span>
                </label>
              </div>
            </li>

            <div className="carousel__dots">
              <label
                onClick={() => setActiveImage(1)}
                className="carousel__dot"
                id="img-dot-1"
              ></label>
              <label
                onClick={() => setActiveImage(2)}
                className="carousel__dot"
                id="img-dot-2"
              ></label>
              <label
                onClick={() => setActiveImage(3)}
                className="carousel__dot"
                id="img-dot-3"
              ></label>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}
