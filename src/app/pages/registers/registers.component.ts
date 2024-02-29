import { Component } from '@angular/core';
import { ViewSellerComponent } from "./views/view-seller/view-seller.component";

@Component({
    selector: 'app-registers',
    standalone: true,
    templateUrl: './registers.component.html',
    styleUrl: './registers.component.css',
    imports: [ViewSellerComponent]
})
export class RegistersComponent {

}
