interface credentials{
    email : string|undefined;
    password : string|undefined;
}
interface user_form_input{
    username? : string
    email? : string;
    password? : string;
    password2?:string;
}


interface user{
    pk : number;
    email : string;
    firstName : string;
    lastName : string;
}

interface userProife{
    access : string;
    refresh : string;
    user : user
}


export type{credentials,userProife,user_form_input}