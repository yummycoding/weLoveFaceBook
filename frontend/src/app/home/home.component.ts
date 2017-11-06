import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post';
import { User } from '../user';
import { PostService } from '../post.service';
import { UserService } from '../user.service';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  
  @Input() curUsername: string;
  post: Post = new Post();
  curUser: User = new User();
  homePosts: Array<Post> = [];

  spaceScreens: Array<any> = [];
  start = 0;
  end = 0;
  pageIndex = 0;
  pageSize = 2;
  pageSizeOptions = [1, 2, 5, 10];
  
  constructor(private userService: UserService, private postService: PostService, private http: Http) {
    this.http.get('assets/mock-data-home/data.json')
    .map(response => response.json().screenshots)
    .subscribe(res => this.spaceScreens = res);
  }

  ngOnInit() {
    // get all user information from database and assign to user and useredit
    this.userService.getUserByUsername(this.curUsername).then(data => {
      this.curUser = data
      this.getHomeposts();
    });
   
    this.end = this.start + this.pageSize;
  }

  refreshSelfposts(e) {
    this.getHomeposts();
  }

  sendPost() {
    this.post.title = 'wedontneedtitle';
    this.post.createdBy = this.curUsername;
    this.postService.sendPost(this.post).then(data => {
      if (data.success === true) {
        this.getHomeposts();  // refresh homepage after send new post
        console.log("New post sent successfully ",this.post);
      }else {
        console.log("Fail to add new post: ",data.message)
      }
    });
    // clear make post form
    this.post = new Post();
  }

  getHomeposts() {
    this.postService.getHomePosts(this.curUser).then(data => {
      if (data.success === true) {
        this.homePosts = data.posts;
        console.log("Home posts got from database", this.homePosts);
      }else {
        console.log("Error when getting self post from database: ",data.message);
      }
    });
  }

  // count() {
  //   return this.spaceScreens.length;
  // }

  likeMe(i) {
    if (this.spaceScreens[i].liked !== 1) {
      this.spaceScreens[i].liked = 1;
    } else {
      this.spaceScreens[i].liked = 0;
    }
  }

  // deleteMe(i) {
  //   this.spaceScreens.splice(i, 1);
  //   console.log(i);
  // }

  commentMe(i) {

  }

  shareMe(i) {

  }

  pageChange(event) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.start = (this.pageIndex + 1) * this.pageSize - this.pageSize;
    this.end = (this.pageIndex + 1) * this.pageSize;
  }

}
