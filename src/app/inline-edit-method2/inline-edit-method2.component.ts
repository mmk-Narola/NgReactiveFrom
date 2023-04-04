import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-inline-edit-method2',
  templateUrl: './inline-edit-method2.component.html',
  styleUrls: ['./inline-edit-method2.component.scss'],
})
export class InlineEditMethod2Component implements OnInit {
  usersArray = [
    {
      id: 1,
      name: 'Leanne Graham',
      email: 'Sincere@april.biz',
      phone: '1-770-736-8031',
      editFieldName: '',
    },
    {
      id: 2,
      name: 'Ervin Howell',
      email: 'Shanna@melissa.tv',
      phone: '010-692-6593 x0',
      editFieldName: '',
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      email: 'Nathan@yesenia.net',
      phone: '1-463-123-4447',
      editFieldName: '',
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      email: 'Julianne.OConner@kory.org',
      phone: '493-170-9623',
      editFieldName: '',
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      email: 'Lucio_Hettinger@annie.ca',
      phone: '(254)954-1289',
      editFieldName: '',
    },
  ];
  inlineForm: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.inlineForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required]],
      phone: ['', Validators.required],
    });
  }

  get getForm() {
    return this.inlineForm.get('name');
  }

  onEdit(item: any, field: string) {
    // debugger;
    if (field === 'name') {
      this.usersArray.forEach((ele) => {
        if (item.id === ele.id) {
          this.inlineForm.patchValue({
            name: ele.name,
          });
        }
      });
      item.editFieldName = field;
    } else if (field === 'email') {
      this.usersArray.forEach((ele) => {
        if (item.id === ele.id) {
          this.inlineForm.patchValue({
            email: ele.email,
          });
        }
      });
      item.editFieldName = field;
    } else {
      item.editFieldName = '';
    }
  }
  close(event: any, item: any, field: string) {
    if (field === 'name') {
      this.usersArray.forEach((ele) => {
        if (ele.name === item.name) {
          ele.name = this.inlineForm.get('name').value;
        }
      });
      item.editFieldName = '';
    } else if (field === 'email') {
      this.usersArray.forEach((ele) => {
        if (ele.email === item.email) {
          ele.email = this.inlineForm.get('email').value;
        }
      });
      item.editFieldName = '';
    } else {
      item.editFieldName = field;
    }
  }
}
