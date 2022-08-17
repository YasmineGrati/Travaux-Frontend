import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-board-technicien',
  templateUrl: './board-technicien.component.html',
  styleUrls: ['./board-technicien.component.scss']
})
export class BoardTechnicienComponent implements OnInit {

   content?: string;
  constructor(private userService: UserService) { }
  ngOnInit(): void {
    this.userService.getTechnicienBoard().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }
}