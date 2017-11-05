import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { PostService } from '../post.service';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Post } from '../post';

@Component({
  selector: 'app-selfpost',
  templateUrl: './selfpost.component.html',
  styleUrls: ['./selfpost.component.css']
})
export class SelfpostComponent implements OnInit {

  spaceScreens: Array<any>;
  @Input() curUsername: string;
  selfPosts: Array<Post>;

  constructor(private userService: UserService, private postService: PostService, private http: Http) {
    // this.http.get('assets/mock-data-mypost/data.json')
    // .map(response => response.json().screenshots)
    // .subscribe(res => this.spaceScreens = res);
  }

  ngOnInit() {
    // this.postService.getSelfPosts(this.curUsername).then(data => {
    //   if (data.success === true) {
    //     this.selfPosts = data.posts
    //     console.log("Self posts got from database", this.selfPosts);
    //   }else {
    //     console.log("Error when getting self post from database: ",data.message)
    //   }
    // });
    this.getMyPosts(this.curUsername);
  }

  refreshSelfposts(e) {
    // this.postService.getSelfPosts(this.curUsername).then(data => {
    //   if (data.success === true) {
    //     this.selfPosts = data.posts
    //     console.log("Self posts got from database", this.selfPosts);
    //   }else {
    //     console.log("Error when getting self post from database: ",data.message)
    //   }
    // });
    this.getMyPosts(this.curUsername);
  }

  getMyPosts(curUsername: string) {
    this.postService.getSelfPosts(curUsername).then(data => {
      if (data.success === true) {
        this.selfPosts = data.posts
        console.log("Self posts got from database", this.selfPosts);
      }else {
        console.log("Error when getting self post from database: ",data.message)
      }
    });
  }

  markMe(i) {
    if (this.spaceScreens[i].marked !== 1) {
      this.spaceScreens[i].marked = 1;
    } else {
      this.spaceScreens[i].marked = 0;
    }
  }
  
  deleteMe(i) {
    this.spaceScreens.splice(i, 1);
    console.log(i);
  }

}
