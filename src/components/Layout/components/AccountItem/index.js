import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'
import classNames from 'classnames/bind';
import Image from '~/components/Image';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    return (
        <Link to={`@/${data.username}`} className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/118441977edc639baf728fd892d500b3~tplv-tiktokx-cropcenter:300:300.webp?dr=14577&refresh_token=d3646ef5&x-expires=1764237600&x-signature=4%2FW825UfoJK96wm4avfHwRjGqRA%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=c1333099&idc=my2"
                alt={data.name}
            ></Image>
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{data.name}</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />
                </h4>
                <span className={cx('username')}>{data.username}</span>
            </div>
        </Link>
    );
}

export default AccountItem;
