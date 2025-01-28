import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})
export class TodolistComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  taskArray = [
    { taskName: 'Escovar os dentes', isCompleted: false, isEditable: false },
  ];

  onSubmit(form: NgForm) {
    console.log(form);

    // Adiciona a nova tarefa ao array
    this.taskArray.push({
      taskName: form.controls['task'].value,
      isCompleted: false,
      isEditable: false,
    });

    // Reseta o formulário
    form.reset();
  }

  onDelete(index: number) {
    console.log(index);
    // Remove a tarefa do array
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
    // Alterna o estado de isCompleted da tarefa
    this.taskArray[index].isCompleted = !this.taskArray[index].isCompleted;
    console.log(this.taskArray[index]);
  }
}
