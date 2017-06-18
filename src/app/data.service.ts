import { Injectable, Inject } from '@angular/core';
import { Jsonp, JsonpModule, Http, Response } from '@angular/http';
import { Technolgy } from './technologies.model';
import { Observable,BehaviorSubject } from 'rxjs/Rx';

 @Injectable()
 export class DataService {

     constructor(private http: Http) {
     }

     extractData(res: Response) {
         return res.json(); 
     }

     getList(): Observable<Technolgy[]> {
         return this.http.get('http://github-ci-staging.azurewebsites.net/api/Technologies/TechnologiesList').map(this.extractData)     }
}
// @Injectable()
// export class CategoriesService extends BehaviorSubject<any> {
//     constructor(private http: Http) {
//         super(null);
//     }

//     public query(): void {
//         this.fetch()
//             .subscribe(x => super.next(x));
//     }

//     private BASE_URL: string = 'http://github-ci-staging.azurewebsites.net/api/Technologies/TechnologiesList';
//     private fetch(): any {
//         //const queryStr = `$skip=0&$count=true`;
//         return this.http
//             .get(`${this.BASE_URL}`)
//             .map(response => response.json());
//     }
// }