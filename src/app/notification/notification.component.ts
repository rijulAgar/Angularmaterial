import {Component, OnInit} from '@angular/core';
import {HttpHeaders, HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-notification',
    templateUrl: './notification.component.html',
    styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

    head;
    msg: String = '';
    msgArr = [];

    constructor(private http: HttpClient) {
        // this.headers.append('x-frame-origin', '*');
        this.head = new HttpHeaders({
            'X-Frame-Options': 'allow-from http://evil.com/',
            'content-type': 'text/html'
        });
        // this.http.get().subscribe();
        // console.log(head.get('X-Frame-Options'));
    }

    ngOnInit() {
        // this.http.get('https://www.w3schools.com', {
        //     headers: new HttpHeaders({
        //         //'X-Frame-Options': 'allow-from https://www.youtube.com',
        //         'content-type': 'text/html',
        //         'Accept': 'text/html'
        //     }), responseType: 'text'
        // }).subscribe(data => {
        //     // console.log(data);
        //     document.getElementById('iFramee').setAttribute('src', 'data:text/html;charset=utf-8,' + escape(data));
        // });
    }

    // myMap() {
    //     const mapOptions = {
    //         center: new google.maps.LatLng(51.5, -0.12),
    //         zoom: 10,
    //         mapTypeId: google.maps.MapTypeId.HYBRID
    //     };
    //     const map = new google.maps.Map(document.getElementById('map'), mapOptions);
    // }

    sendMsg() {
        if (this.msg && this.msg.trim() !== '') {
            this.msgArr.push(this.msg);
            console.log(this.msgArr);
            this.msg = '';
        }
    }
}
