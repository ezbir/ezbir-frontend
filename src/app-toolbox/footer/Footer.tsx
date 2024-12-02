import { FaFacebook, FaInstagram, FaTelegram, FaYoutube } from "react-icons/fa"

const Footer = () => {
    return (
        <div className="flex flex-col min-h-[10vh]">
            <main className="flex-grow">{/* Основний контент вашого сайту */}</main>

            <footer className="bg-[#4A3F35] text-white py-6 mt-10">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                    {/* Логотип і права */}
                    <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
                        <p className="text-xl font-bold">© 2024 ЄЗбір</p>
                        <p className="text-sm text-gray-400">Всі права захищені.</p>
                    </div>

                    {/* Меню посилань */}
                    <div className="flex space-x-6">
                        <a href="#" className="text-sm text-gray-400 hover:text-white">
                            Про нас
                        </a>
                        <a href="#" className="text-sm text-gray-400 hover:text-white">
                            Контакти
                        </a>
                        <a href="#" className="text-sm text-gray-400 hover:text-white">
                            Політика конфіденційності
                        </a>
                    </div>

                    {/* Соцмережі */}
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <a href="#" aria-label="Facebook">
                            <FaFacebook className="text-2xl text-gray-400 hover:text-white" />
                        </a>
                        <a href="#" aria-label="Instagram">
                            <FaInstagram className="text-2xl text-gray-400 hover:text-white" />
                        </a>
                        <a href="#" aria-label="Telegram">
                            <FaTelegram className="text-2xl text-gray-400 hover:text-white" />
                        </a>
                        <a href="#" aria-label="YouTube">
                            <FaYoutube className="text-2xl text-gray-400 hover:text-white" />
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
