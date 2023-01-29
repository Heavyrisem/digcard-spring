import React, { useRef, useState } from 'react';
import QRCode from 'qrcode.react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import { ENDPOINT } from '../Config.json';

import '../style/Create.css';
import { Input, Shadow } from './Utils';
import CopyBtn from './CopyBtn';


function Create() {
    const name = useRef<HTMLInputElement>(null);
    const job = useRef<HTMLInputElement>(null);
    const email = useRef<HTMLInputElement>(null);

    const [ResultURL, setResultURL] = useState<string>("");
    const [Fetching, setFetching] = useState<boolean>(false);

    async function Upload() {
        if (name && job && email && !Fetching) {
            setFetching(true);
            const Card = {
                name: name.current?.value,
                job: job.current?.value,
                email: email.current?.value,
                author: "익명 사용자"
            }

            let response = await fetch(`${ENDPOINT}/v1/card/create`, {
                method: "POST",
                body: JSON.stringify(Card),
                headers: {'Content-Type': 'application/json'}
            });
            let result: {id?: string, err?: string} = await response.json();

            if (result.id) {
                // alert(`${ENDPOINT}/view/${result.id}`);
                setResultURL(`/view/${result.id}`);
            } else {
                alert(result.err);
            }
            setFetching(false);
        }
    }

    return (
        <div className="Float Create" style={{boxShadow: Shadow()}}>
            <div className="Left">
                <div className="containor">
                    <h1 className="ViewTitle">명함 만들기</h1>

                    <div className="InputField">
                        <Input label="이름" refs={name} />
                        <Input label="직업" refs={job} />
                        <Input label="이메일" refs={email} />
                    </div>

                    <button onClick={Upload}>생성</button>
                </div>
            </div>
            <div className="Right">
                {ResultURL?
                    <>
                        <div>Share this QR Code/URL</div><br />
                        <QRCode value={`https://${window.location.host}${ResultURL}`} /><br /><br />
                        
                        <div className="BtnList">
                            <Link to={ResultURL}><button>명함 열기</button></Link>
                            <CopyBtn str={`https://${window.location.host}${ResultURL}`} before="URL 복사" after={"복사 완료"}></CopyBtn>
                        </div>
                    </>
                    :
                    
                    <div className="description">
                        <h3>온라인 명함</h3>
                        
                        <div>기존 종이 명함의 불편한</div>
                        <div>점들을 해결하고자 개발된 서비스 입니다.</div>
                        <br />
                        <div>명함을 만들고 나면</div>
                        <div> <strong>URL/QR Code</strong> </div>
                        <div>로 간단하게 접속 가능합니다.</div>
                        <br />
                        명함이 만들어지면 여기에 표시됩니다.
                    </div>
                }
            </div>
        </div>
    )
}

export default Create;