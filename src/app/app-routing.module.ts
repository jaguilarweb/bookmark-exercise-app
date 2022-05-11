import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookmarkComponent } from '../app/bookmark/bookmark.component';
import { DirectoryComponent } from '../app/directory/directory.component';

const routes: Routes = [
  { path: '', component: DirectoryComponent },
  { path: 'bookmark', component: BookmarkComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
