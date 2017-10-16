export class User {
    constructor(
        public _id: String = '',
        public username: string = '',
        public password: string = '',
        public email   : string = '',
        public nickname: string = '',
        public gender  : number = 0,
        public dob     : string = '',
        public emaileditable: boolean = false,
        public passwordeditable: boolean = false
    ) {}
}
