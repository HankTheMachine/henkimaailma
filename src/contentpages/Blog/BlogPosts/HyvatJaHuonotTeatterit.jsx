import React from "react";
import { HenkimaailmaPage } from "../../../components";

export class HyvatJaHuonotTeatterit extends HenkimaailmaPage {
    render() {
        return (
            <div>
                <p>Muutamat ovat mollanneet vastikään internetissä noteerattua Käärijä-plagiarismipohdintaani ylipitkäksi ja toivoneet, että päätelmät olisi esitetty suoremmin turhaa paskaa jauhamatta.
                </p>
                <p>
                    Esitetään nyt sitten tiivistä taidekritiikkiä. Tässä on arvostelut suurimmasta osasta näkemistäni näyttämöteoksista. Päivitän listaa kun muistan.
                </p>
                <div className="twoBlocks">
                    <div className="twoBlocksSub">
                        <b>En pitänyt:</b>
                        <ul>
                            <li>Vihreä Hissi (Oulun Työväen Näyttämö)</li>
                            <li>Cabaret Noir (Ilmaisukoulu Tuike)</li>
                            <li>N-Berg - kadonnut yhteys (Turkulainen Humanistispeksi) **</li>
                            <li>Ei kyyneltäkään virrannut (Ylimuonion Urheiluteatteri)</li>
                            <li>Herra Hakkaraisen seitsemän ihmettä (Linnateatteri)</li>
                            <li>Kahden Kauppa (Linnateatteri) **</li>
                            <li>Hotelli Globen arvoitus (Turkulainen Humanistispeksi) *</li>
                            <li>Adalmiinan Helmi (Turun Ylioppilasteatteri)
                            </li>
                            <li>Röyhkeyskoulu (Jenni Janakka)</li>
                            <li>Töivrih - Hirviöt! (Hukkateatteri) *</li>
                            <li>Setäkuiskaaja (Linnateatteri) **</li>
                            <li>Miesflunssa (Linnateatteri)</li>
                        </ul>
                    </div>
                    <div className="twoBlocksSub">
                        <b>Pidin:</b>
                        <ul>
                            <li>Aino - aika turkulainen seikkailu (Turkulainen humanistispeksi) ** </li>
                            <li>Täydellinen Päivä (Turun Ylioppilasteatteri)</li>
                            <li>7 Veljestä (Turun Kaupunginteatteri)</li>
                            <li>Viettelysten Asuntovaunu (AdAstra-teatteri)</li>
                            <li>Älä ammu ohi! (Hybridispeksi)</li>
                            <li>Selliosasto 22 (I/O-speksi)</li>
                            <li>Suden Nälkä **</li>
                            <li>Miehenkäyttöopas (Linnateatteri)</li>
                            <li>Appivanhempien ABC (Linnateatteri)</li>
                            <li>Akselin ja Elinan hääfarssi (Linnateatteri) **</li>
                            <li>Piru Naiseksi (Linnateatteri) **</li>
                            <li>Minna Cunt - valtakunnan kauhein akka (Teatteri Mundo) *</li>
                            <li>Pizza! (Turun taideakatemia) *</li>
                            <li>Papin Perhe (Jo-Jo-teatteri) *</li>
                            <li>Lauma (Turun Ylioppilasteatteri)</li>
                            <li>Tatu ja Patu, syömään! (Linnateatteri)</li>
                            <li>Kiviä Taskussa (Helsingin Kaupunginteatteri)</li>
                            <li>Nälkätaiteilija (Turun Ylioppilasteatteri) *</li>
                            <li>Palkkamurhaajan Painajainen (Linnateatteri) **</li>
                            <li>Etusivun Juttu (Linnateatteri)</li>
                            <li>Mielipuoliveturi (Turun Ylioppilasteatteri) *</li>
                            <li>Lumous - Sirkusvarieté</li>
                            <li>Kuumia Aaltoja (Teatteri Fake)</li>
                            <li>Ikävän maa (Turun Ylioppilasteatteri) *</li>
                            <li>Pearly Gates (Turun Ylioppilasteatteri) *</li>
                            <li>Kuin kotkat jäällä (Turun Ylioppilasteatteri) *</li>
                        </ul>
                    </div>
                </div>
                <p>
                    * = Tuttavani olivat työryhmässä <br/>
                    ** = Olin itse työryhmässä
                </p>
            </div>
        )
    }
}