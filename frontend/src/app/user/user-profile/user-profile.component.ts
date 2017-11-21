import { Component, OnInit, Output, Input, EventEmitter, Inject } from '@angular/core';
import { UserService } from '../../user.service';
import { User } from '../../user';
import { Router } from '@angular/router';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { isDefined } from '@angular/compiler/src/util';
let URL: string = 'https://www.ischool.berkeley.edu/sites/default/files/default_images/avatar.jpeg';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: User = new User();
  userEdit: User = new User();
  currentuser: any = JSON.parse(localStorage.getItem("currentUser"));
  username: String = '';  
  avatar: String = '';

  constructor(private userService: UserService, public dialog: MdDialog) { }

  ngOnInit() {
    // get current user name, currentuser stored in local storage is different, signup without token, sinin with,
    // so need the if clause to get username
    // console.log(this.currentuser);
    // if('token' in this.currentuser){
    this.username = this.currentuser.user.username;
    if(this.currentuser.user.avatar !== "undefined") {
      URL = this.currentuser.user.avatar;
    }
    // get all user information from database and assign to user and useredit
    this.userService.getUserByUsername(this.username).then(data => {
      this.user = data
      Object.assign(this.userEdit, this.user);
      console.log("user info got from database", this.user);
    });
  }
  
  // getUser(user: User) {
  //   this.userService.getUser()
  //   .then(user => this.user = user)
  //   .catch(err => console.log(err));
  // }

  update_email() {
    this.userEdit.emaileditable=false;
    this.user = this.userEdit;
    this.userService.updateEmail(this.userEdit);
  }

  update_password() {
    this.userEdit.passwordeditable=false;
    this.user = this.userEdit;
    this.userService.updatePassword(this.userEdit);
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(AvatarPreviewComponent, {
      width: '350px',
      data: {  avatar: URL }
    });

    dialogRef.afterClosed().subscribe(result => {
      //this.avatar = URL;
      this.ngOnInit();
    });
  }
  

}
@Component({
  selector: 'app-avatarpreview',
  templateUrl: './avatarPreview.html',
  styleUrls: ['./user-profile.component.css']
})
export class AvatarPreviewComponent implements OnInit {
  avatar: string = 'https://www.ischool.berkeley.edu/sites/default/files/default_images/avatar.jpeg';;
  user: User = new User();
  username: String;
  currentuser: any = JSON.parse(localStorage.getItem("currentUser"));

  constructor(
    public dialogRef: MdDialogRef<AvatarPreviewComponent>,
    @Inject(MD_DIALOG_DATA) public data: any, private userService: UserService) { }

  ngOnInit() { 
    this.username = this.currentuser.user.username;
    this.userService.getUserByUsername(this.username).then(data => {
      this.user = data;
      if(this.user.avatar !== "undefined") {
        this.avatar = this.user.avatar;
      }else{
        this.avatar = 'https://www.ischool.berkeley.edu/sites/default/files/default_images/avatar.jpeg';
      }
    });
    
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  fileChangeEvent(fileInput: any) {
    if (fileInput.target.files && fileInput.target.files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(fileInput.target.files[0]);
      reader.onload = (x: any) => { // called once readAsDataURL is completed
        URL = x.target.result;
        this.avatar = URL;
        //console.log(this.data.avatar);
      }
    }
  }
  updateAvatar() {
    this.user.avatar = this.avatar;
    this.userService.updateAvatar(this.user);
    this.dialogRef.close();
  }
}
