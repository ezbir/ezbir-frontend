"use client"

import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
    Input,
    SelectItem,
    Select,
    Textarea,
} from "@nextui-org/react"
import React, { useCallback, useEffect } from "react"
import { categories } from "@/app-toolbox/filter/FilterBlock"
import { EditIcon } from "@nextui-org/shared-icons"
import { useForm, Controller } from "react-hook-form"
import Fundraiser from "@/app-toolbox/fundraiser/Fundraiser"

interface EditFundraiserProps {
    isNew: boolean
    fundraiser?: Fundraiser
}

const EditFundraiser: React.FC<EditFundraiserProps> = ({ isNew = true, fundraiser }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const {
        control,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<Fundraiser>()

    useEffect(() => {
        if (fundraiser) {
            reset({
                title: fundraiser.title,
                amount: fundraiser.amount,
                link: fundraiser.link,
                description: fundraiser.description,
                labels: fundraiser.labels, // Масив лейблів буде передано сюди
            })
        }
    }, [fundraiser, reset])

    const onSubmit = (data: Fundraiser) => {
        console.log(data)
        onClose()
    }

    return (
        <>
            <div className="flex flex-wrap gap-3">
                <Button variant="flat" color="default" onPress={onOpen} className="w-full">
                    {isNew ? (
                        "Створити збір"
                    ) : (
                        <>
                            <EditIcon />
                        </>
                    )}
                </Button>
            </div>
            <Modal backdrop="blur" isOpen={isOpen} onClose={onClose}>
                <ModalContent>
                    <ModalHeader className="flex flex-col gap-1">
                        {isNew ? "Новий збір" : "Редагування збору"}
                    </ModalHeader>
                    <ModalBody>
                        <Controller
                            name="title"
                            control={control}
                            render={({ field }) => (
                                <Input {...field} size="sm" label="Назва Збору" isInvalid={!!errors.title} />
                            )}
                        />
                        <Controller
                            name="amount"
                            control={control}
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    size="sm"
                                    label="Сума"
                                    type="text"
                                    isInvalid={!!errors.amount}
                                />
                            )}
                        />
                        <Controller
                            name="link"
                            control={control}
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    size="sm"
                                    label="Силка на банку"
                                    isInvalid={!!errors.link}
                                />
                            )}
                        />
                        <Controller
                            name="description"
                            control={control}
                            render={({ field }) => (
                                <Textarea
                                    {...field}
                                    label="Опис"
                                    placeholder="Збираємо кошти на медикаменти"
                                    isInvalid={!!errors.description}
                                />
                            )}
                        />
                        <Controller
                            name="labels"
                            control={control}
                            render={({ field }) => {
                                const selectedKeys = fundraiser?.labels
                                    ? fundraiser.labels
                                          .map((label) => {
                                              const category = categories.find(
                                                  (category) => category.label === label
                                              )
                                              return category!.key
                                          })
                                          .filter(Boolean)
                                    : []
                                return (
                                    <Select
                                        {...field}
                                        label="Категорії"
                                        selectionMode="multiple"
                                        size="sm"
                                        isInvalid={!!errors.labels}
                                        defaultSelectedKeys={selectedKeys!}
                                        value={field.value || []}
                                        onChange={(value) => {
                                            field.onChange(value)
                                        }}
                                    >
                                        {categories.map((el) => (
                                            <SelectItem key={el.key} value={el.key} aria-label={el.label}>
                                                {el.label}
                                            </SelectItem>
                                        ))}
                                    </Select>
                                )
                            }}
                        />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" variant="light" onPress={onClose}>
                            Скасувати
                        </Button>
                        <Button variant="light" color="default">
                            {isNew ? "Створити" : "Зберегти"}
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default EditFundraiser
