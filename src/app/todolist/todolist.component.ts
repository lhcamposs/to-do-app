import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})
export class TodolistComponent implements OnInit {
  ngOnInit(): void {
    this.getFromLocalStorage();
  }

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

      this.saveToLocalStorage();

      form.reset();
    }
  }

  saveToLocalStorage() {
    let stringJSON =  JSON.stringify(this.taskArray);
    localStorage.setItem('todolist', stringJSON);
  }

  getFromLocalStorage(){
    let itemsJSONString = localStorage.getItem('todolist')
    if(itemsJSONString != null) {
      this.taskArray = JSON.parse(itemsJSONString);
    }
  }

  onDelete(index: number) {
    this.taskArray.splice(index, 1);

    this.saveToLocalStorage();
  }

  onCheck(index: number) {
    this.taskArray[index].isCompleted = !this.taskArray[index].isCompleted;

    this.saveToLocalStorage();
  }

  onEdit(index: number) {
    this.taskArray[index].isEditable = true;

    this.saveToLocalStorage();
  }

  onSave(index: number, newtask: string) {
    this.taskArray[index].taskName = newtask;
    this.taskArray[index].isEditable = false;

    this.saveToLocalStorage();
  }
}
