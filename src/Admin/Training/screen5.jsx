import React, { useState, useEffect } from "react";
import axios from "axios";
import "./screen5.css";
import { FaPhoneAlt } from "react-icons/fa";
import { RiArrowGoBackLine } from "react-icons/ri";
import { Para } from "../../Common/Para/Para";
import { Endpoint } from "../../Common/Endpoint/Endpoint";
import { File_Endpoint } from "../../Common/File_Endpoint/file_endpoint";

export default function Screen5() {
  const [Popup, setPopup] = useState(false);
  const [videos, setVideos] = useState([]);
  const [playingVideoId, setPlayingVideoId] = useState(null);
  const Email = localStorage.getItem("Mail");

  useEffect(() => {
    async function fetchVideos() {
      try {
        const response = await axios.post(
          `${Endpoint}admin/get/admin_select_videos.php`,
          { Mail: Email }
        );
        setVideos(response.data);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    }
    fetchVideos();
  }, [Email]);

  const handleClick = (event, video) => {
    var ok = Object.keys(video);
    if (ok.length > 2) {
      const videoId = video.id;
      setPlayingVideoId(videoId);
      const videoElement = document.getElementById(`video-${videoId}`);
      if (videoElement) {
        if (playingVideoId !== null) {
          const currentPlayingVideo = document.getElementById(`video-${playingVideoId}`);
          if (currentPlayingVideo) {
            currentPlayingVideo.pause();
          }
        }
        if (videoElement.requestFullscreen) {
          videoElement.requestFullscreen();
        } else if (videoElement.mozRequestFullScreen) {
          videoElement.mozRequestFullScreen();
        } else if (videoElement.webkitRequestFullscreen){
          videoElement.webkitRequestFullscreen();
        } else if (videoElement.msRequestFullscreen) {
          videoElement.msRequestFullscreen();
        }
        // videoElement.play();
      }
    } else {
      setPopup(true);
    }
  };

  return (
    <div className="content_box">
      <div className="instagram_box">
        {videos.map((video) => (
          <div
            className="box"
            key={video.id}
            id={`video-button-${video.id}`}
            onClick={(event) => handleClick(event, video)}
          >
            <video
              id={`video-${video.id}`}
              height="auto"
              width="180px"
              poster={`${File_Endpoint}/${video.poster}`}
              className="video"
            >
              <source
                src={`${File_Endpoint}/${video.videos}`}
                type="video/mp4"
              />
            </video>
            <div className="texts">
              <Para Para={` Session ${video.session}`} />
            </div>
          </div>
        ))}
      </div>
      {Popup && (
        <div className="popup">
          <div className="popup_content">
            <div className="back_icon">
              <RiArrowGoBackLine onClick={() => setPopup(false)} />
            </div>
            <div className="text_content">
              <Para Para="This content is disabled. If you want to see this, please contact...!" />
            </div>
            <span className="admin_contact">
              <Para Para="Admin" />
              <span>
                <FaPhoneAlt />
                <Para Para="+91 9789545258" />
              </span>
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
