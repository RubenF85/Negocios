import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cascade-question',
  templateUrl: './cascade-question.component.html',
  styleUrls: ['./cascade-question.component.css']
})
export class CascadeQuestionComponent {
    @Input() question: any
}
