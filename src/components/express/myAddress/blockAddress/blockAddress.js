import React from "react";
import classes from './css/blockAddress.module.css';

const BlockAddress = (props) => {
    let listAddress = props.data.map(list => (
        <div className={'row mb-2' + ' ' + classes.block}>
                <div className={'col-lg-3 col-12 align-self-center'}>
                        <span className={classes.headerText}>
                            {list.name} {list.patronymic}
                        </span>
                    <br/>
                    <span className={classes.headerTextDescription}>
                        Контактное лицо
                    </span>
                </div>
                <div className={'col-lg-3 col-12 align-self-center'}>
                        <span className={classes.headerText}>
                            {list.company}
                        </span>
                    <br/>
                    <span className={classes.headerTextDescription}>
                        Компания
                    </span>

                </div>
                <div className={'col-lg-4 col-12 align-self-center'}>
                        <span className={classes.headerText}>
                            {list.locality_type} {list.locality_title}, {list.street_type} {list.street}, {list.house_type} {list.house}{list.block!==null ? `, ${list.block_type} ${list.block}` : ''}, {list.flat_type} {list.flat}
                        </span>
                    <br/>
                    <span className={classes.headerTextDescription}>
                        Адрес
                    </span>
                </div>
                <div className={'col-lg-2 col-12 align-self-center'}>
                    <span className={classes.headerText}>{list.phone}</span>
                    <br/>
                    <span className={classes.headerTextDescription}>
                        Телефон
                    </span>
                    <button className={classes.delete}>
                        <svg className={classes.updateSize} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className={classes.color}
                                  d="M13.2187 0C12.8776 0 12.5364 0.130292 12.276 0.390625L10.6667 2L14 5.33333L15.6094 3.72396C16.13 3.20329 16.13 2.35921 15.6094 1.83854L14.1615 0.390625C13.9011 0.130292 13.5599 0 13.2187 0ZM9.33333 3.33333L1.50651 11.1602C1.50651 11.1602 2.11835 11.1053 2.34635 11.3333C2.57435 11.5613 2.38667 13.0533 2.66667 13.3333C2.94667 13.6133 4.42926 13.4162 4.64193 13.6289C4.85459 13.8416 4.83984 14.4935 4.83984 14.4935L12.6667 6.66667L9.33333 3.33333ZM0.666667 13.3333L0.0377604 15.1146C0.0130369 15.1849 0.000273224 15.2588 0 15.3333C0 15.5101 0.0702379 15.6797 0.195262 15.8047C0.320286 15.9298 0.489856 16 0.666667 16C0.741181 15.9997 0.815123 15.987 0.885417 15.9622C0.887591 15.9614 0.889761 15.9605 0.891927 15.9596L0.908854 15.9544C0.910159 15.9536 0.911461 15.9527 0.91276 15.9518L2.66667 15.3333L1.66667 14.3333L0.666667 13.3333Z"
                            />
                        </svg>
                    </button>
                    <button className={classes.update} onClick={()=>{props.delete(list.id)}}>
                        <svg className={classes.updateSize} viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className={classes.color}
                                  d="M6.40228 7.35768e-05C6.29645 -0.00136261 6.1914 0.0182395 6.09322 0.0577416C5.99504 0.0972437 5.90568 0.155859 5.83034 0.230182C5.755 0.304506 5.69518 0.393057 5.65435 0.490693C5.61352 0.58833 5.59249 0.693105 5.59249 0.798936H0.81024C0.704381 0.797439 0.599281 0.816996 0.501046 0.856471C0.402811 0.895946 0.313402 0.954551 0.238014 1.02888C0.162625 1.10321 0.102761 1.19178 0.0619014 1.28945C0.0210415 1.38712 0 1.49193 0 1.5978C0 1.70367 0.0210415 1.80848 0.0619014 1.90615C0.102761 2.00381 0.162625 2.09239 0.238014 2.16672C0.313402 2.24105 0.402811 2.29965 0.501046 2.33913C0.599281 2.3786 0.704381 2.39816 0.81024 2.39666H15.1898C15.2956 2.39816 15.4007 2.3786 15.499 2.33913C15.5972 2.29965 15.6866 2.24105 15.762 2.16672C15.8374 2.09239 15.8972 2.00381 15.9381 1.90615C15.979 1.80848 16 1.70367 16 1.5978C16 1.49193 15.979 1.38712 15.9381 1.28945C15.8972 1.19178 15.8374 1.10321 15.762 1.02888C15.6866 0.954551 15.5972 0.895946 15.499 0.856471C15.4007 0.816996 15.2956 0.797439 15.1898 0.798936H10.4075C10.4075 0.693105 10.3865 0.58833 10.3456 0.490693C10.3048 0.393057 10.245 0.304506 10.1697 0.230182C10.0943 0.155859 10.005 0.0972437 9.90678 0.0577416C9.8086 0.0182395 9.70354 -0.00136261 9.59772 7.35768e-05H6.40228ZM0.81024 3.99439V16.7762C0.81024 17.6589 1.52522 18.3739 2.40796 18.3739H13.592C14.4748 18.3739 15.1898 17.6589 15.1898 16.7762V3.99439H0.81024Z"
                                  />
                        </svg>
                    </button>
                </div>
            </div>
        )
    )
    return <div className={'row'}>
        <div className={'col-12'}>
            {listAddress}
        </div>
    </div>
}
export default BlockAddress;