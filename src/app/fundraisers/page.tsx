import Fundraiser from "@/app-toolbox/fundraiser/Fundraiser"
import FilterBlock from "@/app-toolbox/filter/FilterBlock"
import { Pagination } from "@nextui-org/react"

const FundraisersPage: React.FC = () => {
    return (
        //todo fundraiser page
        <div className="flex gap-4 m-2">
            <FilterBlock />
            <div className="flex flex-col flex-wrap gap-2 w-3/4">
                <Fundraiser />
                <Fundraiser isClosed={true} />
                <Fundraiser />
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

export default FundraisersPage
