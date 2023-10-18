import React, { useState } from "react";
import "./modal.css";
function Videocard({
  title,
  description,
  num,
  lectureid,
  courseid,
  deletebuttonhandler,
}) {
  return (
    <div className="m-v-div">
      <div className="m-v-div-one">
        <h3>{`#${num} ${title}`}</h3>
        <p>{description}</p>
      </div>
      <div className="m-v-div-two">
        <button
          className="vc-de-bt"
          onClick={() => deletebuttonhandler(courseid, lectureid)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

const Modal = ({
  close,
  id,
  deletebuttonhandler,
  addlecturehandler,
  coursetitle,
  lectures = [],
}) => {
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [video, setvideo] = useState("");
  const [videoprev, setvideoprev] = useState("");

  const changevideohandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setvideoprev(reader.result);
      setvideo(file);
    };
  };
  const handleclose = () => {
    settitle("");
    setdescription("");
    setvideo("");
    setvideoprev("");
  };
  return (
    <>
      <div className="wrap"></div>
      <div className="md">
        <div className="md-in">
          <div className="md-in-one">
            <h1>{coursetitle}</h1>
            <h3>{`#${id}`}</h3>
            <h3>Lectures</h3>
            {
              lectures.map((item,i)=>(
                <Videocard    
                key={i}
                title={item.title}
                description={item.description}
                num={i+1}
                lectureid={item._id}
                courseid={id}
                deletebuttonhandler={deletebuttonhandler}
              />
              ))
            }
           
          </div>


          <div className="md-in-two">
            <button
              onClick={() => {
                close();
                handleclose();
              }}
              className="md-bt-close"
            >
              Close
            </button>


            <form
              onSubmit={(e) =>
                addlecturehandler(e, id, title, description, video)
              }
              className="modal-form"
            >
              <input
                type="text"
                value={title}
                onChange={(e) => settitle(e.target.value)}
                placeholder="Title"
                required
                className="modal-input"
              />
              <input
                type="text"
                value={description}
                onChange={(e) => setdescription(e.target.value)}
                placeholder="Description"
                required
                className="modal-input"
              />
              <input
                type="file"
                accept="video/mp4"
                onChange={changevideohandler}
                required
                className="modal-choose"
              />
              {videoprev && (
                <div className="video-modal-div">
                  <video
                    src={videoprev}
                    controlsList="nodownload noremoteplayback"
                    controls={[
                      "PlayPause",
                      "Seek",
                      "Time",
                      "Volume",
                      "Fullscreen",
                    ]}
                    disablePictureInPicture
                    disableRemotePlayback
                    className="video-modal"
                  ></video>
                </div>
              )}
              <button type="submit" className="modal-upload-bt">
                Upload{" "}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
