import EastIcon from "@mui/icons-material/East";

type Props = {};

export default function HeroButton({}: Props) {
  return (
    <div>
      <div className="hero_container_btn">
        <button>
          <span className="text">Learn More</span>
          <div className="icon-container">
            <div className="icon icon--left">
              <EastIcon />
            </div>
            <div className="icon icon--right">
              <EastIcon />
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}
