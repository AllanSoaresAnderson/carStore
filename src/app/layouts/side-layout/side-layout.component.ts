import { Component } from '@angular/core';
import { SideBarComponent } from "../../components/side-bar/side-bar.component";
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-side-layout',
    standalone: true,
    templateUrl: './side-layout.component.html',
    styleUrl: './side-layout.component.css',
    imports: [SideBarComponent, RouterOutlet]
})
export class SideLayoutComponent {

}
