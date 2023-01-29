import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, useParams, Route, Link } from 'react-router-dom';
import '../style/View.css';

import { ENDPOINT } from '../Config.json';
import { Shadow } from './Utils';
import CopyBtn from './CopyBtn';

export interface Card_T {
    [index: string]: string | undefined,
    id?: string | undefined,
    name: string,
    job: string,
    email: string,
    author: string
}

function View() {
    const { id } = useParams<{id: string}>();
    const [Card, setCard] = useState<Card_T>();


    useEffect(() => {
        console.log(id)
        ReadCardByID(id);
    }, [id]);

    async function ReadCardByID(id: string) {
        let result = await fetch(`${ENDPOINT}/v1/card/${id}`, {
            method: "GET"
        });
        // console.log(await result.text());
        let js: {card?: Card_T, err?: string} = await result.json();

        if (js.card) setCard(js.card);
        else alert(js.err);
    }

    return (
        <div className="Float View" style={{boxShadow: Shadow()}}>
            <div className="Left">
                {Card&&
                    <div className="Card">
                        <h1>{Card.author} 의 명함</h1>
                        <div className="info">
                            <div><span>이름: {Card.name}</span> <CopyBtn str={Card.name} before={"복사"} after={"완료"}/></div>
                            <div><span>직업: {Card.job}</span> <CopyBtn str={Card.job} before={"복사"} after={"완료"}/></div>
                            <div><span>이메일: {Card.email}</span> <CopyBtn str={Card.email} before={"복사"} after={"완료"}/></div>
                        </div>
                    </div>
                }
            </div>
            <div className="Right">
                <div className="description">
                    <h3>온라인 명함</h3>
                    
                    <div>기존 종이 명함의 불편한</div>
                    <div>점들을 해결하고자 개발된 서비스 입니다.</div>
                    <br />
                    <div>명함을 만들고 나면</div>
                    <div> <strong>URL/QR Code</strong> </div>
                    <div>로 간단하게 접속 가능합니다.</div>
                    <br />
                    <Link to="/"><button>명함 만들기</button></Link>
                </div>
            </div>
        </div>
    )
}


export default View;