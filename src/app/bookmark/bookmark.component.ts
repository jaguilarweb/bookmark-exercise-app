import { Component, OnInit } from '@angular/core';
//Import the bookmark service here

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.css']
})
export class BookmarkComponent implements OnInit {
  bookmarkList: object[] = [];

  //Inject the Bookmark Service into the constructor below
  constructor() { }

  ngOnInit(): void {
    //Invoke getBookmarks() from the Bookmark Service, and set its return value to bookmarkList
  }

  clearBookmark(): void {
    //Invoke clearBookmarks() from the Bookmark service below
     //Then, clear the local bookmarkList array
     alert("Cleared!");
  }

}
