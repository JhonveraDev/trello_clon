import { Component } from '@angular/core';
import { faTrello } from '@fortawesome/free-brands-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faBorderTopLeft, faChartLine, faAngleUp, faAngleDown, faHeart, faBorderAll, faUsers, faGear } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html'
})

export class BoardsComponent {
  faTrello = faTrello;
  faClock = faClock;
  faBorderTopLeft = faBorderTopLeft;
  faChartLine = faChartLine;
  faAngleUp = faAngleUp;
  faAngleDown = faAngleDown;
  faHeart = faHeart;
  faBorderAll = faBorderAll;
  faGear = faGear;
  faUsers: any = faUsers;

  items = [
    {
      label: 'Boards',
      icon: this.faTrello
    }, 
    {
      label: 'Members',
      icon: this.faUsers,
      items: [
        {
          label: 'Sub Item 1.1'
        },
        {
          label: 'Sub Item 1.2'
        },
        {
          label: 'Sub Item 1.3'
        }
      ]
    },
    {
      label: 'Views',
      icon: this.faBorderAll
    },
    {
      label: 'Settings',
      icon: this.faGear,
    },
    {
      label: 'Highlights',
      icon: this.faHeart,
      items: [
        {
          label: 'Sub Item 2.1'
        }
      ]
    }
  ]
}
