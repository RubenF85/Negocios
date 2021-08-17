import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-question',
  templateUrl: './simple-question.component.html',
  styleUrls: ['./simple-question.component.css']
})
export class SimpleQuestionComponent {
    @Input() question: any
}
