export function validateEmail(form, setError, error){
    if(!form.email){ setError({...error, email: "Email is required"});}
    else{ setError({...error, email: ""})
    if(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{3})+$/.test(form.email)){ 
        setError({...error, email: ""})
        if(form.email.length > 35){
            setError({...error, email: "Email is too long"})
        }else{
            setError({...error, email: ""})

        }}
    else {setError({...error, email: "Email is invalid"})}}

}
export function validatePassword(form, setError, error){
    if(!form.password){ setError({...error, password: "Password is required"});}
    else{ setError({...error, password: ""})
    if(/[0-9]/.test(form.password)){
        setError({...error, password: ""})
        if((form.password.length >= 6) && (form.password.length <= 10)){
            setError({...error, password: ""})
        }else{ setError({...error, password: "Password must have more than 5 characters and less than 11"}) }
    }else{
        setError({...error, password: "Need at least one number"})
    }}
}
