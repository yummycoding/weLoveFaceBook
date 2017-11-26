import {Comment} from './comment'
export class Post {
    constructor(
        public _id: String = '',
        public title: String = 'wedontneedtitle',
        public body: String = '',
        public createdBy: String = '',
        public createdAt: Date = null, // need take care initial value
        public likes: Number = 0,
        public likedBy: Array<String> = [],
        public dislikes: Number = 0,
        public dislikedBy: Array<String> = [],
        public comments: Array<Comment> = [],
        public img: String = ''
    ) {}
}
