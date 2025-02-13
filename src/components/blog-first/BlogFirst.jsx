import './BlogFirst.css'
import imageBlog from './../../images/123/Fixed-aspect-ratio-spacer.png';
import googlePLay from './../../images/123/googleplay.png'
import arrow from './../../images/123/arrow.svg'

function BlogFirst() {
    return (
        <section className="blog-first">
            <div className="container">
                <p className="blog-first__intro">Новый уровень знакомств и встреч</p>
                <h1 className="blog-first__title">городские приключения <br/>нового уровня</h1>
                <p className="blog-first__subtitle">Вы достойны самого лучшего!
                    Наши способы дейтинга подарят вам больше удовольствия и меньше стресса.
                </p>
                <div className="blog-first__actions">
                    <button className="btn">
                        <span>Узнать больше</span>
                        <img src={arrow} alt="→" className="btn__icon"/>
                    </button>
                    <a href="#!" className="blog-first__googlePlay">
                        <img src={googlePLay} alt="Google Play"/>
                    </a>
                </div>
                <div className="blog-first__image">
                    <img src={imageBlog} alt="blog"/>
                </div>
            </div>
        </section>
    )

}

export default BlogFirst;