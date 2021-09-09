import React,{useState} from "react";
import Toast from 'react-bootstrap/Toast'
import { Form } from "react-bootstrap";
import { ToastContainer } from "react-bootstrap";

export default function MyToast() {
    const [position, setPosition]= useState('top-start');

    return (
        <>
            <div className="mb-3">
                <label htmlFor="selectToastPlacement">Toast position</label>
                <Form.Select
                    id="selectToastPlacement"
                    className="mt-2"
                    onChange={(e) => setPosition(e.currentTarget.value)}
                >
                    {[
                        'top-start',
                        'top-center',
                        'top-end',
                        'middle-start',
                        'middle-center',
                        'middle-end',
                        'bottom-start',
                        'bottom-center',
                        'bottom-end',
                    ].map((p) => (
                        <option key={p} value={p}>
                            {p}
                        </option>
                    ))}
                </Form.Select>
            </div>

            <div
                aria-live="polite"
                aria-atomic="true"
                className="bg-dark position-relative"
                style={{ minHeight: '240px' }}
            >
                <ToastContainer className="p-3" position={position}>
                    <Toast>
                        <Toast.Header closeButton={false}>
                            <img
                                src="holder.js/20x20?text=%20"
                                className="rounded me-2"
                                alt=""
                            />
                        </Toast.Header>
                        <Toast.Body>Data Inserted.</Toast.Body>
                    </Toast>
                </ToastContainer>
            </div>
        </>
    );
}