import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HttpService } from 'src/app/services/http/http.service';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss'],
})
export class ErrorMessageComponent {
  constructor(private service: HttpService) {}
  @Input() max!: number;
  @Input() min!: number;
  @Input() required!: boolean;
  @Input() form!: FormGroup;
  @Input() name!: string;
}
