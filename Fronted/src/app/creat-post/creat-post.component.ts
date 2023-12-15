import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Post } from '../post-list/post.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-creat-post',
  templateUrl: './creat-post.component.html',
  styleUrls: ['./creat-post.component.css']
})
export class CreatPostComponent implements OnInit {

 @Output()  postCreated = new EventEmitter<Post>()

  constructor() { }

  ngOnInit(): void {
  }

  saveData(form:NgForm){
    if(form.invalid){
      return  
    }
      const newPost:Post = {
        title:form.value,
        content:form.value
      }
      console.log(newPost);
      
    this.postCreated.emit(newPost)
  }

}
