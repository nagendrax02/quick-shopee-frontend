import React from "react";
import "./MobileScrollGallery.css"

// Define the structure of an item
interface Item {
    id: number;
    name: string;
    image: string;
  }

interface MobileScrollGalleryProps {
    items: Item[];
  }

function MobileScrollGallery({items}:MobileScrollGalleryProps): JSX.Element{
    return <div className="mob-scroll-section">
           {items.map((item: Item) => (
        <div key={item.id} className="gallery-item">
          <img src={item.image} alt={item.name} />
        </div>
      ))}
    </div>
}

export default MobileScrollGallery