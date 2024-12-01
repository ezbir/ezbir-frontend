import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Button,
    Chip,
} from "@nextui-org/react"
import { EditIcon, LinkIcon } from "@nextui-org/shared-icons"
import Link from "next/link"
import EditFundraiser from "@/app-toolbox/fundraiser/EditFundraiser"

//todo Fundraiser.tsx: interface
interface Fundraiser {
    title: string
    username: string
    amount: string
    link: string
    description: string
    labels: string[]
    isClosed?: boolean
    isOwner?: boolean
}

// todo Fundraiser.tsx: dynamic data
const Fundraiser: React.FC<Fundraiser> = ({
    title = "Збір для 3-ої штурмової бригади",
    username = "Програміст Коля",
    amount = 666,
    link = "monobank.com",
    description = " Збираю кошти для бригади мого знайомого, вони потребують автомобіль та медикаменти, тому буду вдячний за любі  кошти!!!",
    labels = ["Військова допомога", "Медикаменти"],
    isClosed = false,
    isOwner,
}) => {
    return (
        <div>
            <Card className="bg-background border border-foreground-50/10">
                <CardHeader className="flex justify-between items-center">
                    <Link
                        href="/fundraisers"
                        className="flex w-fit items-center justify-between group"
                    >
                        <h3 className="font-bold text-xl w-fit flex flex-row items-center gap-2">
                            {title}
                            <LinkIcon className="group-hover:text-primary" />
                        </h3>
                    </Link>
                    {isOwner && (
                        <EditFundraiser
                            isNew={false}
                            fundraiser={{
                                title,
                                username,
                                amount,
                                link,
                                description,
                                labels,
                                isClosed,
                            }}
                        />
                    )}
                </CardHeader>
                <CardBody className="flex gap-2">
                    <div className="flex justify-between items-center font-medium text-base">
                        <p>{username}</p>
                        <p>Сума: {amount} ₴</p>
                    </div>

                    <p>{description}</p>
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
                </CardBody>
                <CardFooter>
                    <Button
                        isDisabled={isClosed}
                        className="bg-black text-white dark:bg-white dark:text-black w-full"
                    >
                        Mono
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}

export default Fundraiser
