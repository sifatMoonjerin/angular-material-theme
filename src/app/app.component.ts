import { DummyDialogComponent } from './components/dummy-dialog/dummy-dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isDarkTheme = false;
  overlay: HTMLElement;

  constructor(public dialog: MatDialog, private overlayContainer: OverlayContainer) {
    this.overlay = overlayContainer.getContainerElement();
  }

  ngOnInit(): void {
  }

  toggleTheme(): void {
    this.isDarkTheme = !this.isDarkTheme;
    if (this.isDarkTheme) {
      this.overlay.classList.add('dark-theme');
    } else {
      this.overlay.classList.remove('dark-theme');
    }
  }

  openDialog(): void {
    this.dialog.open(DummyDialogComponent);
  }
}
