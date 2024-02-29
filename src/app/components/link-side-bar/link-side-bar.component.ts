import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'link-side-bar',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './link-side-bar.component.html',
  styleUrl: './link-side-bar.component.css'
})
export class LinkSideBarComponent {

  @Input() icon: IconDefinition = faHouse
  @Input() name:string = 'Home';

}
