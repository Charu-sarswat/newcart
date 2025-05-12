import { useParams, useNavigate } from 'react-router-dom';
import ImageGallery from '../components/ImageGallery';
import './PropertyDetails.css';
import { properties } from '../data/properties';

export default function PropertyDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const property = properties.find(p => p.id === id);

    if (!property) return <div>Property not found</div>;

    return (
        <div className="property-details-main">
            <button onClick={() => navigate('/')} style={{ margin: '20px', padding: '8px 16px', fontSize: '16px', borderRadius: '6px', border: '1px solid #1976d2', background: '#1976d2', color: '#fff', cursor: 'pointer' }}>
                ← Back to Home
            </button>
            <div className="property-details-columns">
                {/* LEFT COLUMN */}
                <div className="property-details-left">
                    <ImageGallery images={property.images} />
                    <div className="details-section">
                        <h3>Details</h3>
                        <div className="details-grid">
                            <div className="detail-item"><span>Type:</span><span>{property.type}</span></div>
                            <div className="detail-item"><span>Bedrooms:</span><span>{property.beds}</span></div>
                            <div className="detail-item"><span>Bathrooms:</span><span>{property.baths}</span></div>
                            <div className="detail-item"><span>Super Built-up area sqft:</span><span>{property.area}</span></div>
                            <div className="detail-item"><span>Furnishing:</span><span>{property.furnishing}</span></div>
                            <div className="detail-item"><span>Project Status:</span><span>Ready to Move</span></div>
                            <div className="detail-item"><span>Listed By:</span><span>{property.listedBy}</span></div>
                            <div className="detail-item"><span>Facing:</span><span>{property.facing}</span></div>
                            <div className="detail-item"><span>Car Parking:</span><span>{property.carParking}</span></div>
                            <div className="detail-item"><span>Maintenance (Monthly):</span><span>₹{property.maintenance}</span></div>
                            <div className="detail-item"><span>Carpet area sqft:</span><span>{property.carpetArea}</span></div>
                            <div className="detail-item"><span>Floor No:</span><span>{property.floorNo}</span></div>
                            <div className="detail-item"><span>Project Name:</span><span>{property.projectName}</span></div>
                            <div className="detail-item"><span>Total Floors:</span><span>{property.totalFloors}</span></div>
                        </div>
                    </div>
                    <div className="description-section">
                        <h3>Description</h3>
                        <p>{property.description}</p>
                        <h4>Pricing & Sizes:</h4>
                        <ul>
                            {(property.pricingDetails || []).map((detail, index) => (
                                <li key={index}>{detail}</li>
                            ))}
                        </ul>
                        <h4>Modern Interiors:</h4>
                        {/* Add more description content as needed */}
                    </div>
                </div>
                {/* RIGHT COLUMN */}
                <div className="property-details-right">
                    <div className="sticky-card">
                        <div className="property-price">{property.price}</div>
                        <div className="property-summary">
                            <div>{property.beds} BHK • {property.baths} Bathroom • {property.area} sqft</div>
                            <div className="property-title">{property.title}</div>
                            <div className="property-location">{property.location}</div>
                        </div>
                        <div className="posted-by">
                            <div className="posted-label">Posted By</div>
                            <div className="posted-value">Investwell Homes</div>
                            <div className="posted-meta">Member since Oct 2022 • 26 items listed</div>
                            <button className="chat-button">Chat with seller</button>
                        </div>
                        <div className="posted-in">
                            <div className="posted-label">Posted in</div>
                            <div className="posted-value">{property.location}</div>
                        </div>
                        <div className="map-preview">
                            <iframe
                                title="map"
                                width="100%"
                                height="180"
                                frameBorder="0"
                                style={{ border: 0, borderRadius: '6px' }}
                                src="https://www.google.com/maps?q=28.5700,77.3200&z=15&output=embed"
                                allowFullScreen=""
                                aria-hidden="false"
                                tabIndex="0"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
