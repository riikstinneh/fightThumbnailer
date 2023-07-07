import { FaTumblr, FaDiscord, FaGithub } from "react-icons/fa"
import { TiBusinessCard } from "react-icons/ti"

function Footer() {
    return (
        <footer>
            <div class="mx-auto max-w-screen-xl space-y-8 px-4 py-6 sm:px-6 lg:space-y-16 lg:px-8">
                <div class="flex flex-col items-center">
                    <div class="my-2 text-blue-600">@Venfaaniik</div>

                    <ul class="m-3 flex justify-start gap-3 text-lg sm:mt-0">
                        <li>
                            <a
                                href="/"
                                rel="noreferrer"
                                target="_blank"
                                class="text-gray-700 transition hover:opacity-75">
                                <span class="sr-only">Tumblr</span>
                                <FaTumblr />
                            </a>
                        </li>

                        <li>
                            <a
                                href="/"
                                rel="noreferrer"
                                target="_blank"
                                class="text-gray-700 transition hover:opacity-75">
                                <span class="sr-only">Discord</span>
                                <FaDiscord />
                            </a>
                        </li>

                        <li>
                            <a
                                href="/"
                                rel="noreferrer"
                                target="_blank"
                                class="text-gray-700 transition hover:opacity-75">
                                <span class="sr-only">GitHub</span>
                                <FaGithub />
                            </a>
                        </li>

                        <li>
                            <a
                                href="/"
                                rel="noreferrer"
                                target="_blank"
                                class="text-gray-700 transition hover:opacity-75">
                                <span class="sr-only">Carrd</span>
                                <TiBusinessCard />
                            </a>
                        </li>
                    </ul>
                    <p class="text-center text-xs text-gray-500">
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
