import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { Items } from 'src/app/model/items';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ItemsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
