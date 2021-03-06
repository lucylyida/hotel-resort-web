import React, { useState } from "react";
import { withMedia } from "react-media-query-hoc";

import * as Colors from "../../../config/color.config";
import Line from "../../../assets/image/line.png";
import * as Font from "../../../config/font.config";
import { fsc } from "../../../helper/fontControlHelper";

const RestaurantGallery = props => {
  const { media, Data, Type, Time } = props;
  const [hover, setHover] = useState(false);

  const _handleHover = e => {
    setHover(!hover);
    if (hover === true) {
      document.getElementById(e.target.id).style.transform = "scale(1)";
    } else {
      document.getElementById(e.target.id).style.transform = "scale(1.2)";
    }
  };
  return (
    <div className="container text-left border-bottom py-3">
      <div className="d-flex flex-column align-items-center">
        <span
          style={{
            fontSize: fsc(media, 35),
            fontFamily: Font.bodyTitle,
            fontWeight: "bold"
          }}
        >
          {Type.toUpperCase()}
        </span>
        {/* file seprate */}
        <p style={{ color: Colors.bodyText, fontWeight: "bold" }}>{Time}</p>
      </div>

      <div className="d-flex flex-row flex-wrap">
        {Data.map((v, k) => (
          <div className="col-lg-6 p-3" key={k}>
            <div
              className="d-flex flex-row"
              style={{ transition: "1s" }}
            >
              <div className="w-100" style={{ overflow: "hidden" }}>
                <img
                  src={process.env.PUBLIC_URL + `${v.ImgUrl}`}
                  id={v.id}
                  onMouseLeave={id => _handleHover(id)}
                  onMouseOver={id => _handleHover(id)}
                  className="img-fluid d-block"
                  style={{ margin: "0 auto", transition: "1s" }}
                  alt="rooms"
                />
              </div>
              <div className="d-flex flex-column px-3">
                <span
                  style={{
                    color: Colors.navbg,
                    fontSize: fsc(media, 20),
                    fontWeight: "bold"
                  }}
                >
                  {v.Name}
                </span>
                <span
                  style={{
                    color: Colors.navbg,
                    fontSize: fsc(media, 14)
                  }}
                >
                  {v.desc}
                </span>
                <span
                  style={{
                    color: Colors.textGold,
                    fontSize: fsc(media, 30),
                    fontWeight: "bold"
                  }}
                >
                  $ {v.Price}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default withMedia(RestaurantGallery);
