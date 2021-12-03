
import React, { useState, useEffect, useCallback } from 'react';


function StaticBackupTmp({qtt, qttSetter}) {

    // const homeRef = useRef();
    const [homeQtt, setHomeQtt] = useState(qtt);

    useEffect(() => {
        qttSetter(homeQtt);
    }, [qttSetter, homeQtt]);

    return (
        <div>
            <form action="" >
                <label for="name">Name</label>
                <textarea 
                id="name" 
                name="name"
                className="textfield name" 
                placeholder="Insert your name"
                required
                pattern="[a-z A-Z]"
                ></textarea>
                <div id="e-money">
                <input type="checkbox"/>
                <label for="e-money" checked>e-Money</label>
                </div>
            </form>
            <div className="product-qtt noselect"> 

                <div className="qttMinus" onClick={ () => qtt ? setHomeQtt(qtt -1) : null}></div> 
                    <p className="sub-title" >{homeQtt}</p>
                <div className="qttPlus" onClick={ () => setHomeQtt(qtt +1) }></div>

            </div>
        </div>
    );
}

export default StaticBackupTmp;