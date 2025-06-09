export default function InputBox({  }) {
    return (
        <div id="user-input" className="center">
            <div className="input-group">
                <div>
                    <label htmlFor="iniInv">Initial Investment</label>
                    <input type="number" id="iniInv" min="0.00" />
                </div>
                <div>
                    <label htmlFor="annInv">Annual Investment</label>
                    <input type="number" id="annInv" min="0.00" />
                </div>
            </div>
            <div className="input-group">
                <div>
                    <label htmlFor="expRet" >Expected Return</label>
                    <input type="number" id="expRet" min="0.00" />
                </div>
                <div>
                    <label htmlFor="dur">Duration</label>
                    <input type="number" id="dur" min="1"/>
                </div>
            </div>

        </div>
    );
}