import BACKGROUNDIMAGE from "../image/art1.jpg";
import "../styles/Hero/hero.scss";
const Hero = () => {
  return (
    <>
      <nav>
        <div className="nav">
          <span>serenityX</span>
        </div>
      </nav>
      <header>
        <div className="title">
          <h1>
            Serenity X <br /> <span className="collection">Collection</span>
          </h1>
        </div>

        <div className="img">
          <img src={BACKGROUNDIMAGE} alt="" />
        </div>
      </header>
    </>
  );
};
export default Hero;
