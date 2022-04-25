import "./Testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Matias Lamela",
      title: "SoyHenry - Learning/Development",
      img: "https://ca.slack-edge.com/TPRS7H4PN-U011C3Y1URM-9e71c438e67c-512",
      icon: "assets/linkedin.png",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis impedite qui quisquam, tenetur dolorum. Vero.",
      linkedin: "https://www.linkedin.com/in/matiaslamela/",
    },
    {
      id: 2,
      name: "Elena Gonzalez",
      title: "SoyHenry - Learning",
      img: "https://ca.slack-edge.com/TPRS7H4PN-U0131FACHDF-8683f48b1575-512",
      icon: "assets/linkedin.png",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis impedite qui quisquam, tenetur dolorum. Vero.",
      linkedin: "https://www.linkedin.com/in/ele-gonzalez/",
    },
  ];

  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className="card">
            <div className="top">
              <img src="assets/right-arrow.png" alt="" className="left" />
              <img src={d.img} alt="" className="user" />
              <a href={d.linkedin}>
                <img src={d.icon} alt="" className="right" />
              </a>
            </div>
            <div className="center">{d.desc}</div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
              <h4>department</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
