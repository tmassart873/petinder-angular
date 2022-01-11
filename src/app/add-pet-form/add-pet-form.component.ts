import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {PetService} from "../service/pet.service";

@Component({
  selector: 'app-add-pet-form',
  templateUrl: './add-pet-form.component.html',
  styleUrls: ['./add-pet-form.component.css']
})
export class AddPetFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private petService: PetService) {
  }

  ngOnInit(): void {
  }

  addPetForm = this.formBuilder.group({
    name: ['',Validators.required],
    kind:  ['',Validators.required],
    image:  ['',Validators.required,],
    profileText:  ['',Validators.required],
    popularity: [0,Validators.required]
  });

  addPet(): void{
    this.petService.addPet(this.addPetForm.value).subscribe(() => console.log('Post done'));
    window.location.reload();
  }

}
