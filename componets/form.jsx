/* eslint-disable react/prop-types */


function FormField({ name, type, placeholder, value, onChange,label }) {
    return (
       <>
        <input value={value} onChange={onChange} name={name} type={type} placeholder={placeholder} />
       
        {label? <label id={name} htmlFor={name}>{label}</label>:null}
       </>
    )
}
export default function Form({ formFields, onSubmit, error, errorMessages, btn }) {

    return <form  onSubmit={onSubmit}>
        {
            formFields.map((field, index) => (
                <>
                    <FormField value={field.value} onChange={field.onChange} name={field.name} type={field.type} placeholder={field.placeholder}
                    label={field.label} key={index} />
                    {error[field.name] ? <p>{errorMessages[field.name].message}</p> : null

                    }
                </>
            ))
        }
        <br />
        <button  type="submit">{btn}</button>
    </form >

}