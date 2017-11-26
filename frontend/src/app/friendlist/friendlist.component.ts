import { Component, OnInit, Inject } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { User } from '../class/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-friendlist',
  templateUrl: './friendlist.component.html',
  styleUrls: ['./friendlist.component.css']
})
export class FriendlistComponent implements OnInit {

  friendName: string;
  name: string;
  friendEmail: string;
  //currentTime: number;
  currentuser: any = JSON.parse(localStorage.getItem("currentUser"));
  myFriends: Array<User> = [];

  constructor(public dialog: MdDialog, private userService: UserService) { }

  ngOnInit() {
    // if('token' in this.currentuser){
      this.getFriends(this.currentuser.user);
    // }else {
    //   this.getFriends(this.currentuser);
    // };
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddFriendComponent, {
      width: '250px',
      data: { name: this.name, animal: this.friendName, friendEmail: this.friendEmail }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (typeof result !== 'undefined') {
        this.friendName = result.friendName;
        this.friendEmail = result.friendEmail;
        if (typeof this.friendEmail !== 'undefined' && this.friendEmail!== '') {
          this.userService.getUserByUserEmail(this.friendEmail).then(data => {
            const friend = new User();
            Object.assign(friend, data);
            if(friend._id !== '') {
              if(this.currentuser.user.friend.indexOf(friend._id+'$$'+friend.nickname+'$$'+friend.email) === -1){
                this.currentuser.user.friend.push(friend._id+'$$'+friend.nickname+'$$'+friend.email);
                const updateUser = new User();
                Object.assign(updateUser, this.currentuser.user);
                console.log(updateUser);
                this.userService.updateFriend(updateUser);
                localStorage.setItem('currentUser', JSON.stringify(this.currentuser));
              } else { 
                console.log('friend already exists');
             }
              if(friend.friend.indexOf(this.currentuser.user._id+'$$'+this.currentuser.user.nickname+'$$'+this.currentuser.user.email) === -1) {
                friend.friend.push(this.currentuser.user._id+'$$'+this.currentuser.user.nickname+'$$'+this.currentuser.user.email);
                console.log(friend);
                this.userService.updateFriend(friend);
              }
            } else {
              console.log('User not exist')
            }
          });
        } else {
          this.userService.getUserByUsername(this.friendName).then(data => {
            const friend = new User();
            Object.assign(friend, data);
            if(friend._id !== '') {
              if(this.currentuser.user.friend.indexOf(friend._id+'$$'+friend.nickname+'$$'+friend.email) === -1){
                this.currentuser.user.friend.push(friend._id+'$$'+friend.nickname+'$$'+friend.email);
                const updateUser = new User();
                Object.assign(updateUser, this.currentuser.user);
                console.log(updateUser);
                this.userService.updateFriend(updateUser);
                localStorage.setItem('currentUser', JSON.stringify(this.currentuser));
              } else { 
                console.log('friend already exists');
              }
              if(friend.friend.indexOf(this.currentuser.user._id+'$$'+this.currentuser.user.nickname+'$$'+this.currentuser.user.email) === -1) {
                friend.friend.push(this.currentuser.user._id+'$$'+this.currentuser.user.nickname+'$$'+this.currentuser.user.email);
                console.log(friend);
                this.userService.updateFriend(friend);
              }
            } else {
              console.log('User not exist')
            }
          });
        }

      }
    });
  }
  getFriends(user) {
    this.myFriends = [];
    const friends = user.friend;
    for (let friend of friends) {
      if (friend.indexOf('$$') !== -1) {
        var info = friend.split('$$');
        const user = new User();
        user._id = info[0];
        user.nickname = info[1]
        user.email = info[2];
        this.myFriends.push(user);
      }
    }  
  }
  refreshFriendlist() {
    this.getFriends(this.currentuser.user);
  }
  deleteFriend(friend) {
    const user = new User;
    //update current user's friendlist
    const index = this.currentuser.user.friend.indexOf(friend._id+'$$'+friend.nickname+'$$'+friend.email);
    this.currentuser.user.friend.splice(index, 1);
    this.userService.updateFriend(this.currentuser.user);
    localStorage.setItem('currentUser', JSON.stringify(this.currentuser));
    //update friend's friendlist
    this.userService.getUserByUserEmail(friend.email).then(data => {
      const editfriend = new User();
      Object.assign(editfriend, data);
      const index1 = editfriend.friend.indexOf(this.currentuser.user._id+'$$'+this.currentuser.user.nickname+'$$'+this.currentuser.user.email);
      editfriend.friend.splice(index1, 1);
      this.userService.updateFriend(editfriend);
    });
    
    this.getFriends(this.currentuser.user);
    
  }
  // tslint:disable-next-line:member-ordering
  // A = [
  //   {
  //     name: 'Allan',
  //     updated: new Date('1/1/16'),
  //   },
  //   {
  //     name: 'Andrew',
  //     updated: new Date('1/17/16'),
  //   },
  //   {
  //     name: 'Ashe',
  //     updated: new Date('1/28/16'),
  //   }
  // ];
  // // tslint:disable-next-line:member-ordering
  // B = [
  //   {
  //     name: 'Bob',
  //     updated: new Date('2/20/16'),
  //   },
  //   {
  //     name: 'Boss',
  //     updated: new Date('1/18/16'),
  //   }
  // ];
}
@Component({
  selector: 'app-addfriend',
  templateUrl: './addFriend.html',
})
export class AddFriendComponent {

  constructor(
    public dialogRef: MdDialogRef<AddFriendComponent>,
    @Inject(MD_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
