import Countdown from "@/components/Countdown";
import Gallery from "@/components/Gallery";
import MusicPlayer from "@/components/MusicPlayer";
import YandexMap from "@/components/YandexMap";
import Image from "next/image";
import FormPart from "./FormPart";

const textShadow =
  "0px 1px 0px rgb(0 0 0 / 0.075), 0px 1px 1px rgb(0 0 0 / 0.075), 0px 2px 2px rgb(0 0 0 / 0.075)";

const mapButtonStyle = {
  padding: "8px 14px",
  borderRadius: 12,
  backgroundColor: "#C78665",
  color: "white",
  textDecoration: "none",
  display: "inline-block",
};

export default function WeddingPage() {
  return (
    <>
      <div className="slider_area">
        <div className="slider_area_inner slider_bg_1 overlay2">
          <div className="slider_text text-center">
            <div className="text_inner">
              <Image
                src="/img/banner/ornaments.png"
                alt=""
                width={300}
                height={80}
                priority
              />
              <div>
                <h3 className="text_names" style={{ textShadow }}>
                  Նարեկ
                </h3>
                <h3 className="text_names" style={{ textShadow }}>
                  &
                </h3>
                <h3 className="text_names" style={{ textShadow }}>
                  Անժելիկա
                </h3>
              </div>
              <span style={{ textShadow }}>06 Սեպտեմբեր 2025</span>
              <MusicPlayer />
            </div>
          </div>
        </div>
      </div>

      <div className="weeding_countdown_area">
        <div className="flowaers_top d-none d-lg-block">
          <Image
            src="/img/banner/flower-top.png"
            alt=""
            width={200}
            height={120}
          />
        </div>
        <div className="flowaers_bottom d-none d-lg-block">
          <Image
            src="/img/banner/flower-bottom.png"
            alt=""
            width={200}
            height={120}
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section_title text-center">
                <Image
                  src="/img/banner/flowers.png"
                  alt=""
                  width={120}
                  height={60}
                />
                <span>06 Սեպտեմբեր 2025</span>
                <h3>Հարսանիքին մնաց</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div id="clock" className="countdown_area counter_bg">
                <Countdown />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="welcome_text">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section_title text-center">
                <Image
                  src="/img/banner/flowers.png"
                  alt=""
                  width={120}
                  height={60}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section_title text-center">
                <h3>ԸՆԿԵՐՆԵՐ</h3>
                <h3>ԵՎ</h3>
                <h3>ԲԱՐԵԿԱՄՆԵՐ</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="section_title text-center">
                <span>
                  Սիրով հրավիրում ենք ձեզ կիսելու մեզ հետ մեր կյանքի կարևոր ու
                  հիշարժան օրը
                </span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="d-flex section_title section_title_waiting text-center align-items-center justify-content-center">
                <span>Սպասում ենք ձեզ մեր հարսանիքին</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Gallery />

      <div className="program_details_area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section_title text-center">
                <Image
                  src="/img/banner/flowers.png"
                  alt=""
                  width={120}
                  height={60}
                />
                <h3>Օրվա ծրագիր</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="single_program program_bg_1 text-center">
                <div className="program_inner">
                  <span>16.30</span>
                  <h3>Սուրբ Մարիամ Աստվածածին եկեղեցի</h3>
                  <Image
                    src="/img/program_details/ornaments.png"
                    alt=""
                    width={120}
                    height={40}
                  />
                  <div style={{ marginTop: 10 }}>
                    <a
                      href="https://yandex.com/maps/-/CHDqyOma"
                      style={mapButtonStyle}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ինչպես հասնել
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="single_program program_bg_3 text-center">
                <div className="program_inner">
                  <span>17:30</span>
                  <h3>Ռեստորան Villa Hills</h3>
                  <Image
                    src="/img/program_details/ornaments.png"
                    alt=""
                    width={120}
                    height={40}
                  />
                  <div style={{ marginTop: 10 }}>
                    <a
                      href="https://yandex.com/maps/-/CHDqEW8a"
                      style={mapButtonStyle}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ինչպես հասնել
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="attending_area">
        <div className="container">
          <div className="row">
            <div className="col-xl-10 offset-xl-1 col-lg-10 offset-lg-1">
              <div className="main_attending_area">
                <div className="flower_1 d-none d-lg-block">
                  <Image
                    src="/img/appointment/flower-top.png"
                    alt=""
                    width={160}
                    height={120}
                  />
                </div>
                <div className="flower_2 d-none d-lg-block">
                  <Image
                    src="/img/appointment/flower-bottom.png"
                    alt=""
                    width={160}
                    height={120}
                  />
                </div>
                <FormPart />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="location_area">
        <div className="d-none d-sm-block location_info">
          <div className="location_inner">
            <div className="location_top text-center">
              <h3>Հասցե</h3>
              <p>Կոտայքի մարզ, Գետամեջ համայնք</p>
              <div style={{ marginTop: 10 }}>
                <a
                  href="https://yandex.com/maps/-/CHDqEW8a"
                  style={mapButtonStyle}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ինչպես հասնել
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid p-0">
          <div className="d-sm-block">
            <YandexMap />
          </div>
        </div>
      </section>
    </>
  );
}
