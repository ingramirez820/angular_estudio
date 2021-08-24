import { Component, Input } from "@angular/core";

@Component({
selector:'app-fruta',
templateUrl:'./fruta.component.html',
styleUrls: ['./fruta.component.css']
})
export class FrutaComponent{
@Input() frutaTemporada?:string;
}