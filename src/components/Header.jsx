import React from "react";
import './Header.css';

export default function Header() {

    const liGnbs = [
        {id: 'gnb-01', gnb: '로그인'},
        {id: 'gnb-02', gnb: '회원가입'},
        {id: 'gnb-03', gnb: '장바구니'},
    ]

    const liLnbs = [
        {id: 'lnb-01', lnb: '베스트상품'},
        {id: 'lnb-02', lnb: '신상품'},
        {id: 'lnb-03', lnb: '기획전'},
        {id: 'lnb-04', lnb: '이벤트/혜택'},
        {id: 'lnb-05', lnb: '금복레시피'},
        {id: 'lnb-06', lnb: '레시피공모전'},
    ]

    return (
        <header>
            <div className="header__container">
                <div className="gnb_outer">
                    <nav className="gnb" style={{width:'1024px', margin:'0 auto'}}>
                        <ul>
                            {
                                liGnbs.map((liGnb) => {
                                    return (
                                        <li key={liGnbs.id}>{liGnb.gnb}</li>
                                    )
                                })
                            }
                        </ul>
                    </nav>
                </div>
                
                <div className="logo">
                    <img src="/images/logo.jpg" alt="logo_img" />
                </div>

                <div className="lnb_outer">
                    <nav className="lnb" style={{width:'1024px', margin:'0 auto'}}>
                        <ul>
                            {
                                liLnbs.map((liLnb) => {
                                    return (
                                        <li key={liLnbs.id}>{liLnb.lnb}</li>
                                    )
                                })
                            }
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}