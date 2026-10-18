import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatSlideToggleModule,
    FormsModule,
  ],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css',
})
export class ProjectComponent {
  Data = [
    {
      image: 'assets/images/logo-devlens.svg',
      title: 'DevLens',
      description:
        'Quickly inspect page layouts and visualize element boundaries.',
      state: true,
    },
    {
      image: 'assets/images/logo-style-spy.svg',
      title: 'Stylespy',
      description: 'Instantly analyze and copy CSS from any Webpage element.',
      state: true,
    },
    {
      image: 'assets/images/logo-speed-boost.svg',
      title: 'SpeedBoost',
      description:
        'Optimizes browser resource usage to accelerate page loading.',
      state: false,
    },
    {
      image: 'assets/images/logo-json-wizard.svg',
      title: 'JSONWizard',
      description:
        'Formats, Validates, and prettifies JSON responses in-browser.',
      state: true,
    },
    {
      image: 'assets/images/logo-tab-master-pro.svg',
      title: 'TabMaster Pro',
      description: 'Organizes browser tabs into groups and sessions.',
      state: true,
    },
    {
      image: 'assets/images/logo-viewport-buddy.svg',
      title: 'ViewportBuddy',
      description:
        'Simulates various screen resolutions directly within the browser.',
      state: false,
    },
    {
      image: 'assets/images/logo-markup-notes.svg',
      title: 'Markup Notes ',
      description:
        'Enables annotaion and notes directly onto webpages for collaborative debugging.',
      state: true,
    },
    {
      image: 'assets/images/logo-grid-guides.svg',
      title: 'GridGuides',
      description:
        'Overlay customizable grids and alignment guides on any webpage.',
      state: false,
    },
    {
      image: 'assets/images/logo-palette-picker.svg',
      title: 'Palette Picker',
      description: 'Instantly extracts color palettes from any Webpage.',
      state: true,
    },
    {
      image: 'assets/images/logo-link-checker.svg',
      title: 'LinkChecker ',
      description: 'Scans and highlights broken links on any page.',
      state: true,
    },
    {
      image: 'assets/images/logo-dom-snapshot.svg',
      title: 'DOM Snapshot ',
      description: 'Capture and export DOM structures quickly.',
      state: false,
    },
    {
      image: 'assets/images/logo-console-plus.svg',
      title: 'ConsolePlus',
      description:
        'Enhanced developer console with  advanced filtering and logging.',
      state: true,
    },
  ];
  all = true;
  active = false;
  inActive = false;
  isDark = true;
  FilterData: any[] = [];

  ngOnInit() {
    this.FilterData = this.Data;
  }
  All() {
    this.FilterData = this.Data;
  }
  Active() {
    this.FilterData = this.FilterData.filter((data) => {
      return data.state !== false;
    });
  }
  InActive() {
    this.FilterData = this.FilterData.filter((data) => {
      return data.state !== true;
    });
  }

  Remove(title: string) {
    this.FilterData = this.FilterData.filter((data) => {
      return data.title !== title;
    });
  }
}
