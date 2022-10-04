import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  freshnessList = ["Brand New", "Second Hand", "Refurbished"]
  productForm !: FormGroup; 
  constructor(private formBuilder : FormBuilder, private api : ApiService) { }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      productName: ['', Validators.required],
      category : ['', Validators.required], 
      freshness : ['', Validators.required], 
      price: ['', Validators.required], 
      comment: ['', Validators.required], 
      date: ['', Validators.required]
    })
  }

  addProduct(){
    if(this.productForm.valid){
      this.api.postProduct(this.productForm.value)
      .subscribe({
        next:(response)=>{
          alert("Product added")
        },
        error:()=>{
          alert("Error adding product")
        }
      })
    }
  }

}
