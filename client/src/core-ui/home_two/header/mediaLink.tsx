import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

type Props = {};

export default function MediaLink({}: Props) {
  return (
    <div>
      <ul className="social-icon">
        <li>
          <a href="https://www.facebook.com/bdrkreza/" target="_blank">
            <FacebookIcon />
            <span> - Facebook</span>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/bdrkreza/" target="_blank">
            <LinkedInIcon />
            <span> - Linkedin</span>
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/bdrkreza/" target="_blank">
            <GitHubIcon />
            <span> - GitHum</span>
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/bdrkreza/" target="_blank">
            <InstagramIcon />
            <span> - Instagram</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

const classes = {
  stack: {
    "& svg": {
      color: "var(--gray)",
      fontSize: "60px",
      "& :hover": {
        color: "orange",
      },
    },
  },
};
