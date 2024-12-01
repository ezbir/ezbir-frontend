import ProfileCard from "@/app-toolbox/profile/ProfileCard"
import Fundraiser from "@/app-toolbox/fundraiser/Fundraiser"
import { Pagination } from "@nextui-org/react"

const ProfilePage: React.FC = (props) => {
    return (
        <div className="flex flex-col sm:flex-row gap-4 m-2">
            <ProfileCard />
            <div className="flex flex-col flex-wrap gap-2 w-3/4">
                <Fundraiser isOwner={true} />
                <Fundraiser isClosed={true} isOwner={true} />
                <Fundraiser isOwner={true} />
                <Pagination
                    color="default"
                    showControls
                    total={10}
                    initialPage={1}
                />
            </div>
        </div>
    )
}

export default ProfilePage
