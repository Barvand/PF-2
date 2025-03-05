import { useState, useEffect, useRef } from "react";

function VideoIntro() {
  const [stage, setStage] = useState(1);
  const [text, setText] = useState("");
  const [overlayText, setOverlayText] = useState("");
  const [fade, setFade] = useState("opacity-100"); // Controls text fade
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Typewriter effect for "Hei, hallo."
  useEffect(() => {
    if (stage === 1) {
      const fullText = "Hei, hallo.";
      let index = 0;
      const interval = setInterval(() => {
        setText(fullText.slice(0, index + 1));
        index++;
        if (index === fullText.length) {
          clearInterval(interval);
          setTimeout(() => setStage(2), 1000); // Move to video after 1 sec
        }
      }, 200);
      return () => clearInterval(interval);
    }
  }, [stage]);

  // Sync text with video time & Fade Out Effect
  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video) return;

    const currentTime = video.currentTime;

    const textSequence = [
      {
        text: "Where it all began—discipline, structure, and problem-solving.",
        time: 1,
        duration: 7,
      },
      {
        text: "From discipline to leadership—coaching and motivating others.",
        time: 12,
        duration: 6,
      },
      {
        text: "Adapting, listening, and delivering solutions.",
        time: 18,
        duration: 5,
      },
      {
        text: "Hands-on work, organization, and efficiency.",
        time: 22,
        duration: 4,
      },
      {
        text: "Creating experiences, attention to detail, and service excellence.",
        time: 26,
        duration: 4,
      },
    ];

    // Find the current text based on time
    const matchedText = textSequence.find(
      ({ time }) => Math.floor(currentTime) === time
    );
    if (matchedText && overlayText !== matchedText.text) {
      setFade("opacity-0"); // Start fading out

      setTimeout(() => {
        setOverlayText(matchedText.text);
        setFade("opacity-100"); // Fade in new text
      }, 500); // Wait 500ms before changing the text
    }

    // Automatically fade out before the next text appears
    textSequence.forEach(({ time, duration }) => {
      if (Math.floor(currentTime) === time + duration - 1) {
        setFade("opacity-0");
      }
    });

    // Redirect when the video finishes
    if (video.ended) {
      setStage(3);
    }
  };

  // Redirect logic
  useEffect(() => {
    if (stage === 3) {
      window.location.href = "/home";
    }
  }, [stage]);

  return (
    <div className="w-full h-screen bg-black flex justify-center items-center">
      {/* Stage 1: Typewriter Effect */}
      {stage === 1 && (
        <div className="text-white text-4xl md:text-6xl font-bold animate-fade-in">
          {text}
        </div>
      )}

      {/* Stage 2: Video with Overlays */}
      {stage === 2 && (
        <div className="relative w-full h-full">
          {/* Video */}
          <video
            ref={videoRef}
            className="absolute top-0 left-0 w-full h-full object-cover"
            src="/portfolio-video.mov"
            autoPlay
            muted
            onTimeUpdate={handleTimeUpdate}
          />

          {/* Black overlay stays visible */}
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            {/* Only the text fades */}
            <div
              className={`transition-opacity duration-700 ease-in-out ${fade} text-white text-2xl md:text-4xl font-semibold text-center px-6 py-4`}
            >
              {overlayText}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default VideoIntro;
