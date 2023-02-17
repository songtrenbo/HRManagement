export class Token{
    public userId: string;
    public firstName: string;
    public mail: string;
    public role: string;
    public iat: number;
    public exp: number;
    constructor(userId: string, firstName: string, mail: string, role: string, iat: number, exp: number){
        this.userId = userId;
        this.firstName = firstName;
        this.mail = mail;
        this.role = role;
        this.iat = iat;
        this.exp = exp;
    }
}