function Wave() {
  return (
    <div className="w-full">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
        <path
          d="M0,32L120,48C240,64,480,96,720,101.3C960,107,1200,85,1320,74.7L1440,64"
          fill="none"
          stroke="#1c3752"
          strokeWidth="50"
          strokeDasharray="1500"
          strokeDashoffset="1500" // start hidden
        >
          <animate
            attributeName="stroke-dashoffset"
            from="1500" // hidden at start
            to="0" // fully drawn
            dur="5s"
            fill="freeze" // keep it drawn at the end
            begin="4s" // start after the fill animation
            repeatCount="1" // only once (remove for loop)
          />
        </path>
      </svg>
    </div>
  );
}

export default Wave;
