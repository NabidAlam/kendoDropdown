import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { Jsonp, JsonpModule } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Technolgy } from './technologies.model';
import { DataService  } from './data.service';
import { ComboBoxComponent } from '@progress/kendo-angular-dropdowns';

interface Item {
  text?: string,
  value?: number
}

@Component({
  selector: 'app-combobox',
  styleUrls: ['./app.component.scss'],
  styles: ['.template { display: inline-block; background: #333; color: #fff; border-radius: 50%; width: 18px; height: 18px; text-align: center; } '],
  providers: [DataService],
    template: `

    <h1>{{title}}</h1>
    <div class="example-config">
        Selected Item: {{selectedItem}}
    </div>
    <div class="example-wrapper">
  <p>Favorite Technolgy:</p>
         <kendo-combobox
          #combo
             [data]="listItems"
             [textField]="'text'"
             [valueField]="'value'"
              [valuePrimitive]="true"          
             [(ngModel)]="selectedItem"
              [filterable]="true"
             (filterChange)="handleFilter($event)"
           >
 <ng-template kendoComboBoxItemTemplate let-dataItem>
                <span class="template">{{ dataItem.value }}</span> {{ dataItem.text }}
            </ng-template>       
             <ng-template kendoComboBoxHeaderTemplate>
            <h4>Technolgy</h4>
        </ng-template>
        <ng-template kendoComboBoxFooterTemplate>
            <h4>Total: {{listItems.length}}</h4>
        </ng-template>
        <ng-template kendoDropDownListNoDataTemplate>
            <h4><span class="k-icon k-i-warning"></span><br /><br /> No data here</h4>
        </ng-template>
        </kendo-combobox>
        </div>
     `
})
 export class AppComponent {
       @ViewChild('combo') public combo: ComboBoxComponent;
     title = 'Kendo Combo Box';

     public listItems: Array<Technolgy> = [];
     constructor(private dataService: DataService) {
      }

     ngOnInit() {
         this.dataService.getList().subscribe(
             (data) => this.listItems = data          
         )

     }
     public selectedItem: number=1;

     handleFilter(value) {
         alert("Filter Event")
     }
 }
