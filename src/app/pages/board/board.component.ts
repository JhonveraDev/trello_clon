import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { faXmark, faBell, faPlus, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { Column } from 'src/app/model/todo.model';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styles: [
    `
    /* Animate items as they're being sorted. */
    .cdk-drop-list-dragging .cdk-drag {
      transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
    }

    /* Animate an item that has been dropped. */
    .cdk-drag-animating {
      transition: transform 300ms cubic-bezier(0, 0, 0.2, 1);
    }

    .icon-custom-size {
      font-size: 20px
    }
    `
  ]
})

export class BoardComponent {
  faXmark = faXmark;
  faBell = faBell;
  faPlus = faPlus;
  faEllipsis = faEllipsis;
  listTitle: string = '';
  cardTitle: string[] = [];

  columns: Column[] = [
    {
      title: 'To Do',
      todos: [
        {
          id: 1,
          title: 'Make Dishes'
        },
        {
          id: 2,
          title: 'Buy a Ferrari'
        },
        {
          id: 3,
          title: 'Go to the Gym'
        }
      ]
    },
    {
      title: 'Doing',
      todos: [
        {
          id: 1,
          title: 'Watch a Movie'
        }
      ]
    },
    {
      title: 'Done',
      todos: [
        {
          id: 1,
          title: 'Study Angular'
        }
      ]
    },
  ]

  drop(event: CdkDragDrop<any[]>) {
    console.log(event)
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  addColumn() {
    if (this.listTitle.length > 1) {
      this.columns.push({
        title: this.listTitle,
        todos: []
      })

      this.listTitle = '';

    } else {
      this.columns.push({
        title: 'New Card',
        todos: []
      })
    }
  }

  clearTitleInput() {
    this.listTitle = '';
  }

  addTodo(index: number) {
    const todoTitle = this.cardTitle[index];
    if (todoTitle) {
      const newTodo = { id: 0, title: todoTitle };
      this.columns[index].todos.push(newTodo);
      this.cardTitle[index] = '';
    }
  }
}
