import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {

  taskArray = [
    { taskName: "Arroz", isCompleted: false }
  ];

  onSubmit(form: NgForm) {
    console.log(form);

    // Adiciona a nova tarefa ao array
    this.taskArray.push({
      taskName: form.controls["task"].value,
      isCompleted: false
    });

    // Reseta o formulário
    form.reset();
  }

  onDelete(index: number) {
    console.log(index);
    // Remove a tarefa do array
    this.taskArray.splice(index, 1);
  }

  onCheck(index: number) {
    // Alterna o estado de isCompleted da tarefa
    this.taskArray[index].isCompleted = !this.taskArray[index].isCompleted;
    console.log(this.taskArray[index]);
  }
}
