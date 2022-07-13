export class Contact{
    name = '';
    lastname = '';
    email = '';
    conecting = false;  

    constructor(name, lastname,email,conecting){
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.conecting = conecting;
    }
}