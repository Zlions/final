import api from '@/api';
import React, { useEffect, useState } from 'react'
import PersonItem from '../PersonItem';
import style from './index.scss';

const SendResumeItem = (props: any) => {
    const pid = props.pos.id;
    const [users, setUsers] = useState([] as any)
    useEffect(() => {
        api.getSendRecordByPositionId(pid).then(resp => {
            if(!resp.data.err) {
                let temp = [];
                for (let i = 0; i < resp.data.data.length; i++) {
                    temp.push(<PersonItem key={i} per={resp.data.data[i].userId} />)
                }
                setUsers(temp)
            }
        })
    }, [])
    return (
        <div className={style.send_wrap}>
            <h3 className={style.send_title}>{props.pos.name}<span>职位申请者</span></h3>
            <div className={style.person_wrap}>
                {users.length === 0 ? '暂无投递者' : users}
            </div>
        </div>
    )
}

export default SendResumeItem