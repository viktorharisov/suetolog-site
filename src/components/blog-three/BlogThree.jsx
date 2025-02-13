import './BlogThree.css'
import image1 from './../../images/123/Fixed-aspect-ratio-spacer.png';
import image2 from './../../images/123/Fixed-aspect-ratio-spacer1.png';
import image3 from './../../images/123/Fixed-aspect-ratio-spacer2.png';
function BlogThree() {
    return (
        <section className="blog-three">
            <h1>Не только найди для себя друзей</h1>
            <p>Modern art includes artistic work produced during the period extending roughly from the 1860s to the
                1970s, and denotes the styles and philosophies of the art produced during that era.</p>

            <div className="blog-three__cards">
                <div className="blog-card">
                    <img src={image1} alt="image3"/>
                    <div className="blog-card__content">
                        <h1 className="blog-card__title">Находите новых друзей на Bumble For Friends</h1>
                        <p className="blog-card__text">Будьте парой, как два сапога. Или притягивайтесь, как
                            противоположности. Заводите новых друзей и находите общие занятия по душе – и дома, и в
                            путешествиях.</p>
                    </div>
                </div>

                <div className="blog-card">
                    <img src={image2} alt="image3"/>
                    <div className="blog-card__content">
                        <h1 className="blog-card__title">Находите новых друзей на Bumble For Friends</h1>
                        <p className="blog-card__text">Будьте парой, как два сапога. Или притягивайтесь, как
                            противоположности. Заводите новых друзей и находите общие занятия по душе – и дома, и в
                            путешествиях.</p>
                    </div>
                </div>

                <div className="blog-card">
                    <img src={image3} alt="image3"/>
                    <div className="blog-card__content">
                        <h1 className="blog-card__title">Находите новых друзей на Bumble For Friends</h1>
                        <p className="blog-card__text">Будьте парой, как два сапога. Или притягивайтесь, как
                            противоположности. Заводите новых друзей и находите общие занятия по душе – и дома, и в
                            путешествиях.</p>
                    </div>
                </div>
            </div>
        </section>


    )

}

export default BlogThree;