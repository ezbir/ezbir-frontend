"use client"
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Link,
    Input,
    DropdownItem,
    DropdownTrigger,
    Dropdown,
    DropdownMenu,
    Avatar,
} from "@nextui-org/react"
import { SearchIcon } from "@nextui-org/shared-icons"

const Navigation: React.FC = () => {
    return (
        <Navbar isBordered>
            <NavbarContent>
                <NavbarBrand className="mr-4">
                    <h1 className="hidden sm:block font-bold text-inherit text-2xl">
                        <span className="bg-black text-white dark:bg-white dark:text-black px-2 py-1 rounded-md">
                            Є
                        </span>{" "}
                        ЗБІР
                    </h1>
                </NavbarBrand>
                <NavbarContent className="hidden sm:flex gap-10">
                    <NavbarItem>
                        <Link color="foreground" href="/fundraisers">
                            Збори
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href="/volunteers">
                            Волонтери
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href="/support">
                            Підтримка
                        </Link>
                    </NavbarItem>
                </NavbarContent>
            </NavbarContent>

            <NavbarContent as="div" className="items-center" justify="end">
                <Input
                    classNames={{
                        base: "max-w-full sm:max-w-[10rem] h-10",
                        mainWrapper: "h-full",
                        input: "text-small",
                        inputWrapper:
                            "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
                    }}
                    placeholder="Пошук"
                    size="sm"
                    startContent={<SearchIcon />}
                    type="search"
                />
                <Dropdown placement="bottom-end">
                    <DropdownTrigger>
                        <Avatar
                            isBordered
                            as="button"
                            className="transition-transform"
                        />
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Profile Actions" variant="flat">
                        <DropdownItem key="email">
                            <p className="font-semibold">test@example.com</p>
                        </DropdownItem>
                        <DropdownItem key="profile">
                            <Link href="/profile">Профіль</Link>
                        </DropdownItem>
                        <DropdownItem key="fundraisers">Мої збори</DropdownItem>
                        <DropdownItem key="analytics">Аналітика</DropdownItem>
                        <DropdownItem key="settings">Налаштування</DropdownItem>
                        <DropdownItem key="logout" color="danger">
                            Вийти
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </NavbarContent>
        </Navbar>
    )
}

export default Navigation
