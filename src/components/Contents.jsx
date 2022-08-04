import React, { useState } from "react";
import styled from 'styled-components'
import './Contents.css';




const Button = styled.button`
    display: inline-block;
    width: 50%;
    height: 50px;
    border: 1px solid #ddd;
    background-color: #eee;
    cursor: pointer;
    transition: all 0.3s;
    :hover {
        background-color: #999;
    }
`

export default function Contents() {

    const bests = [
        {
            id: 'best-01',
            image: '/images/best_01.png',
            // badge_best: '',
            // badge_new: '',
            // badge_sale: '',
            desc: '쫄깃하고 탱글탱글한 식감이 일품!',
            title: '캠핑어묵창(순한맛)',
            price: '8,900원'
        },
        {
            id: 'best-02',
            image: '/images/best_02.png',
            // badge_best: '',
            badge_new: '',
            badge_sale: '',
            desc: '간편하게 어묵탕을 만들 수 있는 모듬어묵',
            title: '어묵탕모듬어묵 플러스',
            price: '19,000원'
        },
        {
            id: 'best-03',
            image: '/images/best_03.png',
            badge_best: '',
            badge_new: '',
            badge_sale: '',
            desc: '시장에서 맛 보앗던 추억의 어묵 우동',
            title: '[삼진어묵 창립 69주년 행사]실속모듬어묵',
            price: '19,900원'
        },
        {
            id: 'best-04',
            image: '/images/best_04.png',
            badge_best: '',
            badge_new: '',
            badge_sale: '',
            desc: '인기 고급제품으로 구성된 선물세트',
            title: '1953세트 2호',
            price: '36,000원'
        },
        {
            id: 'best-05',
            image: '/images/best_05.png',
            badge_best: '',
            badge_new: 'NEW',
            badge_sale: '',
            desc: '팔도 비빔장으로 어묵볶음을 간편하게',
            title: '딱한끼 볶음용리용(팔도)',
            price: '4,980원'
        },
        {
            id: 'best-06',
            image: '/images/best_06.png',
            badge_best: '',
            badge_new: '',
            badge_sale: '',
            desc: '가정에서 소량으로 즐기는 꼬치어묵',
            title: '[냉동] 딱한끼 사각꼬치',
            price: '5,500원'
        },
        {
            id: 'best-07',
            image: '/images/best_07.png',
            badge_best: 'BEST',
            badge_new: '',
            badge_sale: '',
            desc: '어묵 고유의 탱글하고 담백한 맛',
            title: '딱한끼 어묵탕(순한맛)',
            price: '4,000원'
        },
        {
            id: 'best-08',
            image: '/images/best_08.png',
            badge_best: '',
            badge_new: '',
            badge_sale: 'SALE',
            desc: '간식어묵 6종을 한번에 즐길 수 있는 제품',
            title: '어부의바 6종 세트',
            price: '9,900원'
        },
    ]

    const chuchuns = [
        {
            id: 'chuchun-01',
            image: '/images/recommend_01.jpg',
            desc: '팔도x삼진 신제품 기념 이벤트',
            title: '팔도 딱한기 볶음어묵 2종 + 볶음사각 1종',
            price: '8,900원'
        },
        {
            id: 'chuchun-02',
            image: '/images/recommend_02.png',
            desc: '탱글한 식감이 일품인 모듬어묵',
            title: '특선 모듬어묵',
            price: '16,000원'
        },
        {
            id: 'chuchun-03',
            image: '/images/recommend_03.png',
            desc: '팔도x삼진 콜라보 사각어묵',
            title: '딱한끼 볶음사각(팔도)',
            price: '3,980원'
        },
        {
            id: 'chuchun-04',
            image: '/images/recommend_04.png',
            desc: '고소하고 담백한 사각어묵',
            title: '담백한 사각어묵',
            price: '2,700원'
        },
        {
            id: 'chuchun-05',
            image: '/images/recommend_05.jpg',
            desc: '잘게 썬 당면이 가득 담겨 탱글한 어묵',
            title: '삼각당면(진공)',
            price: '4,980원'
        },
        {
            id: 'chuchun-06',
            image: '/images/recommend_06.jpg',
            desc: '오징어를 듬뿍 넣어 감칠맛이 좋은 어묵',
            title: '오징어땡소(진공)',
            price: '3,480원'
        },
        {
            id: 'chuchun-07',
            image: '/images/recommend_07.png',
            desc: '매콤한 김치와 어묵이 어우러진 볶음밥',
            title: '[냉동] 김치어묵볶음밥',
            price: '7,900원'
        },
        {
            id: 'chuchun-08',
            image: '/images/recommend_08.png',
            desc: '신선한 새우가 가득 들어있는 어묵볶음밥',
            title: '[냉동] 새우어묵볶음밥',
            price: '8,700원'
        },
    ]


    


    const [count, setCount] = useState([0,0,0,0,0,0,0,0])

    return (
        <>
            <section className="visual-main">
                <img src={process.env.PUBLIC_URL+"/images/visual_main_01.jpg"} 
                alt="visual_img01" />
            </section>

            <section className="best-container">
                <h2 className="best__title">삼진어묵 베스트</h2>
                <div className="plus"><a href="#!">더보기 ></a></div>

                    <div className="best_product_box">
                        {
                            bests.map((best, i) => {
                                return (
                                    <div className="best" key={best.id}>
                                        <img src={best.image} alt='best_img1' />
                                        {/* <div className="badge__best">{best.badge_best}</div>
                                        <div className="badge__new">{best.badge_new}</div>
                                        <div className="badge__sale">{best.badge_sale}</div> */}
                                        <p className="best__desc">{best.desc}</p>
                                        <h4 className="best__title">{best.title}</h4>
                                        <p className="best__price">{best.price}</p>
                                        <div className="best__btn">
                                            <Button className="heart" onClick={()=>{
                                                let countCopy = [...count]
                                                countCopy[i] += 1
                                                setCount(countCopy)
                                            }} >🤍찜하기 {count[i]}</Button>
                                            <Button className="cart">🛒장바구니</Button>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    
            </section>

            
            <section className="chuchun-container">
                <h2 className="chuchun__title">삼진어묵 추천상품</h2>
                <div className="plus"><a href="#!">더보기 ></a></div>

                    <div className="chuchun_product_box">
                        {
                            chuchuns.map((chuchun, i) => {
                                return (
                                    <div className="chuchun" key={chuchun.id}>
                                        <img src={chuchun.image} alt='best_img1' />
                                        {/* <div className="badge__best">{best.badge_best}</div>
                                        <div className="badge__new">{best.badge_new}</div>
                                        <div className="badge__sale">{best.badge_sale}</div> */}
                                        <p className="chuchun__desc">{chuchun.desc}</p>
                                        <h4 className="chuchun__title">{chuchun.title}</h4>
                                        <p className="chuchun__price">{chuchun.price}</p>
                                        <div className="chuchun__btn">
                                            <button className="heart" onClick={()=>{
                                                let countCopy = [...count]
                                                countCopy[i] += 1
                                                setCount(countCopy)
                                            }} >🤍찜하기 {count[i]}</button>
                                            <button className="cart">🛒장바구니</button>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    
            </section>
        </>
    )
}