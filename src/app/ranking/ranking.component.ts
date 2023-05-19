import { Component, OnInit, Input } from '@angular/core';
import { Quotation } from '../models/quotiation';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input()
  quotes: Quotation[];

  @Input()
  title: string;

}
