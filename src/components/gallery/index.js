import React from 'react';
import { createCn } from 'bem-react-classname';

import './gallery.scss';
import mockData from '../../mock/data';
import { Text } from '../../uikit';

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
    const prevPrice = pic.sale ? pic.price : '';
    const currentPrice = pic.sale ? pic.sale : pic.price;
    const handleLoad = () => {
        resizeGridItem(ref.current);
    };

    return (
        <div ref={ref} className={cn('gallery-item')}>
            <img src={pic.src} onLoad={handleLoad} className={cn('gallery-item-image')} />
            <div className={cn('gallery-item-info')}>
                <div className={cn('gallery-item-info-wrap')}>
                    <Text className={cn('gallery-item-info-title')} fs="18px">{pic.title}</Text>

                    <Text className={cn('gallery-item-info-details')}>
                        {`${pic.author}, ${pic.weight}`}
                    </Text>

                    <div className={cn('gallery-item-buy')}>
                        <div className={cn('gallery-item-buy-price')}>
                            <Text className={cn('gallery-item-buy-price-prev')}>{prevPrice}</Text>
                            <Text className={cn('gallery-item-buy-price-current')} fs="16px">{currentPrice}</Text>
                        </div>

                        <button className={cn('gallery-item-buy-button')}>Купить</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;
