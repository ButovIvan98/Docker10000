import React from 'react';
import VariableContainerMain from "./Variable_main/Variable_mainContainer";
import PermanentContainerMain from "./Permanent_main/PermanentMainContainer";

const Header = (props) => {
    
    return <div>
        <PermanentContainerMain/>
        {props.auth.isAuth 
            ? <VariableContainerMain/>
            : null
        }
    </div>
};
export default Header;