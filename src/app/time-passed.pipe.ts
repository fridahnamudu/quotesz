import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timePassed'
})
export class TimePassedPipe implements PipeTransform {

  transform(value: number ): any {
    const t_secs = new Date();
    const today: number = t_secs.getTime() / 86400;
    let seconds = today - value;
    const hours: number = Math.floor(seconds / 3600);
    seconds %= 3600;
    const minutes: number = Math.floor(seconds / 60);
    seconds = seconds % 60;
    let t_hours: any;
    let t_mins: any;
    let t_sec: any;
    if (hours === 0) {
      t_hours = '';
    } else {
      t_hours = hours + 'hrs';
    }
    if (minutes === 0) {
      t_mins = '';
    } else {
      t_mins = minutes + 'mins';
    }
    if (seconds < 1) {
      t_sec = seconds.toFixed(3) + 'secs';
    } else {
      t_sec = seconds.toFixed(2) + 'secs';
    }
    return t_hours + t_mins + t_sec;
  }

}
