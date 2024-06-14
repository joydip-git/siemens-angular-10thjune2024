import { Route, Routes } from "@angular/router";
import { ProductListComponent } from "../products/components/product-list/product-list.component";
import { AddProductComponent } from "../products/components/add-product/add-product.component";
import { ProductDetailComponent } from "../products/components/product-detail/product-detail.component";
import { EditProductComponent } from "../products/components/edit-product/edit-product.component";
import { HomeComponent } from "../shared/components/home/home.component";
import { PageNotFoundComponent } from "../shared/components/page-not-found/page-not-found.component";
import { LoginComponent } from "../users/components/login/login.component";
import { RegistrationComponent } from "../users/components/registration/registration.component";

/*
export const productRoutes: Route[] = [
    {
        path: 'products',
        component: ProductListComponent
    },
    {
        path: 'products/add',
        component: AddProductComponent
    },
    {
        path: 'products/view/:id',
        component: ProductDetailComponent
    },
    {
        path: 'products/edit/:id',
        component: EditProductComponent
    }
]
    */
export const productRoutes: Route[] = [
    {
        path: 'products',
        children: [
            {
                path: '',
                component: ProductListComponent
            },
            {
                path: 'add',
                component: AddProductComponent
            },
            {
                path: 'view/:id',
                component: ProductDetailComponent
            },
            {
                path: 'edit/:id',
                component: EditProductComponent
            }
        ]
    }
]

export const sharedRoutes: Route[] = [
    {
        path: 'home', component: HomeComponent
    },
    {
        path: '', redirectTo: '/home', pathMatch: 'full'
    },
    {
        path: '**', component: PageNotFoundComponent
    }
]

export const userRoutes: Routes = [
    {
        path: 'login', component: LoginComponent
    },
    {
        path: 'register', component: RegistrationComponent
    }
]