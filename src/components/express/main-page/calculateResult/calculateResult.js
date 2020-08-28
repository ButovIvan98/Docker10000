import React from 'react';
import BlockResult from "./blockResult/blockResult";
import FilterResult from "./filterResult/filterResult";
import FilterDelivery from "./filterDelivery/filterDelivery";
import ExportFilterDeliveryContainer from "./filterDelivery/filterDeliveryContainer";
import Pricing from "./conditions/conditions";

const CalculateResult = (props) => {
    let listBLock = props.calculate.resultCalculate.map(nav => (
            <BlockResult
                img={nav.imgCompany}
                nameTK={nav.company}
                tariff={nav.tariff}
                rating={nav.rating}
                deliveryTime={nav.deliveryTime}
                beforePrice={nav.priceBefore}
                afterPrice={nav.priceAfter}
                arrange={props.clickArrangeOrder}
                statusArrange={props.calculate.arrangeOrder}
                fullInfoCityDeparture={props.calculate.cityOfDeparture.city}
                fullInfoCityDestination={props.calculate.cityOfDestination.city}
                fullInfoTK={nav}
            />
        )
    )
    return <div className={'container'}>
        <div className={'row'}>
            <div className={'col-lg-3 d-lg-none d-block mt-3'}>
                <FilterDelivery/>
            </div>
            <div className={'col-12'}>
                <FilterResult data={props.calculate.resultCalculate} cheaper={props.updateDataCheaper}
                              faster={props.updateDataFaster}/>
            </div>
            <div className={'col-lg-9 col-12'}>
                <div className={'row'}>
                    <div className={'col-lg-12'}>
                        {
                            props.calculate.card.showForm
                                ? <Pricing
                                    result={props.calculate.card}
                                />
                                : ''
                        }
                    </div>
                    <div className={'col-12 mt-3'}>
                        {listBLock}
                    </div>
                </div>

            </div>
            <div className={'col-lg-3'}>
                <ExportFilterDeliveryContainer calculate={props}/>
            </div>
        </div>
    </div>
}
export default CalculateResult