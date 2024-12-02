"use client"
import { Card, CardHeader, CardBody, CardFooter, Button, Chip } from "@nextui-org/react"
import Link from "next/link"
import ImageViewer from "@/app-toolbox/image-viewer/ImageViewer"
import { useRef } from "react"
import Fundraiser from "@/app-toolbox/fundraiser/Fundraiser"
import { EyeIcon } from "@nextui-org/shared-icons"

export const FundraiserPage: React.FC<Fundraiser> = ({
    id = "1",
    title = "Збір для 3-ої штурмової бригади",
    username = "Програміст Коля",
    amount = 666,
    link = "https://send.monobank.ua/jar/5JnR5Jqr5w",
    description = "Збираю кошти для бригади мого знайомого, вони потребують автомобіль та медикаменти, тому буду вдячний за любі кошти!!!",
    labels = ["Підтримка військових", "Медичне обладнання"],
    isClosed = false,
    isOwner,
}) => {
    const scrollContainerRef = useRef<HTMLDivElement>(null)

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" })
        }
    }

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" })
        }
    }

    return (
        <div className="flex justify-center mt-2">
            <Card className="bg-background border border-foreground-50/10 w-3/4">
                <CardHeader className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold">{title}</h2>
                </CardHeader>
                <CardBody className="flex flex-col gap-4">
                    <div className="flex justify-between items-center font-medium text-base">
                        <p>{username}</p>
                        <p>Сума: {amount} ₴</p>
                    </div>
                    <p className="w-full text-justify">{description}</p>
                    <div className="flex gap-2 flex-wrap">
                        {labels.map((label) => (
                            <Chip color="default" key={label}>
                                {label}
                            </Chip>
                        ))}
                        {isClosed ? (
                            <Chip color="danger">Збір закритий</Chip>
                        ) : (
                            <Chip color="success">Збір відкритий</Chip>
                        )}
                    </div>

                    {/* Горизонтальний скрол для зображень зі стрілками */}
                    <div className="flex justify-center items-center">
                        <button
                            onClick={scrollLeft}
                            className="absolute left-2 transform -translate-y-1/2 bg-black text-white rounded-full p-2 shadow-md hover:bg-gray-800 z-50"
                        >
                            &#8592;
                        </button>
                        <div
                            ref={scrollContainerRef}
                            className="flex overflow-x-auto pb-2 w-[90%] gap-2 snap-x snap-mandatory scroll-smooth rounded-md"
                        >
                            {[
                                "https://armyinform.com.ua/wp-content/uploads/2019/12/1-1-1.jpg",
                                "https://online.icu/wp-content/uploads//cover-war-bonds-1-1024x683.jpg",
                                "https://minfin.com.ua/img/2023/102437433/2cd686c55c410b271846bb02be15b832.jpeg",
                                "https://armyinform.com.ua/wp-content/uploads/2019/12/1-1-1.jpg",
                                "https://online.icu/wp-content/uploads//cover-war-bonds-1-1024x683.jpg",
                                "https://minfin.com.ua/img/2023/102437433/2cd686c55c410b271846bb02be15b832.jpeg",
                            ].map((src, index) => (
                                <div
                                    key={index}
                                    className="min-w-[300px] h-auto snap-start pb-2 flex-shrink-0"
                                >
                                    <ImageViewer src={src} alt={`image ${index + 1}`} />
                                </div>
                            ))}
                        </div>
                        <button
                            onClick={scrollRight}
                            className="absolute right-2 transform -translate-y-1/2 bg-black text-white rounded-full p-2 shadow-md hover:bg-gray-800 z-50"
                        >
                            &#8594;
                        </button>
                    </div>
                </CardBody>
                <CardFooter className="flex flex-col items-end gap-4">
                    <div className="flex items-center gap-1 mx-2">
                        42 <EyeIcon />
                    </div>
                    <Button
                        as={Link}
                        href={link}
                        isDisabled={isClosed}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-black text-white dark:bg-white dark:text-black w-full"
                    >
                        Mono
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}

export default FundraiserPage
