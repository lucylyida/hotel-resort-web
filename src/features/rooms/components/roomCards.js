import React, { useState } from "react";
import { withMedia } from "react-media-query-hoc";
import { Link } from "react-router-dom";

import * as RoutePath from "../../../config/route.config";
import * as Colors from "../../../config/color.config";
import Line from "../../../assets/image/line.png";
import * as Font from "../../../config/font.config";
import MyButton from "../../../tools/myButton";
import { fsc } from "../../../helper/fontControlHelper";
import {RoomInfo} from '../model/RoomCardData.json'


const RoomCards = props => {
  const { media } = props;
  const [hover, setHover] = useState(false);

  localStorage.setItem('RoomData',JSON.stringify(RoomInfo))

  const _handleHover = e => {
    setHover(!hover);
    if (hover === true) {
      document.getElementById(e.target.id).style.transform = "scale(1)";
    } else {
      document.getElementById(e.target.id).style.transform = "scale(1.2)";
    }
  };
  return (
    <div className="container text-center">
      <div className="d-flex flex-column align-items-center">
        <span
          style={{
            fontSize: fsc(media, 35),
            fontFamily: Font.bodyTitle,
            fontWeight: "bold"
          }}
        >
          Our Rooms
        </span>
        <img
          className="py-2"
          src={Line}
          alt="line"
          style={{ width: "250px" }}
        />
        {/* file seprate */}
        <p style={{ color: Colors.bodyText }}>
          When you host a party or family reunion, the special celebrations let
          you streng then bonds with
        </p>
      </div>

      <div className="d-flex flex-row flex-wrap">
        {RoomInfo.map((v, k) => (
          <div className="col-lg-6 p-4" key={k}>
            <div className="d-flex flex-column" style={{ transition: "1s" }}>
              <div className="w-100" style={{ overflow: "hidden" }}>
                <img
                  src={process.env.PUBLIC_URL + `${v.RoomImgUrl}`}
                  id={v.id}
                  onMouseLeave={id => _handleHover(id)}
                  onMouseOver={id => _handleHover(id)}
                  className="w-100 d-block"
                  style={{ margin: "0 auto", transition: "1s" }}
                  alt="rooms"
                />
              </div>
              <div className="d-flex flex-column text-left">
                <span className="py-2">{v.desc}</span>
                <table className="text-left my-2 ">
                  <tbody style={{ fontSize: fsc(media, 15) }}>
                    <tr style={{ height: "2rem" }}>
                      <td style={{ fontSize: fsc(media, 10) }}>
                        <i className="fa fa-square"></i>
                      </td>
                      <td>Max : {v.max} Person(s)</td>
                      <td style={{ fontSize: fsc(media, 10) }}>
                        <i className="fa fa-square"></i>
                      </td>
                      <td>View : {v.view}</td>
                    </tr>
                    <tr>
                      <td style={{ fontSize: fsc(media, 10) }}>
                        <i className="fa fa-square"></i>
                      </td>
                      <td>Size : {v.size} m</td>
                      <td style={{ fontSize: fsc(media, 10) }}>
                        <i className="fa fa-square"></i>
                      </td>
                      <td>Bed : {v.bed}</td>
                    </tr>
                  </tbody>
                </table>
                <div className="d-flex flex-row flex-wrap justify-content-between py-2 border-top border-bottom">
                  <div className="d-flex align-self-center">
                    Starting
                    <span
                      style={{
                        fontWeight: "bold",
                        fontSize: 25,
                        marginTop: "-9px"
                      }}
                      className="px-1"
                    >
                      {v.pricePerDay}
                    </span>
                    /days
                  </div>
                  <div className="d-flex">
                    <Link to={`/${RoutePath.viewdetail}`}>
                      <MyButton
                        height={"50px"}
                        text={"View Detail"}
                        style={{ width: "120px" }}
                        bold
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default withMedia(RoomCards);

// const RoomInfo = [
//   {
//     id: 1,
//     max: 1,
//     type: "Family Room",
//     view: "Sunset",
//     size: 55,
//     bed: 1,
//     pricePerDay: 300,
//     RoomImgUrl: "/images/rooms/DeluxeRoom/Deluxe1.jpg",
//     desc:
//       "Pellentesque posuere mauris ut interdum efficitur. Duis ac purus ante. Proin facilisis nec tortor consectetur vehicula.",
//     isAvailable: true
//   },
//   {
//     id: 2,
//     max: 2,
//     type: "Family Room",
//     view: "Sunset",
//     size: 65,
//     bed: 1,
//     pricePerDay: 300,
//     RoomImgUrl: "/images/rooms/FamilyRoom/familyRoom1.jpg",
//     desc:
//       "Pellentesque posuere mauris ut interdum efficitur. Duis ac purus ante. Proin facilisis nec tortor consectetur vehicula.",
//     isAvailable: false
//   },
//   {
//     id: 3,
//     max: 3,
//     type: "Luxury Room",
//     view: "Pool",
//     size: 45,
//     bed: 1,
//     pricePerDay: 300,
//     RoomImgUrl: "/images/rooms/LuxuryRoom/luxuryRoom1.jpg",
//     desc:
//       "Pellentesque posuere mauris ut interdum efficitur. Duis ac purus ante. Proin facilisis nec tortor consectetur vehicula.",
//     isAvailable: false
//   },
//   {
//     id: 4,
//     max: 4,
//     type: "Single Room",
//     view: "Beach",
//     size: 45,
//     bed: 1,
//     pricePerDay: 300,
//     RoomImgUrl: "/images/rooms/StandardRoom/standardRoom1.jpg",
//     desc:
//       "Pellentesque posuere mauris ut interdum efficitur. Duis ac purus ante. Proin facilisis nec tortor consectetur vehicula.",
//     isAvailable: false
//   },
//   {
//     id: 5,
//     max: 5,
//     type: "Single Room",
//     view: "Mountains",
//     size: 45,
//     bed: 1,
//     pricePerDay: 300,
//     RoomImgUrl: "/images/rooms/StandardRoom/standardRoom1.jpg",
//     desc:
//       "Pellentesque posuere mauris ut interdum efficitur. Duis ac purus ante. Proin facilisis nec tortor consectetur vehicula.",
//     isAvailable: true
//   },
//   {
//     id: 6,
//     max: 6,
//     type: "Single Room",
//     view: "Beach",
//     size: 45,
//     bed: 1,
//     pricePerDay: 300,
//     RoomImgUrl: "/images/rooms/StandardRoom/standardRoom1.jpg",
//     desc:
//       "Pellentesque posuere mauris ut interdum efficitur. Duis ac purus ante. Proin facilisis nec tortor consectetur vehicula.",
//     isAvailable: true
//   }
// ];
