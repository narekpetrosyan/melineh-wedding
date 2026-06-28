import Countdown from "@/components/Countdown";
import Gallery from "@/components/Gallery";
import MusicPlayer from "@/components/MusicPlayer";
import Image from "next/image";
import FormPart from "./FormPart";

const textShadow =
  "0px 1px 0px rgb(0 0 0 / 0.075), 0px 1px 1px rgb(0 0 0 / 0.075), 0px 2px 2px rgb(0 0 0 / 0.075)";

const mapButtonStyle = {
  padding: "8px 14px",
  borderRadius: 12,
  backgroundColor: "#e1645b",
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
              <MusicPlayer />
              <Image
                src="/img/banner/ornaments.png"
                alt=""
                width={80}
                height={20}
                priority
              />
              <div>
                <h3 className="text_names" style={{ textShadow }}>
                  Charles
                </h3>
                <h3 className="text_names" style={{ textShadow }}>
                  &
                </h3>
                <h3 className="text_names" style={{ textShadow }}>
                  Meline
                </h3>
              </div>
              <span style={{ textShadow }}>05 septembre 2026</span>
            </div>
          </div>
        </div>
      </div>

      <div className="weeding_countdown_area">
        <div className="flowaers_top d-none d-lg-block">
          <Image
            src="/img/banner/flower-top.png"
            alt=""
            width={384}
            height={228}
          />
        </div>
        <div className="flowaers_bottom d-none d-lg-block">
          <Image
            src="/img/banner/flower-bottom.png"
            alt=""
            width={350}
            height={346}
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section_title text-center">
                <Image
                  src="/img/banner/flowers.png"
                  alt=""
                  width={200}
                  height={50}
                />
                <span>05 septembre 2026</span>
                <h3>Notre mariage aura lieu dans:</h3>
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
                  width={200}
                  height={50}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section_title text-center">
                <h3>CHERS AMIS</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="section_title text-center">
                <span>
                  Après l’envoi de notre faire-part, il nous tarde désormais de partager avec vous les détails de notre mariage.
                </span>
              </div>
              <div className="section_title text-center">
                <span>
                  Nous vous retrouverons le 5 septembre à 14h à la Mairie de Maisons-Alfort pour la cérémonie civile.
                </span>
              </div>
              <div className="section_title text-center">
                <span>
                  Puis, à partir de 18h au Château du Breuil (Garancierères ), nous aurons le plaisir de vous accueillir pour poursuivre les festivités autour d’un cocktail, d’un repas et de moments que nous espérons inoubliables.
                </span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="d-flex section_title section_title_waiting text-center align-items-center justify-content-center">
                <span>Nous sommes très heureux de pouvoir partager cette journée avec vous.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Gallery />

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
    </>
  );
}
