import { Component } from '@angular/core';
import { AnimationController, ItemReorderEventDetail } from '@ionic/angular';
import { GlobalV } from '../helpers/globaValues';
import { Filesystem, Directory } from '@capacitor/filesystem';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  paletteToggle = false;
  constructor(
    private animationCtrl: AnimationController,
    private global: GlobalV
  ) {}

  ngOnInit() {
    // Use matchMedia to check the user preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    this.paletteToggle = prefersDark.matches;
    console.log(prefersDark.matches);

    // Listen for changes to the prefers-color-scheme media query
    prefersDark.addEventListener('change', (mediaQuery) => {
      this.global.isDark = mediaQuery.matches;
      this.initializeDarkPalette(mediaQuery.matches);
    });

    this.getAudioFiles('/');
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

  enterAnimation = (baseEl: HTMLElement) => {
    const root = baseEl.shadowRoot;

    const backdropAnimation = this.animationCtrl
      .create()
      .addElement(root?.querySelector('ion-backdrop')!)
      .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

    const wrapperAnimation = this.animationCtrl
      .create()
      .addElement(root?.querySelector('.modal-wrapper')!)
      .keyframes([
        { offset: 0, opacity: '0', transform: 'scale(0)' },
        { offset: 1, opacity: '0.99', transform: 'scale(1)' },
      ]);

    return this.animationCtrl
      .create()
      .addElement(baseEl)
      .easing('ease-out')
      .duration(200)
      .addAnimation([backdropAnimation, wrapperAnimation]);
  };

  leaveAnimation = (baseEl: HTMLElement) => {
    return this.enterAnimation(baseEl).direction('reverse');
  };
  //réorganiser la liste des musique
  handleReorder(ev: CustomEvent<ItemReorderEventDetail>) {
    ev.detail.complete();
  }

  async getAudioFiles(directory: string) {
    const files = await Filesystem.readdir({
      path: 'C:',
      directory: Directory.Documents,
    });
    console.log(files);

    // const audioFiles = files.filter((file: string) => file.toLowerCase().endsWith('.mp3'));
    // return audioFiles;
  }
}
