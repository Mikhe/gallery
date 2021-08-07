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
                <Picture pic={pic} cn={cn} key={pic.id}/>
            ))}
        </div>
    );
});

const Picture = observer((props) => {
    const { pic, cn } = props;
    const { id, sold, sale, price, title, weight, author, order } = pic;
    const { buyPicture } = store;
    const ref = React.useRef(null);
    const prevPrice = sale ? price : '';
    const currentPrice = sale ? sale : price;
    const isSold = !!sold;
    const handleLoad = () => {
        resizeGridItem(ref.current);
    };
    const handleBuy = () => {
        buyPicture(id)
    };

    return (
        <div ref={ref} className={cn('gallery-item')}>
            <img src={pic.src} onLoad={handleLoad} className={cn('gallery-item-image', { sold: isSold })} />
            <div className={cn('gallery-item-info', { sold: isSold })}>
                <div className={cn('gallery-item-info-wrap')}>
                    <Text className={cn('gallery-item-info-title')} fs="18px">{title}</Text>

                    <Text className={cn('gallery-item-info-details')}>
                        {`${author}, ${weight}`}
                    </Text>

                    {!isSold && (
                        <div className={cn('gallery-item-buy')}>
                            <div className={cn('gallery-item-buy-price', { order })}>
                                <Text className={cn('gallery-item-buy-price-prev')}>{prevPrice}</Text>
                                <Text className={cn('gallery-item-buy-price-current')} fs="16px">{currentPrice}</Text>
                            </div>

                            <button className={cn('gallery-item-buy-button', { order })} onClick={handleBuy}>
                                <div className={cn('gallery-item-buy-button-text')}>
                                    {order ? 'В корзине' : 'Купить'}
                                </div>

                                {order && (
                                    <Icon name="success" color="black" width={14} height={11} />
                                )}
                            </button>
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
});

export default Gallery;
