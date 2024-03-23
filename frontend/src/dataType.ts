interface credentials{
    email : string|undefined;
    password : string|undefined;
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

export type{credentials,userProife}