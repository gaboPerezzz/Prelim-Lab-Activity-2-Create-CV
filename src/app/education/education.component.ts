import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  headingEducation = "EDUCATION"
  college = "Holy Angel University"
  shs = "Angeles Science High School - Senior High School"
  jhs = "Claro M. Recto Information Communication and Technology High School"
}
