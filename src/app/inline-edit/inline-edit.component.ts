import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inline-edit',
  templateUrl: './inline-edit.component.html',
  styleUrls: ['./inline-edit.component.scss'],
})
export class InlineEditComponent implements OnInit {
  usersArray = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      isEdit: false,
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      isEdit: false,
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      isEdit: false,
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      isEdit: false,
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      isEdit: false,
    },
  ];

  inlineForm: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.inlineForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      username: ['', [Validators.required]],
    });
  }

  get getForm() {
    return this.inlineForm.get('name');
  }

  onEdit(item: any) {
    this.usersArray.forEach((element) => {
      element.isEdit = false;
    });
    item.isEdit = true;
    console.log(item);
    this.inlineForm.setValue({
      name: item.name,
      username: item.username,
    });
  }

  onUpdate(item: any) {
    if (this.inlineForm.invalid) {
      return;
    }
    this.usersArray.forEach((ele) => {
      if (ele.name === item.name) {
        ele.name = this.inlineForm.get('name').value;
        ele.username = this.inlineForm.get('username').value;
      }
    });
    item.isEdit = false;
  }
}
