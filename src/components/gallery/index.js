import React from 'react';
import { observer } from 'mobx-react';
import { createCn } from 'bem-react-classname';

import './gallery.scss';
import { store } from '../../stores/store';
import { Icon, Text } from '../../uikit';

const rowHeight = 8;
const columnWidth = 280;
const rowGap = 32;

function resizeGridItem(item){
    const rowSpanHeight = Math.ceil((item.getBoundingClientRect().height) / (rowHeight + rowGap));
    const rowSpanWidth = Math.ceil((item.getBoundingClientRect().width) / (columnWidth + rowGap));

    item.style.gridRowEnd = `span ${rowSpanHeight}`;
    item.style.gridColumnEnd = `span ${rowSpanWidth}`;
}

const Gallery = observer(() => {
    const cn = createCn('gallery');
    const { pictures } = store;

    return (
        <div className={cn()}>
            {pictures.map(pic => (
                <Picture pic={pic} cn={cn} key={`${pic.title}-${pic.author}`}/>
            ))}
        </div>
    );
});

const Picture = (props) => {
    const { pic, cn } = props;
    const ref = React.useRef(null);
    const prevPrice = pic.sale ? pic.price : '';
    const currentPrice = pic.sale ? pic.sale : pic.price;
    const isSold = !!pic.sold;
    const handleLoad = () => {
        resizeGridItem(ref.current);
    };

    return (
        <div ref={ref} className={cn('gallery-item')}>
            <img src={pic.src} onLoad={handleLoad} className={cn('gallery-item-image', { sold: isSold })} />
            <div className={cn('gallery-item-info', { sold: isSold })}>
                <div className={cn('gallery-item-info-wrap')}>
                    <Text className={cn('gallery-item-info-title')} fs="18px">{pic.title}</Text>

                    <Text className={cn('gallery-item-info-details')}>
                        {`${pic.author}, ${pic.weight}`}
                    </Text>

                    {!isSold && (
                        <div className={cn('gallery-item-buy')}>
                            <div className={cn('gallery-item-buy-price')}>
                                <Text className={cn('gallery-item-buy-price-prev')}>{prevPrice}</Text>
                                <Text className={cn('gallery-item-buy-price-current')} fs="16px">{currentPrice}</Text>
                            </div>

                            <button className={cn('gallery-item-buy-button')}>Купить</button>
                        </div>
                    )}

                    {isSold && (
                        <div className={cn('gallery-item-auc')}>
                            <Icon
                                className={cn('gallery-item-auc-icon')}
                                name="auc"
                                color="lightgray"
                                width={21}
                                height={21}
                            />

                            <Text>Продана на аукционе</Text>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Gallery;
