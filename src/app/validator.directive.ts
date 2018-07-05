import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Directive({
  selector: '[appValidator]'
})
export class ValidatorDirective {
  private relevantForm: FormGroup;
  @HostListener('focusout') onFocusOut() {
    this.eRef.nativeElement.parentElement.children[0].classList.add('green'); //always will be the injected span

    let y = this.relevantForm.controls[this.eRef.nativeElement.getAttribute('formControlName')].errors;
  }

  @Input() set appValidator(form: FormGroup) {
    this.relevantForm = form;
  }

  constructor(private eRef: ElementRef) {
    this.eRef.nativeElement.parentElement.insertAdjacentHTML('afterbegin', '<span class="indicator"><span>');
  }

}
