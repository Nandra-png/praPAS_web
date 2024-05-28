import React from 'react';
import './styles.css';

const handleRedo = () => {
    if (redoDataSiswa.length === 0) return;
    const lastDeletedCard = redoDataSiswa[redoDataSiswa.length - 1];
    setDataSiswa((prev) => [...prev, lastDeletedCard]);
    setRedoDataSiswa((prev) => prev.slice(0, -1));
};

export default handleRedo;
