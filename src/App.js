import React, { useRef, useState, useEffect } from "react";
import './App.css';
import getYouTubeID from "get-youtube-id";


export default function App() {
  const [videoId, setVideoId] = useState("a8ttE_MeIpE");
  const inputRef = useRef();

  useEffect(() => {
    console.log(videoId);
  }, [videoId]);

  const submitHandler = (e) => {
    e.preventDefault();

    const parsed = getYouTubeID(inputRef.current.value);

    if (parsed) {
      setVideoId(parsed);
    }
  };

  return (
    <div className="App bg-navy p-4">
      <div className="container">
        <div className="row">

          {/*--- Buttons and Search Input Column ---*/}
          <div className="col-xs-12 col-sm-12 col-md-6 offset-md-3 col-lg-4 offset-lg-4">
            <form onSubmit={submitHandler}>
              <div className="input-group">
                <input
                  type="text"
                  ref={inputRef}
                  // onChange={handleChange} 
                  className="form-control"
                  placeholder="Enter youtube video URL"
                />
                <button className="btn btn-primary" type="submit">Submit</button>
              </div>
            </form>
          </div>

          {/*--- iFrame Column ---*/}
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-10 offset-lg-1 mt-4">
            <div className="iframe--wrapper border-info">
              <iframe
                className="sixteenByNineFrame"
                src={`https://www.youtube.com/embed/${videoId}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
              />
            </div>
          </div>

          {/*--- thumbs up/down icon ---*/}
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center mt-4">

            <div className="wrapper">
              <span className="heart"><a href='{#}' style={{fontSize: '3em'}} data-text={'👍🏻'}>👍🏻</a></span>
              <span className="heart"><a href='{#}' style={{fontSize: '3em'}} data-text={'👎🏻'}>👎🏻</a></span>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}

