import { Component } from '@angular/core';
import { SgColorsComponent } from '../sg-colors/sg-colors.component';
import { SgSpacingComponent } from '../sg-spacing/sg-spacing.component';
import { SgTypographyComponent } from '../sg-typography/sg-typography.component';

@Component({
  selector: 'app-sg-design-foundations',
  standalone: true,
  imports: [SgColorsComponent, SgSpacingComponent, SgTypographyComponent],
  templateUrl: './sg-design-foundations.component.html',
  styleUrl: './sg-design-foundations.component.css'
})
export class SgDesignFoundationsComponent {}
