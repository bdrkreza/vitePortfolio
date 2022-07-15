import EastIcon from "@mui/icons-material/East";

type Props = {};

export default function ProjectBtn({}: Props) {
  return (
    <div>
      <div className="btn-container">
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
