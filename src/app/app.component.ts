import { Component } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { GlobalV } from './helpers/globaValues';

register();
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  paletteToggle = false;
  constructor(private global: GlobalV) {}

  ngOnInit() {
    this.initializeDarkPalette(this.global.isDark);
  }

  // Check/uncheck the toggle and update the palette based on isDark
  initializeDarkPalette(isDark: boolean) {
    this.paletteToggle = isDark;
    this.toggleDarkPalette(isDark);
  }

  // Listen for the toggle check/uncheck to toggle the dark palette
  toggleChange(ev: any) {
    this.toggleDarkPalette(ev.detail.checked);
  }

  // Add or remove the "ion-palette-dark" class on the html element
  toggleDarkPalette(shouldAdd: any) {
    document.documentElement.classList.toggle('ion-palette-dark', shouldAdd);
  }
}
