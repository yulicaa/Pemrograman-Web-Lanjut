export interface mahasiswa { //FormGroup
    nama_mhs:string; //FormControl
    pendidikan:{ //FormGroup
        nama_jurusan:string; //FormControl
        nama_prodi:string; //FormControl
    }
}
