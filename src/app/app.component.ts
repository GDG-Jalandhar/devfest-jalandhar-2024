import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent {
  updateAvailable = false;
  constructor(private updates: SwUpdate) {}
  // Check angular PWA Update on every reload in ngOnInit
  ngOnInit() {
    this.updates.versionUpdates.subscribe((evt) => {
      switch (evt.type) {
        case 'VERSION_DETECTED':
          console.info(`Downloading new app version: ${evt.version.hash}`);
          break;
        case 'VERSION_READY':
          console.info(`Current app version: ${evt.currentVersion.hash}`);
          console.info(
            `New app version ready for use: ${evt.latestVersion.hash}`
          );
          this.updateAvailable = true;
          break;
        case 'VERSION_INSTALLATION_FAILED':
          console.info(
            `Failed to install app version '${evt.version.hash}': ${evt.error}`
          );
          break;
      }
    });
  }

  reloadApp() {
    document.location.reload();
  }
  dismissAlert() {
    this.updateAvailable = false;
  }
}
