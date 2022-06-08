import {Component} from "@angular/core";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    .online {
      color: white;
    }`]
})
export class ServerComponent {
  serverId: number;
  serverStatus: string;


  constructor() {
    this.serverStatus = Math.random() > 0.5 ? "online" : "offline";
    this.serverId = Math.round(Math.random() * 100);
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}


