import React from "react";
import classes from './css/newsFeed.module.css';
import {NavLink} from "react-router-dom";

const NewsFeed = (props)=>{
    return <div className={'container-fluid pl-0 pr-0 '}>
        <div className={'row mr-0 ml-0'}>
            <div className={'col-12 pl-0 pr-0' + ' ' + classes.blockNewsBig}>
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className={'d-block w-100' + ' ' + classes.sliderImg}
                                 data-src="holder.js/800x400?auto=yes&amp;bg=777&amp;fg=555&amp;text=First slide"
                                 alt="First slide [800x400]"
                                 src="https://www.saglobal.com/images/banner/top-banner/Quartz-Publishing--Exhibitions.jpg"
                                 data-holder-rendered="true"/>
                                <div className={"carousel-caption" + ' ' + classes.blockInfoSlider}>
                                    <h1 className={classes.headerNews}>Как отразился на перевозках
                                        <br/>COVID-19?</h1>
                                    <p className={classes.textNews}>Ограничения на перевозки. Куда можно возить? Какое наказание за перевозки?</p>
                                    <NavLink className={classes.link} to={'/news/covid19'}>
                                        Подробнее...
                                    </NavLink>
                                </div>
                        </div>
                        <div className="carousel-item">
                            <img className={'d-block w-100' + ' ' + classes.sliderImg}
                                 data-src="holder.js/800x400?auto=yes&amp;bg=777&amp;fg=555&amp;text=First slide"
                                 alt="First slide [800x400]"
                                 src="https://im0-tub-ru.yandex.net/i?id=dbed538a6b7ac67bcf2cec0756e77292&n=13&exp=1"
                                 data-holder-rendered="true"/>
                            <div className={"carousel-caption" + ' ' + classes.blockInfoSlider}>
                                <h1 className={classes.headerNews}>Совфед отклонил предложенный Медведевым
                                    <br/>закон о весогабаритном контроле</h1>
                                <p className={classes.textNews}>Совет Федерации отклонил закон, расширяющий полномочия Министерства <br/>транспорта в вопросах урегулирования порядка весогабаритного контроля <br/>транспортных средств</p>
                                <NavLink className={classes.link} to={'/news/covid19'}>
                                    Подробнее...
                                </NavLink>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className={'d-block w-100' + ' ' + classes.sliderImg}
                                 data-src="holder.js/800x400?auto=yes&amp;bg=777&amp;fg=555&amp;text=First slide"
                                 alt="First slide [800x400]"
                                 src="https://www.igmasa.com/images/frontales/Corporate_management_services.jpg"
                                 data-holder-rendered="true"/>
                            <div className={"carousel-caption" + ' ' + classes.blockInfoSlider}>
                                <h1 className={classes.headerNews}>KenguruExpress и DPD заключили <br/>партнерские соглашения.</h1>
                                <p className={classes.textNews}>Теперь заказывая через наш агрегатор вы получаете еще больше скидок и груз <br/>доставляеется быстрее и безопаснее.</p>
                                <NavLink className={classes.link} to={'/news/covid19'}>
                                    Подробнее...
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button"
                       data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>

                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button"
                       data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
}
export default NewsFeed;