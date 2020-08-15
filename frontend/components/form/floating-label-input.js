import React, { useEffect, useState, useRef } from 'react'
import { Form } from 'react-bootstrap'

const FloatingLabelInput = ({ id, type, label, description, placeholder }) => {
    const [focused, setFocused] = useState(false)
    const [value, setValue] = useState("")
    const refContainer = useRef('container')

    useEffect(() => {
        if (focused) refContainer.current.classList.add("focused")
        else refContainer.current.classList.remove("focused")
    }, [focused])

    useEffect(() => {
        if (value) refContainer.current.classList.add("with-content")
        else refContainer.current.classList.remove("with-content")
    }, [value])

    const GetLabel = () => {
        if (!label) return ""
        return (
            <Form.Label>{label}</Form.Label>
        )
    }

    const GetDescription = () => {
        if (!description) return ""
        return (
            <Form.Text className="text-muted mt-0">
                <small>{description}</small>
            </Form.Text>
        )
    }

    const GetId = () => {
        if (id) return id
        return ""
    }

    const GetType = () => {
        if (type) return type
        return "text"
    }

    return (
        <Form.Group controlId={GetId()} className='floating-label-input mb-4' ref={refContainer}>
            <GetLabel />
            <Form.Control placeholder={placeholder} type={GetType()} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} onChange={e => setValue(e.target.value)} className="mb-3" />
            <div className="form-line" />
            <GetDescription />
        </Form.Group>
    )
}
export default FloatingLabelInput
