import React, { useEffect, useState, useRef } from 'react'
import { Form } from 'react-bootstrap'
import './styles.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamation } from '@fortawesome/free-solid-svg-icons'

const FloatingLabelInput = ({ id, type, label, description, placeholder, error, value, onChange, onBlur, className }) => {
    const [focused, setFocused] = useState(false)
    const container = useRef('container')

    useEffect(() => {
        if (focused) container.current.classList.add("focused")
        else container.current.classList.remove("focused")
    }, [focused])

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

    const handleOnBlur = () => {
        setFocused(false)
        if (onBlur) onBlur()
    }

    const GetErrorIcon = () => {
        if (!error) return ""
        return (
            <FontAwesomeIcon icon={faExclamation} className="text-danger error-icon" />
        )
    }

    return (
        <Form.Group controlId={GetId()} className={`floating-label-input ${value ? 'with-content' : ''} ${error ? 'has-error' : ''} ${className}`} ref={container}>
            <GetLabel />
            <Form.Control
                placeholder={placeholder}
                type={GetType()}
                onFocus={() => setFocused(true)}
                onBlur={handleOnBlur}
                onChange={onChange}
                value={value}
            />
            <div className="form-line">
                <div className="colored" />
            </div>
            <GetDescription />
            <GetErrorIcon />
        </Form.Group>
    )
}
export default FloatingLabelInput
