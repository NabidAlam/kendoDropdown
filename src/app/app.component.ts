import { Component, OnInit, Inject } from '@angular/core';
import { Jsonp, JsonpModule } from '@angular/http';
//import { CategoriesService  } from './data.service';
import { Observable } from 'rxjs/Rx';
import { Technolgy } from './technologies.model';
import { DataService  } from './data.service';

@Component({
  selector: 'app-combobox',
  //templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  //providers: [CategoriesService ],
  providers: [DataService],
    template: `
    <h1>{{title}}</h1>
    <div class="example-wrapper">
  <p>Favorite Technolgy:</p>
         <kendo-combobox
             [data]="listItems"
             [textField]="'text'"
             [valueField]="'value'"
           >
        </kendo-combobox>
        </div>
     `
})
 export class AppComponent {
     title = 'Kendo Combo Box';

     public listItems: Array<Technolgy> = [];
     constructor(private dataService: DataService) {
      }

     ngOnInit() {
         this.dataService.getList().subscribe(
             (data) => this.listItems = data          
         )
       //  console.log(this.listItems);

     }
 }
// export class AppComponent {
//      title = 'Kendo Combo Box'; 
//      public listItems: Array<Technolgy>=[]; 
//     constructor(private service: CategoriesService) {
//         this.view = service;
//         this.listItems=service;
//         this.service.query();
//     }

//     private view: Observable<any>;
// }
