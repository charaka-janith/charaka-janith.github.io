import myImg from "../../assets/images/myImg.jpg";
import './OtherLinks.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Brand_icons from '@fortawesome/free-brands-svg-icons';
import * as Solid_icons from '@fortawesome/free-solid-svg-icons';

export default function OtherLinks () {
    return (
        <section className="text-gray-400">
            <div className="container px-5 py-10 mx-auto pb-0 text-center lg:px-40">
                <div className="flex flex-col w-full">
                    <div className="m-auto">
                        <img
                            className="object-cover object-center myImg sticky z-10"
                            alt="my profile"
                            src={myImg}
                        />
                    </div>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-lg font-bold text-text_dark">
                        Follow me on
                    </p>
                </div>
            </div>
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full">
                    <div className="m-auto">
                        <a href="https://stackoverflow.com/users/10982377/charaka-janith?tab=profile" className="mybtn sticky z-10" rel="noreferrer"
                           target="_blank"><FontAwesomeIcon icon={Brand_icons.faStackOverflow} size="10x" transform="shrink-6"/></a>
                        <a href="https://www.linkedin.com/in/charaka-janith-933803179" className="mybtn sticky z-10" rel="noreferrer"
                           target="_blank"><FontAwesomeIcon icon={Brand_icons.faLinkedin} size="6x" transform="shrink-6"/></a>
                        <a href="https://github.com/charaka-janith" className="mybtn sticky z-10" rel="noreferrer"
                           target="_blank"><FontAwesomeIcon icon={Brand_icons.faGithub} size="6x" transform="shrink-6"/></a>
                        <a href="https://www.facebook.com/b.v.charaka.janith" className="mybtn sticky z-10" rel="noreferrer"
                           target="_blank"><FontAwesomeIcon icon={Brand_icons.faFacebook} size="6x" transform="shrink-6"/></a>
                        <a href="https://twitter.com/CHARAKAJANITH1" className="mybtn sticky z-10" rel="noreferrer"
                           target="_blank"><FontAwesomeIcon icon={Brand_icons.faTwitter} size="6x" transform="shrink-6"/></a>
                        <a href="https://www.hackthebox.eu/profile/269679" className="mybtn sticky z-10" rel="noreferrer"
                           target="_blank"><FontAwesomeIcon icon={Solid_icons.faCube} size="6x" transform="shrink-6"/></a>
                        <a href="https://www.hackerrank.com/charakajanithba1" className="mybtn sticky z-10" rel="noreferrer"
                           target="_blank"><FontAwesomeIcon icon={Brand_icons.faHackerrank} size="6x" transform="shrink-6"/></a>
                        <a href="https://www.youtube.com/channel/UCuPZ5lvZjwVnZn8ZD_kmzmw" className="mybtn sticky z-10" rel="noreferrer"
                           target="_blank"><FontAwesomeIcon icon={Brand_icons.faYoutube} size="6x" transform="shrink-6"/></a>
                        <a href="https://g.dev/charaka-janith" className="mybtn sticky z-10" rel="noreferrer"
                           target="_blank"><FontAwesomeIcon icon={Brand_icons.faGoogle} size="6x" transform="shrink-6"/></a>
                    </div>
                </div>
                <div className="flex flex-wrap">
                </div>
            </div>
        </section>
    );
}