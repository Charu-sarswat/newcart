import './PropertyCard.css';

function PropertyCard({ image, price, beds, baths, area, title, location }) {
    return (
        <div className="property-card">
            <img src={image} alt={title} className="property-image" />
            <div className="property-info">
                <h2 className="property-price">{price}</h2>
                <div className="property-details">
                    {beds} Bds • {baths} Ba • {area} sqft
                </div>
                <div className="property-title">{title}</div>
                <div className="property-location">{location}</div>
            </div>
        </div>
    );
}

export default PropertyCard; 