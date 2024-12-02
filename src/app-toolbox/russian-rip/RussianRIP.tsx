"use client"
import { useEffect, useState } from "react"
import axios from "axios"

interface Stats {
    personnel_units: number
    planes: number
    helicopters: number
    tanks: number
    armoured_fighting_vehicles: number
    artillery_systems: number
    mlrs: number
    aa_warfare_systems: number
    uav_systems: number
    cruise_missiles: number
    warships_cutters: number
    submarines: number
    vehicles_fuel_tanks: number
    special_military_equip: number
    date: string
}

const RussianRIP: React.FC = () => {
    const [stats, setStats] = useState<Stats | null>(null)
    const [date, setDate] = useState<string | null>(null)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        axios
            .get("https://russianwarship.rip/api/v1/statistics/latest")
            .then((response) => {
                setStats(response.data.data.stats)
                setDate(response.data.data.date)
            })
            .catch((error) => {
                setError(error.message)
            })
    }, [])

    if (error) {
        return <div>Error: {error}</div>
    }

    if (!stats) {
        return <div>Loading...</div>
    }

    const renderStat = (value: number | null) => {
        return value === null ? "Loading..." : value
    }

    return (
        <div className="flex justify-center items-center min-h-screen">
            <section className="w-[90%] max-w-5xl bg-[#3C352E] text-white p-8 rounded-lg shadow-lg">
                <h1 className="text-center text-3xl font-bold text-orange-400 mb-8">
                    Орієнтовні втрати противника <br /> станом на {date}
                </h1>
                <div className="grid grid-cols-2 gap-8">
                    <div className="flex flex-col justify-center items-center">
                        <p className="text-2xl font-bold">{renderStat(stats.personnel_units)}</p>
                        <p className="text-sm text-gray-400">Особовий склад</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <p className="text-2xl font-bold">{renderStat(stats.planes)}</p>
                        <p className="text-sm text-gray-400">Літаки</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <p className="text-2xl font-bold">{renderStat(stats.helicopters)}</p>
                        <p className="text-sm text-gray-400">Гелікоптери</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <p className="text-2xl font-bold">{renderStat(stats.tanks)}</p>
                        <p className="text-sm text-gray-400">Танки</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <p className="text-2xl font-bold">{renderStat(stats.armoured_fighting_vehicles)}</p>
                        <p className="text-sm text-gray-400">Бойові броньовані машини</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <p className="text-2xl font-bold">{renderStat(stats.artillery_systems)}</p>
                        <p className="text-sm text-gray-400">Артилерійські системи</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <p className="text-2xl font-bold">{renderStat(stats.mlrs)}</p>
                        <p className="text-sm text-gray-400">РСЗВ</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <p className="text-2xl font-bold">{renderStat(stats.aa_warfare_systems)}</p>
                        <p className="text-sm text-gray-400">Засоби ППО</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <p className="text-2xl font-bold">{renderStat(stats.uav_systems)}</p>
                        <p className="text-sm text-gray-400">БПЛА оперативного рівня</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <p className="text-2xl font-bold">{renderStat(stats.cruise_missiles)}</p>
                        <p className="text-sm text-gray-400">Крилаті ракети</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <p className="text-2xl font-bold">{renderStat(stats.warships_cutters)}</p>
                        <p className="text-sm text-gray-400">Кораблі/катери</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <p className="text-2xl font-bold">{renderStat(stats.submarines)}</p>
                        <p className="text-sm text-gray-400">Підводні човни</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <p className="text-2xl font-bold">{renderStat(stats.vehicles_fuel_tanks)}</p>
                        <p className="text-sm text-gray-400">Автомобільна техніка та цистерни</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <p className="text-2xl font-bold">{renderStat(stats.special_military_equip)}</p>
                        <p className="text-sm text-gray-400">Спеціальна техніка</p>
                    </div>
                </div>
                <p className="text-center mt-5 text-gray-500">Генеральний штаб Збройних Сил України</p>
            </section>
        </div>
    )
}

export default RussianRIP
