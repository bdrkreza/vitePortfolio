import { ServiceCard, ServiceHeader } from "../../components";
import { serviceData } from "../../services/data/data";
const content = {
  "header-p1": "Let's build Your",
  "header-p2": " best web application",
  description:
    " Get the web's modern capabilities on your own sites and apps with useful guidance and analysis from",
  "primary-action": "Test My Project",
};
export default function Service() {
  return (
    <div>
      <ServiceHeader content={content} />
      <ServiceCard serviceData={serviceData} />
    </div>
  );
}
