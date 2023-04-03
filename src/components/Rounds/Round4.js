import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./Round2.css";
import { CiMenuBurger } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
const Round4 = () => {
  const [icon, setIcon] = React.useState(true);
  const handleClick = () => {
    const nvbar = document.getElementById("nvbar-clp");
    setIcon(!icon);
  }
  return (
    <>
      {!icon && (
        <div className="navbar-collapse" id="nvbar-clp">
          <div style={{display:"flex",flexDirection:"column",marginTop:"3rem",paddingLeft:"3rem",paddingRight:"1rem"}} >
            <a style={{marginTop:"1rem",marginBottom:"1rem"}}href="/">Home</a>
            <a style={{marginTop:"1rem",marginBottom:"1rem"}}href="/round1">Round1</a>
            <a style={{marginTop:"1rem",marginBottom:"1rem"}}href="/round2">Round2</a>
            <a style={{marginTop:"1rem",marginBottom:"1rem"}}href="/round3">Round3</a>
            <a style={{marginTop:"1rem",marginBottom:"1rem"}}href="/round4">Round4</a>
            <a style={{marginTop:"1rem",marginBottom:"1rem"}}href="/round5">Round5</a>
            <a style={{marginTop:"1rem",marginBottom:"1rem"}}href="/modals/mround1">MRound1</a>
            <a style={{marginTop:"1rem",marginBottom:"1rem"}}href="/modals/mround2">MRound2</a>
            <a style={{marginTop:"1rem",marginBottom:"1rem"}}href="/modals/mround3">MRound3</a>
            <a style={{marginTop:"1rem",marginBottom:"1rem"}}href="/modals/mround4">MRound4</a>
            <a style={{marginTop:"1rem",marginBottom:"1rem"}}href="/modals/mround5">MRound5</a>
          </div>
        </div>
      )}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <img className="rnd1bigshot" src="./logo.png" alt="" srcset="" />
        <button
          className="navbtn"
          style={{
            border: "2px solid #d03a7a",
            borderRadius: "8px",
            height: "2.5rem",
            marginTop: "0.3rem",
            marginRight: "0.3rem",
          }}
          onClick={handleClick}
        >
          {icon ? (
            <CiMenuBurger color="#d03a7a" />
          ) : (
            <RxCross1 color="#d03a7a" />
          )}
        </button>
      </div>
      <div className="rnd1bg">
        <div className="rnd1title" style={{color:"white"}}>SureShot Livestream</div>
        <div className="rnd1vdo">
          <video width="100%" height="240" controls>
            <source src="https://www.youtube.com/watch?v=9DhuWapDDrw" />
          </video>
        </div>
        <div className="rnd1shadow"></div>
        <div className="rnd1head" >
            <img className="rnd1img" src="./round4.png" alt="" srcset="" />
        </div>
        <div>
            <img className="rnd2img" src="./round4-text.png" alt="" srcset="" />
        </div>
        <div className='rnd1copyright'>
    © 2021 BigShot. All rights reserved.
    </div>
      </div>
    </>
  );
};

export default Round4;
