import {
    Button,
    Card,
    CardBody,
    CardFooter,
    Image,
    Link,
} from "@nextui-org/react"
import EditFundraiser from "@/app-toolbox/fundraiser/EditFundraiser"
import { LinkIcon } from "@nextui-org/shared-icons"

interface ProfileCardProps {
    isOwner?: boolean
    fullName: string
    email: string
    isShowEmail: boolean
    description: string
    userId: number
}

const tempDescription =
    "I work at a company called Fernir as a Junior Front End Developer and a supervisor. My main job involves developing a SaaS product, where I solve bugs of various complexity. I also manage a team of 6 people, conduct code reviews, assign tasks, and report on each team member's progress. In my work, I actively use skills such as Next.js, Tailwind CSS, and TypeScript.\n" +
    "In addition to my main job, I am working on my own pet project — a charitable platform for fundraising. This platform allows users to create fundraising campaigns for various causes, such as supporting the military, medical needs, helping children, and other important initiatives. My project gives me the opportunity to develop my web development skills while creating valuable tools for society."

const ProfileCard: React.FC<ProfileCardProps> = ({
    isOwner = true,
    fullName = "Ruslan Kuchmynda",
    email = "kuchmynda@gmail.com",
    isShowEmail = true,
    description = tempDescription,
    userId = 1,
}) => {
    return (
        <div className="h-full w-1/4">
            <Card
                isBlurred
                className="h-fit bg-background border border-foreground-50/10 block"
                shadow="sm"
            >
                <CardBody className="flex ">
                    <div className="w-[256px] flex justify-center">
                        <Image
                            alt="Album cover"
                            className="object-cover"
                            height="256px"
                            width="256px"
                            shadow="md"
                            src="/avatar.png"
                        />
                    </div>

                    <div>
                        <div className="flex flex-col sm:flex-row gap-4 items-start justify-between">
                            <div>
                                <h3 className="text-xl font-bold w-fit">
                                    {fullName}
                                </h3>
                            </div>
                        </div>
                        {isShowEmail && (
                            <Link
                                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {email}
                                <LinkIcon />
                            </Link>
                        )}

                        <p className="text-xs sm:text-base w-fit overflow-auto mt-4 text-justify">
                            {description}
                        </p>
                    </div>
                </CardBody>
                <CardFooter className="flex justify-between">
                    {isOwner && (
                        <>
                            <EditFundraiser />
                        </>
                    )}
                </CardFooter>
            </Card>
        </div>
    )
}

export default ProfileCard
