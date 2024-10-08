/* eslint-disable react/prop-types */


function FormField({ name, type, placeholder, value, onChange,label ,className, span}) {
    return (
       <>
    {label? <label id={name} htmlFor={name}>{label}</label>:null}
        
        <input value={value} onChange={onChange} name={name} className={className} type={type} placeholder={placeholder} />
       
        {span? <span id={name} htmlFor={name}>{span}</span>:null}
       </>
    )
}
export default function Form({ formFields, onSubmit, error, errorMessages, btn }) {

    return <form  onSubmit={onSubmit}>
        {
            formFields.map((field, index) => (
                <>
                    <FormField value={field.value} 
                    className={field.className} onChange={field.onChange} name={field.name} type={field.type} span={field.span}
                    placeholder={field.placeholder}
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