import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WeeklySummaryPage } from './weekly-summary.page';

describe('WeeklySummaryPage', () => {
  let component: WeeklySummaryPage;
  let fixture: ComponentFixture<WeeklySummaryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeeklySummaryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WeeklySummaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
