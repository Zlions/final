import React, { ReactNode } from 'react';
import style from './index.scss';

interface IProps {
    selectMenu: Array<string>;
    inputPlaceholder: string;
    styleSheet?: {
        width: number;
        menuDisplay: boolean;
    };
}

const Selected = (props: IProps) => {
    let lis: Array<ReactNode> = [];
    props.selectMenu.forEach((item, i) => {
        let li = (
            <li key={i}>
                <span>{item}</span>{' '}
            </li>
        );
        lis.push(li);
    });
    return (
        <div className={`${style.dropdown_wrap}`}>
            <div className={style.dropdown_filp}>
                <input
                    style={{ width: (props.styleSheet && props.styleSheet.width) || 300 }}
                    type="text"
                    placeholder={props.inputPlaceholder}
                />
            </div>
            <div
                className={style.dropdown_menu}
                style={{display: props.styleSheet?.menuDisplay ? 'block' : 'none' }}
            >
                <ul className={style.options}>{lis}</ul>
            </div>
        </div>
    );
};

export default Selected;
