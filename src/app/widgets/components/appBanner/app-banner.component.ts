import { AfterContentInit, Component } from "@angular/core";

@Component({
    selector:'app-banner',
    templateUrl: './app-banner.component.html',
    styleUrls:['./app-banner.component.css'],
})

export class appBanner implements AfterContentInit{
    ngAfterContentInit()
    {
        console.log('ngAfterContentInit called');
    }

}