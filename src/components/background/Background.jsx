import React from "react";
import webm from "../../assets/video.webm";
import mp41 from "../../assets/video1.mp4";
import mp42 from "../../assets/video2.mp4";
import mp43 from "../../assets/video3.mp4";

import "./background.css";

const Background = () => {
  return (
    <div
      className="container"
      data-beta-bgvideo-upgrade="false"
      data-autoplay="true"
      data-loop="true"
      data-wf-ignore="true"
      dangerouslySetInnerHTML={{
        __html: `
    <video class="background-clip" playsinline loop autoPlay muted autobuffer data-wf-ignore="true">
    <source src="${mp43}" type="video/mp4" data-wf-ignore="true" />
    <source src="${webm}" type="video/webm" data-wf-ignore="true" />
    Your browser does not support the video tag. I suggest you upgrade your browser.
</video>            
`,
      }}
    >
      {/* <video
        className="background-clip"
        autoPlay
        playsInline
        loop
        muted
        disablePictureInPicture={true}
      >
        <source src={mp4} type="video/mp4" />
        <source src={webm} type="video/webm" />
      </video> */}
    </div>
  );
};

export default Background;
