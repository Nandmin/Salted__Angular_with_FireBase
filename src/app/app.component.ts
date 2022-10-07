import { Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { Items } from './model/items';
import { ItemsService } from './services/items.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  title = 'salted-angular';
  items: Observable<any> = this.itemService.all;
  newItem: Items = new Items();

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

}
