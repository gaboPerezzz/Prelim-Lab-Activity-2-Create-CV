import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EducationComponent } from './education/education.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { TrainingComponent } from './training/training.component';
import { ReferencesComponent } from './references/references.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EducationComponent, WorkExperienceComponent, TrainingComponent, ReferencesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'prelim_lab_2';
  name: string = 'JOHN GABRIEL PEREZ';
  age = '22 Years old';
  email: string = "perez.johngabriel13@gmail.com";
  conNum = '09289549612';
}
