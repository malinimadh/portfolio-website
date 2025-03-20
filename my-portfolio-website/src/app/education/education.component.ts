import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {

  education = [
    {
      university: "University of Ottawa",
      course: "Master in Data Science",
      description: "Led the design team in creating user-centric mobile and web applications, improving the user experience and increasing user engagement.",
      duration: "Jan 2020 - Present",

    },
    {
      university: "SRM University",
      course: "Bachelor of Technology in Computer Science and Engineering",
      description: "Developed and implemented design strategies for new product lines, collaborated closely with engineers and product managers.",
      duration: "Jun 2017 - Dec 2019",

    }
  ];

}
