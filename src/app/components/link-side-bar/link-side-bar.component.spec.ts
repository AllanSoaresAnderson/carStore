import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkSideBarComponent } from './link-side-bar.component';

describe('LinkSideBarComponent', () => {
  let component: LinkSideBarComponent;
  let fixture: ComponentFixture<LinkSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkSideBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LinkSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
