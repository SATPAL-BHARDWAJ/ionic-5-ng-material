import { Component, OnInit } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import { ConfirmDialogPage } from '../confirm-dialog/confirm-dialog.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  posts : any = [];
  isProgress : boolean = false;

  constructor(
    private _snackBar: MatSnackBar, 
    public dialog: MatDialog ) {

    }


  ngOnInit () {
    fetch('assets/data/posts.json').then(resp => resp.json())
    .then(response => {
      this.posts = response;
    })
  }

  showProgressBar() {
    this.isProgress = true;

    setTimeout(() => {
      this.isProgress = false;
      this.openSnackBar();
    }, 3000);
  }

  openSnackBar() {
    this._snackBar.open('Posts updated!!', 'Done', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 2000
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(ConfirmDialogPage);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
