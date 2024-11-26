import { Component } from '@angular/core';
import { CertificatesComponent } from '../certificates/certificates.component';

@Component({
  selector: 'app-training',
  standalone: true,
  imports: [CertificatesComponent],
  templateUrl: './training.component.html',
  styleUrl: './training.component.css'
})
export class TrainingComponent {
  skillsHeader = "SKILLS"
}
