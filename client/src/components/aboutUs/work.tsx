import WorkCart from "./workCart";

export default function Work() {
  return (
    <div>
      <>
        <h1 className="section_heading" data-outline="My Experience">
          My Experience
          <hr style={{ border: "solid 2px var(--danger)", width: "500px" }} />
        </h1>
      </>
      <WorkCart />
    </div>
  );
}
