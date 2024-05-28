import React from 'react';
import './styles.css';

function DeleteButton({ onDelete }) {
    return (
        <button className="delete-button" onClick={onDelete}>
            Delete
        </button>
    );
}

export default DeleteButton;
