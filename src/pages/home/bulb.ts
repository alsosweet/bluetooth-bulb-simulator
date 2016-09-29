import {Component, Input} from '@angular/core';

@Component({
  selector: 'light-bulb',
  template: `
    <svg xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" id="svg2" version="1.1">
      <path id="path4150" d="m 49.958,28.688 c -9.278,0 -16.804,7.525 -16.804,16.81 0,3.056 0.857,5.898 2.24,8.391 4.126,7.438 5.221,11.613 5.896,15.654 0.564,3.387 1.344,4.174 3.902,4.174 1.091,0 2.869,0 4.766,0 1.901,0 3.683,0 4.767,0 2.563,0 3.344,-0.787 3.907,-4.174 0.677,-4.043 1.771,-8.219 5.896,-15.654 1.388,-2.492 2.24,-5.334 2.24,-8.391 0.003,-9.286 -7.523,-16.81 -16.81,-16.81 z" [attr.fill]="color"></path>
      <path id="path4152" d="m 55.971,74.934 -12.013,0 c -0.5,0 -0.903,0.402 -0.903,0.9 l 0,0.602 c 0,0.496 0.403,0.9 0.903,0.9 l 12.013,0 c 0.493,0 0.897,-0.404 0.897,-0.9 l 0,-0.602 c 0.002,-0.498 -0.404,-0.9 -0.897,-0.9 z" [attr.fill]="color"></path>
      <path id="path4154" d="m 55.971,78.537 -12.013,0 c -0.5,0 -0.903,0.4 -0.903,0.9 l 0,0.602 c 0,0.496 0.403,0.898 0.903,0.898 l 12.013,0 c 0.493,0 0.897,-0.402 0.897,-0.898 l 0,-0.602 c 0.002,-0.499 -0.404,-0.9 -0.897,-0.9 z" [attr.fill]="color"></path>
      <path id="path4156" d="m 55.971,82.141 -12.013,0 c -0.5,0 -0.903,0.402 -0.903,0.9 l 0,0.602 c 0,0.498 0.403,0.9 0.903,0.9 l 12.013,0 c 0.493,0 0.897,-0.402 0.897,-0.9 l 0,-0.602 c 0.002,-0.498 -0.404,-0.9 -0.897,-0.9 z" [attr.fill]="color"></path>
      <path id="path4158" d="m 45.458,85.744 9.013,0 c 0,1.801 -2.406,3.002 -4.513,3.002 -2.097,0 -4.5,-1.201 -4.5,-3.002 z" [attr.fill]="color"></path>
      <path id="path4160" d="m 69.264,16.854 c 1.532,-2.683 -2.605,-5.092 -4.15,-2.414 -0.809,1.399 -6.662,11.541 -6.662,11.541 l 4.162,2.402 c 0,0 5.199,-9.017 6.646,-11.518 0.003,-10e-4 0.003,-0.003 0.003,-0.003 l 10e-4,-0.008 0,0 z" [attr.fill]="color"></path>
      <path id="path4162" d="m 78.633,26.247 0,0 -0.003,0.003 c -0.008,0.001 -0.008,0.001 -0.008,0.001 C 76.51,27.472 67.456,32.7 67.456,32.7 l 2.397,4.16 c 0,0 9.076,-5.239 11.188,-6.458 2.686,-1.548 0.275,-5.689 -2.408,-4.155 z" [attr.fill]="color"></path>
      <path id="path4164" d="m 52.452,11.071 c 0,0.729 0,12.812 0,12.812 l -4.806,0 c 0,0 0,-12.084 0,-12.812 0,-3.098 4.806,-3.098 4.806,0 z" [attr.fill]="color"></path>
      <path id="path4166" d="m 30.737,16.854 c -1.532,-2.683 2.606,-5.092 4.152,-2.414 0.808,1.399 6.661,11.541 6.661,11.541 l -4.158,2.402 c 0,0 -5.208,-9.017 -6.652,-11.518 0,-10e-4 0,-0.003 0,-0.003 l -0.003,-0.008 0,0 z" [attr.fill]="color"></path>
      <path id="path4168" d="m 21.371,26.247 0,0 0,0.003 c 0.007,0.001 0.007,0.001 0.007,0.001 2.116,1.221 11.167,6.449 11.167,6.449 l -2.402,4.16 c 0,0 -9.076,-5.239 -11.187,-6.458 -2.683,-1.548 -0.273,-5.689 2.415,-4.155 z" [attr.fill]="color"></path>
    </svg>`
})
export class BulbComponent {
  @Input() color: string;
  @Input() on: boolean;
}
