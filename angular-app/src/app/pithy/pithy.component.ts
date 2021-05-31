import { Component, OnInit } from '@angular/core';
import { Pithy } from "../pithy";
import { PithyService } from "../pithy.service";
import { MessageService } from "../message.service";

@Component({
  selector: 'app-pithy',
  templateUrl: './pithy.component.html',
  styleUrls: ['./pithy.component.css']
})
export class PithyComponent implements OnInit {

  pithys: Pithy[] = [];
  shortUrl: string = '';
  constructor(
    private pithyService: PithyService,
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.getPithys();
  }
  selectedPithy?: Pithy;
  onSelect(pithy: Pithy): void {
    this.selectedPithy = pithy;
    this.messageService.add(`pithyComponet: onSelect shortUrl=${pithy.shortUrl}`)

  }
  getPithys(): void{
    this.pithyService.getPithys()
      .subscribe(pithys => this.pithys = pithys);
  }
  add(longUrl: string): void {
    longUrl = longUrl.trim();
    
    if (!longUrl) {return}
    
    this.shortUrl = this.pithyService.addPithy({longUrl} as Pithy)

    this.getPithys(); //why does it take two calls to refresh the list
    this.ngOnInit();    
  }
}
