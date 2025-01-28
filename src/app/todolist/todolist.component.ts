import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})
export class TodolistComponent implements OnInit {
  ngOnInit(): void {}

  categories = ['Personal', 'Work', 'Studies', 'Others'];
  taskArray = [
    {
      taskName: 'brush teeth',
      isCompleted: false,
      isEditable: false,
      category: 'Personal',
    },
  ];

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.taskArray.push({
        taskName: form.controls['task'].value,
        isCompleted: false,
        isEditable: false,
        category: form.controls['category'].value || 'Others',
      });
      form.reset();
    }
  }

  onDelete(index: number) {
    this.taskArray.splice(index, 1);
  }

  onEdit(index: number) {
    this.taskArray[index].isEditable = true;
  }

  onSave(index: number, newtask: string) {
    this.taskArray[index].taskName = newtask;
    this.taskArray[index].isEditable = false;
  }

  onCheck(index: number) {
    this.taskArray[index].isCompleted = !this.taskArray[index].isCompleted;
  }
}
