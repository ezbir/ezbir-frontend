"use client"
import { Button, Card, CardBody, CardHeader, Input, Select, SelectItem } from "@nextui-org/react"
export const categories = [
    { key: "Medical_Supplies_Equipment", label: "Медичне обладнання" },
    { key: "Support_Military_Forces", label: "Підтримка військових" },
    { key: "Psychological_Support", label: "Психологічна підтримка" },
    { key: "Education_Training", label: "Навчання" },
    { key: "Emergency_Medical_Assistance", label: "Невідкладна медична допомога" },
    { key: "Child_Protection", label: "Захист дітей" },
    { key: "Environmental_Safety", label: "Екологія" },
    { key: "Cyber_Security", label: "Кібербезпека" },
    { key: "Infrastructure_Restoration", label: "Інфраструктура" },
    { key: "Housing_Conditions", label: "Житло" },
    { key: "Support_Vulnerable_Groups", label: "Підтримка вразливих груп людей" },
    { key: "OTHER", label: "Інше" },
]

export const status = [
    { key: "1", label: "Відкрито" },
    { key: "2", label: "Закрито" },
]

const FilterBlock: React.FC = () => {
    return (
        <div className="h-full w-1/4">
            <Card className="w-1/4 h-fit bg-background border border-foreground-50/10 fixed">
                <CardHeader className="flex justify-center">
                    <h2 className="text-base font-bold">Фільтри</h2>
                </CardHeader>
                <CardBody>
                    <form className="flex flex-col w-full gap-2">
                        <Input size="sm" label="Назва" type="text" />
                        <Input size="sm" label="Волонтер" type="text" />
                        <Select label="Категорії" selectionMode="multiple" size="sm">
                            {categories.map((el) => (
                                <SelectItem key={el.key} value={el.key} aria-label={el.label}>
                                    {el.label}
                                </SelectItem>
                            ))}
                        </Select>

                        <Select label="Статус" selectionMode="multiple" size="sm">
                            {status.map((el) => (
                                <SelectItem key={el.key} value={el.key} aria-label={el.label}>
                                    {el.label}
                                </SelectItem>
                            ))}
                        </Select>
                        <div className="flex justify-between gap-2">
                            <Input size="sm" label="Від" placeholder="0 ₴" />
                            <Input size="sm" label="До" placeholder="999999 ₴" />
                        </div>
                        <Button>Застосувати фільтри</Button>
                    </form>
                </CardBody>
            </Card>
        </div>
    )
}

export default FilterBlock
