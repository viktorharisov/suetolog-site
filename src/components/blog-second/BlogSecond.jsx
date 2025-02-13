import './BlogSecond.css'
import imageFriends from './../../images/123/Fixed-aspect-ratio-spacer1.png'

function BlogSecond() {
    return (
        <section className="blog-second">
            <div className="blog-second__content">
                <p className="blog-second__subtitle">Встречай людей по новому</p>
                <h1 className="blog-second__title">
                    Мы предлагаем вам найти <br/> лучшую компанию
                </h1>
                <p className="blog-second__description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius
                    enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor
                    interdum nulla, ut commodo diam libero vitae erat.
                </p>
            </div>
            <div className="blog-second__image">
                <img src={imageFriends} alt="imageFriends" />
            </div>
        </section>

    )

}

export default BlogSecond;