export class Token{
    public userId: string;
    public firstName: string;
    public mail: string;
    public iat: number;
    public exp: number;
    constructor(userId: string, firstName: string, mail: string, iat: number, exp: number){
        this.userId = userId;
        this.firstName = firstName;
        this.mail = mail;
        this.iat = iat;
        this.exp = exp;
    }
}