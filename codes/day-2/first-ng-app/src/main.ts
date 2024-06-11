import { NgModuleRef, PlatformRef } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";

const platformRefObj: PlatformRef = platformBrowserDynamic()

platformRefObj
  .bootstrapModule(AppModule)
  .then(
    (ngModuleRef: NgModuleRef<AppModule>) => console.log(ngModuleRef.instance)
  )
  .catch(err => console.log(err))