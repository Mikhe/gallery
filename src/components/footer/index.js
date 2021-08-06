import React from 'react';
import { createCn } from 'bem-react-classname';

import './footer.scss';
import { Text } from '../../uikit';
import FooterImage from '../../assets/footer.png';

const Footer = () => {
    const cn = createCn('footer');

    return (
        <div className={cn()} style={{ backgroundImage: `url(${FooterImage})` }}>
            <div className={cn('contacts')}>
                <Text className={cn('contacts-text')} fs="18px">+7 (495) 555-55-55</Text>
                <Text className={cn('contacts-text')} fs="18px">Москва, Красная площадь, 52</Text>
            </div>

            <Text className={cn('creator')} fs="18px">© Эпоха возрождения, 2021</Text>
        </div>
    );
};

export default Footer;
