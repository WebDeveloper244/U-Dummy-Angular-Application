import { Component } from '@angular/core';
import { Post } from './post-list/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public posts:Post[]=[];

  givingPost(post:Post){
    this.posts.push(post)
  }

}
