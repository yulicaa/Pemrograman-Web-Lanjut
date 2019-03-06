import { Component, OnInit } from '@angular/core';
import { DuaService } from '../Dua.service';


@Component({
  selector: 'app-dua',
  templateUrl: './dua.component.html',
  styleUrls: ['./dua.component.css']
})
export class DuaComponent implements OnInit {
  currentDate = Date.now();
  title = 'INI Tugas Pertama Biodata';

  name = 'Nama : Yuli Dwi Cahyanti';
  address = 'Alamat : Jln. Setaman No 22 Blitar';
  hobby = 'Hobby saya';

  Dua;
  // Dua = [
  //   {NO: 1, Hobby: 'berlari', Keterangan: 'lari 1 jam tiap hari'},
  //   {NO: 2, Hobby: 'senam', Keterangan: 'senam tiap sore'},
  //   {NO: 3, Hobby: 'bermain musik', Keterangan: 'bermain musik saat waktu senggang'}
  // ]


  constructor(private service:DuaService) { 
    this.Dua= service.getDua();
  }

  ngOnInit() {
  }

}
