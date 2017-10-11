export class User {
    constructor(
        public _id: String = '',
        public username: string = '',
        public password: string = '',
        public editable: boolean = false
    ) {}
}
