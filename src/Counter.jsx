const Counter = () => {
    return (
        <div>
             <section>
        <div class="container">
            <div class="row text-align-center display-block">
                <img src="img/divider-01.svg" width="80" class="divider img"/>
            </div>
        </div>
    </section>
            <div id="counter-section-container">
                <div id="counter-box-container">
                    <div id="counter-box">
                        <span class="counter" data-number="400">400</span>
                        <p class="counter-content">Wallets Connected</p>
                    </div>
                    <div id="counter-box">
                        <span class="counter" data-number="20">20</span>
                        <p class="counter-content">Wallets Connected</p>
                    </div>
                    <div id="counter-box">
                        <span class="counter" data-number="230">230</span>
                        <p class="counter-content">Creative artists</p>
                    </div>
                    <div id="counter-box">
                        <span class="counter" data-number="2.5">3</span>
                        <p class="counter-content"> Estimated value</p>
                    </div>
                </div>

            </div>

            <section>
                <div class="container">
                    <div class="row text-align-center display-block">
                        <img src="img/divider-01.svg" width="80" class="divider img" />
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Counter;