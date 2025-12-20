import { useState, useCallback } from "react";

export function useFormAndValidation() {
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(false);

    const handleChange = (e) => {
        const { name, value, validationMessage } = e.target;
        setValues((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: validationMessage }));
        const form = e.target.form || e.target.closest("form");
        if (form) {
            setIsValid(Boolean(form) && form.checkValidity());
        }
    };

    const resetForm = useCallback(
        (newValues = {}, newErrors = {}, newIsValid = false) => {
            setValues(newValues);
            setErrors(newErrors);
            setIsValid(newIsValid);
        },
        []
    );

    return { values, handleChange, errors, isValid, resetForm, setValues, setIsValid };
}
