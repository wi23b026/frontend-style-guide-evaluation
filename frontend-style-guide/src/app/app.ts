import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SgAccessibilityComponent } from '../components/sg-accessibility/sg-accessibility.component';
import { SgComponentsComponent } from '../components/sg-components/sg-components.component';
import { SgDesignFoundationsComponent } from '../components/sg-design-foundations/sg-design-foundations.component';
import { SgFooterComponent } from '../components/sg-footer/sg-footer.component';
import { SgHeaderComponent } from '../components/sg-header/sg-header.component';
import { SgIntroductionComponent } from '../components/sg-introduction/sg-introduction.component';
import { SgNavigationComponent } from '../components/sg-navigation/sg-navigation.component';
import { SgPrinciplesComponent } from '../components/sg-principles/sg-principles.component';
import { SgTechnicalComponent } from '../components/sg-technical/sg-technical.component';
import { SgWordingComponent } from '../components/sg-wording/sg-wording.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SgAccessibilityComponent,
    SgComponentsComponent,
    SgDesignFoundationsComponent,
    SgFooterComponent,
    SgHeaderComponent,
    SgIntroductionComponent,
    SgNavigationComponent,
    SgPrinciplesComponent,
    SgTechnicalComponent,
    SgWordingComponent
  ],
  templateUrl: './app.html'
})
export class App {}
