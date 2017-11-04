import { Component, OnInit, Inject } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-friendlist',
  templateUrl: './friendlist.component.html',
  styleUrls: ['./friendlist.component.css']
})
export class FriendlistComponent implements OnInit {

  friendName: string;
  name: string;
  friendEmail: string;
  currentTime: number;
  constructor(public dialog: MdDialog) { }

  ngOnInit() {
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
        this.currentTime = Date.now();
        console.log('Username:' + this.friendName + ' Email:' + this.friendEmail + ' Time:' + this.currentTime);
      }
    });
  }


  // tslint:disable-next-line:member-ordering
  A = [
    {
      name: 'Allan',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Andrew',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Ashe',
      updated: new Date('1/28/16'),
    }
  ];
  // tslint:disable-next-line:member-ordering
  B = [
    {
      name: 'Bob',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Boss',
      updated: new Date('1/18/16'),
    }
  ];
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
