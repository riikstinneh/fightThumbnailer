import { FaTumblr, FaDiscord, FaGithub } from "react-icons/fa"
import { TiBusinessCard } from "react-icons/ti"

function Footer() {
    return (
        <footer>
            <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-6 sm:px-6 lg:space-y-16 lg:px-8">
                <div className="flex flex-col items-center">
                    <div className="my-2 text-blue-600">@Venfaaniik</div>

                    <ul className="m-3 flex justify-start gap-3 text-lg sm:mt-0">
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
                    <p className="text-center text-xs text-gray-500">
                        &copy; 2023. This website only saves data to your local
                        browser storage. <br />
                        Released under MIT license.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
