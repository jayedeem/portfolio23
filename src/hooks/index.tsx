import { useState } from 'react'

export const useModal = () => {
	const [isOpen, setisOpen] = useState(false)
	const toggleModal = () => {
		setisOpen(!isOpen)
	}
	return { isOpen, toggleModal }
}
