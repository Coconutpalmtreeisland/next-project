import React from 'react'

const Intro = () => {
    return (
        <section id="intro">
            <div className="intro_inner">
                <h1 className="intro__title">
                    welcome to my island
                </h1>
                <div className="intro__lines" aria-hidden="true">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
                <div className="intro__text">
                    <div className="img"></div>
                    <div className="text">
                        <div>There is</div>
                        <div>a light</div>
                        <div>that never</div>
                        <div>goes out</div>
                    </div>
                </div>
                <div className="intro__lines bottom" aria-hidden="true">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
            </div>
        </section>
    )
}

export default Intro