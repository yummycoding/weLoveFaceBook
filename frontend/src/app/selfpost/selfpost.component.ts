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
  curUserAvatar: string;
  selfPosts: Array<Post> =[];

  constructor(private userService: UserService, private postService: PostService, private http: Http) {
    // this.http.get('assets/mock-data-mypost/data.json')
    // .map(response => response.json().screenshots)
    // .subscribe(res => this.spaceScreens = res);
  }

  ngOnInit() {
    this.userService.getUserByUsername(this.curUsername).then(data => {
      this.curUserAvatar = data.avatar;
      console.log(this.curUserAvatar);
    });
    this.getMyPosts(this.curUsername);
  }

  refreshSelfposts(e) {
    this.ngOnInit();
  }

  deleteSelfposts(i) {
    let postid:String = this.selfPosts[i]._id;
    this.postService.deletePost(postid).then(data => {
      if (data.success === true) {
        this.getMyPosts(this.curUsername); // refresh self posts after delete
        console.log("Self posts deleted from database, post id: ", postid);
      }else {
        console.log("Error when delete self post from database: ",data.message)
      }
    });
  }

  getMyPosts(curUsername: string) {
    this.postService.getSelfPosts(curUsername).then(data => {
      if (data.success === true) {
        this.selfPosts = data.posts
        // console.log("Self posts got from database", this.selfPosts);
      }else {
        console.log("Error when getting self post from database: ",data.message)
      }
    });
  }
  

}
