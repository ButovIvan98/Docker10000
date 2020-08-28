import React from 'react';
import classes from './css/myShipmentsInformation.module.css'
import Button_return from "../../../common/standarts_elements/button/button_return/button_return";
import {NavLink} from "react-router-dom";
import BlockShipments from "../blockShipments/blockShipments";
import ClockImg from "../../../common/svgImg/clockImg";
import BlockTracking from "./blockTracking/blockTracking";

const MyShipmentInformation = (props) => {
    let listTracking = props.MySpipmentsInfo.tracking.map(list=>(
        <BlockTracking
        />
    ))
    return <div className={'container mt-3'}>
        <div className={'row'} style={{padding: '15px;'}}>
            <div className={'col-lg-9 col-12  mb-4' + ' ' + classes.blockRow}>
                <div className={'row'}>
                    <div className={'col-12'}>
                        <div className={'col-lg-12 mb-5  col-12' + ' ' + classes.block}>
                            <Button_return path={'/myShipments'}/>
                        </div>
                    </div>
                </div>
                <div className={'row ml-0 mr-0' + ' ' + classes.blockBoxShadow}>
                    <div className={'col-lg-2 col-6'}>
                        <span className={classes.textOrder}
                              style={{color: props.MySpipmentsInfo.color}}>{props.MySpipmentsInfo.status}</span>
                        <p className={classes.textOrderStatus}>Статус заказа</p>
                    </div>
                    <div className={'col-lg-3 col-6 padding-left-block'}>
                        <span className={classes.textOrder}>{props.MySpipmentsInfo.invoiceNumber}</span>
                        <p className={classes.textOrderStatus}>Номер накладной</p>
                    </div>
                    <div className={'col-lg-2 col-6 padding-left-block'}>

                        <span
                            className={classes.textOrder}>{props.MySpipmentsInfo.volume} м³,{props.MySpipmentsInfo.weight} кг</span>
                        <p className={classes.textOrderStatus}>Объем и вес груза</p>
                    </div>
                    <div className="col-lg-2 col-6">
                        <span className={classes.textOrder}>{props.MySpipmentsInfo.dateOrder}</span>
                        <p className={classes.textOrderStatus}>Дата заказа</p>
                    </div>
                    <div className={'col-lg-3 col-12 pr-0 pl-0 text-center'}>
                        <img src={props.MySpipmentsInfo.photo} className={classes.blockImg}/>
                    </div>
                </div>
                <div className={'row mt-lg-5 mt-2'}>
                    <div className={'col-lg-6 col-12'}>
                        <div className={'row'}>
                            <div className={'col-12'}>
                                <span className={classes.orderPageSender}>Отправитель</span><br/>
                            </div>
                            <div className={'col-12 mt-3'}>
                                <span className={classes.orderText}>{props.MySpipmentsInfo.dateShipment}</span>
                                <p className={classes.textOrderStatus}>Дата отправки</p>
                            </div>
                            <div className={'col-12 mt-0'}>
                                <span className={classes.orderText}>{props.MySpipmentsInfo.companyShipment}</span>
                                <p className={classes.textOrderStatus}>Компания</p>
                            </div>
                            <div className={'col-12 mt-0'}>
                                <span className={classes.orderText}>{props.MySpipmentsInfo.contactPersonShipment}</span>
                                <p className={classes.textOrderStatus}>Контактное лицо</p>
                            </div>
                            <div className={'col-12 mt-0'}>
                                <span className={classes.orderText}>{props.MySpipmentsInfo.phoneShipment}</span>
                                <p className={classes.textOrderStatus}>Телефон</p>
                            </div>
                            <div className={'col-12 mt-0'}>
                                <span className={classes.orderText}>{props.MySpipmentsInfo.addressShipment}</span>
                                <p className={classes.textOrderStatus}>Адрес отправителя</p>
                            </div>
                            <div className={'col-12 mt-0'}>
                                <span className={classes.orderText}>{props.MySpipmentsInfo.commentShipment}</span>
                                <p className={classes.textOrderStatus}>Комментарий</p>
                            </div>
                        </div>
                    </div>
                    <div className={'col-lg-6 col-12' + ' ' + classes.borderBlock}>
                        <div className={'row'}>
                            <div className={'col-12'}>
                                <span className={classes.orderPageSender}>Получатель</span><br/>
                            </div>
                            <div className={'col-12 mt-3'}>
                                <span className={classes.orderText}>{props.MySpipmentsInfo.dateRecipient}</span>
                                <p className={classes.textOrderStatus}>Дата получения</p>
                            </div>
                            <div className={'col-12 mt-0'}>
                                <span className={classes.orderText}>{props.MySpipmentsInfo.companyRecipient}</span>
                                <p className={classes.textOrderStatus}>Компания</p>
                            </div>
                            <div className={'col-12 mt-0 '}>
                                <span
                                    className={classes.orderText}>{props.MySpipmentsInfo.contactPersonRecipient}</span>
                                <p className={classes.textOrderStatus}>Контактное лицо</p>
                            </div>
                            <div className={'col-12 mt-0 '}>
                                <span className={classes.orderText}>{props.MySpipmentsInfo.phoneRecipient}</span>
                                <p className={classes.textOrderStatus}>Телефон</p>
                            </div>
                            <div className={'col-12 mt-0 '}>
                                <span className={classes.orderText}>{props.MySpipmentsInfo.addressRecipient}</span>
                                <p className={classes.textOrderStatus}>Адрес получателя</p>
                            </div>
                            <div className='col-12 mt-0 '>
                                <span className={classes.orderText}>{props.MySpipmentsInfo.commentRecipient}</span>
                                <p className={classes.textOrderStatus}>Комментарий</p>
                            </div>
                        </div>
                    </div>
                    <div className={'col-lg-12 mt-5'}>
                        <span className={classes.orderPageSender}>Геолокация посылки</span>
                    </div>
                    <div className={'col-lg-12'}>
                        <hr className={classes.strip}/>
                    </div>
                    <div className={'col-lg-12 align-self-center'}>
                        <BlockTracking/>
                        <BlockTracking/>
                        <BlockTracking/>
                        <BlockTracking/>
                        <BlockTracking/>
                        <BlockTracking/>
                    </div>
                </div>
            </div>
            <div className={'col-lg-3 col-12'}>
                <div className={'row ml-0 ml-md-0' + ' ' + classes.blockRow}>
                    <div className={'col-12 mt-2 text-center'}>
                        <span className={classes.priceText}>{props.MySpipmentsInfo.price} ₽</span> <span
                        className={classes.textOrderStatus}>цена</span>
                        <hr/>
                    </div>
                    <div className={'col-12'}>
                        <NavLink to={'/4455'}>
                            <svg width="16" height="21" viewBox="0 0 18 22" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M9 0C8.54836 0 8.18182 0.366545 8.18182 0.818182V4.09091H9.81818V0.818182C9.81818 0.366545 9.45164 0 9 0ZM9.81818 4.09091V14.3885L11.6942 12.5124C12.0142 12.1925 12.5313 12.1925 12.8512 12.5124C13.1711 12.8323 13.1711 13.3495 12.8512 13.6694L9.57848 16.9421C9.41894 17.1017 9.20945 17.1818 9 17.1818C8.79055 17.1818 8.58107 17.1017 8.42152 16.9421L5.14879 13.6694C4.82888 13.3495 4.82888 12.8323 5.14879 12.5124C5.4687 12.1925 5.98584 12.1925 6.30575 12.5124L8.18182 14.3885V4.09091H1.63636C0.732273 4.09091 0 4.82318 0 5.72727V19.6364C0 20.5405 0.732273 21.2727 1.63636 21.2727H16.3636C17.2677 21.2727 18 20.5405 18 19.6364V5.72727C18 4.82318 17.2677 4.09091 16.3636 4.09091H9.81818Z"
                                    fill="url(#paint0_linear)"/>
                                <defs>
                                    <linearGradient id="paint0_linear" x1="13.5" y1="1.86024e-06" x2="-5.54302"
                                                    y2="7.88385" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#34A5E5"/>
                                        <stop offset="1" stop-color="#00A2FF"/>
                                    </linearGradient>
                                </defs>
                            </svg>
                            <span className={classes.textLink}>Скачать накладную</span>
                        </NavLink>
                    </div>
                    <div className={'col-12 mt-2'}>
                        <NavLink to={'/4455'}>
                            <svg width="18" height="18" viewBox="0 0 20 20" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M13.9169 0C13.7643 0.000292546 13.6145 0.0407602 13.4825 0.117333C13.3505 0.193906 13.241 0.303884 13.165 0.436206H13.1633L9.35962 5.99486L14.0068 10.6421L19.596 6.81806L19.5977 6.81636C19.7211 6.73784 19.8226 6.62948 19.8929 6.50131C19.9632 6.37315 20 6.22931 20 6.08312C20 5.9682 19.9772 5.85442 19.9329 5.74837C19.8886 5.64232 19.8237 5.54611 19.742 5.46531L14.5517 0.27666L14.5483 0.273265C14.4672 0.187138 14.3693 0.118477 14.2608 0.0714884C14.1522 0.0244999 14.0352 0.000173605 13.9169 0ZM5.32175 6.95214C4.02952 6.95214 2.73653 7.44459 1.75063 8.43049L6.0448 12.7264L0.267186 18.504C0.183783 18.584 0.117196 18.68 0.0713254 18.7861C0.0254544 18.8922 0.00122126 19.0064 4.49816e-05 19.1221C-0.00113129 19.2377 0.0207731 19.3524 0.0644753 19.4594C0.108177 19.5664 0.172799 19.6637 0.254555 19.7454C0.336311 19.8272 0.433558 19.8918 0.540602 19.9355C0.647645 19.9792 0.762332 20.0011 0.877947 20C0.993561 19.9988 1.10778 19.9745 1.21391 19.9287C1.32004 19.8828 1.41596 19.8162 1.49603 19.7328L7.27364 13.9552L11.5695 18.2494C13.5413 16.2776 13.5413 13.0806 11.5695 11.1088L8.89117 8.43049C7.90527 7.44459 6.61398 6.95214 5.32175 6.95214Z"
                                    fill="url(#paint0_linear)"/>
                                <defs>
                                    <linearGradient id="paint0_linear" x1="15" y1="1.74894e-06" x2="-4.99814"
                                                    y2="9.78459" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#34A5E5"/>
                                        <stop offset="1" stop-color="#00A2FF"/>
                                    </linearGradient>
                                </defs>
                            </svg>
                            <span className={classes.textLink}>Закрепить</span>
                        </NavLink>
                    </div>
                    <div className={'col-12 mt-2'}>
                        <NavLink to={'/4455'}>
                            <svg width="18" height="18" viewBox="0 0 20 20" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M10 0C4.48711 0 0 4.48711 0 10C0 15.5129 4.48711 20 10 20C15.5129 20 20 15.5129 20 10C20.0016 9.88957 19.9812 9.77994 19.94 9.67746C19.8988 9.57499 19.8377 9.48172 19.7601 9.40308C19.6826 9.32444 19.5902 9.26199 19.4883 9.21937C19.3864 9.17675 19.2771 9.1548 19.1667 9.1548C19.0562 9.1548 18.9469 9.17675 18.845 9.21937C18.7431 9.26199 18.6507 9.32444 18.5732 9.40308C18.4957 9.48172 18.4345 9.57499 18.3934 9.67746C18.3522 9.77994 18.3318 9.88957 18.3333 10C18.3333 14.6121 14.6121 18.3333 10 18.3333C5.38789 18.3333 1.66667 14.6121 1.66667 10C1.66667 5.38789 5.38789 1.66667 10 1.66667C12.0933 1.66667 13.9921 2.44252 15.4541 3.71256L13.3333 5.83333H18.3333V0.833333L16.6341 2.53255C14.8671 0.962811 12.5449 0 10 0Z"
                                    fill="url(#paint0_linear)"/>
                                <defs>
                                    <linearGradient id="paint0_linear" x1="15.0001" y1="1.74894e-06" x2="-4.99813"
                                                    y2="9.78466" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#34A5E5"/>
                                        <stop offset="1" stop-color="#00A2FF"/>
                                    </linearGradient>
                                </defs>
                            </svg>
                            <span className={classes.textLink}>Повторить заказ</span>
                        </NavLink>
                    </div>
                    <div className={'col-12 mt-2 mb-3'}>
                        <NavLink to={'/4455'}>
                            <svg width="18" height="18" viewBox="0 0 20 20" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M15.3846 0C14.1515 0 12.9937 0.480625 12.1214 1.35216L10.5829 2.89062C9.7114 3.76293 9.23077 4.92077 9.23077 6.15385C9.23077 7.12636 9.53339 8.04921 10.0871 8.82512L8.82512 10.0871C8.04912 9.53365 7.12577 9.23077 6.15385 9.23077C4.92077 9.23077 3.76293 9.7114 2.89062 10.5829L1.35216 12.1214C0.480625 12.9937 0 14.1515 0 15.3846C0 16.6177 0.480625 17.7755 1.35216 18.6478C2.2237 19.5201 3.38231 20 4.61538 20C5.84846 20 7.0063 19.5194 7.87861 18.6478L9.41707 17.1094C10.2886 16.2371 10.7692 15.0792 10.7692 13.8462C10.7692 13.4223 10.7087 13.0089 10.5995 12.6112L9.21574 13.9949C9.18036 14.7326 8.89087 15.4593 8.32933 16.0216L6.79087 17.5601C5.59087 18.7601 3.63913 18.7601 2.4399 17.5601C1.24067 16.3601 1.2399 14.4084 2.4399 13.2091L3.97837 11.6707C4.57837 11.0707 5.36689 10.7722 6.15535 10.7722C6.69517 10.7722 7.22972 10.9224 7.70883 11.2034L5.60998 13.3023C5.53615 13.3732 5.47721 13.4581 5.4366 13.552C5.396 13.646 5.37455 13.7471 5.37351 13.8494C5.37247 13.9517 5.39186 14.0533 5.43054 14.148C5.46922 14.2428 5.52643 14.3288 5.59879 14.4012C5.67116 14.4736 5.75724 14.5308 5.85199 14.5695C5.94675 14.6081 6.04827 14.6275 6.1506 14.6265C6.25294 14.6255 6.35405 14.604 6.44799 14.5634C6.54194 14.5228 6.62684 14.4639 6.69772 14.39L14.39 6.69772C14.5012 6.58967 14.5771 6.45056 14.6078 6.29862C14.6386 6.14668 14.6227 5.989 14.5623 5.84625C14.5019 5.70349 14.3997 5.58231 14.2693 5.4986C14.1388 5.41488 13.9861 5.37253 13.8311 5.3771C13.6313 5.38306 13.4416 5.46658 13.3023 5.60998L11.2034 7.70883C10.5102 6.52951 10.6594 4.98901 11.6707 3.97837L13.2091 2.4399C13.8091 1.8399 14.5962 1.54147 15.3846 1.54147C16.1731 1.54147 16.9601 1.84067 17.5601 2.4399C18.7601 3.6399 18.7601 5.59163 17.5601 6.79087L16.0216 8.32933C15.4601 8.89087 14.7326 9.18036 13.9949 9.21574L12.6112 10.5995C13.0089 10.7087 13.4223 10.7692 13.8462 10.7692C15.0792 10.7692 16.2371 10.2886 17.1094 9.41707L18.6478 7.87861C19.5194 7.0063 20 5.84846 20 4.61538C20 3.38231 19.5194 2.22447 18.6478 1.35216C17.7755 0.480625 16.6177 0 15.3846 0Z"
                                    fill="url(#paint0_linear)"/>
                                <defs>
                                    <linearGradient id="paint0_linear" x1="15" y1="1.74894e-06" x2="-4.99814"
                                                    y2="9.78459" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#34A5E5"/>
                                        <stop offset="1" stop-color="#00A2FF"/>
                                    </linearGradient>
                                </defs>
                            </svg>
                            <span className={classes.textLink}>Скопировать ссылку</span></NavLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
export default MyShipmentInformation
