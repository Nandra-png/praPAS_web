import React from 'react';
import { createRoot } from 'react-dom/client';
import FotoCard from './fotocard';
import { Getdata } from "./data";
import DeleteButton from "./deletebutton";
import "./styles.css";

function Judul() {
    return <h1>Biodata Siswa</h1>;
}

function CardDesc({ nama, kelas, alamat }) {

    

    return (
        <div className="card-body">
            <ul>
                <li>Nama : {nama}</li>
                <li>Kelas : {kelas}</li>
                <li>Alamat : {alamat}</li>
            </ul>
        </div>
    )
}

function GroupCard({ nama, kelas, alamat, foto, onDelete }) {
    return (
        <div className="card">
            <FotoCard foto={foto} />
            <CardDesc nama={nama} kelas={kelas} alamat={alamat} />
            <DeleteButton onDelete={() => onDelete(nama)} />
        </div>
    )
}

function DataSiswa() {
    const [dataSiswa, setDataSiswa] = React.useState(Getdata());
    const [redoDataSiswa, setRedoDataSiswa] = React.useState([]);

    const handleDelete = (nama) => {
        const deletedCard = dataSiswa.find((siswa) => siswa.nama === nama);
        setRedoDataSiswa((prev) => [...prev, deletedCard]);
        setDataSiswa(dataSiswa.filter((siswa) => siswa.nama !== nama));
    };

    const handleRedo = () => {
        if (redoDataSiswa.length === 0) return;
        const lastDeletedCard = redoDataSiswa[redoDataSiswa.length - 1];
        setDataSiswa((prev) => [...prev, lastDeletedCard]);
        setRedoDataSiswa((prev) => prev.slice(0, -1));
    };

    return (
        <div>
            <Judul />
            <div className="card-container">
                {dataSiswa.map((siswa) => (
                    <GroupCard {...siswa} 
                    key={siswa.nama} 
                    onDelete={() => handleDelete(siswa.nama)}
                    />
                ))}
            </div>
            <button className="redo-button" onClick={handleRedo}>Redo</button>
        </div>
    )
}

const root = createRoot(document.getElementById('root'));
root.render(<DataSiswa />);