interface WavesProps {
  color: string;
  flip: boolean;
}

function Waves({ color, flip }: WavesProps) {
  return (
    <div className={`custom-wave ${flip ? "flip-horizontal" : ""}`}>
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 50" // Changed from 120 to 50
        preserveAspectRatio="none"
      >
        <path
          d="M1200 50L0 6.87 0 0 1200 0 1200 50z"
          fill={color}
        ></path>
      </svg>
    </div>
  );
}

export default Waves;
