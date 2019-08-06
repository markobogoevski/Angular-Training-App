import { Component, Input, Output, EventEmitter, OnChanges } from "@angular/core";

@Component({
    selector:'star-component',
    styleUrls:['./star.component.css'],
    templateUrl:'./star.component.html'
})
export class StarComponent implements OnChanges{
   
    starWidth:number;
    @Input() rating:number;
    @Output() starClicked : EventEmitter<number> = new EventEmitter<number>();
    
    ngOnChanges(): void {
        this.starWidth = this.rating*75/5;   
    }

    starsClicked():void{
        this.starClicked.emit(this.rating);
    }

  
    
}