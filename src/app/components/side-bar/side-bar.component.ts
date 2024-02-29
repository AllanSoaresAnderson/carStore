import { Component } from '@angular/core';
import { LinkSideBarComponent } from "../link-side-bar/link-side-bar.component";

@Component({
    selector: 'side-bar',
    standalone: true,
    templateUrl: './side-bar.component.html',
    styleUrl: './side-bar.component.css',
    imports: [LinkSideBarComponent]
})
export class SideBarComponent {

}
