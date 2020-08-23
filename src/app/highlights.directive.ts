import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlights]'
})
export class HighlightsDirective {

  constructor(private elem: ElementRef) {}

  @HostListener('click') onClicks() {
    this.textDeco('high-light');
  }

  @HostListener('dblclick') onDoubleClicks() {
    this.textDeco('None');
  }


  private textDeco(action: string)  {
    this.elem.nativeElement.style.textDecoration = 'action';
   }

}
 


