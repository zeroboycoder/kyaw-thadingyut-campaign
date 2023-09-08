import style from "./About.module.css";
import TagLine from "../../assets/tagLine.png";
import Lantern from "../../assets/lantern.png";
import Xipin from '../../assets/brands/xipin.png'
import Huawei from '../../assets/brands/huawei.png'
import Vjun from '../../assets/brands/vjun.png'
import Konfulon from '../../assets/brands/konfulon.png'
import Samsung from '../../assets/brands/samsung.png'
import Barmaso from '../../assets/brands/barmaso.png'
import Tecno from '../../assets/brands/tecno.png'

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <div className={`${style.hero_section} w-full h-screen flex justify-center items-center`}>
        <img src={TagLine} alt="Tag Line" className="w-2/5" data-aos="zoom-in" data-aos-duration="1300" />
      </div>
      
      <div className="container mx-auto">
        <div className="w-4/5 mx-auto">
          {/* About */}
          <div className={`grid grid-cols-2 mt-10 ${style.about}`}>
            <div className="m-auto">
              <h1 className="text-2xl mb-3">About</h1>
              <p className="leading-7 tracking-wider" data-aos="fade-right" data-aos-duration="1000">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
                aliquid nobis repellendus sunt doloribus tempore veritatis
                corporis et, distinctio cupiditate, vero libero voluptatum minus
                excepturi, tenetur assumenda deleniti temporibus magnam?
              </p>
            </div>
            <div className="w-3/4 m-auto">
              <img src={Lantern} alt="Lantern" className="w-full" />
            </div>
          </div>

          {/* CountDown */}
          <div className="w-full h-60 -mt-16 flex flex-col justify-center items-center rounded-3xl shadow-md" style={{backgroundColor : 'var(--secondary-color)'}}>
            <p className="text-3xl text-center my-7 leading-loose tracking-wider" style={{color : "var(--tertiary-color)"}}>ပျော်ရွှင်ဖွယ်ရာ<br />သီတင်းကျွတ်အခါလေးဖြစ်ပါစေ။</p>
          </div>
          <div className="h-20"></div>

          {/* Sponsor */}
          <div className="mb-10">
            <h2 className="text-3xl text-center" style={{color : "var(--tertiary-color)"}}>SPONSORED BY</h2>
            <div className="brands w-full mt-7 flex justify-center items-center">
              <img src={Xipin} alt="Xipin" />
              <img src={Huawei} alt="Huawei" />
              <img src={Vjun} alt="Vjun" />
              <img src={Konfulon} alt="Konfulon" />
              <img src={Samsung} alt="Samsung" />
              <img src={Barmaso} alt="Barmaso" />
              <img src={Tecno} alt="Techo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
