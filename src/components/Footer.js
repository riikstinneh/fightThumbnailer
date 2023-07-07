import { FaTumblr, FaDiscord, FaGithub } from "react-icons/fa";
import { TiBusinessCard } from "react-icons/ti";
import Kofi from "./Kofi";

function Footer() {
    return (
        <footer>
            <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-6 sm:px-6 lg:space-y-16 lg:px-8">
                <div className="flex flex-col items-center">
                    <ul className="m-1 flex justify-start gap-3 text-lg sm:mt-0">
                        <li>
                            <a
                                href="https://www.tumblr.com/venfaaniik"
                                rel="noreferrer"
                                target="_blank"
                                className="text-gray-700 transition hover:text-blue-500">
                                <span className="sr-only">Tumblr</span>
                                <FaTumblr />
                            </a>
                        </li>

                        <li>
                            <a
                                href="https://discord.gg/nARAtAKahs"
                                rel="noreferrer"
                                target="_blank"
                                className="text-gray-700 transition hover:text-blue-500">
                                <span className="sr-only">Discord</span>
                                <FaDiscord />
                            </a>
                        </li>

                        <li>
                            <a
                                href="https://github.com/venfaaniik"
                                rel="noreferrer"
                                target="_blank"
                                className="text-gray-700 transition hover:text-blue-500">
                                <span className="sr-only">GitHub</span>
                                <FaGithub />
                            </a>
                        </li>

                        <li>
                            <a
                                href="https://venfaaniik.carrd.co/"
                                rel="noreferrer"
                                target="_blank"
                                className="text-gray-700 transition hover:text-blue-500">
                                <span className="sr-only">Carrd</span>
                                <TiBusinessCard />
                            </a>
                        </li>
                    </ul>
                    <div className="my-2">
                        <Kofi />
                    </div>
                    <p className="text-center text-xs text-gray-500">
                        Venfaaniik &copy; 2023. This website only saves data to
                        your local browser storage. <br />
                        Released under MIT license.
                    </p>
                </div>
            </div>
        </footer>
    );
}

//absolute bottom-0 left-0 m-3

export default Footer;
