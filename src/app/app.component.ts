import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  systolicBP: number;
  diastolicBP: number;

  constructor() {
    console.log('119/79 ' + this.getBloodPressureGoal('119/79'));
    console.log('120/79 ' + this.getBloodPressureGoal('120/79'));
    console.log('119/89 ' + this.getBloodPressureGoal('119/89'));
    console.log('137/90 ' + this.getBloodPressureGoal('137/90'));
    console.log('137/120 ' + this.getBloodPressureGoal('1/10'));
  }

  public getBloodPressureGoal(bloodPressure: string) {
    if (bloodPressure) {
      const bloodPressureItems = bloodPressure.split('/', 2);
      let retVal: string;

      this.systolicBP = Number(bloodPressureItems[0]);
      this.diastolicBP = Number(bloodPressureItems[1]);

      if (this.systolicBP < 120 && this.diastolicBP < 80) {
        // just right
        retVal = 'Good job!';
        // return retVal;
      }

      if (
        (this.systolicBP >= 120 && this.systolicBP <= 129) &&
        this.diastolicBP < 80
      ) {
        retVal = 'Elevated';
        // return retVal;
      } 
      
      if (
        (this.systolicBP >= 130 && this.systolicBP <= 139) ||
        (this.diastolicBP >= 80 && this.diastolicBP <= 89)
      ) {
        retVal = 'Stage 1 Hypertension';
        // return retVal;
      } 
      
      if (this.systolicBP >= 140 || this.diastolicBP >= 90) {
        retVal = 'Stage 2 Hypertension';
        // return retVal;
      }

      if (this.systolicBP >= 180 || this.diastolicBP >= 120) {
        retVal = 'Hypertensive crisis';
        return retVal;
      }


      return retVal;
    } else {
      return '';
    }
  }
}
