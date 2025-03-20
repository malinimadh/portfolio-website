import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.css'
})
export class WorkExperienceComponent {

  experiences = [
    {
      company: "Canada Revenue Agency",
      role: "Intern",
      description: "Led the design team in creating user-centric mobile and web applications, improving the user experience and increasing user engagement.",
      duration: "Jan 2020 - Present",

    },
    {
      company: "Infosys Ltd",
      role: "Intern",
      description: "Developed and implemented design strategies for new product lines, collaborated closely with engineers and product managers.",
      duration: "Jun 2017 - Dec 2019",

    },
    {
      company: "TrendCraft Solutions",
      role: "Intern",
      description: "Designed user interfaces for e-commerce platforms, focusing on enhancing usability and visual appeal.",
      duration: "Mar 2015 - May 2017",

    }
  ];

}
