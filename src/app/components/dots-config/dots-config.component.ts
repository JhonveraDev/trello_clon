import { Component, Input } from '@angular/core';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dots-config',
  templateUrl: './dots-config.component.html'
})
export class DotsConfigComponent {
  faEllipsis = faEllipsis;
  isOpen = false;

  @Input() dataArray: any = [];
  @Input() dataIndex: number = 0;

  deleteCard() {
    const indexDelete = this.dataIndex;
    if (indexDelete >= 0 && indexDelete < this.dataArray.length) {
      this.dataArray.splice(this.dataIndex, 1)
    }
  }
}
