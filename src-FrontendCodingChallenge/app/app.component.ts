import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GetterService } from './getter.service';
import { Player } from './Model/Player';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Frontend_Coding_Challenge';
  constructor(private http: HttpClient, private service: GetterService) { }

  selectedPlayer!: Player;

  getBowler() {
    this.service.getBowler().subscribe((bowler) => {this.selectedPlayer = bowler
    },(err)=>{
      console.log(err);
    });
  }

  getBatsman() {
    this.service.getBatsman().subscribe((batsman) => this.selectedPlayer = batsman);
  }

}
