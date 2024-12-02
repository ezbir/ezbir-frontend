import React from "react"
import { FundraiserPage as Fundraiser } from "@/app-toolbox/fundraiser/FundraiserPage"

export async function getFundraiserData(fundraiserId: string) {
    const res = await fetch(`https://api.example.com/fundraisers/${fundraiserId}`)
    return res.json()
}

const FundraiserPage = async ({ params }: { params: { fundraiserId: string } }) => {
    const { fundraiserId } = params
    // const fundraiser = await getFundraiserData(fundraiserId);

    return (
        <div>
            <Fundraiser />
        </div>
    )
}

export default FundraiserPage
