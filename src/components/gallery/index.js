import React from 'react';
import { createCn } from 'bem-react-classname';

import './gallery.scss';
import mockData from '../../mock/data';

const rowHeight = 8;
const columnWidth = 280;
const rowGap = 32;

function resizeGridItem(item){
    const rowSpanHeight = Math.ceil((item.getBoundingClientRect().height) / (rowHeight + rowGap));
    const rowSpanWidth = Math.ceil((item.getBoundingClientRect().width) / (columnWidth + rowGap));

    item.style.gridRowEnd = `span ${rowSpanHeight}`;
    item.style.gridColumnEnd = `span ${rowSpanWidth}`;
}

const Gallery = () => {
    const cn = createCn('gallery');

    return (
        <div className={cn()}>
            {mockData.map(pic => (
                <Picture pic={pic} cn={cn} key={`${pic.title}-${pic.author}`}/>
            ))}
        </div>
    );
};

const Picture = (props) => {
    const { pic, cn } = props;
    const ref = React.useRef(null);
    const handleLoad = () => {
        resizeGridItem(ref.current);
    };

    return (
        <div ref={ref} className={cn('gallery-item')}>
            <img src={pic.src} onLoad={handleLoad} />
            <div className={cn('gallery-item-info')}>
                <div className={cn('gallery-item-info-title')}>{pic.title}</div>
                <div className={cn('gallery-item-info-author')}>{pic.author}</div>
            </div>
        </div>
    );
};

export default Gallery;
