import React, { useState } from 'react';

export default function ImageGallery({ images = [] }) {
    const [selected, setSelected] = useState(0);

    if (!images.length) return null;

    return (
        <div style={{ textAlign: 'center' }}>
            <div>
                <img
                    src={images[selected]}
                    alt="Main"
                    style={{ width: 500, height: 300, objectFit: 'cover', borderRadius: 10 }}
                />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 16, gap: 12 }}>
                {images.map((img, idx) => (
                    <img
                        key={idx}
                        src={img}
                        alt={`Thumbnail ${idx + 1}`}
                        style={{
                            width: 80,
                            height: 60,
                            objectFit: 'cover',
                            border: selected === idx ? '2px solid #1976d2' : '2px solid #eee',
                            borderRadius: 6,
                            cursor: 'pointer',
                            transition: 'border 0.2s'
                        }}
                        onClick={() => setSelected(idx)}
                    />
                ))}
            </div>
        </div>
    );
} 