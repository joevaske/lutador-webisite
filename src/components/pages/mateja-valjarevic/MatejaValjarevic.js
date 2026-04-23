import React from "react";
import "./MatejaValjarevic.css";

import PageHeader from "../../page-header/PageHeader";
import image from "../../../images/pages/mateja-valjarevic/mateja-valjarevic-11.webp";
import matejaValjarevic from "../../../images/about-us/mateja-profilna-1.webp";
import { LiaCertificateSolid } from "react-icons/lia";
import { AiOutlineCheck } from "react-icons/ai";
import TrainerIntro from "../../trainer/TrainerIntro";

const text = ` <p>
          Svoju trenersku karijeru u Brazilskoj Džiu Džici započinje 2008.
          godine kada kao nosilac plavog pojasa, kao izuzetan tehničar, na
          preporuku svog tada&scaron;njeg trenera (Jovana Žerjala) osniva svoj
          klub &ndash; Brazilski džiu džicu klub &ldquo;Lutador&rdquo;. U
          trenerskoj karijeri stvorio je mnogo uspe&scaron;nih takmičara,
          osvajača brojnih medalja na turnirima u zemlji i inostranstvu.&nbsp;
          <strong>
            2013. Godine odlazi u Brazil i trenira dva meseca u prestižnoj
            Alliance BJJ akademiji Sao Paulo pod vođstvom jednog od najboljih
            BJJ trenera na svetu - Fabio Gurgel.
          </strong>
        </p>
        <p>
          Vraća se kao nosilac i&nbsp;
          <strong>
            glavni instruktor Alliance BJJ fran&scaron;ize za Srbiju</strong>. Implementira ceo sistem rada koji je naučuio u Brazilu i za kratko
          vreme LUTADOR BJJ postaje jedan od najtrofejnijih timova u zemlji i
          regionu.&nbsp;
          <strong>2015. Postaje deo Zenith asocijacije&nbsp;</strong>pod
          svetstim &scaron;ampionima Robertom Drajzdelom i Rodrigo Kavakom.
        </p>
        <p>
          Po nalogu svetskog &scaron;ampiona Roberta Drajzdela,&nbsp;
          <strong>
            prilkom posete Parizu promovisan je u crni pojas od strane Gorana
            Pejovića&nbsp;
          </strong>
          (crni pojas Roberta Drajzdela) i Žeremi Idlsa (crni pojas Roberta
          Drajzdela) u Kajyn BJJ akademiji 13.jula 2015.&nbsp;
          <strong>
            2019. Mateja registruje svoj tim Lutador BJJ u IBJJF-u&nbsp;
          </strong>
          (Internacionalna Brazilska Džiu Džicu Federacija) pod nazivom Lutador
          BJJ Academy &ndash; Serbia. I time se formira autentičan Srpski BJJ
          brend koji je priznat u celom svetu.
        </p>`;

const MatejaValjarevic = () => {
  return (
    <div className="mateja-valjarevic">
      <PageHeader
        title="Mateja Valjarević"
        subtitle="Osnivač i glavni trener Lutadora"
        image={image}
      />
      <TrainerIntro image={matejaValjarevic} text={text} />
      <div className="mateja-valljarevic-obrazovanje">
        <div className="obrazovanje-card">
          <h3>Crni pojas, II stepen</h3>
          <h2>Jedini Verifikovani profesor od strane IBJJF-a u Srbiji</h2>
          <AiOutlineCheck />
        </div>
        <div className="obrazovanje-card">
          <h3>Diplomirani</h3>
          <h2>Viši sportski trener - Sportska Akademija Beograd</h2>
          <AiOutlineCheck />
        </div>
        <div className="obrazovanje-card">
          <h3>Operativni</h3>
          <h2>JU JUTSU trener - TIMS Novi Sad</h2>
          <AiOutlineCheck />
        </div>
        <div className="obrazovanje-card">
          <h3>Licencirani</h3>
          <h2>MMA trener - MMA Savez Srbije</h2>
          <AiOutlineCheck />
        </div>
      </div>
      <div className="mateja-valjarevic-rezultati">
        <h3>Takmičarski rezultati, crni pojas</h3>
        <ul>
          <li>
            <p>
              <strong>IBJJF Poznan Open 2016</strong> - Drugo mesto, -82.3kg
              crni pojas (adult division)
            </p>
          </li>
          <li>
            <p>
              <strong>BJJF Paris Open 2017 (NO GI)</strong> - Treće mesto,
              -82.3kg crni pojas (adult division)
            </p>
          </li>
          <li>
            <p>
              <strong>IBJJF Copenhagen Open 2018</strong> - Treće mesto, -82.3kg
              crni pojas (adult division)
            </p>
          </li>
          <li>
            <p>
              <strong>IBJJF Copenhagen Open 2018 (NO GI)</strong> - Treće mesto
              - 79.5kg i drugo mesto apsolutnoj kategoriji crnih pojaseva (adult
              division)
            </p>
          </li>
          <li>
            <p>
              <strong>IBJJF Paris Open 2018</strong> - Drugo mesto, -82.3kg crni
              pojas (master 1 division)
            </p>
          </li>
          <li>
            <p>
              <strong>IBJJF Budapest Open 2019</strong> - Treće mesto, -76kg
              crni pojas (adult division)
            </p>
          </li>
          <li>
            <p>
              <strong>AJP Austria National Pro 2020</strong> - Drugo mesto -77kg
              crni pojas (adult division)
            </p>
          </li>
          <li>
            <p>
              <strong>AJP Serbia National Pro 2021</strong> - Treće mesto -77kg
              crni pojas (master 1 division)
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MatejaValjarevic;
