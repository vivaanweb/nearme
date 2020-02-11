import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { AuthGuard } from '../services/auth-guard/auth.guard';

const routes: Routes = [
  {
    path: '1',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: '../pages/home/home.module#HomePageModule'
          },
          {
            path: 'search',
            loadChildren: '../pages/search/search.module#SearchPageModule'
          },
          {
            path: 'categories',
            loadChildren: '../pages/category-list/category-list.module#CategoryListPageModule'
          },
          {
            path: 'places',
            loadChildren: '../pages/place-list/place-list.module#PlaceListPageModule'
          },
          {
            path: 'places/map',
            loadChildren: '../pages/map/map.module#MapPageModule'
          },
          {
            path: 'places/:id/:slug/reviews',
            loadChildren: '../pages/review-list/review-list.module#ReviewListPageModule'
          },
          {
            path: 'places/:id/reviews',
            loadChildren: '../pages/review-list/review-list.module#ReviewListPageModule'
          },
          {
            path: 'places/:id',
            loadChildren: '../pages/place-detail/place-detail.module#PlaceDetailPageModule'
          },
          {
            path: 'places/:id/:slug',
            loadChildren: '../pages/place-detail/place-detail.module#PlaceDetailPageModule'
          },
        ]
      },
      {
        path: 'places',
        children: [
          {
            path: '',
            loadChildren: '../pages/place-list/place-list.module#PlaceListPageModule'
          },
          {
            path: 'map',
            loadChildren: '../pages/map/map.module#MapPageModule'
          },
          {
            path: ':id/:slug/reviews',
            loadChildren: '../pages/review-list/review-list.module#ReviewListPageModule'
          },
          {
            path: ':id/reviews',
            loadChildren: '../pages/review-list/review-list.module#ReviewListPageModule'
          },
          {
            path: ':id',
            loadChildren: '../pages/place-detail/place-detail.module#PlaceDetailPageModule'
          },
          {
            path: ':id/:slug',
            loadChildren: '../pages/place-detail/place-detail.module#PlaceDetailPageModule'
          }
        ]
      },
      {
        path: 'posts',
        children: [
          {
            path: '',
            loadChildren: '../pages/post-list/post-list.module#PostListPageModule'
          },
          {
            path: 'places/:id/reviews',
            loadChildren: '../pages/review-list/review-list.module#ReviewListPageModule'
          },
          {
            path: 'places/:id/:slug/reviews',
            loadChildren: '../pages/review-list/review-list.module#ReviewListPageModule'
          },
          {
            path: 'places/:id',
            loadChildren: '../pages/place-detail/place-detail.module#PlaceDetailPageModule'
          },
          {
            path: 'places/:id/:slug',
            loadChildren: '../pages/place-detail/place-detail.module#PlaceDetailPageModule'
          },
          {
            path: ':id',
            loadChildren: '../pages/post-detail/post-detail.module#PostDetailPageModule'
          },
          {
            path: ':id/:slug',
            loadChildren: '../pages/post-detail/post-detail.module#PostDetailPageModule'
          },
        ]
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: '../pages/profile/profile.module#ProfilePageModule'
          },
          {
            path: 'reviews',
            canActivate: [AuthGuard],
            loadChildren: '../pages/review-user-list/review-user-list.module#ReviewUserListPageModule'
          },
          {
            path: 'likes',
            canActivate: [AuthGuard],
            loadChildren: '../pages/favorite-list/favorite-list.module#FavoriteListPageModule'
          },
          {
            path: 'likes/:id',
            canActivate: [AuthGuard],
            loadChildren: '../pages/place-detail/place-detail.module#PlaceDetailPageModule'
          },
          {
            path: 'likes/:id/reviews',
            canActivate: [AuthGuard],
            loadChildren: '../pages/review-list/review-list.module#ReviewListPageModule'
          },
          {
            path: 'places',
            canActivate: [AuthGuard],
            loadChildren: '../pages/place-user-list/place-user-list.module#PlaceUserListPageModule'
          },
          {
            path: 'places/add',
            canActivate: [AuthGuard],
            loadChildren: '../pages/place-add/place-add.module#PlaceAddPageModule'
          },
          {
            path: 'places/:id/reviews',
            loadChildren: '../pages/review-list/review-list.module#ReviewListPageModule'
          },
          {
            path: 'places/:id/:slug/reviews',
            loadChildren: '../pages/review-list/review-list.module#ReviewListPageModule'
          },
          {
            path: 'places/:id',
            loadChildren: '../pages/place-detail/place-detail.module#PlaceDetailPageModule'
          },
          {
            path: 'places/:id/:slug',
            loadChildren: '../pages/place-detail/place-detail.module#PlaceDetailPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/1/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/1/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
