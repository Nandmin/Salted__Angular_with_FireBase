import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { Items } from 'src/app/model/items';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class ItemsComponent implements OnInit {

  title = 'salted-angular';
  items: Observable<any> = this.itemService.all;
  newItem: Items = new Items();
  page: number | any;

  constructor(
    private itemService: ItemsService
  ){

  }

  onCreate(items:Items): void {
    this.itemService.create(items).then(
      resp => alert("Új elem hozzáadva"),
      err => alert(err.error)
      );
  }
  
  onUpdate(items:Items): void {
    this.itemService.update(items).then(
      resp => alert("Elem módosítva"),
      err => alert(err.error)
      );
  }
  
  onDelete(items:Items): void {
    if(!confirm('Biztos vagy benne?')){
      return
    }

    this.itemService.delete(items).then(
      resp => alert("Elem törölve"),
      err => alert(err.error)
      );
  }

  // constructor() { }

  ngOnInit(): void {
  }

}
