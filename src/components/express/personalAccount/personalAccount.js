import React from "react";
import classes from './css/personalAccount.module.css';
import {XAxis, Tooltip, CartesianGrid,BarChart, Bar, YAxis, Legend} from 'recharts';
import ResponsiveContainer from "recharts/lib/component/ResponsiveContainer";
import {NavLink} from "react-router-dom";
import MoneyIcon from "../../common/svgImg/moneyIcon";
import OrderIcon from "../../common/svgImg/orderIcon";
import CardIcon from "../../common/svgImg/cardIcon";
import BlockPayment from "../myPayment/blockPayment/blockPayment";
import BlockCompany from "./blockCompany/blockCompany";

const PersonalAccount = (props) =>{
    debugger
    let listCompany = props.PersonalAccountData.myCompany.map(data=>
        <BlockCompany
            preloader={data.preloader}
            logo={data.logo}
            nameCompany={data.nameCompany}
            position={data.position}
            orderCompany={data.orderCompany}
            amountCompany={data.amountCompany}
            />)
    return <div className={'container-fluid' + ' ' + classes.mainBlock}>
        <div className={'container'}>
            <div className={'row'}>
                <div className={'col-lg-4 mt-3 mb-3'}>
                    <div onClick={()=>{props.statusCount(props.PersonalAccountData.statusCount)}} className={classes.blockCard}>
                        <div className={'row'}>
                            <div className={'col-8 ' + ' ' + classes.blockElement}>
                                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Всего
                                    заказов
                                </div>
                                <div
                                    className="h5 mb-0 font-weight-bold text-gray-800">{props.PersonalAccountData.order}</div>
                            </div>
                            <div className={'col-4 text-right pr-4 mt-3'}>
                                <OrderIcon/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'col-lg-4 mt-3 mb-3'}>
                    <div onClick={()=>{props.statusAmount(props.PersonalAccountData.statusAmount)}} className={classes.blockCard}>
                        <div className={'row'}>
                            <div className={'col-8 ' + ' ' + classes.blockElement}>
                                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Сумма</div>
                                <div
                                    className="h5 mb-0 font-weight-bold text-gray-800">₽{props.PersonalAccountData.amount}</div>
                            </div>
                            <div className={'col-4 text-right pr-4 mt-3'}>
                                <MoneyIcon/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'col-lg-4 mt-3 mb-3'}>
                    <div onClick={()=>{props.statusDebt(props.PersonalAccountData.statusDebt)}} className={classes.blockCard}>
                        <div className={'row'}>
                            <div className={'col-8 ' + ' ' + classes.blockElement} >
                                <div
                                    className="text-xs font-weight-bold text-primary text-uppercase mb-1">Задолженность
                                </div>
                                <div
                                    className="h5 mb-0 font-weight-bold text-gray-800">₽{props.PersonalAccountData.debt}</div>
                            </div>
                            <div className={'col-4 text-right pr-4 mt-3'}>
                                <CardIcon/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*Выпадающий блок по должникам*/}
            {props.PersonalAccountData.statusDebt ? <div className={'row mr-0 ml-0 mb-3' + ' ' + classes.blockPayment}>
                    <div className={'col-lg-12 mt-3'}>
                        <h4 className={classes.textHeaderCompany}>
                            Задолженности по выставленным счетам
                        </h4>
                    </div>
                    <div className={'col-12'}>
                        <hr className={classes.lineHr}/>
                    </div>
                    <div className={'col-12 pl-3 pr-3' + ' ' + classes.limitHeight}>
                        <BlockPayment/>
                        <BlockPayment/>
                        <BlockPayment/>
                        <BlockPayment/>
                        <BlockPayment/>
                        <BlockPayment/>
                    </div>
                </div> : null}
            {/*Выпадающий блок по Сумме денег за 12 месяцев*/}
            {props.PersonalAccountData.statusAmount ? <div className={'row'}>
                <div className={'col-lg-12 col-12 mb-3'}>
                    <ResponsiveContainer width='100%' aspect={10.0 / 3.0}>
                        <BarChart
                            data={props.PersonalAccountData.amountOrder}
                            margin={{
                                top: 20, right: 30, left: 20, bottom: 5,
                            }}
                            className={classes.grafBlock}
                        >
                            <CartesianGrid strokeDasharray="3 3"/>
                            <XAxis dataKey="month"/>
                            <YAxis/>
                            <Tooltip/>
                            <Legend/>
                            <Bar dataKey="sum" name={'Сумма ₽'} stackId="a" fill="#82ca9d"/>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div> : null}
            {/*Выпадающий блок по Количеству заказов за 12 месяцев*/}
            {props.PersonalAccountData.statusCount ? <div className={'row'}>
                <div className={'col-lg-12 col-12 mb-3'}>
                    <ResponsiveContainer width='100%' aspect={10.0 / 3.0}>
                        <BarChart
                            data={props.PersonalAccountData.countOrder}
                            margin={{
                                top: 20, right: 30, left: 20, bottom: 5,
                            }}
                            className={classes.grafBlock}
                        >
                            <CartesianGrid strokeDasharray="3 3"/>
                            <XAxis dataKey="month"/>
                            <YAxis/>
                            <Tooltip/>
                            <Legend/>
                            {/*<Bar dataKey="pv" stackId="a" fill="#8884d8"/>*/}
                            <Bar dataKey="count" name={'Количество заказов'} stackId="a" fill="#0085FF"/>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div> : null}
            <div className={'row mb-3'}>
                <div className={'col-lg-4'}>
                    <ResponsiveContainer width='100%' aspect={6.0 / 3.0}>
                        <BarChart
                            data={props.PersonalAccountData.deliveryStatus}
                            margin={{
                                top: 20, right: 30, left: 20, bottom: 5,
                            }}
                            className={classes.grafBlock}
                        >
                            <CartesianGrid strokeDasharray="3 3"/>
                            <XAxis dataKey="name"/>
                            <YAxis/>
                            <Tooltip/>
                            <Legend/>
                            {/*<Bar dataKey="pv" stackId="a" fill="#8884d8"/>*/}
                            <Bar dataKey="count" name={'Статус заказа'} stackId="a" fill="#82ca9d"/>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <div className={'col-lg-4'}>
                    <ResponsiveContainer width='100%' aspect={6.0 / 3.0}>
                        <BarChart
                            data={props.PersonalAccountData.deliveryStatus}
                            margin={{
                                top: 20, right: 30, left: 20, bottom: 5,
                            }}
                            className={classes.grafBlock}
                        >
                            <CartesianGrid strokeDasharray="3 3"/>
                            <XAxis dataKey="name"/>
                            <YAxis/>
                            <Tooltip/>
                            <Legend/>
                            {/*<Bar dataKey="pv" stackId="a" fill="#8884d8"/>*/}
                            <Bar dataKey="count" name={'Статус заказа'} stackId="a" fill="#82ca9d"/>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <div className={'col-lg-4'}>
                    <ResponsiveContainer width='100%' aspect={6.0 / 3.0}>
                        <BarChart
                            data={props.PersonalAccountData.deliveryStatus}
                            margin={{
                                top: 20, right: 30, left: 20, bottom: 5,
                            }}
                            className={classes.grafBlock}
                        >
                            <CartesianGrid strokeDasharray="3 3"/>
                            <XAxis dataKey="name"/>
                            <YAxis/>
                            <Tooltip/>
                            <Legend/>
                            {/*<Bar dataKey="pv" stackId="a" fill="#8884d8"/>*/}
                            <Bar dataKey="count" name={'Статус заказа'} stackId="a" fill="#82ca9d"/>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <div className={'col-12 mb-3 mt-3 text-center'}>
                    <NavLink to={'/reports'}>
                        <label className={classes.detailedReports}>
                            Подробные отчеты
                        </label>
                    </NavLink>
                </div>
            </div>
            <div className={'row'}>
                <div className={'col-lg-4 mb-3'}>
                    <div className={'row mr-0 ml-0' + ' ' + classes.blockCardProfile}>
                        <div className={'col-12 pl-0 pr-0'}>
                            <img className={classes.blockFoto}
                                 src={'http://fzadmin-angular.fzthemes.site/assets/images/background6.webp'}/>
                        </div>
                        <div className={'col-12 text-center'}>
                            <div className={classes.fotoProfile}>
                                <img className={classes.imgProfile}
                                     src={props.PersonalAccountData.fotoUser}/>
                            </div>
                        </div>
                        <div className={'col-12 mt-2 text-center'}>
                            <label>
                                {props.PersonalAccountData.nameUser}
                            </label>
                        </div>
                        <div className={'col-12 mb-2'}>
                            <div className={'row'}>
                                <div className={'col-4 text-center'}>
                                    <NavLink title={'Настройки'} to={'/setting'}>
                                        <svg className={classes.linkSetting} xmlns="http://www.w3.org/2000/svg" x="0px"
                                             y="0px"
                                             width="40" height="40"
                                             viewBox="0 0 172 172"
                                        >
                                            <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1"
                                               stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10"
                                               stroke-dasharray="" stroke-dashoffset="0" font-family="none"
                                               font-weight="none" font-size="none" text-anchor="none">
                                                <path d="M0,172v-172h172v172z" fill="none"></path>
                                                <g fill="#cccccc">
                                                    <path
                                                        d="M160.01504,77.10416l-5.55904,-1.38976c-0.77056,-5.17032 -2.1156,-10.21336 -4.01448,-15.04312l4.1108,-3.9732c2.22224,-2.14656 2.69696,-5.51776 1.1524,-8.20784l-2.36672,-4.0936c-1.548,-2.6832 -4.70936,-3.94912 -7.68152,-3.10976l-5.56936,1.59272c-3.23704,-4.05576 -6.9144,-7.72968 -10.96672,-10.96672l1.59272,-5.56592c0.84968,-2.97216 -0.42656,-6.13008 -3.10288,-7.67808l-4.10048,-2.36672c-2.6832,-1.548 -6.05784,-1.06984 -8.20096,1.1524l-3.98008,4.1108c-4.83664,-1.89888 -9.87624,-3.24392 -15.03968,-4.01104l-1.3932,-5.57968c-0.75336,-3.00312 -3.44344,-5.09464 -6.53256,-5.09464h-4.73c-3.09256,0 -5.7792,2.09152 -6.52912,5.09464l-1.3932,5.56936c-5.17032,0.77056 -10.20992,2.1156 -15.03968,4.01448l-3.97664,-4.10736c-2.14312,-2.22224 -5.51088,-2.69352 -8.20784,-1.15584l-4.10048,2.36672c-2.67976,1.548 -3.956,4.70592 -3.10288,7.67808l1.59272,5.56248c-4.05232,3.23704 -7.72968,6.9144 -10.96672,10.96672l-5.5728,-1.59272c-2.98248,-0.8428 -6.13352,0.43 -7.67464,3.10632l-2.36672,4.10048c-1.54456,2.67976 -1.06984,6.0544 1.1524,8.20096l4.11424,3.97664c-1.89888,4.82976 -3.24392,9.8728 -4.01448,15.04312l-5.5556,1.38976c-3.01,0.75336 -5.11184,3.44 -5.11184,6.54288v4.73c0,3.09944 2.0984,5.78608 5.09464,6.52568l5.56936,1.3932c0.77056,5.17032 2.1156,10.21336 4.01448,15.04312l-4.1108,3.9732c-2.22224,2.15 -2.69696,5.5212 -1.1524,8.20784l2.36672,4.0936c1.548,2.6832 4.70592,3.95256 7.68152,3.10976l5.56936,-1.59272c3.23704,4.05576 6.9144,7.72968 10.96672,10.96672l-1.59272,5.56592c-0.84968,2.97216 0.42656,6.13008 3.10288,7.67808l4.10048,2.36672c2.69008,1.548 6.06128,1.07672 8.20096,-1.1524l3.98008,-4.1108c4.83664,1.89888 9.87624,3.24392 15.03968,4.01104l1.3932,5.57968c0.75336,3.00312 3.44344,5.09464 6.52912,5.09464h4.73c3.09256,0 5.7792,-2.09496 6.52912,-5.09808l1.3932,-5.56592c5.16344,-0.77056 10.20648,-2.1156 15.04312,-4.01448l3.9732,4.10736c2.14656,2.22568 5.51776,2.69696 8.20784,1.15584l4.10048,-2.36672c2.67976,-1.548 3.956,-4.70592 3.10288,-7.67808l-1.59272,-5.56248c4.05232,-3.23704 7.72968,-6.9144 10.96672,-10.96672l5.5728,1.59272c2.97904,0.8428 6.13352,-0.43 7.67464,-3.10632l2.36672,-4.10048c1.54456,-2.67976 1.06984,-6.0544 -1.1524,-8.20096l-4.11424,-3.97664c1.89888,-4.83664 3.24736,-9.87968 4.01448,-15.04312l5.5556,-1.38976c3.01344,-0.75336 5.11528,-3.44 5.11528,-6.53944v-4.73c0,-3.10288 -2.0984,-5.78608 -5.10496,-6.53256zM44.32096,102.1164c-1.93672,-5.0052 -3.04096,-10.42664 -3.04096,-16.1164c0,-5.68976 1.10424,-11.1112 3.04096,-16.1164l21.3968,12.35304c-0.2236,1.2212 -0.35776,2.4768 -0.35776,3.76336c0,1.28656 0.13416,2.54216 0.35776,3.76336zM79.12,130.1352c-11.24192,-1.74064 -21.09752,-7.62648 -27.92936,-16.09576l21.41056,-12.35992c1.90576,1.63056 4.1108,2.9068 6.5188,3.75992zM79.12,66.56056c-2.41144,0.85312 -4.61648,2.12936 -6.5188,3.75992l-21.41056,-12.35992c6.83184,-8.46928 16.69088,-14.35512 27.92936,-16.09576zM92.88,41.8648c11.24192,1.74064 21.09752,7.62648 27.92936,16.09576l-21.41056,12.35992c-1.90576,-1.63056 -4.1108,-2.9068 -6.5188,-3.75992zM92.88,130.1352v-24.69576c2.41144,-0.85312 4.61648,-2.12936 6.5188,-3.75992l21.41056,12.35992c-6.83184,8.46928 -16.69088,14.35512 -27.92936,16.09576zM127.67904,102.1164l-21.3968,-12.35304c0.2236,-1.2212 0.35776,-2.4768 0.35776,-3.76336c0,-1.28656 -0.13416,-2.54216 -0.35776,-3.76336l21.3968,-12.35304c1.93672,5.0052 3.04096,10.42664 3.04096,16.1164c0,5.68976 -1.10424,11.1112 -3.04096,16.1164z"></path>
                                                </g>
                                            </g>
                                        </svg>
                                    </NavLink>
                                </div>
                                <div className={'col-4 text-center'}>
                                    <NavLink title={'Уведомления'} to={'/setting'}>
                                        <svg className={classes.linkPush} xmlns="http://www.w3.org/2000/svg" x="0px"
                                             y="0px"
                                             width="40" height="40"
                                             viewBox="0 0 172 172"
                                        >
                                            <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1"
                                               stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10"
                                               stroke-dasharray="" stroke-dashoffset="0" font-family="none"
                                               font-weight="none" font-size="none" text-anchor="none">
                                                <path d="M0,172v-172h172v172z" fill="none"></path>
                                                <g fill="#cccccc">
                                                    <path
                                                        d="M86,14.33333c-5.934,0 -10.75,4.816 -10.75,10.75v4.98307c-18.53885,4.77861 -32.25,21.56799 -32.25,41.60026v43l-14.33333,14.33333v7.16667h114.66667v-7.16667l-14.33333,-14.33333v-43c0,-20.03227 -13.71115,-36.82165 -32.25,-41.60026v-4.98307c0,-5.934 -4.816,-10.75 -10.75,-10.75zM42.34212,14.92122c-17.0065,13.10067 -28.00879,33.61144 -28.00879,56.74544h14.33333c0,-18.50433 8.8075,-34.91589 22.40983,-45.39355zM129.65788,14.92122l-8.73437,11.35189c13.60233,10.47767 22.40983,26.88922 22.40983,45.39355h14.33333c0,-23.134 -11.00229,-43.64478 -28.00879,-56.74544zM71.66667,143.33333c0,7.88333 6.45,14.33333 14.33333,14.33333c7.88333,0 14.33333,-6.45 14.33333,-14.33333z"></path>
                                                </g>
                                            </g>
                                        </svg>
                                    </NavLink>
                                </div>
                                <div className={'col-4 text-center'}>
                                    <NavLink title={'Сообщения'} to={'/setting'}>
                                        <svg className={classes.linkPush} xmlns="http://www.w3.org/2000/svg" x="0px"
                                             y="0px"
                                             width="40" height="40"
                                             viewBox="0 0 172 172"
                                        >
                                            <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1"
                                               stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10"
                                               stroke-dasharray="" stroke-dashoffset="0" font-family="none"
                                               font-weight="none" font-size="none" text-anchor="none">
                                                <path d="M0,172v-172h172v172z" fill="none"></path>
                                                <g fill="#cccccc">
                                                    <path
                                                        d="M86,17.2c-41.16533,0 -74.53333,28.23667 -74.53333,63.06667c0,15.34321 6.49141,29.3896 17.25599,40.3237c0.21737,0.54076 5.74049,14.75457 -10.61562,29.24896c-0.57911,0.5424 -0.90751,1.30056 -0.90703,2.09401c0,1.58322 1.28345,2.86667 2.86667,2.86667c0.20712,-0.00008 0.41362,-0.02261 0.61589,-0.06719c16.48827,-0.97682 30.59327,-9.15924 39.2039,-15.46432c8.13786,2.58069 16.91055,4.06484 26.11354,4.06484c41.16533,0 74.53333,-28.23667 74.53333,-63.06667c0,-34.83 -33.368,-63.06667 -74.53333,-63.06667z"></path>
                                                </g>
                                            </g>
                                        </svg>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'col-lg-8'}>
                    <div className={'row mr-0' + ' ' + classes.blockCardProfile}>
                        <div className={'col-12 mt-3'}>
                            <h4 className={classes.textHeaderCompany}>
                                Мои компании
                            </h4>
                        </div>
                        <div className={'col-12'}>
                            <hr className={classes.lineHr}/>
                        </div>
                        {listCompany}
                    </div>
                </div>
            </div>
        </div>
    </div>
}
export default PersonalAccount;