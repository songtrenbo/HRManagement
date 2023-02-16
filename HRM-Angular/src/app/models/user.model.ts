export class User{
    public _id: string;
    public username: string;
    public password: string;
    public confirmPassword: string;
    public firstName: string;
    public lastName: string;
    public mail: string;
    public phone: string;
    public DoB: Date;
    public status: string;
    public role: string;
    public team: string[];
    public token: string;

    constructor(_id: string, username: string, password: string, confirmPassword: string, firstName: string, lastName: string, mail: string, phone: string, DoB: Date, status: string, role: string, team: string[], token: string){
        this._id = _id;
        this.username = username;
        this.password = password;
        this.confirmPassword = confirmPassword;
        this.firstName = firstName;
        this.lastName = lastName;
        this.mail = mail;
        this.phone = phone;
        this.DoB = DoB;
        this.status = status;
        this.role = role;
        this.team = team;
        this.token = token;
    }
}